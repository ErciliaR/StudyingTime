"use strict";

/* ---------------- theme & helpers ---------------- */
const TRACK = ["#D97757", "#8B5CF6", "#1CB0F6", "#58A700", "#FF9600"];
const trackColor = i => TRACK[((i % 5) + 5) % 5];

function symbolEmoji(name) {
  const n = name || "";
  const map = [
    ["magnifyingglass", "🔍"], ["fork.knife", "🍴"], ["brain", "🧠"], ["lock", "🔒"],
    ["shield", "🛡️"], ["books", "📚"], ["book", "📖"], ["doc.plaintext", "📃"],
    ["doc.badge", "🗒️"], ["doc", "📄"], ["hammer", "🛠️"], ["wrench", "🛠️"],
    ["tag", "🏷️"], ["person.3", "👥"], ["person.2", "👥"], ["person.fill.questionmark", "🙋"],
    ["person", "🧑"], ["airplane", "✈️"], ["truck", "🚚"], ["shippingbox", "📦"],
    ["map", "🗺️"], ["gamecontroller", "🎮"], ["terminal", "💻"], ["moon", "🌙"],
    ["bell", "🔕"], ["envelope", "✉️"], ["link", "🔗"], ["ruler", "📐"], ["tshirt", "👕"],
    ["leaf", "🍃"], ["wand", "🪄"], ["menucard", "📋"], ["tray", "🗂️"], ["wind", "🌬️"],
    ["pencil", "✏️"], ["quote", "❝"], ["text.quote", "❝"], ["checklist", "✅"],
    ["checkmark.seal", "✅"], ["checkmark.shield", "🛡️"], ["checkmark", "✔️"],
    ["music", "🎼"], ["binoculars", "🔭"], ["switch", "🔀"], ["grid", "🔲"], ["pin", "📌"],
    ["cable", "🔌"], ["powerplug", "🔌"], ["tablecells", "🧾"], ["list.bullet", "🧾"],
    ["signature", "✍️"], ["scope", "🎯"], ["target", "🎯"], ["gear", "⚙️"],
    ["slider", "🎛️"], ["questionmark.bubble", "💬"], ["questionmark", "❓"],
    ["exclamationmark", "⚠️"], ["eye", "👁️"], ["arrow.triangle.branch", "🌿"],
    ["circlepath", "🔁"], ["arrow.triangle.swap", "🔄"], ["arrow.2", "🔁"],
    ["arrow.uturn", "↩️"], ["arrow.right", "➡️"], ["arrow.up", "⬆️"],
    ["chevron.left.forwardslash", "🧩"], ["bubble", "💬"], ["sparkles", "✨"],
    ["rectangle", "🔲"], ["building", "🏢"], ["figure.walk", "🚶"], ["figure.bowling", "🎳"],
    ["key", "🔑"], ["square.grid", "🔲"], ["text.book", "📕"], ["text.cursor", "⌨️"],
    ["point.3", "🕸️"], ["point.top", "🔀"], ["star", "⭐"], ["bolt", "⚡"], ["flame", "🔥"],
    ["crown", "👑"], ["heart", "❤️"], ["graduationcap", "🎓"], ["rosette", "🏅"], ["flag", "🏁"],
  ];
  for (const [k, e] of map) if (n.includes(k)) return e;
  return "✦";
}

const TAG = {
  examConcept:   { color: "#58A700", short: "EXAM 🔖", label: "Exam · Concept", isExam: true },
  examMechanism: { color: "#1CB0F6", short: "EXAM ⚙️", label: "Exam · Mechanism", isExam: true },
  expert:        { color: "#8B5CF6", short: "EXPERT 💡", label: "Expert extra", isExam: false },
};
const tagInfo = l => TAG[l.examKind] || TAG.examConcept;

const esc = s => (s == null ? "" : String(s)).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const $ = sel => document.querySelector(sel);

/* ---------------- state (plain study mode) ---------------- */
const PASS_SCORE = 720, EXAM_COUNT = 25, EXAM_SECONDS = 1800;
const KEY = "ca_study_v1";
let S;

function loadState() {
  let s = {};
  try { s = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) {}
  S = Object.assign({ done: {}, mistakes: [], examBestPct: 0 }, s);
}
function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }

const isComplete = id => !!S.done[id];
function markDone(id) { S.done[id] = true; save(); }
function recordAnswer(globalN, correct) {
  if (correct) S.mistakes = S.mistakes.filter(x => x !== globalN);
  else if (!S.mistakes.includes(globalN)) S.mistakes.push(globalN);
  save();
}
function recordExam(pct) { S.examBestPct = Math.max(S.examBestPct, pct); save(); }
function resetAll() { S = { done: {}, mistakes: [], examBestPct: 0 }; save(); render(); }
const scaledScore = frac => 100 + Math.round(frac * 900);

/* ---------------- content ---------------- */
let C, flatLessons = [], qIndex = {};

function boot() {
  try {
    loadState();
    if (!(typeof window !== "undefined" && window.__CONTENT__)) throw new Error("content.js failed to load");
    C = window.__CONTENT__;
    flatLessons = C.units.flatMap(u => u.lessons);
    flatLessons.forEach(l => l.questions.forEach(q => { qIndex[q.globalN] = q; }));
    C.bank.forEach(q => { qIndex[q.globalN] = q; });
    render();
  } catch (e) {
    const app = document.getElementById("app");
    if (app) app.innerHTML = `<div class="screen"><h1 class="h1">Couldn't start</h1>`
      + `<p class="muted">${esc(e && e.message ? e.message : String(e))}</p></div>`;
  }
}

/* ---------------- render shell ---------------- */
let tab = "learn";
function render() {
  const app = $("#app");
  let body = tab === "learn" ? viewLearn() : tab === "practice" ? viewPractice() : viewProfile();
  app.innerHTML = topBar() + body + tabBar();
  bindTabs();
  if (tab === "learn") bindNodes();
  if (tab === "practice") bindPractice();
  if (tab === "profile") bindProfile();
}

function topBar() {
  const done = flatLessons.filter(l => isComplete(l.id)).length, total = flatLessons.length;
  return `<div class="statusbar">
    <div class="stat" style="font-weight:800">Architect</div>
    <div class="spacer"></div>
    <div class="stat muted" style="font-size:13px">${done} / ${total} lessons</div>
  </div>`;
}
function tabBar() {
  const t = (id, ic, label) => `<button data-tab="${id}" class="${tab === id ? "active" : ""}"><span class="ti">${ic}</span>${label}</button>`;
  return `<div class="tabbar">${t("learn", "📚", "Learn")}${t("practice", "🎓", "Practice")}${t("profile", "👤", "Progress")}</div>`;
}
function bindTabs() {
  document.querySelectorAll(".tabbar button").forEach(b =>
    b.onclick = () => { tab = b.dataset.tab; render(); window.scrollTo(0, 0); });
}
function badge(l, small) {
  const t = tagInfo(l);
  const dom = (!small && l.domain) ? ` · ${esc(l.domain)}` : "";
  const txt = small ? t.short : `${t.label}${dom}`;
  return `<span class="badge ${small ? "sm" : ""}" style="color:${t.color};background:${t.color}26">${esc(txt)}</span>`;
}

/* ---------------- Learn (path) ---------------- */
const NODE_OFFSET = [0, 40, 56, 40, 0, -40, -56, -40];

function viewLearn() {
  let html = `<div class="screen">
    <div class="legend">
      <span><span class="dot" style="background:#58A700"></span>Exam concept</span>
      <span><span class="dot" style="background:#1CB0F6"></span>Mechanism</span>
      <span><span class="dot" style="background:#8B5CF6"></span>Expert</span>
    </div>`;
  C.units.forEach(u => {
    const col = trackColor(u.colorIndex);
    html += `<div class="unit-banner" style="background:${col};box-shadow:0 8px 18px ${col}59">
      <div class="t">${esc(u.title)}</div>
      <div class="k">${esc(u.kicker)}</div>
      <div class="s">${esc(u.subtitle)}</div>
    </div><div class="nodes">`;
    u.lessons.forEach((l, i) => {
      const done = isComplete(l.id);
      const off = NODE_OFFSET[i % NODE_OFFSET.length];
      const icon = symbolEmoji(l.symbol);
      html += `<div class="node" data-lesson="${l.id}" style="transform:translateX(${off}px)">
        <div class="disc" style="background:${col}">${done ? "✓" : icon}</div>
        <div class="title">${esc(l.title)}</div>
        ${badge(l, true)}
        ${done ? `<div class="doneflag">✓ done</div>` : ""}
      </div>`;
    });
    html += `</div>`;
  });
  return html + `<div class="spacer-sm"></div></div>`;
}
function bindNodes() {
  document.querySelectorAll(".node").forEach(n => n.onclick = () => startLesson(n.dataset.lesson));
}

/* ---------------- Practice ---------------- */
function viewPractice() {
  const best = S.examBestPct > 0 ? scaledScore(S.examBestPct / 100) : 0;
  const mc = S.mistakes.length;
  return `<div class="screen">
    <h1 class="h1">Practice</h1>
    <div class="card" style="margin-bottom:16px">
      <div class="row-between">
        <strong style="font-size:20px">🎓 Mock Exam</strong>
        ${best ? `<span class="pill" style="background:${best >= PASS_SCORE ? "#58A700" : "#D97757"}">${best}</span>` : ""}
      </div>
      <p class="muted" style="margin:10px 0">${EXAM_COUNT} real exam questions · 30:00 · scored 100–1000, pass ${PASS_SCORE}. Drawn only from the official bank.</p>
      ${best ? `<p style="font-weight:700;color:${best >= PASS_SCORE ? "#58A700" : "#D97757"};margin-bottom:10px">${best >= PASS_SCORE ? `Best: ${best} — passing!` : `Best: ${best} — aim for ${PASS_SCORE}.`}</p>` : ""}
      <button class="btn primary" id="startExam">Start mock exam</button>
    </div>
    <div class="card">
      <div class="row-between">
        <strong style="font-size:20px">🔁 Review Mistakes</strong>
        <span class="pill" style="background:${mc ? "#EA2B2B" : "#E6E2DC"}">${mc}</span>
      </div>
      <p class="muted" style="margin:10px 0">Every question you miss — exam questions and expert lessons alike — lands here. Answer it right to clear it.</p>
      ${mc ? `<button class="btn purple" id="startReview">Review ${mc} question${mc === 1 ? "" : "s"}</button>`
           : `<p class="muted" style="font-weight:600">Nothing to review yet. Miss a question and it shows up here.</p>`}
    </div>
    <div class="note" style="margin-top:16px">ℹ️ The mock exam stays strictly on the certification blueprint. To go deeper, work the <strong>Learn</strong> path — it covers everything, including topics beyond the exam.</div>
  </div>`;
}
function bindPractice() {
  const e = $("#startExam"); if (e) e.onclick = startExam;
  const r = $("#startReview"); if (r) r.onclick = startReview;
}

/* ---------------- Progress ---------------- */
function viewProfile() {
  const examL = flatLessons.filter(l => tagInfo(l).isExam);
  const examDone = examL.filter(l => isComplete(l.id)).length;
  const expL = flatLessons.filter(l => !tagInfo(l).isExam);
  const expDone = expL.filter(l => isComplete(l.id)).length;
  const totalDone = flatLessons.filter(l => isComplete(l.id)).length;
  const miniBar = (lab, done, total, tint) => `<div class="mini-prog">
    <div class="lab"><span>${lab}</span><span class="muted">${done}/${total}</span></div>
    <div class="bar"><span style="width:${total ? (done / total * 100) : 0}%;background:${tint}"></span></div></div>`;

  let units = "";
  C.units.forEach(u => {
    const d = u.lessons.filter(l => isComplete(l.id)).length;
    units += miniBar(u.title, d, u.lessons.length, trackColor(u.colorIndex));
  });

  return `<div class="screen">
    <h1 class="h1">Your Progress</h1>
    <div class="card" style="background:#D97757;border:none;color:#fff;margin-bottom:16px">
      <div style="font-size:13px;font-weight:800;letter-spacing:.05em;text-transform:uppercase;opacity:.9">Lessons completed</div>
      <div style="font-size:34px;font-weight:800;margin:4px 0 10px">${totalDone} / ${flatLessons.length}</div>
      <div class="bar" style="background:#ffffff44"><span style="width:${flatLessons.length ? totalDone / flatLessons.length * 100 : 0}%;background:#fff"></span></div>
    </div>
    <div class="card" style="margin-bottom:16px">
      <div class="section-title">Certification coverage</div>
      ${miniBar("Exam lessons done", examDone, examL.length, "#58A700")}
      ${miniBar("Expert extras done", expDone, expL.length, "#8B5CF6")}
      <p class="muted" style="font-size:12px;margin-top:8px">The Mock Exam pulls only from the official bank; the Learn path covers both — work the expert extras to go past the cert.</p>
    </div>
    <div class="card" style="margin-bottom:16px">
      <div class="section-title">Completion by unit</div>${units}
    </div>
    <button class="btn ghost" id="resetBtn">Reset all progress</button>
    <div class="spacer-sm"></div>
  </div>`;
}
function bindProfile() {
  const b = $("#resetBtn");
  if (b) b.onclick = () => { if (confirm("Clear all completion marks and the review queue?")) resetAll(); };
}

/* ---------------- option shuffling ---------------- */
// Returns a copy of the question with options in random order. Re-letters A,B,C,D
// sequentially UNLESS the explanation references option letters (then keeps original
// letters so the explanation stays accurate). Either way the correct answer is no
// longer pinned to the first position.
function presentQuestion(q) {
  const opts = q.options.slice();
  for (let i = opts.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [opts[i], opts[j]] = [opts[j], opts[i]];
  }
  // Detect references like "(C)", "(B, C)", " A)" or a standalone letter token.
  const refsLetters = /(^|[\s(])[A-E]([\s,).])/.test(q.explanation || "");
  if (refsLetters) return Object.assign({}, q, { options: opts }); // keep letters, shuffled order
  const letters = ["A", "B", "C", "D", "E"];
  let correct = q.correct;
  const relettered = opts.map((o, i) => {
    if (o.letter === q.correct) correct = letters[i];
    return { letter: letters[i], text: o.text, correct: o.correct };
  });
  return Object.assign({}, q, { options: relettered, correct });
}

/* ---------------- session runner (lesson / exam / review) ---------------- */
let sess = null, timerH = null;

function startLesson(id) {
  const l = flatLessons.find(x => x.id === id);
  if (!l) return;
  const steps = l.cards.map(c => ({ type: "card", data: c }))
    .concat(l.questions.map(q => ({ type: "q", data: presentQuestion(q) })));
  sess = { kind: "lesson", lesson: l, badge: l, steps, timeLimit: null,
    idx: 0, answered: false, selected: null, correct: 0, finished: false, remaining: 0 };
  openRunner();
}
function startExam() {
  const qs = [...C.bank].sort(() => Math.random() - 0.5).slice(0, EXAM_COUNT);
  sess = { kind: "exam", title: "Mock Exam", steps: qs.map(q => ({ type: "q", data: presentQuestion(q) })),
    timeLimit: EXAM_SECONDS, idx: 0, answered: false, selected: null, correct: 0, finished: false, remaining: EXAM_SECONDS };
  openRunner();
}
function startReview() {
  const qs = S.mistakes.map(id => qIndex[id]).filter(Boolean);
  if (!qs.length) return;
  sess = { kind: "review", title: "Review", steps: qs.map(q => ({ type: "q", data: presentQuestion(q) })),
    timeLimit: null, idx: 0, answered: false, selected: null, correct: 0, finished: false, remaining: 0, clearedAtStart: S.mistakes.length };
  openRunner();
}

function openRunner() {
  let r = $("#runner");
  if (!r) { r = document.createElement("div"); r.id = "runner"; r.className = "runner"; document.body.appendChild(r); }
  if (sess.timeLimit) {
    clearInterval(timerH);
    timerH = setInterval(() => {
      if (!sess || sess.finished) return;
      sess.remaining--;
      const t = $("#timer"); if (t) { t.textContent = fmtTime(sess.remaining); t.classList.toggle("low", sess.remaining <= 60); }
      if (sess.remaining <= 0) finishSession();
    }, 1000);
  }
  renderRunner();
}
function closeRunner() {
  clearInterval(timerH); timerH = null; sess = null;
  const r = $("#runner"); if (r) r.remove();
  render();
}
const fmtTime = s => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

function renderRunner() {
  const r = $("#runner"); if (!r) return;
  const total = sess.steps.length;
  if (sess.finished) { r.innerHTML = resultHTML(); bindResult(); return; }
  const step = sess.steps[sess.idx];
  const prog = total ? (sess.idx / total * 100) : 0;
  let right;
  if (sess.timeLimit) right = `<span class="timer ${sess.remaining <= 60 ? "low" : ""}" id="timer">${fmtTime(sess.remaining)}</span>`;
  else right = `<span class="muted" style="font-weight:700">${sess.idx + 1}/${total}</span>`;

  const head = `<div class="runner-head">
    <div class="row"><button class="close" id="closeBtn">✕</button>
      <div class="bar"><span style="width:${prog}%;background:${sess.kind === "exam" ? "#D97757" : sess.kind === "review" ? "#8B5CF6" : "#58CC02"}"></span></div>
      ${right}</div>
    ${sess.badge ? `<div style="margin-top:8px">${badge(sess.badge, false)}</div>` : ""}
  </div>`;

  r.innerHTML = head + (step.type === "card" ? cardHTML(step.data) : questionHTML(step.data));
  $("#closeBtn").onclick = closeRunner;
  if (step.type === "card") $("#gotIt").onclick = advance;
  else bindQuestion(step.data);
}

function cardHTML(c) {
  return `<div class="runner-body concept">
    <div style="display:flex;align-items:center;gap:14px">
      <div class="ic">${symbolEmoji(c.symbol)}</div>
      <h2 style="margin:0">${esc(c.title)}</h2>
    </div>
    <div class="block"><div class="tag" style="color:#8B5CF6">The analogy</div><p>${esc(c.analogy)}</p></div>
    <div class="block"><div class="tag" style="color:#1CB0F6">In practice</div><p>${esc(c.mapping)}</p></div>
    <div class="takeaway">🔑 <span>${esc(c.takeaway)}</span></div>
  </div>
  <div class="runner-foot"><button class="btn" id="gotIt">Got it</button></div>`;
}

function questionHTML(q) {
  const opts = q.options.map(o =>
    `<button class="opt" data-letter="${o.letter}">
      <span class="letter">${o.letter}</span><span>${esc(o.text)}</span></button>`).join("");
  return `<div class="runner-body">
    ${q.scenario ? `<div class="scenario-tag">${esc(q.scenario)}</div>` : ""}
    ${q.situation ? `<div class="situation">${esc(q.situation)}</div>` : ""}
    <div class="stem">${esc(q.question)}</div>
    <div class="options" id="opts">${opts}</div>
  </div>
  <div class="runner-foot" id="foot"><button class="btn" id="checkBtn" disabled>Check</button></div>`;
}

function bindQuestion(q) {
  const optEls = [...document.querySelectorAll(".opt")];
  optEls.forEach(el => el.onclick = () => {
    if (sess.answered) return;
    sess.selected = el.dataset.letter;
    optEls.forEach(e => e.classList.toggle("sel", e === el));
    $("#checkBtn").disabled = false;
  });
  $("#checkBtn").onclick = () => checkAnswer(q, optEls);
}

function checkAnswer(q, optEls) {
  if (!sess.selected || sess.answered) return;
  sess.answered = true;
  const ok = sess.selected === q.correct;
  recordAnswer(q.globalN, ok);
  if (ok) sess.correct++;
  optEls.forEach(e => {
    e.setAttribute("disabled", "");
    const L = e.dataset.letter;
    if (L === q.correct) e.classList.add("correct");
    else if (L === sess.selected) e.classList.add("wrong");
  });
  const last = sess.idx + 1 === sess.steps.length;
  $("#foot").innerHTML =
    `<div class="feedback ${ok ? "ok" : "no"}">
       <div class="ftitle">${ok ? "Correct" : "Not quite — here's why"}</div>
       <div>${esc(q.explanation)}</div></div>
     <button class="btn ${ok ? "" : "wrong"}" id="contBtn">${last ? "Finish" : "Continue"}</button>`;
  $("#contBtn").onclick = advance;
}

function advance() {
  if (sess.idx + 1 < sess.steps.length) { sess.idx++; sess.answered = false; sess.selected = null; renderRunner(); }
  else finishSession();
}

function finishSession() {
  if (sess.finished) return;
  sess.finished = true;
  clearInterval(timerH); timerH = null;
  const qCount = sess.steps.filter(s => s.type === "q").length;
  const frac = qCount ? sess.correct / qCount : 0;
  if (sess.kind === "lesson") markDone(sess.lesson.id);
  else if (sess.kind === "exam") recordExam(Math.round(frac * 100));
  renderRunner();
}

function resultHTML() {
  const qCount = sess.steps.filter(s => s.type === "q").length;
  const frac = qCount ? sess.correct / qCount : 0;
  const pct = Math.round(frac * 100);
  if (sess.kind === "exam") {
    const score = scaledScore(frac), passed = score >= PASS_SCORE;
    return `<div class="result">
      <div class="big">${passed ? "🏅" : "🏁"}</div>
      <h2>${passed ? "You passed!" : "Keep going"}</h2>
      <div class="score" style="color:${passed ? "#58A700" : "#D97757"}">${score}</div>
      <div class="muted">Scaled score · pass is ${PASS_SCORE}</div>
      <div class="stat-row">
        <div class="stat-box"><div class="v" style="color:#58A700">${sess.correct}/${qCount}</div><div class="l">Correct</div></div>
        <div class="stat-box"><div class="v" style="color:#D97757">${pct}%</div><div class="l">Accuracy</div></div>
      </div>
      <div class="muted" style="font-weight:600">Missed questions were added to Review.</div>
      <button class="btn primary" id="doneBtn" style="max-width:280px">Done</button>
    </div>`;
  }
  if (sess.kind === "review") {
    const cleared = Math.max(0, sess.clearedAtStart - S.mistakes.length);
    return `<div class="result">
      <div class="big">🔁</div><h2>Review complete</h2>
      <div class="stat-row">
        <div class="stat-box"><div class="v" style="color:#58A700">${cleared}</div><div class="l">Cleared</div></div>
        <div class="stat-box"><div class="v" style="color:#8B5CF6">${S.mistakes.length}</div><div class="l">Left</div></div>
      </div>
      <button class="btn purple" id="doneBtn" style="max-width:280px">Done</button>
    </div>`;
  }
  return `<div class="result">
    <div class="big">✓</div>
    <h2>Lesson complete</h2>
    <p class="muted" style="max-width:320px">Marked as done. Revisit it any time — you can open every lesson freely.</p>
    ${qCount ? `<div class="stat-row"><div class="stat-box"><div class="v" style="color:#58A700">${sess.correct}/${qCount}</div><div class="l">Correct</div></div></div>` : ""}
    <button class="btn" id="doneBtn" style="max-width:280px">Continue</button>
  </div>`;
}
function bindResult() { $("#doneBtn").onclick = closeRunner; }

boot();
