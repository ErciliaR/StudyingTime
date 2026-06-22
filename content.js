window.__CONTENT__ = {
  "units" : [
    {
      "lessons" : [
        {
          "domain" : "D5 · Context",
          "symbol" : "sparkles",
          "questions" : [
            {
              "globalN" : -1001,
              "scenario" : "Technique: Context Hygiene",
              "explanation" : "Confusion deep in a session is usually context pollution. Compacting to a crisp summary + current goal restores signal without losing progress.",
              "options" : [
                {
                  "text" : "Summarize the resolved findings, drop the raw logs, and restate the current goal",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Paste the full files again to refresh everything",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Start over from scratch in a new session",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Ask the model to try harder",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "situation" : "",
              "correct" : "A",
              "question" : "You're 40 turns into a debugging session and the model starts confusing two files. What's the highest-leverage move?"
            },
            {
              "globalN" : -1002,
              "scenario" : "Technique: Context Hygiene",
              "explanation" : "Durable, reusable facts belong in memory/files; transient working data belongs in live context and should be evicted when done.",
              "options" : [
                {
                  "text" : "A stable architectural decision you'll reference across many sessions",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "The exact stack trace you're fixing right now",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "The current diff under review",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "A one-off command output",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "situation" : "",
              "correct" : "A",
              "question" : "Which belongs in durable memory rather than live context?"
            },
            {
              "globalN" : -1003,
              "scenario" : "Technique: Context Hygiene",
              "explanation" : "More tokens ≠ more signal. Irrelevant bulk lowers the signal-to-noise ratio and degrades reasoning.",
              "options" : [
                {
                  "text" : "Relevant signal gets diluted and the model anchors on noise",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Nothing — more context is always better",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "The model will refuse to answer",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "It permanently trains the model on the log",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "situation" : "",
              "correct" : "A",
              "question" : "A teammate dumps an entire 2,000-line log into the prompt 'just in case.' The risk is:"
            }
          ],
          "id" : "l_context",
          "cards" : [
            {
              "takeaway" : "Context is a workspace, not a warehouse — stage only what the current step touches.",
              "title" : "The Chef's Mise en Place",
              "mapping" : "The context window is your counter. Every irrelevant file, stale log, or abandoned thread is a jar in the way. Curate what's in context to what the current step needs.",
              "symbol" : "fork.knife",
              "analogy" : "A great chef clears the counter and lays out exactly the ingredients for *this* dish — not the whole pantry. A cluttered station means slower, sloppier cooking and the wrong jar grabbed mid-rush."
            },
            {
              "takeaway" : "Offload to durable storage; keep working memory lean.",
              "title" : "RAM vs. the Hard Drive",
              "mapping" : "Treat long context like RAM: precious and volatile. Summarize-and-evict finished sub-tasks; keep durable facts in files/memory you can re-load on demand.",
              "symbol" : "arrow.triangle.2.circlepath",
              "analogy" : "You don't keep every document open on your desk. You file most away and pull one back when needed."
            }
          ],
          "title" : "Context Hygiene",
          "examKind" : "examConcept"
        },
        {
          "questions" : [
            {
              "globalN" : -1004,
              "question" : "You need to find where a config value is consumed across a large repo. Best first move?",
              "options" : [
                {
                  "text" : "A broad keyword/symbol search to locate candidate files, then read only those",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Read every file in the repo top to bottom",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Guess the file from the name and edit it",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Ask for the entire repo to be pasted in",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Locate-broad-then-read-narrow keeps context lean and is far faster than exhaustive reading.",
              "correct" : "A",
              "scenario" : "Technique: Search Strategy",
              "situation" : ""
            },
            {
              "globalN" : -1005,
              "question" : "When is delegating a search to a read-only sub-agent the right call?",
              "options" : [
                {
                  "text" : "When the answer needs sweeping many files but you only need the conclusion",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "When you need to edit one known line",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "When the task is a quick single-file lookup",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Never — always search inline",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Fan-out searches that would flood your context with excerpts are ideal to delegate; the agent returns the conclusion.",
              "correct" : "A",
              "scenario" : "Technique: Search Strategy",
              "situation" : ""
            }
          ],
          "examKind" : "examConcept",
          "domain" : "D1/D2 · Search",
          "title" : "Search Strategy",
          "symbol" : "magnifyingglass",
          "id" : "l_search",
          "cards" : [
            {
              "takeaway" : "Locate broad, read narrow — don't open every book to answer one question.",
              "title" : "The Librarian's Funnel",
              "mapping" : "Search the same way: broad fan-out to locate, then narrow reads on the few hits that matter. Use cheap, wide tools first; reserve expensive deep reads for confirmed targets.",
              "symbol" : "books.vertical",
              "analogy" : "A skilled librarian doesn't read every book. They scan the catalog, narrow to a shelf, skim spines, then open the two or three that matter."
            },
            {
              "takeaway" : "Fan out to scout; bring back conclusions, not the whole forest.",
              "title" : "Scout, then Commit",
              "mapping" : "Delegate broad searches to a read-only scout (sub-agent) that returns conclusions, not raw dumps. You act on the conclusion; your own context stays clean.",
              "symbol" : "binoculars",
              "analogy" : "A scout maps the terrain before the army marches. Marching everywhere to 'be thorough' wastes the army."
            }
          ]
        },
        {
          "questions" : [
            {
              "globalN" : -1006,
              "question" : "A specialist agent hits two credible but contradictory data points. Best behavior?",
              "options" : [
                {
                  "text" : "Complete its task, annotate the conflict with sources, and pass reconciliation to the coordinator",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Pick one silently and move on",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Halt all work and wait",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Discard both data points",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Preserve separation of duties: finish the local work, surface the conflict with attribution, let the broader-context coordinator reconcile.",
              "correct" : "A",
              "scenario" : "Technique: Orchestration",
              "situation" : ""
            },
            {
              "globalN" : -1007,
              "question" : "When does spinning up parallel sub-agents pay off?",
              "options" : [
                {
                  "text" : "Independent sub-tasks that don't depend on each other's output",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "A strict step-by-step pipeline where each step needs the last",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "A trivial one-shot lookup",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Whenever possible, regardless of dependencies",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Parallelism wins for independent work; dependent steps must be sequenced or you race on missing inputs.",
              "correct" : "A",
              "scenario" : "Technique: Orchestration",
              "situation" : ""
            }
          ],
          "examKind" : "examConcept",
          "domain" : "D1 · 27%",
          "title" : "Orchestration",
          "symbol" : "person.3.sequence",
          "id" : "l_orchestration",
          "cards" : [
            {
              "takeaway" : "The orchestrator coordinates and integrates; specialists execute.",
              "title" : "Conductor & Orchestra",
              "mapping" : "An orchestrator agent assigns work to specialists, holds the broad context, and integrates results. It coordinates — it doesn't do every sub-task itself.",
              "symbol" : "music.note.list",
              "analogy" : "The conductor doesn't play the violin. They cue sections, keep tempo, and merge many parts into one piece. If the conductor grabbed an instrument, the whole orchestra would drift."
            },
            {
              "takeaway" : "Finish your station, flag conflicts up — don't block the line.",
              "title" : "Head Chef vs. Line Cooks",
              "mapping" : "Specialist agents complete their task and surface conflicts/ambiguity with attribution to the coordinator, who has the broad view to reconcile — instead of blocking.",
              "symbol" : "fork.knife.circle",
              "analogy" : "Line cooks own their stations and finish their plates without stopping the kitchen. When two orders conflict, they flag the head chef rather than freezing the line."
            }
          ]
        },
        {
          "questions" : [
            {
              "globalN" : -1008,
              "question" : "You have a 6-step formatting procedure you repeat across many tasks. Best packaging?",
              "options" : [
                {
                  "text" : "A skill with a precise description so it triggers on the right requests",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "A long-running autonomous agent",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Pasting the steps into every prompt by hand",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Hard-coding it into unrelated code",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Repeatable procedures are exactly what skills are for; the description controls when it fires.",
              "correct" : "A",
              "scenario" : "Technique: Agents & Skills",
              "situation" : ""
            },
            {
              "globalN" : -1009,
              "question" : "A task needs to sweep a huge codebase independently and report back without polluting your context. Best tool?",
              "options" : [
                {
                  "text" : "A read-only sub-agent scoped to that search",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "A skill",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Doing it inline in the main thread",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "A scheduled cron job",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Independent, context-heavy exploration is the canonical case for delegating to a sub-agent that returns conclusions.",
              "correct" : "A",
              "scenario" : "Technique: Agents & Skills",
              "situation" : ""
            },
            {
              "globalN" : -1010,
              "question" : "Your skill keeps triggering on unrelated requests. First thing to fix?",
              "options" : [
                {
                  "text" : "Tighten and clarify the skill's description / trigger phrasing",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Add more steps to the procedure",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Delete the skill",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Increase the model size",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Mis-triggering is a description problem — the label is too broad. Sharpen it.",
              "correct" : "A",
              "scenario" : "Technique: Agents & Skills",
              "situation" : ""
            }
          ],
          "examKind" : "examConcept",
          "domain" : "D1 · Agents",
          "title" : "Agents & Skills",
          "symbol" : "wrench.and.screwdriver",
          "id" : "l_agents",
          "cards" : [
            {
              "takeaway" : "Agents own a job and a workspace; skills package a repeatable procedure.",
              "title" : "Hiring vs. Writing the SOP",
              "mapping" : "Reach for an agent when a task needs its own context, tools, and autonomy. Reach for a skill when you want a repeatable, well-described procedure invoked on demand.",
              "symbol" : "person.badge.shield.checkmark",
              "analogy" : "An agent is a specialist you hire with a clear job and its own desk. A skill is the standard operating procedure you write so anyone follows the same reliable steps every time."
            },
            {
              "takeaway" : "Invest in the description — triggering accuracy lives there.",
              "title" : "The Label Makes the Tool Findable",
              "mapping" : "A skill's description is its label: it decides *when* the skill triggers. Vague descriptions misfire; precise ones fire exactly when intended.",
              "symbol" : "tag",
              "analogy" : "A tool in a drawer with no label is useless — nobody knows when to grab it. A clear label on the front means the right hand reaches for it at the right moment."
            }
          ]
        }
      ],
      "kicker" : "Master the moves before the matches.",
      "title" : "Operator's Toolkit",
      "subtitle" : "The four meta-skills of an expert Claude operator",
      "colorIndex" : 0,
      "id" : "u_tech"
    },
    {
      "lessons" : [
        {
          "questions" : [
            {
              "globalN" : -1011,
              "question" : "Incoming emails must be sorted into 5 fixed categories using the same steps every time. Best approach?",
              "options" : [
                {
                  "text" : "A fixed workflow / single classification prompt",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "An autonomous agent that decides its own steps each time",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "A multi-agent orchestrator with workers",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "A human in the loop for every email",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "The steps are known and identical every time — the simplest reliable solution is a fixed workflow. Autonomy adds cost and unpredictability for no benefit here.",
              "correct" : "A",
              "scenario" : "Pattern: Workflows vs. Agents",
              "situation" : ""
            },
            {
              "globalN" : -1012,
              "question" : "When does an autonomous agent earn its added cost and unpredictability?",
              "options" : [
                {
                  "text" : "When the number and order of steps can't be known up front and depend on intermediate results",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Whenever the task touches more than one tool",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Whenever the output must be high quality",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Whenever you have budget for a larger model",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Agency pays off precisely when the path is dynamic — the model must decide next steps based on what it discovers. Otherwise a workflow is cheaper and more reliable.",
              "correct" : "A",
              "scenario" : "Pattern: Workflows vs. Agents",
              "situation" : ""
            },
            {
              "globalN" : -1013,
              "question" : "What's the guiding first principle when designing a Claude system?",
              "options" : [
                {
                  "text" : "Find the simplest solution that works; add complexity only when it measurably improves outcomes",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Always use the most autonomous architecture available",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Always add a multi-agent layer for robustness",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Maximize the number of tools the model can call",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Anthropic's guidance is to start simple and increase complexity (workflows, then agents) only when simpler approaches fall short — complexity has real costs.",
              "correct" : "A",
              "scenario" : "Pattern: Workflows vs. Agents",
              "situation" : ""
            }
          ],
          "examKind" : "examConcept",
          "domain" : "D1 · 27%",
          "title" : "Workflows vs. Agents",
          "symbol" : "arrow.triangle.branch",
          "id" : "l_p_wfvsagent",
          "cards" : [
            {
              "takeaway" : "Workflows for predictable paths; agents for paths you can't map ahead of time.",
              "title" : "Train on Rails vs. Car with a Driver",
              "mapping" : "A workflow runs Claude through predefined steps (rails). An agent lets the model decide its own steps and tool calls at runtime (driver). Pick rails when the path is known; pick a driver when it can't be known in advance.",
              "symbol" : "tram.fill",
              "analogy" : "A train is fast and reliable but can only go where the rails go. A car with a driver can improvise a new route — at the cost of more things that can go wrong."
            },
            {
              "takeaway" : "Start with the simplest thing that works; add agency only when the task earns it.",
              "title" : "Don't Build a Robot to Flip a Switch",
              "mapping" : "Agency trades predictability, cost, and speed for flexibility. Many tasks are solved by a single well-crafted prompt or a fixed chain — reach for autonomy only when uncertainty demands it.",
              "symbol" : "switch.2",
              "analogy" : "You wouldn't engineer an autonomous robot for a job a wall switch already does. The fancy solution carries cost, latency, and new failure modes."
            }
          ]
        },
        {
          "questions" : [
            {
              "globalN" : -1014,
              "question" : "You must translate a document and iteratively improve the translation's quality. Best pattern?",
              "options" : [
                {
                  "text" : "Evaluator-optimizer (generate, critique, refine in a loop)",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Routing",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Prompt chaining with no feedback",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "A single one-shot prompt",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Quality that must climb through critique is the textbook evaluator-optimizer loop: one call generates, another evaluates against criteria, and the generator revises.",
              "correct" : "A",
              "scenario" : "Pattern: Workflow Patterns",
              "situation" : ""
            },
            {
              "globalN" : -1015,
              "question" : "Customer queries vary widely — refunds, technical support, sales. You want each sent to a specialized flow. Pattern?",
              "options" : [
                {
                  "text" : "Routing",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Parallelization (voting)",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Evaluator-optimizer",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Prompt chaining",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Classifying heterogeneous input and dispatching to the right specialized handler is routing.",
              "correct" : "A",
              "scenario" : "Pattern: Workflow Patterns",
              "situation" : ""
            },
            {
              "globalN" : -1016,
              "question" : "Key difference between parallelization (sectioning) and orchestrator-workers?",
              "options" : [
                {
                  "text" : "In parallelization the subtasks are fixed in advance; orchestrator-workers determines subtasks dynamically at runtime",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Parallelization always uses more agents",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Orchestrator-workers can't use tools",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "They are the same pattern with different names",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Both fan work out, but sectioning splits along known boundaries, while an orchestrator decides the decomposition on the fly based on the input.",
              "correct" : "A",
              "scenario" : "Pattern: Workflow Patterns",
              "situation" : ""
            },
            {
              "globalN" : -1017,
              "question" : "You want higher confidence on a tricky judgment by running it several times and aggregating the answers. Which pattern?",
              "options" : [
                {
                  "text" : "Parallelization (voting)",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Prompt chaining",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Routing",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "A single deterministic call",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Running the same task multiple times and aggregating (voting) raises confidence and surfaces disagreement — a parallelization variant.",
              "correct" : "A",
              "scenario" : "Pattern: Workflow Patterns",
              "situation" : ""
            }
          ],
          "examKind" : "examConcept",
          "domain" : "D1 · 27%",
          "title" : "Workflow Patterns",
          "symbol" : "square.grid.2x2",
          "id" : "l_p_patterns",
          "cards" : [
            {
              "takeaway" : "Chain when steps are sequential; route when inputs are heterogeneous.",
              "title" : "The Assembly Line & the Triage Nurse",
              "mapping" : "Prompt chaining decomposes a task into ordered steps, each feeding the next (add a gate/check between steps). Routing classifies the input first, then sends it to a specialized handler.",
              "symbol" : "arrow.right.to.line",
              "analogy" : "An assembly line passes each part down a fixed sequence of stations. A triage nurse instead reads each patient and sends them to the right department."
            },
            {
              "takeaway" : "Parallelize for speed or confidence; loop generate→evaluate when quality must improve.",
              "title" : "Many Hands & The Editor",
              "mapping" : "Parallelization runs work concurrently — sectioning (split into independent chunks) or voting (same task several times for confidence). Evaluator-optimizer loops a generator against a critic until quality climbs.",
              "symbol" : "person.2.fill",
              "analogy" : "Three appraisers value a house independently and you reconcile them. A writer and an editor pass drafts back and forth until it's sharp."
            },
            {
              "takeaway" : "Use orchestrator-workers when the subtasks can't be predetermined.",
              "title" : "The Conductor Who Writes the Score Live",
              "mapping" : "Orchestrator-workers uses a central model to break a task into subtasks dynamically, delegate them to workers, and synthesize results. The key difference from parallelization: the subtasks aren't fixed in advance.",
              "symbol" : "person.3.sequence.fill",
              "analogy" : "Unlike a fixed orchestra, this conductor decides which sections play, and what, in the moment — based on how the piece is unfolding."
            }
          ]
        },
        {
          "questions" : [
            {
              "globalN" : -1018,
              "question" : "A long-running agent is approaching the context limit mid-task. Best move?",
              "options" : [
                {
                  "text" : "Compact: summarize completed work into a compact form and continue from there",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Paste all prior files and logs again to refresh memory",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Start the task over in a fresh session",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Switch to a smaller model",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Compaction preserves progress as a dense summary and frees the attention budget — the standard move for long-horizon agents nearing the window limit.",
              "correct" : "A",
              "scenario" : "Pattern: Context Engineering",
              "situation" : ""
            },
            {
              "globalN" : -1019,
              "question" : "Why prefer passing file paths / identifiers over pasting full file contents into an agent's context?",
              "options" : [
                {
                  "text" : "It lets the agent load only what it needs just-in-time, preserving the attention budget",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "File paths are encrypted and more secure",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "The model cannot read pasted text",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "It permanently caches the files for free",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Lightweight references keep context lean; the agent fetches the actual content lazily only for the files a step truly needs.",
              "correct" : "A",
              "scenario" : "Pattern: Context Engineering",
              "situation" : ""
            },
            {
              "globalN" : -1020,
              "question" : "A system prompt packed with hundreds of hardcoded if/then edge cases is an example of...",
              "options" : [
                {
                  "text" : "The wrong altitude — too low and brittle; flexible heuristics generalize better",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Ideal context engineering",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Too high an altitude",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Proper just-in-time retrieval",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Exhaustive hardcoded rules fly too low: they're brittle and break on unseen cases. Aim for guiding heuristics at the right altitude.",
              "correct" : "A",
              "scenario" : "Pattern: Context Engineering",
              "situation" : ""
            },
            {
              "globalN" : -1021,
              "question" : "How do sub-agents help with context engineering?",
              "options" : [
                {
                  "text" : "Each explores in its own isolated context and returns a condensed result, keeping the orchestrator's context clean",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "They share one giant context so nothing is lost",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "They remove the need for any summarization",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "They make the context window unlimited",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Context isolation is a core benefit of sub-agents: heavy exploration happens elsewhere, and only the distilled conclusion returns to the main thread.",
              "correct" : "A",
              "scenario" : "Pattern: Context Engineering",
              "situation" : ""
            }
          ],
          "examKind" : "examConcept",
          "domain" : "D5 · 15%",
          "title" : "Context Engineering",
          "symbol" : "rectangle.3.group",
          "id" : "l_p_context_eng",
          "cards" : [
            {
              "takeaway" : "Treat context as a finite budget — maximize signal per token.",
              "title" : "The Detective's Case Board",
              "mapping" : "Context is a limited attention budget, not free storage. Curate the smallest set of high-signal tokens the current step needs; every irrelevant token competes for the model's focus.",
              "symbol" : "pin.fill",
              "analogy" : "A good detective pins only the clues that matter to this case on the board — not every file in the precinct. Attention is finite; a wall of noise hides the one thread that solves it."
            },
            {
              "takeaway" : "Aim for instructions specific enough to steer but not so rigid they shatter.",
              "title" : "Flying at the Right Altitude",
              "mapping" : "Write system prompts at the right altitude: specific enough to guide behavior, general enough to flex. Hundreds of hardcoded if/then edge cases is flying too low.",
              "symbol" : "airplane",
              "analogy" : "Fly too low and you crash into every hill (brittle, hardcoded rules). Fly too high and you can't see the ground (vague, unguiding). There's a cruising altitude that sees the terrain and still steers."
            },
            {
              "takeaway" : "Retrieve just-in-time; compact and offload the rest.",
              "title" : "Just-in-Time vs. Loading the Whole Pantry",
              "mapping" : "Pull context just-in-time — pass identifiers/file paths and load contents only when needed. For long horizons, compact finished work into summaries, offload to external memory/notes, and let sub-agents explore in isolated contexts and return only conclusions.",
              "symbol" : "shippingbox.fill",
              "analogy" : "A sharp chef fetches fresh ingredients as each dish needs them, instead of dumping the entire pantry on the counter and cooking around the clutter."
            }
          ]
        },
        {
          "questions" : [
            {
              "globalN" : -1022,
              "question" : "Before optimizing a prompt for a high-stakes task, the first thing an expert builds is...",
              "options" : [
                {
                  "text" : "A representative eval set with clear grading criteria",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "A larger model deployment",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "A longer system prompt",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "A multi-agent orchestrator",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Optimization without measurement is guessing. The eval set is the instrument that tells you whether each change is an improvement.",
              "correct" : "A",
              "scenario" : "Pattern: Evaluations",
              "situation" : ""
            },
            {
              "globalN" : -1023,
              "question" : "You must grade open-ended summaries at scale, where exact string-match won't work. Good approach?",
              "options" : [
                {
                  "text" : "LLM-as-judge with a well-defined rubric",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Manual review of every output forever",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Exact-match against one reference summary",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Skip grading and ship",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "For subjective, open-ended outputs, a model graded against an explicit rubric scales evaluation while staying consistent.",
              "correct" : "A",
              "scenario" : "Pattern: Evaluations",
              "situation" : ""
            },
            {
              "globalN" : -1024,
              "question" : "Why run evals continuously rather than once?",
              "options" : [
                {
                  "text" : "To catch regressions when prompts, models, or tools change",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Because evals expire after a day",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "To increase token usage",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Continuous evals are unnecessary once you pass once",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Systems drift as you change prompts, swap models, or add tools. Continuous evals are the regression suite that flags when a change quietly breaks something.",
              "correct" : "A",
              "scenario" : "Pattern: Evaluations",
              "situation" : ""
            },
            {
              "globalN" : -1025,
              "question" : "A teammate says \"the new prompt feels better, let's ship it.\" The expert response?",
              "options" : [
                {
                  "text" : "Run it against the eval set and compare scores before shipping",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Ship it — intuition from experience is sufficient",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Ask more teammates for their feelings",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Roll back to the oldest prompt to be safe",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "\"Feels better\" isn't evidence. Comparing eval scores turns a subjective claim into a measured decision.",
              "correct" : "A",
              "scenario" : "Pattern: Evaluations",
              "situation" : ""
            }
          ],
          "examKind" : "examConcept",
          "domain" : "D4 · 20%",
          "title" : "Evaluations",
          "symbol" : "checklist",
          "id" : "l_p_evals",
          "cards" : [
            {
              "takeaway" : "Measure before you tune — evals are how you know a change actually helped.",
              "title" : "The Tasting Panel",
              "mapping" : "Before optimizing a prompt or agent, build an eval set with clear, graded criteria. Then every change is judged by whether the score moves — not by vibes.",
              "symbol" : "fork.knife.circle.fill",
              "analogy" : "A serious restaurant doesn't launch a new dish on the chef's gut feeling — a panel tastes it against a rubric first. Opinions are cheap; the scorecard decides."
            },
            {
              "takeaway" : "Automate grading so you can iterate fast and catch regressions early.",
              "title" : "Unit Tests for Prompts",
              "mapping" : "Assemble representative test cases and automate grading. Use exact/code-based checks for structured output; use LLM-as-judge with an explicit rubric for open-ended output. Run them continuously to catch regressions.",
              "symbol" : "checkmark.shield.fill",
              "analogy" : "You wouldn't refactor a codebase with no tests and hope. Prompts and agents deserve the same safety net."
            }
          ]
        }
      ],
      "kicker" : "Know the blueprint before you pour concrete.",
      "title" : "Architect's Patterns",
      "subtitle" : "When to use what — the canonical building blocks",
      "colorIndex" : 1,
      "id" : "u_patterns"
    },
    {
      "lessons" : [
        {
          "questions" : [
            {
              "globalN" : -1026,
              "question" : "A research task where you can't predict what sources or sub-questions will arise. Which decomposition?",
              "options" : [
                {
                  "text" : "Dynamic adaptive decomposition",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "A fixed prompt-chaining pipeline",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "A single one-shot prompt",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "No decomposition at all",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "When subtasks emerge only as the agent learns more, it must decompose adaptively at runtime — a fixed pipeline can't anticipate the steps.",
              "correct" : "A",
              "scenario" : "SDK: Decomposition",
              "situation" : ""
            },
            {
              "globalN" : -1027,
              "question" : "A 3-stage extract → validate → format job that's identical every run. Best approach?",
              "options" : [
                {
                  "text" : "A fixed pipeline (prompt chaining)",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Dynamic adaptive decomposition",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "An autonomous open-ended agent",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Random ordering of the stages",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Predictable, identical steps are the textbook case for a fixed pipeline — simpler, faster, and easy to test.",
              "correct" : "A",
              "scenario" : "SDK: Decomposition",
              "situation" : ""
            },
            {
              "globalN" : -1028,
              "question" : "Main trade-off of dynamic decomposition versus a fixed pipeline?",
              "options" : [
                {
                  "text" : "More flexible for unknown paths, but less predictable and harder to test",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Always cheaper and faster",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "It removes the need for any tools",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "It guarantees correctness",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Adaptivity buys flexibility for open-ended work at the cost of predictability and testability — a deliberate engineering trade.",
              "correct" : "A",
              "scenario" : "SDK: Decomposition",
              "situation" : ""
            }
          ],
          "examKind" : "examConcept",
          "domain" : "D1 · 27%",
          "title" : "Dynamic vs Fixed Workflows",
          "symbol" : "arrow.triangle.swap",
          "id" : "l_sdk_decomp",
          "cards" : [
            {
              "takeaway" : "Fix the steps when the path is known; decompose adaptively when it isn't.",
              "title" : "Printed Recipe vs. GPS That Reroutes",
              "mapping" : "A fixed pipeline (prompt chaining) predefines the steps — ideal when the task is predictable. Dynamic adaptive decomposition lets the agent break the task into subtasks at runtime, based on what it discovers — needed when the steps can't be known up front.",
              "symbol" : "map.fill",
              "analogy" : "A printed recipe lists every step before you start. A GPS plots a route but reroutes live as traffic appears — it decides the next move from what's actually happening."
            },
            {
              "takeaway" : "Adaptive decomposition trades predictability for handling the unknown.",
              "title" : "The Detective, Not the Assembly Line",
              "mapping" : "Dynamic decomposition suits open-ended research and investigation where subtasks emerge as you go. It's more flexible, but less predictable and harder to test than a fixed pipeline.",
              "symbol" : "magnifyingglass.circle.fill",
              "analogy" : "A detective can't list the steps before starting — each clue determines the next. An assembly line, by contrast, repeats the same fixed sequence forever."
            }
          ]
        },
        {
          "questions" : [
            {
              "globalN" : -1029,
              "question" : "Tool results from different MCP servers use inconsistent date formats. Where do you normalize them reliably?",
              "options" : [
                {
                  "text" : "In a PostToolUse hook",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "By asking the model nicely in the system prompt",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "By hoping each tool fixes itself",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "By lowering the temperature",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "A PostToolUse hook intercepts every tool result and can normalize it deterministically — exactly the data-normalization use case.",
              "correct" : "A",
              "scenario" : "SDK: Hooks",
              "situation" : ""
            },
            {
              "globalN" : -1030,
              "question" : "You must guarantee the agent never issues a refund above $500. Most reliable mechanism?",
              "options" : [
                {
                  "text" : "A hook that blocks the action when the amount exceeds $500",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "A strongly worded system-prompt rule",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Few-shot examples of small refunds",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "A higher-quality model",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Hard limits on actions belong in a hook — deterministic enforcement the model can't bypass, unlike prompt instructions.",
              "correct" : "A",
              "scenario" : "SDK: Hooks",
              "situation" : ""
            },
            {
              "globalN" : -1031,
              "question" : "Key advantage of a hook over a prompt instruction?",
              "options" : [
                {
                  "text" : "Deterministic enforcement the model cannot skip",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "It uses fewer tokens",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "It makes the model more creative",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "It removes the need for tools",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Prompts guide probabilistically; hooks run in code and are guaranteed to execute, giving hard guarantees.",
              "correct" : "A",
              "scenario" : "SDK: Hooks",
              "situation" : ""
            }
          ],
          "examKind" : "examMechanism",
          "domain" : "D1 · 27%",
          "title" : "Hooks",
          "symbol" : "point.3.connected.trianglepath.dotted",
          "id" : "l_sdk_hooks",
          "cards" : [
            {
              "takeaway" : "Hooks intercept tool calls to normalize results or block actions — in code.",
              "title" : "The Inspector on the Conveyor Belt",
              "mapping" : "An Agent SDK PostToolUse hook fires after each tool call. Use it to inspect and normalize results (e.g., unify date formats coming from different MCP tools) or to block an action outright (e.g., refuse a refund over $500).",
              "symbol" : "checkmark.rectangle.stack.fill",
              "analogy" : "A QC inspector stationed on the line examines each item as it passes and can stamp it, fix a defect, or pull it off the belt entirely — before it moves on."
            },
            {
              "takeaway" : "Use hooks when a rule must hold, not just usually.",
              "title" : "Code Enforces What Prompts Only Request",
              "mapping" : "A hook gives deterministic enforcement the model cannot skip — unlike a prompt instruction, which it may ignore. Reach for hooks when a policy or transformation MUST hold every time.",
              "symbol" : "lock.fill",
              "analogy" : "A 'please verify' sign asks nicely; a turnstile that won't open without a ticket guarantees it. For rules that truly matter, you fit the turnstile."
            }
          ]
        },
        {
          "questions" : [
            {
              "globalN" : -1032,
              "question" : "A subagent spawned via Task returns work that ignores the actual problem. Most likely cause?",
              "options" : [
                {
                  "text" : "It wasn't given the necessary context in its Task prompt",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "The coordinator used the wrong model",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Subagents can't use tools",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "The context window is too large",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Subagents start with a blank context. If the coordinator didn't pass the needed context in the prompt, the subagent is working blind.",
              "correct" : "A",
              "scenario" : "SDK: Hub-and-Spoke",
              "situation" : ""
            },
            {
              "globalN" : -1033,
              "question" : "For a coordinator to spawn subagents, its allowedTools must include...",
              "options" : [
                {
                  "text" : "\"Task\"",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "\"Bash\"",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "\"Spawn\"",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "nothing — spawning is automatic",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "The Task tool is what spawns subagents; the coordinator can't delegate unless Task is in its allowedTools.",
              "correct" : "A",
              "scenario" : "SDK: Hub-and-Spoke",
              "situation" : ""
            },
            {
              "globalN" : -1034,
              "question" : "Three independent subtasks need delegating. Most efficient pattern with Task?",
              "options" : [
                {
                  "text" : "Issue all three Task calls in one response so they run concurrently",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Issue them one per turn, waiting for each",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Merge them into a single subagent with no context",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Avoid subagents entirely",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Independent Task calls in the same response run in parallel, cutting latency — sequence only when there's a real dependency.",
              "correct" : "A",
              "scenario" : "SDK: Hub-and-Spoke",
              "situation" : ""
            }
          ],
          "examKind" : "examMechanism",
          "domain" : "D1 · 27%",
          "title" : "Hub-and-Spoke & Task",
          "symbol" : "point.topleft.down.to.point.bottomright.curvepath",
          "id" : "l_sdk_hubspoke",
          "cards" : [
            {
              "takeaway" : "Subagents start blind — put the full context into the Task prompt.",
              "title" : "The Dispatcher and the Sealed Briefing",
              "mapping" : "A coordinator spawns subagents via the `Task` tool (its `allowedTools` must include `Task`). A subagent starts with NO prior context — you must pack everything it needs into the Task prompt.",
              "symbol" : "envelope.fill",
              "analogy" : "A dispatcher sends couriers out into the city. Each courier only knows what's in the briefing packet you hand them — they can't read the dispatcher's mind."
            },
            {
              "takeaway" : "Independent Task calls in one turn run in parallel.",
              "title" : "Send the Couriers at Once",
              "mapping" : "Multiple `Task` calls issued in a single coordinator response run concurrently. Parallelize independent subagents; sequence the ones that depend on each other's output.",
              "symbol" : "arrow.triangle.branch",
              "analogy" : "You don't dispatch couriers one at a time when their errands are unrelated — you send them all out together."
            }
          ]
        },
        {
          "questions" : [
            {
              "globalN" : -1035,
              "question" : "The API returns stop_reason \"tool_use\". What should the loop do next?",
              "options" : [
                {
                  "text" : "Execute the requested tool and feed the result back to the model",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Treat the task as finished and stop",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Discard the response and retry from scratch",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Increase max_tokens and resend",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "`tool_use` means the model is requesting a tool. The loop runs it, appends the result, and calls the model again.",
              "correct" : "A",
              "scenario" : "SDK: Agentic Loop",
              "situation" : ""
            },
            {
              "globalN" : -1036,
              "question" : "stop_reason \"max_tokens\" means...",
              "options" : [
                {
                  "text" : "The response was cut off by the token limit — not necessarily complete",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "The task finished successfully",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "A tool is being requested",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "The model refused the request",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "max_tokens signals truncation. The answer may be incomplete and you may need to continue or raise the limit.",
              "correct" : "A",
              "scenario" : "SDK: Agentic Loop",
              "situation" : ""
            },
            {
              "globalN" : -1037,
              "question" : "What fundamentally turns a single model call into an agent?",
              "options" : [
                {
                  "text" : "A loop that services tool calls until stop_reason is end_turn",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Using the largest available model",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "A longer system prompt",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Disabling tools",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "The agentic loop — call, service tool requests, repeat until done — is the defining structure of an agent.",
              "correct" : "A",
              "scenario" : "SDK: Agentic Loop",
              "situation" : ""
            }
          ],
          "examKind" : "examMechanism",
          "domain" : "D1 · 27%",
          "title" : "Agentic Loop & stop_reason",
          "symbol" : "arrow.2.circlepath",
          "id" : "l_sdk_loop",
          "cards" : [
            {
              "takeaway" : "Read stop_reason to decide the loop's next move.",
              "title" : "Why Did the Meeting End?",
              "mapping" : "`stop_reason` tells you why the model stopped: `end_turn` (done), `max_tokens` (cut off by the limit), or `tool_use` (it wants a tool). Your loop reads it and responds accordingly.",
              "symbol" : "questionmark.circle.fill",
              "analogy" : "A meeting can end three ways: it finished, it ran out of time, or someone has to step out to fetch a document. You react differently to each."
            },
            {
              "takeaway" : "An agent is a loop around the model that services tool calls until it's done.",
              "title" : "The Loop That Drives an Agent",
              "mapping" : "The agentic loop = call the model → if `tool_use`, run the tool, append the result, call again → repeat until `end_turn`. That cycle is precisely what turns a single model call into an agent.",
              "symbol" : "gearshape.2.fill",
              "analogy" : "A thermostat loops: read the temperature, act, read again — until it hits the target. The loop is what makes it a thermostat, not just a thermometer."
            }
          ]
        }
      ],
      "kicker" : "Concepts win the exam; mechanics make you dangerous.",
      "title" : "Agent SDK Internals",
      "subtitle" : "The mechanics behind orchestration — dynamic workflows, hooks, subagents",
      "colorIndex" : 5,
      "id" : "u_sdk"
    },
    {
      "lessons" : [
        {
          "questions" : [
            {
              "globalN" : -1038,
              "question" : "Output keeps coming back in the wrong format despite clear instructions. Most reliable fix?",
              "options" : [
                {
                  "text" : "Add a few examples (multishot) showing the exact desired format",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Repeat the instruction in all caps",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Raise the temperature",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Switch to a larger model and hope",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Models match patterns from examples more reliably than they follow abstract format instructions. A couple of worked examples usually fixes formatting drift.",
              "correct" : "A",
              "scenario" : "Platform: Prompt Engineering",
              "situation" : ""
            },
            {
              "globalN" : -1039,
              "question" : "For a complex multi-step reasoning task, what reliably improves accuracy?",
              "options" : [
                {
                  "text" : "Give the model room to reason step by step before committing to an answer",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Forbid any explanation to save tokens",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Always answer in a single word",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Lower the max tokens aggressively",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Chain-of-thought lets the model work through intermediate steps, which materially improves correctness on hard, multi-step problems.",
              "correct" : "A",
              "scenario" : "Platform: Prompt Engineering",
              "situation" : ""
            },
            {
              "globalN" : -1040,
              "question" : "Best practice for separating instructions, background context, and the data to act on?",
              "options" : [
                {
                  "text" : "Use clear structure and delimiters, such as XML tags, to mark each section",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Run everything together in one paragraph",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Put the data first with no labels",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Rely on the model to guess the boundaries",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Explicit structure (XML tags or clear delimiters) removes ambiguity about what's an instruction vs. data, reducing mistakes.",
              "correct" : "A",
              "scenario" : "Platform: Prompt Engineering",
              "situation" : ""
            }
          ],
          "examKind" : "examConcept",
          "domain" : "D4 · 20%",
          "title" : "Prompt Engineering",
          "symbol" : "text.cursor",
          "id" : "l_pf_prompting",
          "cards" : [
            {
              "takeaway" : "Specificity in, quality out — write the brief you'd want to receive.",
              "title" : "The Contractor's Brief",
              "mapping" : "Be clear and direct, state the goal and constraints, and structure the prompt so instructions, context, and data are visually separated (e.g., XML tags). Specify the exact output format you want.",
              "symbol" : "doc.text.fill",
              "analogy" : "Hand a contractor a vague brief and you get the wrong house. Hand them dimensions, materials, and a photo of what you want, and you get it right the first time."
            },
            {
              "takeaway" : "Examples shape the format; thinking-space improves the reasoning.",
              "title" : "Show, Don't Just Tell",
              "mapping" : "Multishot examples shape format and style far more reliably than instructions alone. Chain-of-thought (room to reason step by step) lifts accuracy on complex tasks. Prefilling the response start steers tone and structure.",
              "symbol" : "rectangle.and.text.magnifyingglass",
              "analogy" : "You teach a new hire faster with two worked examples than a page of abstract rules. And for hard arithmetic, you let them show their work."
            }
          ]
        },
        {
          "questions" : [
            {
              "globalN" : -1041,
              "question" : "Your agent keeps calling a tool at the wrong time. First thing to fix?",
              "options" : [
                {
                  "text" : "Sharpen the tool's name and description so its trigger conditions are unambiguous",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Remove the model's ability to use tools",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Add ten more tools",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Increase the context window",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Mis-timed tool calls are usually a description problem — the model is guessing when to use it. A precise description fixes the trigger.",
              "correct" : "A",
              "scenario" : "Platform: Tool Use",
              "situation" : ""
            },
            {
              "globalN" : -1042,
              "question" : "Two tool calls don't depend on each other's output. Best practice?",
              "options" : [
                {
                  "text" : "Issue them in parallel",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Always run them strictly one after another",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Combine them into one giant tool",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Avoid using both in the same task",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Independent calls should run in parallel to cut latency — sequencing them wastes time for no benefit.",
              "correct" : "A",
              "scenario" : "Platform: Tool Use",
              "situation" : ""
            },
            {
              "globalN" : -1043,
              "question" : "A tool call fails (e.g., returns a 404). Best design?",
              "options" : [
                {
                  "text" : "Return a clear, readable error so the model can adjust or retry",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Crash the whole agent run",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Silently return empty data as if it succeeded",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Hide the error from the model entirely",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Graceful, legible errors let the agent recover — retry, pick another path, or report. Silent failures and crashes both destroy reliability.",
              "correct" : "A",
              "scenario" : "Platform: Tool Use",
              "situation" : ""
            }
          ],
          "examKind" : "examConcept",
          "domain" : "D2 · 18%",
          "title" : "Tool Use & Design",
          "symbol" : "hammer.fill",
          "id" : "l_pf_tools",
          "cards" : [
            {
              "takeaway" : "A tool is only as usable as its description.",
              "title" : "The Well-Labeled Toolbox",
              "mapping" : "A tool's description is the model's only guide to when and how to call it. Write it as carefully as the prompt: state the purpose, each parameter, expected inputs, and what it returns on error.",
              "symbol" : "tag.fill",
              "analogy" : "A tool with a clear label and a known purpose gets reached for correctly. An unlabeled one in the same drawer gets grabbed at the wrong moment."
            },
            {
              "takeaway" : "Curate the tools, parallelize the independent calls, and fail readably.",
              "title" : "Hand the Right Tools, Not Every Tool",
              "mapping" : "Give the agent a focused tool set, issue independent tool calls in parallel, and return clear, readable errors so the model can recover instead of crashing.",
              "symbol" : "hand.raised.fill",
              "analogy" : "Fifty tools on the bench slow you down; a curated handful for the job speeds you up. And two hands let you do independent things at once."
            }
          ]
        },
        {
          "questions" : [
            {
              "globalN" : -1044,
              "question" : "What problem does MCP primarily solve?",
              "options" : [
                {
                  "text" : "A standard way to connect models to external tools and data, replacing bespoke per-integration glue",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Making the model run faster",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Compressing the context window",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Training the model on your data",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "MCP's purpose is interoperability: one open protocol so integrations aren't reinvented for every tool, data source, and client.",
              "correct" : "A",
              "scenario" : "Platform: MCP",
              "situation" : ""
            },
            {
              "globalN" : -1045,
              "question" : "You built an MCP server exposing your company's docs. Which clients can use it?",
              "options" : [
                {
                  "text" : "Any MCP-compatible client",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Only the specific app you tested with",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Only servers, not clients",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "None — servers can't expose data",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "That's the whole point of a standard: any MCP-aware client can connect to your server without custom work.",
              "correct" : "A",
              "scenario" : "Platform: MCP",
              "situation" : ""
            },
            {
              "globalN" : -1046,
              "question" : "In MCP, the component that exposes tools/resources is the ___, and the model-side consumer is the ___.",
              "options" : [
                {
                  "text" : "server / client",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "client / server",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "host / driver",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "adapter / appliance",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "The server publishes capabilities; the client (the model's side) consumes them — mirroring the universal-adapter analogy.",
              "correct" : "A",
              "scenario" : "Platform: MCP",
              "situation" : ""
            }
          ],
          "examKind" : "examConcept",
          "domain" : "D2 · 18%",
          "title" : "Model Context Protocol",
          "symbol" : "cable.connector",
          "id" : "l_pf_mcp",
          "cards" : [
            {
              "takeaway" : "MCP standardizes how Claude plugs into the outside world.",
              "title" : "USB-C for AI",
              "mapping" : "MCP is an open standard that lets Claude connect to external tools and data through one common interface — instead of bespoke, one-off integrations for every system.",
              "symbol" : "cable.connector.horizontal",
              "analogy" : "Before USB-C, every device had its own connector and you needed a drawer of adapters. USB-C is one standard port that fits everything."
            },
            {
              "takeaway" : "Write the connector once; every MCP client benefits.",
              "title" : "The Universal Adapter, Not the Appliance",
              "mapping" : "An MCP server exposes tools, resources, and prompts; an MCP client (a Claude app or agent) consumes them. Write a server once and any MCP-aware client can use it.",
              "symbol" : "powerplug.fill",
              "analogy" : "The adapter doesn't do the work — it just lets any appliance plug into the wall. Build the adapter once and every appliance benefits."
            }
          ]
        },
        {
          "questions" : [
            {
              "globalN" : -1047,
              "question" : "You need reliable, machine-parseable extraction from documents. Best approach?",
              "options" : [
                {
                  "text" : "Enforce a JSON schema via tool_use",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Ask for the answer in freeform prose and parse it with regex",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Raise the temperature for richer output",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Use the largest model and trust the format",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "tool_use with a JSON schema constrains the output shape so it's reliably parseable — far more robust than scraping freeform text.",
              "correct" : "A",
              "scenario" : "Platform: Structured Output",
              "situation" : ""
            },
            {
              "globalN" : -1048,
              "question" : "A field is sometimes genuinely absent in the source document. Best schema design?",
              "options" : [
                {
                  "text" : "Make the field optional/nullable so the model needn't invent a value",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Require the field always, forcing the model to fill it",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Remove the field from the schema entirely",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Ask the model to guess a plausible value",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Forcing a required value where none exists invites hallucination. Optional/nullable fields (and an 'other' escape) let the model report absence honestly.",
              "correct" : "A",
              "scenario" : "Platform: Structured Output",
              "situation" : ""
            },
            {
              "globalN" : -1049,
              "question" : "Extraction returns valid JSON, but a returned date is logically impossible. What kind of error, and the fix?",
              "options" : [
                {
                  "text" : "A semantic error — validate and retry with the specific feedback",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "A syntax error — the JSON parser will catch it",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Not an error — ship it",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "A model defect requiring a different model",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Well-formed but wrong-meaning output is a semantic error. Schema parsing won't catch it; validation plus a feedback retry loop will.",
              "correct" : "A",
              "scenario" : "Platform: Structured Output",
              "situation" : ""
            }
          ],
          "examKind" : "examConcept",
          "domain" : "D4 · 20%",
          "title" : "Structured Output",
          "symbol" : "tablecells",
          "id" : "l_pf_structured",
          "cards" : [
            {
              "takeaway" : "Define the form (JSON schema) and the model fills it — don't parse freeform prose.",
              "title" : "The Fillable Form vs. the Blank Page",
              "mapping" : "Enforce structured output with `tool_use` and a JSON schema. Mark fields required vs optional/nullable, use enums for fixed choices, and add an \"other\" + detail field so the model has a valid escape instead of inventing one.",
              "symbol" : "list.bullet.rectangle.portrait.fill",
              "analogy" : "Ask for information on a blank page and you get rambling prose you have to decipher. Hand over a form with labeled fields — required boxes, optional boxes, checkboxes — and you get clean, parseable data every time."
            },
            {
              "takeaway" : "Validate, then retry-with-feedback — name the error so the model can fix it.",
              "title" : "Reject the Form, Don't Guess",
              "mapping" : "Distinguish syntax errors (malformed JSON) from semantic errors (valid JSON, wrong meaning — e.g., an impossible date). Validate output (e.g., with Pydantic) and on failure, retry with the specific error fed back so the model self-corrects.",
              "symbol" : "arrow.uturn.backward.circle.fill",
              "analogy" : "A careful clerk doesn't quietly 'fix' a form with an impossible date — they hand it back with a note saying exactly what's wrong, and you correct it."
            }
          ]
        },
        {
          "questions" : [
            {
              "globalN" : -1050,
              "question" : "You have millions of independent items to process and don't need real-time results. Best fit?",
              "options" : [
                {
                  "text" : "The Message Batches API",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Synchronous calls, one at a time",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "A single giant prompt containing every item",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "A multi-agent orchestrator",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Large, latency-tolerant, independent workloads are exactly what the Batch API targets — higher throughput at roughly half the cost.",
              "correct" : "A",
              "scenario" : "Platform: Batch Processing",
              "situation" : ""
            },
            {
              "globalN" : -1051,
              "question" : "Why attach a custom_id to each request in a batch?",
              "options" : [
                {
                  "text" : "To match each returned result back to its original request",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "To enable multi-turn tool calling",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "To reduce token cost further",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "To force a specific model",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Batch results aren't guaranteed in order, so custom_id is how you reassociate each output with the input that produced it.",
              "correct" : "A",
              "scenario" : "Platform: Batch Processing",
              "situation" : ""
            },
            {
              "globalN" : -1052,
              "question" : "Which task is NOT a good fit for the Batch API?",
              "options" : [
                {
                  "text" : "An interactive agent that needs multi-turn tool calls in real time",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Classifying a large backlog of documents overnight",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Bulk summarization of an archive",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Generating embeddings-style labels for many records",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Batch is asynchronous and single-turn — it can't power a real-time, multi-turn tool-calling conversation. That belongs on the synchronous API.",
              "correct" : "A",
              "scenario" : "Platform: Batch Processing",
              "situation" : ""
            }
          ],
          "examKind" : "examConcept",
          "domain" : "D4 · 20%",
          "title" : "Batch Processing",
          "symbol" : "shippingbox.fill",
          "id" : "l_pf_batch",
          "cards" : [
            {
              "takeaway" : "Batch the bulk, latency-tolerant work; keep the synchronous API for interactive turns.",
              "title" : "The Overnight Freight Convoy",
              "mapping" : "The Message Batches API runs large, latency-tolerant workloads asynchronously at ~50% lower cost, with results inside a 24-hour window. Use it when you have many independent requests and don't need answers in real time.",
              "symbol" : "truck.box.fill",
              "analogy" : "Urgent letters go by courier; a warehouse's bulk stock goes on an overnight freight convoy — far cheaper per item, arrives by morning, just not this second."
            },
            {
              "takeaway" : "Tag each request with custom_id; remember batch is single-turn, not for interactive agents.",
              "title" : "Label Every Crate",
              "mapping" : "Each batch request carries a `custom_id` so you can match results back to inputs when they return. Note the constraint: batches are single-turn — no multi-turn tool-calling conversations.",
              "symbol" : "shippingbox.and.arrow.backward.fill",
              "analogy" : "On a big shipment you tag every crate, because they come back out of order — the label is how you match each one to its destination."
            }
          ]
        },
        {
          "questions" : [
            {
              "globalN" : -1053,
              "question" : "You need to guarantee the model calls a tool this turn rather than answering from memory. Setting?",
              "options" : [
                {
                  "text" : "tool_choice = any (or force the specific tool)",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "tool_choice = auto",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Disable all tools",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Lower the temperature",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "`any` forces the model to call some tool; `auto` leaves it free to answer directly. To require a tool, use any or force one by name.",
              "correct" : "A",
              "scenario" : "Platform: Tool Choice",
              "situation" : ""
            },
            {
              "globalN" : -1054,
              "question" : "An MCP tool hits a transient network timeout. Best error design?",
              "options" : [
                {
                  "text" : "Return isError with a structured, retryable error category",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Return success with empty data",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Crash the agent",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Silently swallow the failure",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "A structured, retryable error lets the agent retry the transient failure intelligently — silent success or crashes both break reliability.",
              "correct" : "A",
              "scenario" : "Platform: Tool Choice",
              "situation" : ""
            },
            {
              "globalN" : -1055,
              "question" : "What does tool_choice \"auto\" mean?",
              "options" : [
                {
                  "text" : "The model decides whether and which tool to call",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "The model must always call a tool",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "A specific tool is forced",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Tools are disabled",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "auto leaves the decision to the model — it may answer directly or call any available tool.",
              "correct" : "A",
              "scenario" : "Platform: Tool Choice",
              "situation" : ""
            }
          ],
          "examKind" : "examMechanism",
          "domain" : "D2 · 18%",
          "title" : "Tool Choice & Errors",
          "symbol" : "slider.horizontal.3",
          "id" : "l_pf_toolchoice",
          "cards" : [
            {
              "takeaway" : "tool_choice = auto (decide), any (must use a tool), or force one by name.",
              "title" : "The Waiter's Instructions",
              "mapping" : "`tool_choice` controls tool use: `auto` (the model decides whether/which tool), `any` (it must call some tool), or forcing a specific named tool. Match it to how much you want to constrain the model.",
              "symbol" : "fork.knife",
              "analogy" : "You can tell a waiter three ways: 'recommend if you like' (their call), 'you must order something' (anything, but pick), or 'bring the chef's special' (this exact dish)."
            },
            {
              "takeaway" : "Signal failures with isError and a structured, categorized, retryable payload.",
              "title" : "Return the Parcel With a Reason",
              "mapping" : "MCP tools set the `isError` flag and return structured errors with a category and a retryable hint, so the agent can decide to retry, adjust, or escalate rather than guess.",
              "symbol" : "shippingbox.and.arrow.backward.fill",
              "analogy" : "A failed delivery should come back with a clear label — 'address not found, don't retry' vs 'nobody home, try later' — not just vanish silently."
            }
          ]
        },
        {
          "questions" : [
            {
              "globalN" : -1056,
              "question" : "An extraction fails schema validation. Best retry loop?",
              "options" : [
                {
                  "text" : "Retry, feeding back the specific validation error",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Retry the identical prompt unchanged",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Give up after the first failure",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Switch models and hope",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Retry-with-feedback gives the model the exact error to fix, so it converges — re-sending the same prompt just repeats the failure.",
              "correct" : "A",
              "scenario" : "Platform: Self-Correction",
              "situation" : ""
            },
            {
              "globalN" : -1057,
              "question" : "A user request is ambiguous and underspecified. Strong pattern?",
              "options" : [
                {
                  "text" : "The interview pattern — ask clarifying questions before acting",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Guess the most likely intent and proceed",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Refuse the request",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Answer all possible interpretations at once",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Asking targeted clarifying questions up front avoids wasted work and wrong outputs on ambiguous requests.",
              "correct" : "A",
              "scenario" : "Platform: Self-Correction",
              "situation" : ""
            },
            {
              "globalN" : -1058,
              "question" : "What is self-correction?",
              "options" : [
                {
                  "text" : "Prompting the model to review and fix its own output before finalizing",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Training the model on its mistakes",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "A hook that blocks bad output",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Using a second, larger model",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Self-correction is a prompt technique: the model critiques and revises its own draft before returning it.",
              "correct" : "A",
              "scenario" : "Platform: Self-Correction",
              "situation" : ""
            }
          ],
          "examKind" : "examConcept",
          "domain" : "D4 · 20%",
          "title" : "Self-Correction & Clarifying",
          "symbol" : "arrow.uturn.backward.square.fill",
          "id" : "l_pf_selfcorrect",
          "cards" : [
            {
              "takeaway" : "Have the model check its own work; on failure, retry with the specific error.",
              "title" : "Proofread Your Own Draft",
              "mapping" : "Prompt the model to review and correct its own output (self-correction). On a validation failure, retry with the specific error fed back (retry-with-feedback) so it converges instead of repeating the mistake.",
              "symbol" : "pencil.line",
              "analogy" : "A careful writer rereads and fixes their draft before submitting. And when an editor finds a problem, they return it with a specific note — not a vague 'redo it.'"
            },
            {
              "takeaway" : "On ambiguity, ask first (interview) rather than guess.",
              "title" : "Interview Before You Build",
              "mapping" : "The interview pattern has the model gather missing requirements by asking, instead of assuming — cutting wasted work on ambiguous or underspecified requests.",
              "symbol" : "questionmark.bubble.fill",
              "analogy" : "A good contractor asks clarifying questions before pouring the foundation, rather than guessing and tearing it out later."
            }
          ]
        }
      ],
      "kicker" : "Master the API surface the exam actually tests.",
      "title" : "API & Tooling Skills",
      "subtitle" : "Prompts, tools, MCP, structured output, batch — the tested surface",
      "colorIndex" : 2,
      "id" : "u_platform"
    },
    {
      "lessons" : [
        {
          "questions" : [
            {
              "globalN" : -1059,
              "question" : "A convention should apply only inside your `api/` subfolder. Where does it belong?",
              "options" : [
                {
                  "text" : "A CLAUDE.md scoped to the api/ subfolder",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "The global ~/.claude CLAUDE.md",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Hardcoded into every prompt by hand",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Nowhere — Claude infers it",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "The hierarchy lets you scope rules to a directory. A subfolder CLAUDE.md applies only there, keeping project-wide config uncluttered.",
              "correct" : "A",
              "scenario" : "Claude Code: CLAUDE.md",
              "situation" : ""
            },
            {
              "globalN" : -1060,
              "question" : "What does the `@path` syntax in CLAUDE.md do?",
              "options" : [
                {
                  "text" : "Imports another file's contents, keeping config modular and reusable",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Runs a shell command at that path",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Deletes the file at that path",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Restricts Claude to that path",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "@path imports let you compose CLAUDE.md from shared pieces instead of duplicating conventions across files.",
              "correct" : "A",
              "scenario" : "Claude Code: CLAUDE.md",
              "situation" : ""
            },
            {
              "globalN" : -1061,
              "question" : "A project-root CLAUDE.md and a subfolder CLAUDE.md give conflicting guidance for a file in the subfolder. Which applies?",
              "options" : [
                {
                  "text" : "The more specific, closer-scoped (subfolder) one layers on top",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "The project-root one always wins",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Whichever was edited first",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Neither — the conflict disables both",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "More specific scope takes precedence, the same way an apartment rule refines the building rule.",
              "correct" : "A",
              "scenario" : "Claude Code: CLAUDE.md",
              "situation" : ""
            }
          ],
          "examKind" : "examConcept",
          "domain" : "D3 · 20%",
          "title" : "CLAUDE.md Hierarchy",
          "symbol" : "doc.plaintext",
          "id" : "l_cc_claudemd",
          "cards" : [
            {
              "takeaway" : "Put each rule at the narrowest scope that needs it; local layers over global.",
              "title" : "House Rules, Posted Room by Room",
              "mapping" : "CLAUDE.md layers the same way: global (~/.claude) → project root → nested subdirectories. The closer-scoped file augments and overrides the broader one, so conventions live exactly where they apply.",
              "symbol" : "building.2.fill",
              "analogy" : "A building posts general rules in the lobby, floor rules on each floor, and apartment rules inside each unit. You follow the most local rule that applies, layered on top of the general ones."
            },
            {
              "takeaway" : "Use @path imports to keep CLAUDE.md modular and DRY.",
              "title" : "Cite the Notice, Don't Reprint It",
              "mapping" : "The `@path` syntax imports other files into CLAUDE.md, so shared conventions stay in one place and the config stays modular instead of a giant monolith.",
              "symbol" : "arrow.right.doc.on.clipboard",
              "analogy" : "A good memo says 'see the posted safety notice' instead of copying the whole thing into every memo. One source of truth, referenced everywhere."
            }
          ]
        },
        {
          "questions" : [
            {
              "globalN" : -1062,
              "question" : "You want React conventions loaded only when working on `.tsx` files. Best mechanism?",
              "options" : [
                {
                  "text" : "A glob-matched rule in .claude/rules/",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "A line in the global CLAUDE.md that always loads",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Pasting them into each prompt",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "A custom slash command",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Path-specific rules with glob patterns activate only for matching files — exactly the conditional-loading case.",
              "correct" : "A",
              "scenario" : "Claude Code: Rules",
              "situation" : ""
            },
            {
              "globalN" : -1063,
              "question" : "Why prefer path-specific rules over one giant always-on CLAUDE.md?",
              "options" : [
                {
                  "text" : "Relevance and lean context — only the conventions that apply get loaded",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Glob rules run faster on the CPU",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "CLAUDE.md has a hard size cap of one line",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Rules can store secrets; CLAUDE.md cannot",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Conditional loading keeps the active context focused on what's relevant to the current path — better signal, less noise.",
              "correct" : "A",
              "scenario" : "Claude Code: Rules",
              "situation" : ""
            },
            {
              "globalN" : -1064,
              "question" : "Rules in `.claude/rules/` activate based on...",
              "options" : [
                {
                  "text" : "A glob pattern matching the file paths in play",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "The time of day",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "The model size",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Alphabetical order of the filenames",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Glob patterns decide when a rule file applies, scoping conventions to the paths they're meant for.",
              "correct" : "A",
              "scenario" : "Claude Code: Rules",
              "situation" : ""
            }
          ],
          "examKind" : "examConcept",
          "domain" : "D3 · 20%",
          "title" : "Path-Specific Rules",
          "symbol" : "ruler.fill",
          "id" : "l_cc_rules",
          "cards" : [
            {
              "takeaway" : "Load conventions conditionally by path glob, not globally.",
              "title" : "Dress Code by Room",
              "mapping" : "`.claude/rules/` files use glob patterns to load conventions only for matching paths — e.g., testing conventions that apply only to `*.test.ts`, or API style rules only under `api/`.",
              "symbol" : "tshirt.fill",
              "analogy" : "Lab coats are required only in the lab; hard hats only on the site. The rule activates based on where you are, not everywhere at once."
            },
            {
              "takeaway" : "Path rules keep context lean — only the relevant conventions load.",
              "title" : "Right Rule, Right Moment — Lean Context",
              "mapping" : "Path-scoped rules load just-in-time by glob match, so the model isn't carrying conventions irrelevant to the current file. It's context hygiene applied to configuration.",
              "symbol" : "leaf.fill",
              "analogy" : "Signage that appears only where it's relevant keeps the space uncluttered; plastering every sign everywhere just creates noise."
            }
          ]
        },
        {
          "questions" : [
            {
              "globalN" : -1065,
              "question" : "You have a 6-step procedure you want Claude to invoke automatically whenever it's relevant. Package it as...",
              "options" : [
                {
                  "text" : "A skill with a SKILL.md and a precise description",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "A line in CLAUDE.md",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "A long-running background agent",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "A path-specific rule",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Skills are described, auto-invoked procedures; the description controls when Claude reaches for it.",
              "correct" : "A",
              "scenario" : "Claude Code: Skills",
              "situation" : ""
            },
            {
              "globalN" : -1066,
              "question" : "What does a skill's `context: fork` setting do?",
              "options" : [
                {
                  "text" : "Runs the skill in an isolated context so it doesn't pollute the main conversation",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Forks the git repository",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Doubles the context window",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Runs the skill on two models at once",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "context: fork keeps the skill's working context separate, protecting the main thread's context — the configuration form of context hygiene.",
              "correct" : "A",
              "scenario" : "Claude Code: Skills",
              "situation" : ""
            },
            {
              "globalN" : -1067,
              "question" : "A prompt you run by hand all the time and want as a quick trigger. Best fit?",
              "options" : [
                {
                  "text" : "A custom slash command in .claude/commands/",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "A skill with context: fork",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "An MCP server",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "A new CLAUDE.md",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Slash commands are reusable prompts you invoke explicitly — speed-dial for a frequent prompt.",
              "correct" : "A",
              "scenario" : "Claude Code: Skills",
              "situation" : ""
            }
          ],
          "examKind" : "examConcept",
          "domain" : "D3 · 20%",
          "title" : "Skills & Commands",
          "symbol" : "wand.and.stars",
          "id" : "l_cc_skills",
          "cards" : [
            {
              "takeaway" : "Commands are shortcuts you trigger; skills are procedures Claude triggers.",
              "title" : "Recipe Cards & Speed Dial",
              "mapping" : "Custom slash commands (`.claude/commands/`) are reusable prompts you trigger by name. Skills (`.claude/skills/` with a `SKILL.md`) are described procedures Claude invokes on its own when a request matches the description.",
              "symbol" : "menucard.fill",
              "analogy" : "A slash command is speed-dial for a prompt you run constantly. A skill is a full recipe card the kitchen pulls out automatically whenever that dish is ordered."
            },
            {
              "takeaway" : "context: fork isolates a skill's work; allowed-tools limits what it can touch.",
              "title" : "Cook in a Separate Kitchen, with Only the Right Tools",
              "mapping" : "A skill's `context: fork` runs its work in an isolated context so it doesn't pollute your main one (context hygiene), and `allowed-tools` scopes which tools it may use — limiting its blast radius.",
              "symbol" : "fork.knife.circle.fill",
              "analogy" : "A caterer works in their own kitchen so your counter stays clean, and brings only the tools the dish needs — not your entire drawer."
            }
          ]
        },
        {
          "questions" : [
            {
              "globalN" : -1068,
              "question" : "A long session is nearing the context limit but you want to keep its progress. Best move?",
              "options" : [
                {
                  "text" : "Use /compact to summarize the conversation and free the window",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Paste everything again to refresh it",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Quit and start over from scratch",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Switch to a smaller model",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "/compact preserves progress as a summary while reclaiming context space — the standard fix for long, full sessions.",
              "correct" : "A",
              "scenario" : "Claude Code: Context Tools",
              "situation" : ""
            },
            {
              "globalN" : -1069,
              "question" : "Where should a fact you want available across many future sessions live?",
              "options" : [
                {
                  "text" : "/memory",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "A one-off line in the current chat",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Re-typed each session by hand",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "A path-specific rule glob",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "/memory is for durable facts that should persist and be recalled across sessions.",
              "correct" : "A",
              "scenario" : "Claude Code: Context Tools",
              "situation" : ""
            },
            {
              "globalN" : -1070,
              "question" : "Investigating a large codebase over a long run, how do you preserve findings and survive an interruption?",
              "options" : [
                {
                  "text" : "Write findings to a scratchpad file (structured state persistence)",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Keep everything in the live context window",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Rely on the model's memory of the whole session",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Increase max_tokens",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Scratchpad files persist state on disk — they offload detail from context and enable recovery if the session is interrupted.",
              "correct" : "A",
              "scenario" : "Claude Code: Context Tools",
              "situation" : ""
            }
          ],
          "examKind" : "examConcept",
          "domain" : "D3/D5",
          "title" : "Compact, Memory, Scratchpads",
          "symbol" : "tray.and.arrow.down.fill",
          "id" : "l_cc_context",
          "cards" : [
            {
              "takeaway" : "Compact to summarize-and-clear when the context fills up.",
              "title" : "Tidy the Desk Mid-Project",
              "mapping" : "`/compact` summarizes the conversation so far to free the context window while preserving progress — your main defense against bloated context and the 'lost in the middle' effect on long sessions.",
              "symbol" : "wind",
              "analogy" : "When the desk overflows, you don't sweep everything to the floor — you summarize your notes onto one clean sheet and clear the clutter so you can keep working."
            },
            {
              "takeaway" : "Offload durable facts to /memory and working findings to scratchpad files.",
              "title" : "The Lab Notebook",
              "mapping" : "`/memory` stores durable facts across sessions; scratchpad files persist investigation state on disk — which also enables crash recovery and lets you offload detail out of live context.",
              "symbol" : "book.closed.fill",
              "analogy" : "A scientist writes durable findings in a notebook and keeps standing facts on a reference card, instead of trying to hold everything in their head all day."
            }
          ]
        },
        {
          "questions" : [
            {
              "globalN" : -1071,
              "question" : "You want to explore an alternative approach from the middle of a session without losing your current state. Use...",
              "options" : [
                {
                  "text" : "fork_session",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "--resume",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "/compact",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "A new path-specific rule",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "fork_session branches from an existing session so you can try an alternative while the original stays intact.",
              "correct" : "A",
              "scenario" : "Claude Code: Sessions",
              "situation" : ""
            },
            {
              "globalN" : -1072,
              "question" : "A large, risky, multi-file refactor is coming. Which mode fits best?",
              "options" : [
                {
                  "text" : "Planning mode — review and approve the plan before executing",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Direct execution as fast as possible",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Batch processing",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "fork_session for each file",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Risky, far-reaching changes benefit from approving a plan first; mistakes are far cheaper to fix on paper than after they're applied.",
              "correct" : "A",
              "scenario" : "Claude Code: Sessions",
              "situation" : ""
            },
            {
              "globalN" : -1073,
              "question" : "You want to continue exactly where yesterday's session left off. Use...",
              "options" : [
                {
                  "text" : "--resume",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "fork_session",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "/memory",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "A fresh session with no history",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "--resume continues an existing session with its context; forking would instead branch a new timeline.",
              "correct" : "A",
              "scenario" : "Claude Code: Sessions",
              "situation" : ""
            }
          ],
          "examKind" : "examConcept",
          "domain" : "D3 · 20%",
          "title" : "Sessions & Planning",
          "symbol" : "arrow.triangle.branch",
          "id" : "l_cc_sessions",
          "cards" : [
            {
              "takeaway" : "Resume to continue; fork to branch without contaminating the original.",
              "title" : "Save Points & Alternate Timelines",
              "mapping" : "`--resume` continues an existing session. `fork_session` branches from one to try an alternative approach while preserving the original, keeping the two contexts isolated.",
              "symbol" : "gamecontroller.fill",
              "analogy" : "A save point lets you resume right where you left off. Forking creates an alternate timeline from a checkpoint — you explore a different path without losing the original."
            },
            {
              "takeaway" : "Plan first for risky or large work; execute directly for small, clear tasks.",
              "title" : "Blueprint Review Before You Pour Concrete",
              "mapping" : "Planning mode has Claude propose a plan for your approval before executing — use it for large, risky, or ambiguous changes. Direct execution is fine for small, clear tasks where a plan would be overhead.",
              "symbol" : "ruler.fill",
              "analogy" : "An architect reviews the blueprint with you before any concrete is poured — changes on paper are cheap; changes in concrete are not."
            }
          ]
        },
        {
          "questions" : [
            {
              "globalN" : -1074,
              "question" : "You need to find every file that references `process_refund` across a large repo. Best built-in tool?",
              "options" : [
                {
                  "text" : "Grep — search file contents by pattern",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Read every file one by one",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Glob — match filenames",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Bash with no arguments",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Grep searches contents across the repo quickly — the right tool to locate references, far better than reading everything.",
              "correct" : "A",
              "scenario" : "Claude Code: Built-in Tools",
              "situation" : ""
            },
            {
              "globalN" : -1075,
              "question" : "You want to list all `*.test.ts` files in the project. Best tool?",
              "options" : [
                {
                  "text" : "Glob — match files by name pattern",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Grep — search contents",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Read — open a single file",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Edit — modify a file",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Glob finds files by filename pattern; Grep is for contents. Filenames → Glob.",
              "correct" : "A",
              "scenario" : "Claude Code: Built-in Tools",
              "situation" : ""
            },
            {
              "globalN" : -1076,
              "question" : "A targeted Edit keeps failing to apply cleanly to a file. Reasonable fallback?",
              "options" : [
                {
                  "text" : "Read the file, then Write the corrected version",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Give up on the change",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Delete the file and move on",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Run Grep repeatedly until it works",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "When Edit can't match/apply, reading the file and writing back the full corrected content is the standard fallback.",
              "correct" : "A",
              "scenario" : "Claude Code: Built-in Tools",
              "situation" : ""
            }
          ],
          "examKind" : "examMechanism",
          "domain" : "D2 · 18%",
          "title" : "Built-in Tools",
          "symbol" : "hammer.circle.fill",
          "id" : "l_cc_builtin",
          "cards" : [
            {
              "takeaway" : "Match the built-in tool to the intent — Grep for content, Glob for filenames.",
              "title" : "A Detective's Kit: Magnifier, Floor Plan, Notebook",
              "mapping" : "Grep searches file contents by pattern; Glob finds files by name pattern; Read opens a file; Edit changes part of it; Write creates/replaces; Bash runs commands. Pick the tool by intent — content vs filename vs read vs change.",
              "symbol" : "magnifyingglass",
              "analogy" : "A detective reaches for the right instrument: a magnifier to scan for a clue, the building's floor plan to see which rooms exist, reading a document fully, and a pen to amend it."
            },
            {
              "takeaway" : "Investigate incrementally; fall back to Read + Write when Edit won't apply.",
              "title" : "Follow One Clue at a Time",
              "mapping" : "Investigate incrementally: locate (Grep/Glob) → read only what's needed → act. Keep context lean. If a precise Edit can't apply cleanly, fall back to Read + Write the whole file.",
              "symbol" : "figure.walk.motion",
              "analogy" : "A good detective chases one lead to its end before opening ten more — and if a delicate correction won't stick, they rewrite the page cleanly."
            }
          ]
        },
        {
          "questions" : [
            {
              "globalN" : -1077,
              "question" : "Running Claude Code in a CI pipeline that needs machine-parseable output. Which flags?",
              "options" : [
                {
                  "text" : "`-p` with `--output-format json`",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "No flags — interactive mode in CI",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "`--chat` only",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "`--verbose` only",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "`-p`/`--print` runs headless; `--output-format json` gives structured output a pipeline can consume.",
              "correct" : "A",
              "scenario" : "Claude Code: CI/CD",
              "situation" : ""
            },
            {
              "globalN" : -1078,
              "question" : "Your CI code reviewer flags too many non-issues, and developers start ignoring it. Best fix?",
              "options" : [
                {
                  "text" : "Add explicit review criteria to the prompt to cut false positives",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Disable the reviewer entirely",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Make it comment on every line",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Switch to interactive mode",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Precision is what earns trust. Explicit criteria reduce false positives so the signal is believed and acted on.",
              "correct" : "A",
              "scenario" : "Claude Code: CI/CD",
              "situation" : ""
            },
            {
              "globalN" : -1079,
              "question" : "What does `--json-schema` do for the headless CLI?",
              "options" : [
                {
                  "text" : "Constrains the output to a defined JSON shape",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Speeds up the model",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Disables tools",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Switches to interactive mode",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "--json-schema enforces a structured output contract the pipeline can rely on.",
              "correct" : "A",
              "scenario" : "Claude Code: CI/CD",
              "situation" : ""
            }
          ],
          "examKind" : "examMechanism",
          "domain" : "D3 · 20%",
          "title" : "Headless CLI & CI/CD",
          "symbol" : "terminal.fill",
          "id" : "l_cc_cicd",
          "cards" : [
            {
              "takeaway" : "Use -p and --output-format json to run Claude Code headless in CI.",
              "title" : "The Robot on the Night Shift",
              "mapping" : "Claude Code runs non-interactively for CI with `-p` / `--print` (a headless prompt), and `--output-format json` so a pipeline can parse the result. `--json-schema` constrains that output to a defined shape.",
              "symbol" : "moon.stars.fill",
              "analogy" : "An interactive cashier serves one customer at a time; an automated kiosk runs unattended overnight, taking input and printing a receipt with no human present."
            },
            {
              "takeaway" : "Tune CI review prompts for precision — false positives erode trust.",
              "title" : "A Smoke Alarm That Cries at Toast",
              "mapping" : "In CI code review, design prompts with explicit review criteria to minimize false positives, so developers actually trust and act on the feedback.",
              "symbol" : "bell.slash.fill",
              "analogy" : "An alarm that goes off every time you make toast gets ignored — and then misses the real fire. Trust depends on precision."
            }
          ]
        }
      ],
      "kicker" : "Shape the tool to the work, not the work to the tool.",
      "title" : "Claude Code Mastery",
      "subtitle" : "Config & workflows — 20% of the exam, and the operator's craft",
      "colorIndex" : 3,
      "id" : "u_cc"
    },
    {
      "lessons" : [
        {
          "questions" : [
            {
              "globalN" : -1080,
              "question" : "When does extended thinking help the most?",
              "options" : [
                {
                  "text" : "Complex, multi-step reasoning, math, or planning tasks",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Simple lookups and one-word answers",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Reducing the size of the response",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Every task equally",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Thinking budget pays off where the problem genuinely requires working through steps; on trivial tasks it just adds latency and cost.",
              "correct" : "A",
              "scenario" : "Edge: Extended Thinking",
              "situation" : ""
            },
            {
              "globalN" : -1081,
              "question" : "An agent calls a tool, gets a surprising result, and needs to adapt. Why does interleaved thinking help?",
              "options" : [
                {
                  "text" : "It can reflect on the result before deciding the next tool call",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "It removes the need for tools",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "It makes the model answer without reasoning",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "It caches the tool output",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Interleaving reasoning between tool calls lets the model incorporate what it just learned and re-plan, rather than following a stale plan.",
              "correct" : "A",
              "scenario" : "Edge: Extended Thinking",
              "situation" : ""
            },
            {
              "globalN" : -1082,
              "question" : "Downside of forcing heavy extended thinking on a trivial task?",
              "options" : [
                {
                  "text" : "Wasted latency and cost for no accuracy gain",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "The model becomes unable to answer",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "It permanently degrades the model",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "It always improves the answer anyway",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "More thinking isn't free — on easy tasks it buys nothing and costs time and money. Match the thinking budget to task difficulty.",
              "correct" : "A",
              "scenario" : "Edge: Extended Thinking",
              "situation" : ""
            }
          ],
          "id" : "l_e_thinking",
          "examKind" : "expert",
          "title" : "Extended Thinking",
          "cards" : [
            {
              "takeaway" : "Give hard problems thinking room; don't pay for it on easy ones.",
              "title" : "Scratch Paper Before the Final Answer",
              "mapping" : "Extended thinking gives the model a dedicated reasoning budget to work through a problem before answering. It lifts accuracy on complex, multi-step tasks — and is wasted overhead on trivial ones.",
              "symbol" : "pencil.and.scribble",
              "analogy" : "A mathematician scribbles working on scratch paper before writing the clean answer. The scratch work is where the hard problem actually gets solved."
            },
            {
              "takeaway" : "Let the model think after each tool result, not only up front.",
              "title" : "Think Between the Moves",
              "mapping" : "Interleaved thinking lets the model reflect after each tool result before choosing the next call, so it can adapt to surprises instead of barreling down a pre-planned path.",
              "symbol" : "arrow.triangle.turn.up.right.diamond.fill",
              "analogy" : "A strong chess player reassesses after each move the opponent makes — not just once at the opening. New information changes the plan."
            }
          ],
          "symbol" : "brain.head.profile"
        },
        {
          "questions" : [
            {
              "globalN" : -1083,
              "question" : "Users need answers grounded in your internal docs, with verifiable sources. Best approach?",
              "options" : [
                {
                  "text" : "Retrieval (RAG) with citations",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Rely on the model's training knowledge",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "A longer system prompt listing facts from memory",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Raise the temperature for creativity",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Private, verifiable answers require pulling the actual documents into context and citing them — not trusting parametric memory.",
              "correct" : "A",
              "scenario" : "Edge: Retrieval",
              "situation" : ""
            },
            {
              "globalN" : -1084,
              "question" : "Your retrieval keeps missing the right passage because chunks lack surrounding context. Technique?",
              "options" : [
                {
                  "text" : "Contextual retrieval — prepend explanatory context to each chunk before indexing",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Delete the chunks",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Use a bigger model",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Disable retrieval",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Bare chunks lose the context needed to match a query. Contextual retrieval enriches each chunk so it's findable for the right questions.",
              "correct" : "A",
              "scenario" : "Edge: Retrieval",
              "situation" : ""
            },
            {
              "globalN" : -1085,
              "question" : "Primary benefit of citations in a RAG answer?",
              "options" : [
                {
                  "text" : "Verifiability — claims are attributed to sources, reducing hallucination",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Faster responses",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Lower token cost",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "It removes the need for retrieval",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Citations let a reader (or an automated check) trace each claim to its source, which both builds trust and discourages fabrication.",
              "correct" : "A",
              "scenario" : "Edge: Retrieval",
              "situation" : ""
            }
          ],
          "id" : "l_e_retrieval",
          "examKind" : "expert",
          "title" : "Retrieval & Citations",
          "cards" : [
            {
              "takeaway" : "Ground answers in retrieved sources; don't rely on memory for look-up-able facts.",
              "title" : "Open-Book, Not From Memory",
              "mapping" : "Retrieval (RAG) fetches the relevant documents into context so answers are grounded in real sources, rather than the model's fuzzy parametric memory. Essential for private, current, or factual data.",
              "symbol" : "books.vertical.fill",
              "analogy" : "For facts you can look up, an open-book exam beats reciting from memory — you quote the source instead of risking a misremembered detail."
            },
            {
              "takeaway" : "Cite sources for trust; add context to chunks so retrieval finds them.",
              "title" : "Show Your Footnotes",
              "mapping" : "Citations let the model attribute claims to specific source passages — verifiable and far less prone to hallucination. Contextual retrieval prepends explanatory context to each chunk so the right passage is actually found.",
              "symbol" : "text.quote",
              "analogy" : "A credible report cites where each claim came from, so a reader can verify it. And a good index entry carries enough surrounding context that you can actually find it."
            }
          ],
          "symbol" : "quote.opening"
        },
        {
          "questions" : [
            {
              "globalN" : -1086,
              "question" : "Critical business logic requires the agent to always call get_customer before process_refund. Most reliable way to guarantee it?",
              "options" : [
                {
                  "text" : "A programmatic precondition that blocks process_refund until a customer ID exists",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "A stronger instruction in the system prompt",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Few-shot examples showing the correct order",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "A routing classifier",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "When a specific tool sequence must be guaranteed, code-level enforcement gives deterministic guarantees that prompt-based approaches cannot. Prompts and examples reduce — but don't eliminate — the failure.",
              "correct" : "A",
              "scenario" : "Edge: Escalation & Oversight",
              "situation" : ""
            },
            {
              "globalN" : -1087,
              "question" : "For a high-stakes, irreversible action (issuing a large refund, deleting data), best practice?",
              "options" : [
                {
                  "text" : "Keep a human in the loop / require explicit confirmation",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Let the agent execute autonomously for speed",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Skip validation to reduce latency",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Trust the model's confidence score alone",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Autonomy should scale with reversibility. Irreversible, high-impact actions warrant a confirmation gate or human approval.",
              "correct" : "A",
              "scenario" : "Edge: Escalation & Oversight",
              "situation" : ""
            },
            {
              "globalN" : -1088,
              "question" : "When should a support agent escalate a case to a human?",
              "options" : [
                {
                  "text" : "On low confidence, out-of-policy requests, ambiguity, or high-stakes decisions",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Only when the user explicitly demands a human",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Never — full autonomy maximizes resolution rate",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "On every single request, to be safe",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Well-designed escalation triggers on the cases the agent shouldn't decide alone — calibrated to confidence, policy, ambiguity, and stakes — not on every case nor never.",
              "correct" : "A",
              "scenario" : "Edge: Escalation & Oversight",
              "situation" : ""
            }
          ],
          "examKind" : "examConcept",
          "domain" : "D5 · 15%",
          "title" : "Escalation & Oversight",
          "symbol" : "shield.lefthalf.filled",
          "id" : "l_e_guardrails",
          "cards" : [
            {
              "takeaway" : "Critical constraints belong in code, not just in the prompt.",
              "title" : "Lock the Door, Don't Just Post a Sign",
              "mapping" : "When a critical constraint must hold (a required tool sequence, an approval gate), enforce it deterministically in code — preconditions, token-binding, validation — not just by asking the model in the prompt. Prompts guide; code guarantees.",
              "symbol" : "lock.shield.fill",
              "analogy" : "A 'staff only' sign asks people not to enter; a locked door makes it impossible. For anything that truly matters, you fit the lock — you don't rely on everyone reading the sign."
            },
            {
              "takeaway" : "Escalate on low confidence, ambiguity, or high stakes — with a clean handoff.",
              "title" : "Know When to Phone a Friend",
              "mapping" : "Design escalation paths: route to a human on low confidence, out-of-policy requests, ambiguity, or high-stakes/irreversible actions. Use confidence calibration and structured handoffs so the human gets the context they need.",
              "symbol" : "person.fill.questionmark",
              "analogy" : "A good junior employee handles the routine confidently but knows exactly when a decision is above their pay grade — and escalates instead of guessing."
            }
          ]
        },
        {
          "questions" : [
            {
              "globalN" : -1089,
              "question" : "Your multi-agent system returns a wrong final answer and you can't tell which step failed. What was missing?",
              "options" : [
                {
                  "text" : "Tracing/logging of each step's inputs, tool calls, and outputs",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "A larger model",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "More tools",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "A longer system prompt",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Debugging a pipeline requires visibility into each step. Without traces, you're guessing where it broke.",
              "correct" : "A",
              "scenario" : "Edge: Observability",
              "situation" : ""
            },
            {
              "globalN" : -1090,
              "question" : "An agent occasionally gets stuck calling the same tool over and over. Best safeguard?",
              "options" : [
                {
                  "text" : "A step/iteration limit plus loop detection",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Removing all tools",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Hoping it resolves itself",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Increasing the temperature",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Hard limits and loop detection stop runaway behavior before it burns cost and time — a basic production safeguard.",
              "correct" : "A",
              "scenario" : "Edge: Observability",
              "situation" : ""
            },
            {
              "globalN" : -1091,
              "question" : "Best mindset when designing an agent for production?",
              "options" : [
                {
                  "text" : "Anticipate failure modes (loops, overflow, tool errors) and build limits and recovery",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Optimize only the happy path and ship",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Assume tools never fail",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Avoid logging to save storage",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Production reliability comes from designing for what goes wrong — limits, recovery, and observability — not just the successful demo path.",
              "correct" : "A",
              "scenario" : "Edge: Observability",
              "situation" : ""
            }
          ],
          "id" : "l_e_observability",
          "examKind" : "expert",
          "title" : "Observability",
          "cards" : [
            {
              "takeaway" : "If you can't trace it, you can't debug it.",
              "title" : "The Flight Recorder",
              "mapping" : "Log prompts, tool calls, and outputs as traces. Without that record, a wrong final answer in a multi-step system is an unsolvable mystery — you can't see which step derailed.",
              "symbol" : "airplane.circle.fill",
              "analogy" : "A black box records every input and decision, so after an incident you can replay exactly what happened and find where it went wrong."
            },
            {
              "takeaway" : "Design for the failure modes, not just the happy path.",
              "title" : "Know How It Breaks",
              "mapping" : "Common agent failures: infinite loops, context overflow, tool-call errors, hallucinated tool arguments, getting stuck. Add step/iteration limits, timeouts, monitoring, and recovery paths.",
              "symbol" : "exclamationmark.triangle.fill",
              "analogy" : "A seasoned engineer knows their machine's failure modes — where it overheats, stalls, or loops — and builds in cutoffs before it does."
            }
          ],
          "symbol" : "scope"
        },
        {
          "questions" : [
            {
              "globalN" : -1092,
              "question" : "In a multi-agent research report, one search subagent times out. Best handling?",
              "options" : [
                {
                  "text" : "Mark that section partial-coverage and synthesize the rest",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Abort the entire report",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Silently drop the section and pretend it's complete",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Retry forever until it succeeds",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Graceful degradation: report what you have, clearly annotate the gap, and don't let one failure sink the whole deliverable.",
              "correct" : "A",
              "scenario" : "Edge: Error Propagation",
              "situation" : ""
            },
            {
              "globalN" : -1093,
              "question" : "Which is a subagent error-handling anti-pattern?",
              "options" : [
                {
                  "text" : "Silently returning empty or fake data as if it succeeded",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Returning a structured error with a category",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Annotating partial coverage in the synthesis",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Escalating an unrecoverable failure",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Faking success hides failures until they cause downstream damage — the opposite of robust error propagation.",
              "correct" : "A",
              "scenario" : "Edge: Error Propagation",
              "situation" : ""
            },
            {
              "globalN" : -1094,
              "question" : "Why annotate the final synthesis with coverage (full vs partial)?",
              "options" : [
                {
                  "text" : "So consumers know which parts are complete and which are missing",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "To increase the token count",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "To hide which subagent failed",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "It has no real purpose",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Coverage annotations make the report's completeness transparent, so downstream decisions account for gaps.",
              "correct" : "A",
              "scenario" : "Edge: Error Propagation",
              "situation" : ""
            }
          ],
          "examKind" : "examConcept",
          "domain" : "D5 · 15%",
          "title" : "Error Propagation",
          "symbol" : "exclamationmark.arrow.triangle.2.circlepath",
          "id" : "l_e_errorprop",
          "cards" : [
            {
              "takeaway" : "Degrade gracefully — structured subagent errors + coverage annotations beat an all-or-nothing crash.",
              "title" : "One Stuck Courier Shouldn't Cancel the Report",
              "mapping" : "In multi-agent systems, a subagent failure should propagate as a structured error the coordinator handles gracefully, never crashing the run. Annotate the final synthesis with coverage (FULL vs PARTIAL) so consumers know what's missing.",
              "symbol" : "doc.badge.ellipsis",
              "analogy" : "If one field researcher's source times out, the editor still publishes — marking that section 'partial', not scrapping the entire report."
            },
            {
              "takeaway" : "Never fake success — surface failures with their source.",
              "title" : "Don't Pretend It Succeeded",
              "mapping" : "Error-handling anti-patterns: swallowing errors, returning fake/empty data as success, or letting one failure abort everything. Surface failures with attribution so the system can respond.",
              "symbol" : "eye.trianglebadge.exclamationmark.fill",
              "analogy" : "A courier who quietly drops a package and reports 'delivered' is far worse than one who reports the failure — you act on the lie too late."
            }
          ]
        },
        {
          "questions" : [
            {
              "globalN" : -1095,
              "question" : "Two credible sources give contradictory figures for a key metric. Best agent behavior?",
              "options" : [
                {
                  "text" : "Preserve both values with source attribution and let the coordinator reconcile",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Silently pick the one that seems most likely",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Average them without noting the conflict",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Drop the metric entirely",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Surfacing both values with attribution preserves information for the coordinator, which has the context to reconcile — guessing destroys it.",
              "correct" : "A",
              "scenario" : "Edge: Provenance",
              "situation" : ""
            },
            {
              "globalN" : -1096,
              "question" : "The \"attribution loss\" problem refers to...",
              "options" : [
                {
                  "text" : "Losing track of which source a claim came from as data passes between agents",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Running out of context window",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "A tool returning an error",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "The model forgetting its system prompt",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Attribution loss is when source provenance isn't carried through handoffs, so the final output can't cite its origins.",
              "correct" : "A",
              "scenario" : "Edge: Provenance",
              "situation" : ""
            },
            {
              "globalN" : -1097,
              "question" : "Why include dates alongside extracted figures?",
              "options" : [
                {
                  "text" : "So they're interpreted in the correct time context",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "To use more tokens",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Dates are never relevant",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "To force a specific model",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "A figure without its date can be badly misread; dates anchor the data to the right period.",
              "correct" : "A",
              "scenario" : "Edge: Provenance",
              "situation" : ""
            }
          ],
          "examKind" : "examConcept",
          "domain" : "D5 · 15%",
          "title" : "Provenance & Conflicts",
          "symbol" : "signature",
          "id" : "l_e_provenance",
          "cards" : [
            {
              "takeaway" : "Carry the source with the data — don't lose attribution across handoffs.",
              "title" : "Chain of Custody",
              "mapping" : "As data flows agent → agent, attach and preserve source attribution end-to-end. Otherwise the final report can't cite where a claim came from — the attribution-loss problem.",
              "symbol" : "link",
              "analogy" : "Evidence is worthless in court if you can't show where it came from. Pass it through many hands without labels and the source is lost forever."
            },
            {
              "takeaway" : "Preserve conflicts with attribution and dates — reconcile deliberately, don't guess.",
              "title" : "Two Witnesses Who Disagree",
              "mapping" : "On conflicting sources, preserve both values with attribution and let the coordinator reconcile deliberately. Include dates so figures are interpreted in the right time context.",
              "symbol" : "person.2.badge.gearshape.fill",
              "analogy" : "When two credible witnesses give different numbers, you don't silently pick one — you record both, with who said what and when."
            }
          ]
        }
      ],
      "kicker" : "Sweat the failure modes, not just the demo.",
      "title" : "Expert's Edge",
      "subtitle" : "The details that separate a builder from an architect",
      "colorIndex" : 4,
      "id" : "u_edge"
    },
    {
      "lessons" : [
        {
          "questions" : [
            {
              "globalN" : 1,
              "question" : "Which approach is most effective?",
              "options" : [
                {
                  "text" : "Apply credibility heuristics to pick the most likely correct number, finish analysis with that value, and add a footnote mentioning the discrepancy.",
                  "correct" : false,
                  "letter" : "A"
                },
                {
                  "text" : "Include both numbers in the analysis output without marking them as conflicting, letting the synthesis agent decide which to use based on broader context.",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Stop analysis and immediately escalate to the coordinator, asking it to decide which source is more authoritative before continuing.",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Complete analysis with both numbers, explicitly annotate the conflict with source attribution, and let the coordinator decide how to reconcile the data before passing to synthesis.",
                  "correct" : true,
                  "letter" : "D"
                }
              ],
              "explanation" : "This approach preserves separation of responsibilities: the analysis agent completes its core work without blocking, preserves both conflicting values with clear attribution, and correctly passes reconciliation to the coordinator, which has broader context.",
              "correct" : "D",
              "scenario" : "Multi-agent Research System",
              "situation" : "A document analysis agent discovers that two credible sources contain directly contradictory statistics for a key metric: a government report states 40% growth, while an industry analysis states 12%. Both sources look credible, and the discrepancy could materially affect the research conclusions. How should the document analysis agent handle this situation most effectively?"
            },
            {
              "globalN" : 2,
              "question" : "Which next step is most appropriate?",
              "options" : [
                {
                  "text" : "Each agent sends its results directly to the report-writing agent, bypassing the coordinator.",
                  "correct" : false,
                  "letter" : "A"
                },
                {
                  "text" : "The document analysis agent requests web-search results and merges them internally.",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "The coordinator passes both sets of results to the synthesis agent for a unified integration.",
                  "correct" : true,
                  "letter" : "C"
                },
                {
                  "text" : "The coordinator concatenates the raw outputs from both agents and returns them as the final result.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "In a coordinator–subagent architecture, the coordinator forwards both result sets to the synthesis agent for centralized integration, preserving control and ensuring high-quality merging.",
              "correct" : "C",
              "scenario" : "Multi-agent Research System",
              "situation" : "The web-search and document-analysis agents have completed their tasks and returned results to the coordinator. What is the next step for creating an integrated research report?"
            },
            {
              "globalN" : 3,
              "question" : "Which improvement is most effective?",
              "options" : [
                {
                  "text" : "Create a dedicated error-handling agent that monitors all failures via a shared queue and decides recovery actions, sending restart commands directly to subagents.",
                  "correct" : false,
                  "letter" : "A"
                },
                {
                  "text" : "Configure the subagent to always return partial results with a success status, embedding error details in metadata; the coordinator treats all responses as successful.",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Make the coordinator validate all documents before sending them to the subagent, rejecting documents that might cause failures.",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Implement local recovery in the subagent for transient failures and escalate to the coordinator only errors it cannot resolve, including attempted steps and partial results.",
                  "correct" : true,
                  "letter" : "D"
                }
              ],
              "explanation" : "Handle errors at the lowest level capable of resolving them. Local recovery reduces coordinator workload while still escalating truly unrecoverable issues with full context and partial progress.",
              "correct" : "D",
              "scenario" : "Multi-agent Research System",
              "situation" : "A document analysis subagent frequently fails when processing PDF files: some have corrupted sections that trigger parsing exceptions, others are password-protected, and sometimes the parsing library hangs on large files. Currently, any exception immediately terminates the subagent and returns an error to the coordinator, which must decide whether to retry, skip, or fail the whole task. This causes excessive coordinator involvement in routine error handling. What architectural improvement is most effective?"
            },
            {
              "globalN" : 4,
              "question" : "What is the most likely root cause?",
              "options" : [
                {
                  "text" : "The synthesis agent lacks instructions to detect coverage gaps.",
                  "correct" : false,
                  "letter" : "A"
                },
                {
                  "text" : "The document analysis agent filters out non-visual sources due to overly strict relevance criteria.",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "The coordinator’s task decomposition is too narrow, assigning subagents work that does not cover all relevant areas.",
                  "correct" : true,
                  "letter" : "C"
                },
                {
                  "text" : "The web-search agent’s queries are insufficient and should be broadened to cover more sectors.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "The coordinator decomposed a broad topic only into visual-art subtasks, missing music, literature, and film entirely. Since subagents executed their assignments correctly, the narrow decomposition is the obvious root cause.",
              "correct" : "C",
              "scenario" : "Multi-agent Research System",
              "situation" : "After running the system on “AI impact on creative industries,” you observe that every subagent completes successfully: the web-search agent finds relevant articles, the document analysis agent summarizes them correctly, and the synthesis agent produces coherent text. However, final reports cover only visual art and completely miss music, literature, and film. In the coordinator logs, you see it decomposed the topic into three subtasks: “AI in digital art,” “AI in graphic design,” and “AI in photography.” What is the most likely root cause?"
            },
            {
              "globalN" : 5,
              "question" : "Which error-propagation strategy is most effective?",
              "options" : [
                {
                  "text" : "Continue synthesis using only successful sources and produce an output without mentioning which data was unavailable.",
                  "correct" : false,
                  "letter" : "A"
                },
                {
                  "text" : "The synthesis subagent returns an error to the coordinator, triggering a full retry or task failure due to incomplete data.",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "The synthesis subagent asks the coordinator to retry timed-out sources with a longer timeout before starting synthesis.",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Structure the synthesis output with coverage annotations that indicate which conclusions are well-supported and where gaps exist due to unavailable sources.",
                  "correct" : true,
                  "letter" : "D"
                }
              ],
              "explanation" : "Coverage annotations implement graceful degradation with transparency, preserving value from completed work while propagating uncertainty to enable informed decisions about confidence.",
              "correct" : "D",
              "scenario" : "Multi-agent Research System",
              "situation" : "The web-search subagent returns results for only 3 of 5 requested source categories (competitor sites and industry reports succeed, but news archives and social feeds time out). The document analysis subagent successfully processes all provided documents. The synthesis subagent must produce a summary from mixed-quality upstream inputs. Which error-propagation strategy is most effective?"
            }
          ],
          "examKind" : "examConcept",
          "domain" : "Exam practice",
          "title" : "Drill 1",
          "symbol" : "target",
          "id" : "l_0_0",
          "cards" : [

          ]
        },
        {
          "questions" : [
            {
              "globalN" : 6,
              "question" : "Which approach is most effective?",
              "options" : [
                {
                  "text" : "Return an error with context to the coordinator agent, allowing it to decide how to proceed.",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Silently skip the corrupted document and continue processing the remaining files to avoid interrupting the workflow.",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Automatically retry parsing the document three times with exponential backoff before reporting a failure.",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Throw an exception that terminates the entire research workflow.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Returning an error with context to the coordinator is the most effective approach because it lets the coordinator make an informed decision—skip the file, try an alternative parsing method, or notify the user—while maintaining visibility into the failure.",
              "correct" : "A",
              "scenario" : "Multi-agent Research System",
              "situation" : "The document analysis subagent encounters a corrupted PDF file that it cannot parse. When designing the system’s error handling, what is the most effective way to handle this failure?"
            },
            {
              "globalN" : 7,
              "question" : "How should you fix the misrouting problem?",
              "options" : [
                {
                  "text" : "Add a pre-routing classifier that detects whether the user refers to uploaded files or web content before the coordinator decides on delegation.",
                  "correct" : false,
                  "letter" : "A"
                },
                {
                  "text" : "Rename the web-search tool to `extract_web_results` and update its description to “processes and returns information retrieved from web search and URLs.”",
                  "correct" : true,
                  "letter" : "B"
                },
                {
                  "text" : "Add few-shot examples to the coordinator prompt showing correct routing: “User uploads a quarterly report → document analysis agent” and “User asks about a web page → web-search agent.”",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Expand the document analysis tool description with usage examples like “Use for uploaded PDFs, Word docs, and spreadsheets,” leaving the web-search tool unchanged.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Renaming the web-search tool to `extract_web_results` and updating its description to explicitly reference web search and URLs directly removes the root cause by eliminating semantic overlap between the two tool names and descriptions. This makes each tool’s purpose unambiguous, enabling the coordinator to reliably distinguish document analysis from web search.",
              "correct" : "B",
              "scenario" : "Multi-agent Research System",
              "situation" : "Production logs show a persistent pattern: requests like “analyze the uploaded quarterly report” are routed to the web-search agent 45% of the time instead of the document analysis agent. Reviewing tool definitions, you find that the web-search agent has a tool `analyze_content` described as “analyzes content and extracts key information,” while the document analysis agent has a tool `analyze_document` described as “analyzes documents and extracts key information.” How should you fix the misrouting problem?"
            },
            {
              "globalN" : 8,
              "question" : "What is the main advantage of keeping the coordinator as the central hub?",
              "options" : [
                {
                  "text" : "The coordinator can observe all interactions, handle errors uniformly, and decide what information each subagent should receive.",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "The coordinator batches multiple requests to subagents, reducing total API calls and overall latency.",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Routing through the coordinator enables automatic retry logic that direct inter-agent calls cannot support.",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Subagents use isolated memory, and direct communication would require complex serialization that only the coordinator can perform.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "The coordinator pattern provides centralized visibility into all interactions, uniform error handling across the system, and fine-grained control over what information each subagent receives—these are the primary advantages of a star-shaped communication topology.",
              "correct" : "A",
              "scenario" : "Multi-agent Research System",
              "situation" : "A colleague proposes that the document analysis agent should send its results directly to the synthesis agent, bypassing the coordinator. What is the main advantage of keeping the coordinator as the central hub for all communication between subagents?"
            },
            {
              "globalN" : 9,
              "question" : "Which error-propagation approach best enables intelligent recovery?",
              "options" : [
                {
                  "text" : "Return structured error context to the coordinator including the failure type, the query executed, any partial results, and potential alternative approaches.",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Catch the timeout within the subagent and return an empty result set marked as successful.",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Implement automatic exponential-backoff retries inside the subagent, only returning a generic “search unavailable” status after exhausting retries.",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Propagate the timeout exception directly to the top-level handler, terminating the entire research workflow.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Returning structured error context—including failure type, executed query, partial results, and alternative approaches—gives the coordinator everything needed to make intelligent recovery decisions (e.g., retry with a modified query or continue with partial results). It preserves maximum context for informed coordination-level decision-making.",
              "correct" : "A",
              "scenario" : "Multi-agent Research System",
              "situation" : "The web-search subagent times out while researching a complex topic. You need to design how information about this failure is returned to the coordinator. Which error-propagation approach best enables intelligent recovery?"
            },
            {
              "globalN" : 10,
              "question" : "Which fix is most effective?",
              "options" : [
                {
                  "text" : "Replace `fetch_url` with a `load_document` tool that validates that URLs point to document formats.",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Remove `fetch_url` from the document analysis agent and route all URL fetching through the coordinator to the web-search agent.",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Implement filtering that blocks `fetch_url` calls to known search engine domains while allowing other URLs.",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Add instructions to the document analysis agent prompt that `fetch_url` should only be used to download document URLs, not to search.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Replacing a general-purpose tool with a document-specific tool that validates URLs against document formats fixes the root cause by constraining capability at the interface level. This follows the principle of least privilege, making undesired search behavior impossible rather than merely discouraged.",
              "correct" : "A",
              "scenario" : "Multi-agent Research System",
              "situation" : "In your system design, you gave the document analysis agent access to a general-purpose tool `fetch_url` so it could download documents by URL. Production logs show this agent now frequently downloads search engine results pages to perform ad hoc web search—behavior that should be routed through the web-search agent—causing inconsistent results. Which fix is most effective?"
            }
          ],
          "examKind" : "examConcept",
          "domain" : "Exam practice",
          "title" : "Drill 2",
          "symbol" : "target",
          "id" : "l_0_1",
          "cards" : [

          ]
        },
        {
          "questions" : [
            {
              "globalN" : 11,
              "question" : "What is the most effective way to address this?",
              "options" : [
                {
                  "text" : "Allow both agents to finish in parallel, then have the coordinator deduplicate overlapping results before passing them to the synthesis agent.",
                  "correct" : false,
                  "letter" : "A"
                },
                {
                  "text" : "The coordinator explicitly partitions the research space before delegating, assigning each agent distinct subtopics or source types.",
                  "correct" : true,
                  "letter" : "B"
                },
                {
                  "text" : "Implement a shared-state mechanism where agents log their current focus area so other agents can dynamically avoid duplication during execution.",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Switch to sequential execution where document analysis runs only after web search completes, using web-search results as context to avoid duplication.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Having the coordinator explicitly partition the research space before delegating is most effective because it addresses the root cause—unclear task boundaries—before any work begins. It preserves parallelism while preventing duplicated effort and wasted tokens.",
              "correct" : "B",
              "scenario" : "Multi-agent Research System",
              "situation" : "While researching a broad topic, you observe that the web-search agent and the document analysis agent investigate the same subtopics, leading to substantial duplication in their outputs. Token usage nearly doubles without a proportional increase in research breadth or depth. What is the most effective way to address this?"
            },
            {
              "globalN" : 12,
              "question" : "Which approach enables the best recovery decisions?",
              "options" : [
                {
                  "text" : "Aggregate the results into a single success-percentage metric (e.g., “67% source coverage”) with detailed logs available on demand.",
                  "correct" : false,
                  "letter" : "A"
                },
                {
                  "text" : "Report both “timeout” and “0 results” as failures requiring coordinator intervention.",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Retry transient failures internally and report only persistent errors.",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Distinguish access failures (timeout) that require a retry decision from valid empty results (“0 results”) that represent successful queries.",
                  "correct" : true,
                  "letter" : "D"
                }
              ],
              "explanation" : "A timeout (access failure) and “0 results” (valid empty result) are semantically different outcomes requiring different responses. Distinguishing them allows the coordinator to retry the patent database while accepting the industry reports “0 results” as a valid, informative finding.",
              "correct" : "D",
              "scenario" : "Multi-agent Research System",
              "situation" : "During research, the web-search subagent queries three source categories with different outcomes: academic databases return 15 relevant papers, industry reports return “0 results,” and patent databases return “Connection timeout.” When designing error propagation to the coordinator, which approach enables the best recovery decisions?"
            },
            {
              "globalN" : 13,
              "question" : "How should you restructure the aggregated input?",
              "options" : [
                {
                  "text" : "Summarize all subagent outputs to under 20K tokens before aggregation to keep content within the model’s reliable processing range.",
                  "correct" : false,
                  "letter" : "A"
                },
                {
                  "text" : "Stream subagent results to the synthesis agent incrementally, processing web-search results first to completion, then adding document analysis results.",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Place a key-findings summary at the start of the aggregated input and organize detailed results with explicit section headings for easier navigation.",
                  "correct" : true,
                  "letter" : "C"
                },
                {
                  "text" : "Implement rotation that alternates which subagent’s results appear first across research tasks to ensure both sources get equal top positioning over time.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Putting a key-findings summary at the start leverages primacy effects so critical information sits in the most reliably processed position. Adding explicit section headings throughout helps the model navigate and attend to mid-input content, directly mitigating the “lost in the middle” phenomenon.",
              "correct" : "C",
              "scenario" : "Multi-agent Research System",
              "situation" : "Production monitoring shows inconsistent synthesis quality. When aggregated results are ~75K tokens, the synthesis agent reliably cites information from the first 15K tokens (web-search headlines/snippets) and the last 10K tokens (document analysis conclusions), but often misses critical findings in the middle 50K tokens—even when they directly answer the research question. How should you restructure the aggregated input?"
            },
            {
              "globalN" : 14,
              "question" : "Which solution is most effective?",
              "options" : [
                {
                  "text" : "Modify upstream agents to return structured data (key facts, quotes, relevance scores) instead of verbose content and reasoning.",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Add an intermediate summarization agent that condenses findings before passing them to synthesis.",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Have the synthesis agent process findings in sequential batches, maintaining state between calls.",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Store findings in a vector database and give the synthesis agent search tools to query during its work.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Modifying upstream agents to return structured data fixes the root cause by reducing token volume at the source while preserving essential information. It avoids passing bulky page content and reasoning traces that inflate tokens without improving the synthesis step.",
              "correct" : "A",
              "scenario" : "Multi-agent Research System",
              "situation" : "In testing, the combined output of the web-search agent (85K tokens including page content) and the document analysis agent (70K tokens including chains of thought) totals 155K tokens, but the synthesis agent performs best with inputs under 50K tokens. Which solution is most effective?"
            },
            {
              "globalN" : 15,
              "question" : "Which approach is most effective?",
              "options" : [
                {
                  "text" : "Give the synthesis agent access to all web-search tools so it can handle any verification need directly without coordinator loops.",
                  "correct" : false,
                  "letter" : "A"
                },
                {
                  "text" : "Have the synthesis agent accumulate all verification needs and return them as a batch to the coordinator at the end, which then sends them all to the web-search agent at once.",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Have the web-search agent proactively cache extra context around each source during initial research in anticipation of synthesis needing verification.",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Give the synthesis agent a limited-scope `verify_fact` tool for simple checks, while routing complex verifications through the coordinator to the web-search agent.",
                  "correct" : true,
                  "letter" : "D"
                }
              ],
              "explanation" : "A limited-scope fact-verification tool lets the synthesis agent handle 85% of simple checks directly, eliminating most loops, while preserving the coordinator delegation path for the 15% of complex verifications. This applies least privilege while significantly reducing latency.",
              "correct" : "D",
              "scenario" : "Multi-agent Research System",
              "situation" : "In testing, you observe that the synthesis agent often needs to verify specific claims while merging results. Currently, when verification is needed, the synthesis agent returns control to the coordinator, which calls the web-search agent and then re-invokes synthesis with the results. This adds 2–3 extra loops per task and increases latency by 40%. Your assessment shows 85% of these verifications are simple fact checks (dates, names, stats) and 15% require deeper research. Which approach most effectively reduces overhead while preserving system reliability?"
            }
          ],
          "examKind" : "examConcept",
          "domain" : "Exam practice",
          "title" : "Drill 3",
          "symbol" : "target",
          "id" : "l_0_2",
          "cards" : [

          ]
        }
      ],
      "kicker" : "Think: a newsroom of specialists with one editor.",
      "title" : "Multi-agent Research System",
      "subtitle" : "15 exam questions · 3 drills",
      "colorIndex" : 6,
      "id" : "u_s0"
    },
    {
      "lessons" : [
        {
          "questions" : [
            {
              "globalN" : 16,
              "question" : "Which approach is most effective?",
              "options" : [
                {
                  "text" : "Add an “Output Format for Review” section to CLAUDE.md with examples of structured findings so Claude learns the expected format from project context.",
                  "correct" : false,
                  "letter" : "A"
                },
                {
                  "text" : "Use the CLI flags `--output-format json` and `--json-schema` to enforce structured findings, then parse the output to post inline comments via the GitHub API.",
                  "correct" : true,
                  "letter" : "B"
                },
                {
                  "text" : "Include explicit formatting instructions in the review prompt requiring each finding to follow a parseable template like `[FILE:path] [LINE:n] [SEVERITY:level] ...`.",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Keep narrative review format but add a summarization step that uses Claude to generate a structured JSON summary of findings.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Using `--output-format json` with `--json-schema` enforces structured output at the CLI level, guaranteeing well-formed JSON with the required fields (file path, line number, severity, suggested fix) that can be reliably parsed and posted as inline PR comments via the GitHub API. It leverages built-in CLI capabilities designed specifically for structured output.",
              "correct" : "B",
              "scenario" : "Claude Code for Continuous Integration",
              "situation" : "Your CI pipeline runs the Claude Code CLI (in `--print` mode) using CLAUDE.md to provide project context for code review, and developers generally find the reviews substantive. However, they report that integrating findings into the workflow is difficult—Claude outputs narrative paragraphs that must be manually copied into PR comments. The team wants to automatically post each finding as a separate inline PR comment at the relevant place in code, which requires structured data with file path, line number, severity level, and suggested fix. Which approach is most effective?"
            },
            {
              "globalN" : 17,
              "question" : "Which approach directly addresses the root cause?",
              "options" : [
                {
                  "text" : "Run a second independent instance of Claude Code to review the changes without access to the generator’s reasoning.",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Enable extended thinking mode for the generation stage to allow more thorough deliberation before producing suggestions.",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Add explicit self-review instructions to the generation prompt asking Claude to critique its own suggestions before finalizing output.",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Include full test files and documentation in prompt context so Claude better understands expected behavior during generation.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "A second independent Claude Code instance without access to the generator’s reasoning directly addresses the root cause by avoiding confirmation bias. This “fresh eyes” perspective mirrors human peer review, where another reviewer catches issues the author rationalized.",
              "correct" : "A",
              "scenario" : "Claude Code for Continuous Integration",
              "situation" : "Your team uses Claude Code for generating code suggestions, but you notice a pattern: non-obvious issues—performance optimizations that break edge cases, cleanups that unexpectedly change behavior—are only caught when another team member reviews the PR. Claude’s reasoning during generation shows it considered these cases but concluded its approach was correct. Which approach directly addresses the root cause of this self-check limitation?"
            },
            {
              "globalN" : 18,
              "question" : "What is the primary technical limitation?",
              "options" : [
                {
                  "text" : "Batch processing does not include correlation IDs to map outputs back to input requests.",
                  "correct" : false,
                  "letter" : "A"
                },
                {
                  "text" : "The asynchronous model cannot execute tools mid-request and return results for Claude to continue analysis.",
                  "correct" : true,
                  "letter" : "B"
                },
                {
                  "text" : "The Batch API does not support tool definitions in request parameters.",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "The batch processing latency of up to 24 hours is too slow for pull request feedback, although the workflow would otherwise function.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "A “fire-and-forget” asynchronous Batch API model has no mechanism to intercept a tool call during a request, execute the tool, and return results for Claude to continue analysis. This is fundamentally incompatible with iterative tool-calling workflows that require multiple tool request/response rounds within a single logical interaction.",
              "correct" : "B",
              "scenario" : "Claude Code for Continuous Integration",
              "situation" : "Your code review component is iterative: Claude analyzes the changed file, then may request related files (imports, base classes, tests) via tool calls to understand context before providing final feedback. Your application defines a tool that lets Claude request file contents; Claude calls the tool, gets results, and continues analysis. You’re evaluating batch processing to reduce API cost. What is the primary technical limitation when considering batch processing for this workflow?"
            },
            {
              "globalN" : 19,
              "question" : "Which combination is correct?",
              "options" : [
                {
                  "text" : "Use the Message Batches API for all three tasks to maximize 50% savings, configuring the pipeline to poll for batch completion.",
                  "correct" : false,
                  "letter" : "A"
                },
                {
                  "text" : "Use synchronous calls for PR style checks; use the Message Batches API for weekly security audits and nightly test generation.",
                  "correct" : true,
                  "letter" : "B"
                },
                {
                  "text" : "Use synchronous calls for all three tasks for consistent response times, relying on prompt caching to reduce costs across workloads.",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Use synchronous calls for PR style checks and nightly test generation; use the Message Batches API only for weekly security audits.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "PR style checks block developers and require immediate responses via synchronous calls, while weekly security audits and nightly test generation are scheduled tasks with flexible deadlines that can tolerate up to a 24-hour batch window—capturing 50% savings for both.",
              "correct" : "B",
              "scenario" : "Claude Code for Continuous Integration",
              "situation" : "Your CI/CD system runs three Claude-based analyses: (1) fast style checks on every PR that block merging until completion, (2) comprehensive weekly security audits of the entire codebase, and (3) nightly test-case generation for recently changed modules. The Message Batches API offers 50% savings but processing can take up to 24 hours. You want to optimize API cost while maintaining an acceptable developer experience. Which combination correctly matches each task to an API approach?"
            },
            {
              "globalN" : 20,
              "question" : "Which prompting technique is most reliable?",
              "options" : [
                {
                  "text" : "Further refine instructions with more explicit requirements for each part of the feedback format (location, issue, severity, proposed fix).",
                  "correct" : false,
                  "letter" : "A"
                },
                {
                  "text" : "Expand the context window to include more surrounding codebase so the model has enough information to propose concrete fixes.",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Implement a two-pass approach where one prompt identifies issues and a second generates fixes, allowing specialization.",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Add 3–4 few-shot examples showing the exact required format: identified issue, location in code, concrete fix suggestion.",
                  "correct" : true,
                  "letter" : "D"
                }
              ],
              "explanation" : "Few-shot examples are the most effective technique for achieving consistent output format when instructions alone produce variable results. Providing 3–4 examples that show the exact desired structure (issue, location, concrete fix) gives the model a concrete pattern to follow, which is more reliable than abstract instructions.",
              "correct" : "D",
              "scenario" : "Claude Code for Continuous Integration",
              "situation" : "Your automated reviews find real issues, but developers report the feedback is not actionable. Findings include phrases like “complex ticket routing logic” or “potential null pointer” without specifying what exactly to change. When you add detailed instructions like “always include concrete fix suggestions,” the model still produces inconsistent output—sometimes detailed, sometimes vague. Which prompting technique most reliably produces consistently actionable feedback?"
            }
          ],
          "examKind" : "examConcept",
          "domain" : "Exam practice",
          "title" : "Drill 1",
          "symbol" : "target",
          "id" : "l_1_0",
          "cards" : [

          ]
        },
        {
          "questions" : [
            {
              "globalN" : 21,
              "question" : "Which mode should use batch processing?",
              "options" : [
                {
                  "text" : "Only the pre-merge-commit hook.",
                  "correct" : false,
                  "letter" : "A"
                },
                {
                  "text" : "Only the deep analysis.",
                  "correct" : true,
                  "letter" : "B"
                },
                {
                  "text" : "Both modes.",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Neither mode.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Deep analysis is an ideal candidate for batch processing because it already runs overnight, tolerates delay, and uses a polling model before publishing results—matching the asynchronous, polling-based architecture of the Message Batches API while capturing 50% savings.",
              "correct" : "B",
              "scenario" : "Claude Code for Continuous Integration",
              "situation" : "Your CI pipeline includes two Claude-based code review modes: a pre-merge-commit hook that blocks PR merge until completion, and a “deep analysis” that runs overnight, polls for batch completion, and posts detailed suggestions to the PR. You want to reduce API cost using the Message Batches API, which offers 50% savings but requires polling and can take up to 24 hours. Which mode should use batch processing?"
            },
            {
              "globalN" : 22,
              "question" : "What change addresses the root cause?",
              "options" : [
                {
                  "text" : "Include `git blame` data so Claude can identify comments that predate recent code changes.",
                  "correct" : false,
                  "letter" : "A"
                },
                {
                  "text" : "Add few-shot examples of misleading comments to help the model recognize similar patterns in the codebase.",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Filter TODO, FIXME, and descriptive comment patterns before analysis to reduce noise.",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Specify explicit criteria: flag comments only when the behavior they claim contradicts the code’s actual behavior.",
                  "correct" : true,
                  "letter" : "D"
                }
              ],
              "explanation" : "Explicit criteria—flagging comments only when claimed behavior contradicts actual code behavior—directly addresses the root cause by replacing a vague instruction with a precise definition of what constitutes a problem. This reduces false positives on acceptable patterns and misses of truly misleading comments.",
              "correct" : "D",
              "scenario" : "Claude Code for Continuous Integration",
              "situation" : "Your automated review analyzes comments and docstrings. The current prompt instructs Claude to “check that comments are accurate and up to date.” Findings often flag acceptable patterns (TODO markers, simple descriptions) while missing comments describing behavior the code no longer implements. What change addresses the root cause of this inconsistent analysis?"
            },
            {
              "globalN" : 23,
              "question" : "Which approach best restores developer trust?",
              "options" : [
                {
                  "text" : "Temporarily disable high-false-positive categories (style, naming, documentation) and keep only high-precision categories while improving prompts.",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Keep all categories enabled but display confidence scores with each finding so developers can decide what to investigate.",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Keep all categories enabled and add few-shot examples to improve accuracy for each category over the next few weeks.",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Apply a uniform strictness reduction across all categories to bring the overall false-positive rate down.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Temporarily disabling high-false-positive categories immediately stops trust erosion by removing noisy findings that cause developers to dismiss everything, while preserving value from high-precision categories like security and correctness. It also creates space to improve prompts for problematic categories before re-enabling them.",
              "correct" : "A",
              "scenario" : "Claude Code for Continuous Integration",
              "situation" : "Your automated code review system shows inconsistent severity ratings—similar issues like null pointer risks are rated “critical” in some PRs but only “medium” in others. Developer surveys show growing distrust—many start dismissing findings without reading because “half are wrong.” High-false-positive categories erode trust in accurate categories. Which approach best restores developer trust while improving the system?"
            },
            {
              "globalN" : 24,
              "question" : "What change is most effective?",
              "options" : [
                {
                  "text" : "Include the existing test file in context so Claude can determine what scenarios are already covered.",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Reduce the requested number of suggestions from 10 to 5, assuming Claude prioritizes the most valuable cases first.",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Add instructions directing Claude to focus exclusively on edge cases and error conditions rather than success paths.",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Implement post-processing that filters suggestions whose descriptions match existing test names via keyword overlap.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Including the existing test file fixes the root cause of duplication: Claude can only avoid suggesting already-covered scenarios if it knows what tests already exist. This gives Claude the information needed to propose genuinely new, valuable tests.",
              "correct" : "A",
              "scenario" : "Claude Code for Continuous Integration",
              "situation" : "Your automated review generates test-case suggestions for each PR. Reviewing a PR that adds course completion tracking, Claude suggests 10 test cases, but developer feedback shows that 6 duplicate scenarios already covered by the existing test suite. What change most effectively reduces duplicate suggestions?"
            },
            {
              "globalN" : 25,
              "question" : "What is the most effective way to eliminate redundant feedback?",
              "options" : [
                {
                  "text" : "Run review only when the PR is created and in the final pre-merge state, skipping intermediate commits.",
                  "correct" : false,
                  "letter" : "A"
                },
                {
                  "text" : "Add a post-processing filter that removes findings that match previous ones by file paths and issue descriptions before posting comments.",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Restrict review scope to files changed in the most recent push, excluding files from earlier commits.",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Include previous review findings in context and instruct Claude to report only new or still-unresolved issues.",
                  "correct" : true,
                  "letter" : "D"
                }
              ],
              "explanation" : "Including prior review findings in context lets Claude distinguish new problems from those already addressed in recent commits. This preserves review thoroughness while using Claude’s reasoning to avoid redundant feedback on fixed code.",
              "correct" : "D",
              "scenario" : "Claude Code for Continuous Integration",
              "situation" : "After an initial automated review identifies 12 findings, a developer pushes new commits to address issues. Re-running review produces 8 findings, but developers report that 5 duplicate previous comments on code that was already fixed in the new commits. What is the most effective way to eliminate this redundant feedback while maintaining thoroughness?"
            }
          ],
          "examKind" : "examConcept",
          "domain" : "Exam practice",
          "title" : "Drill 2",
          "symbol" : "target",
          "id" : "l_1_1",
          "cards" : [

          ]
        },
        {
          "questions" : [
            {
              "globalN" : 26,
              "question" : "What is the correct approach?",
              "options" : [
                {
                  "text" : "Add a `--batch` flag: `claude --batch \"Analyze this pull request for security issues\"`.",
                  "correct" : false,
                  "letter" : "A"
                },
                {
                  "text" : "Add the `-p` flag: `claude -p \"Analyze this pull request for security issues\"`.",
                  "correct" : true,
                  "letter" : "B"
                },
                {
                  "text" : "Redirect stdin from `/dev/null`: `claude \"Analyze this pull request for security issues\" < /dev/null`.",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Set the environment variable `CLAUDE_HEADLESS=true` before running the command.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "The `-p` (or `--print`) flag is the documented way to run Claude Code non-interactively. It processes the prompt, prints the result to stdout, and exits without waiting for user input—ideal for CI/CD pipelines.",
              "correct" : "B",
              "scenario" : "Claude Code for Continuous Integration",
              "situation" : "Your pipeline script runs `claude \"Analyze this pull request for security issues\"`, but the job hangs indefinitely. Logs show Claude Code is waiting for interactive input. What is the correct approach to run Claude Code in an automated pipeline?"
            },
            {
              "globalN" : 27,
              "question" : "How should you restructure the review?",
              "options" : [
                {
                  "text" : "Run three independent full-PR review passes and flag only issues that appear in at least two of the three runs.",
                  "correct" : false,
                  "letter" : "A"
                },
                {
                  "text" : "Split into focused passes: review each file individually for local issues, then run a separate integration-oriented pass to examine cross-file data flows.",
                  "correct" : true,
                  "letter" : "B"
                },
                {
                  "text" : "Require developers to split large PRs into smaller submissions of 3–4 files before running automated review.",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Switch to a larger model with a bigger context window so it can pay sufficient attention to all 14 files in one pass.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Focused per-file passes address the root cause—attention dilution—by ensuring consistent depth and reliable local issue detection. A separate integration-oriented pass then covers cross-file concerns such as dependency and data-flow interactions.",
              "correct" : "B",
              "scenario" : "Claude Code for Continuous Integration",
              "situation" : "A pull request changes 14 files in an inventory tracking module. A single-pass review that analyzes all files together produces inconsistent results: detailed feedback on some files but shallow comments on others, missed obvious bugs, and contradictory feedback (a pattern is flagged in one file but identical code is approved in another file in the same PR). How should you restructure the review?"
            },
            {
              "globalN" : 28,
              "question" : "What change best addresses investigation time?",
              "options" : [
                {
                  "text" : "Require Claude to include its rationale and confidence estimate directly in each finding.",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Add a post-processor that analyzes finding patterns and automatically suppresses those that match historical false-positive signatures.",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Categorize findings as “blocking issues” vs “suggestions,” with different review requirements by level.",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Configure Claude to show only high-confidence findings, filtering uncertain flags before developers see them.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Including rationale and confidence directly in each finding reduces investigation time by letting developers quickly triage without opening each finding. It satisfies the “no filtering” constraint because all findings remain visible while accelerating developer decision-making.",
              "correct" : "A",
              "scenario" : "Claude Code for Continuous Integration",
              "situation" : "Your automated code review averages 15 findings per pull request, and developers report a 40% false-positive rate. The bottleneck is investigation time: developers must click into each finding to read Claude’s rationale before deciding whether to fix or dismiss it. Your CLAUDE.md already contains comprehensive rules for acceptable patterns, and stakeholders rejected any approach that filters findings before developers see them. What change best addresses investigation time?"
            },
            {
              "globalN" : 29,
              "question" : "Which approach best restores developer trust?",
              "options" : [
                {
                  "text" : "Temporarily disable high-false-positive categories (style, naming, documentation) and keep only high-precision categories while improving prompts.",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Keep all categories enabled but display confidence scores with each finding so developers can decide what to investigate.",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Keep all categories enabled and add few-shot examples to improve accuracy for each category over the next few weeks.",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Apply a uniform strictness reduction across all categories to bring the overall false-positive rate down.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Temporarily disabling high-false-positive categories immediately stops trust erosion by removing noisy findings that cause developers to dismiss everything, while preserving value from high-precision categories like security and correctness. It also creates space to improve prompts for problematic categories before re-enabling them.",
              "correct" : "A",
              "scenario" : "Claude Code for Continuous Integration",
              "situation" : "Analysis of your automated code review shows large differences in false-positive rates by finding category: security/correctness findings have 8% false positives, performance findings 18%, style/naming findings 52%, and documentation findings 48%. Developer surveys show growing distrust—many start dismissing findings without reading because “half are wrong.” High-false-positive categories erode trust in accurate categories. Which approach best restores developer trust while improving the system?"
            },
            {
              "globalN" : 30,
              "question" : "How should you evaluate this proposal?",
              "options" : [
                {
                  "text" : "Move both to batch processing with fallback to synchronous calls if batches take too long.",
                  "correct" : false,
                  "letter" : "A"
                },
                {
                  "text" : "Move both workflows to batch processing with status polling to verify completion.",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Use batch processing only for technical debt reports; keep synchronous calls for pre-merge checks.",
                  "correct" : true,
                  "letter" : "C"
                },
                {
                  "text" : "Keep synchronous calls for both workflows to avoid issues with batch result ordering.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Message Batches API processing can take up to 24 hours with no latency SLA, which is acceptable for overnight technical debt reports but unacceptable for blocking pre-merge checks where developers wait. This matches each workflow to the right API based on latency requirements.",
              "correct" : "C",
              "scenario" : "Claude Code for Continuous Integration",
              "situation" : "Your team wants to reduce API costs for automated analysis. Currently, synchronous Claude calls support two workflows: (1) a blocking pre-merge check that must complete before developers can merge, and (2) a technical debt report generated overnight for review the next morning. Your manager proposes moving both to the Message Batches API to save 50%. How should you evaluate this proposal?"
            }
          ],
          "examKind" : "examConcept",
          "domain" : "Exam practice",
          "title" : "Drill 3",
          "symbol" : "target",
          "id" : "l_1_2",
          "cards" : [

          ]
        }
      ],
      "kicker" : "Think: a tireless QA gate that never sleeps.",
      "title" : "Claude Code for Continuous Integration",
      "subtitle" : "15 exam questions · 3 drills",
      "colorIndex" : 7,
      "id" : "u_s1"
    },
    {
      "lessons" : [
        {
          "questions" : [
            {
              "globalN" : 31,
              "question" : "Which approach is most effective for the next iteration?",
              "options" : [
                {
                  "text" : "Write a JSON schema describing the expected output structure and validate Claude’s output against it after each iteration.",
                  "correct" : false,
                  "letter" : "A"
                },
                {
                  "text" : "Provide 2–3 concrete input-output examples showing the expected transformation for representative API responses.",
                  "correct" : true,
                  "letter" : "B"
                },
                {
                  "text" : "Rewrite requirements with more technical precision, specifying exact field mappings, nesting rules, and timestamp format strings.",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Ask Claude to explain its current understanding of the requirements to identify where interpretations diverge.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Concrete input-output examples remove ambiguity inherent in prose descriptions by showing Claude the exact expected transformation results. This directly addresses the root cause—misinterpretation of textual requirements—by providing unambiguous patterns for field nesting and timestamp formatting.",
              "correct" : "B",
              "scenario" : "Code Generation with Claude Code",
              "situation" : "You asked Claude Code to implement a function that transforms API responses into an internal normalized format. After two iterations, the output structure still doesn’t match expectations—some fields are nested differently and timestamps are formatted incorrectly. You described requirements in prose, but Claude interprets them differently each time."
            },
            {
              "globalN" : 32,
              "question" : "How should you approach this task?",
              "options" : [
                {
                  "text" : "Start in direct execution mode using incoming webhooks to match the existing one-way notification pattern.",
                  "correct" : false,
                  "letter" : "A"
                },
                {
                  "text" : "Switch to planning mode to explore integration options and architectural implications, then present a recommendation before implementation.",
                  "correct" : true,
                  "letter" : "B"
                },
                {
                  "text" : "Start in direct execution mode by scaffolding a Slack channel class using existing patterns, deferring the integration method decision.",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Start in direct execution mode using a bot-token approach to ensure delivery confirmation is possible.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Slack integration has multiple valid approaches with significantly different architectural implications, and requirements are ambiguous. Planning mode lets you evaluate trade-offs among webhooks, bot tokens, and Slack Apps and align on an approach before implementation.",
              "correct" : "B",
              "scenario" : "Code Generation with Claude Code",
              "situation" : "You need to add Slack as a new notification channel. The existing codebase has clear, established patterns for email, SMS, and push channels. However, Slack’s API offers fundamentally different integration approaches—incoming webhooks (simple, one-way), bot tokens (support delivery confirmation and programmatic control), or Slack Apps (two-way events, requires workspace approval). Your task says “add Slack support” without specifying integration method or requiring advanced features like delivery tracking."
            },
            {
              "globalN" : 33,
              "question" : "Which restructuring approach is most effective?",
              "options" : [
                {
                  "text" : "Move all guidance into separate Skills files organized by workflow type, leaving only a brief project description in CLAUDE.md.",
                  "correct" : false,
                  "letter" : "A"
                },
                {
                  "text" : "Keep everything in CLAUDE.md but use `@import` syntax to organize into separately maintained files by category.",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Split CLAUDE.md into files under `.claude/rules/` with path-bound glob patterns so each rule loads only for the relevant file types.",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Keep universal standards in CLAUDE.md and create Skills for workflow-specific guidance (PR review, deploy, migrations) with trigger keywords.",
                  "correct" : true,
                  "letter" : "D"
                }
              ],
              "explanation" : "CLAUDE.md content loads in every session, ensuring coding standards and testing conventions always apply, while Skills are invoked on demand when Claude detects trigger keywords—ideal for workflow-specific guidance like PR review, deployment, and migrations.",
              "correct" : "D",
              "scenario" : "Code Generation with Claude Code",
              "situation" : "Your CLAUDE.md file has grown to 400+ lines containing coding standards, testing conventions, a detailed PR review checklist, deployment instructions, and database migration procedures. You want Claude to always follow coding standards and testing conventions, but apply PR review, deploy, and migration guidance only when doing those tasks."
            },
            {
              "globalN" : 34,
              "question" : "Which approach should you choose?",
              "options" : [
                {
                  "text" : "Switch to planning mode to explore the codebase, understand dependencies, and design the implementation approach before making changes.",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Start in direct execution mode and switch to planning only after encountering unexpected complexity during implementation.",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Start in direct execution mode and make incremental changes, letting implementation reveal natural service boundaries.",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Use direct execution with detailed upfront instructions that specify each service structure.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Planning mode is the right strategy for complex architectural restructuring like splitting a monolith: it allows safe exploration and informed decisions about boundaries before committing to potentially expensive changes across many files.",
              "correct" : "A",
              "scenario" : "Code Generation with Claude Code",
              "situation" : "You’re tasked with restructuring your team’s monolithic application into microservices. This impacts changes across dozens of files and requires decisions about service boundaries and module dependencies."
            },
            {
              "globalN" : 35,
              "question" : "How do you most effectively fix this while keeping full analysis capabilities?",
              "options" : [
                {
                  "text" : "Add `context: fork` in the skill frontmatter to run the analysis in an isolated subagent context.",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Add `model: haiku` in frontmatter to use a faster, cheaper model for analysis.",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Split the skill into three smaller skills, each producing less output.",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Add instructions to the skill to compress all results into a short summary before displaying them.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "`context: fork` runs the analysis in an isolated subagent context so the large output does not pollute the main session’s context window and Claude does not lose track of the original task. It preserves full analysis capability while keeping the main session responsive.",
              "correct" : "A",
              "scenario" : "Code Generation with Claude Code",
              "situation" : "Your team created a `/analyze-codebase` skill that performs deep code analysis—dependency scanning, test coverage counts, and code quality metrics. After running the command, team members report Claude becomes less responsive in the session and loses the context of the original task."
            }
          ],
          "examKind" : "examConcept",
          "domain" : "Exam practice",
          "title" : "Drill 1",
          "symbol" : "target",
          "id" : "l_2_0",
          "cards" : [

          ]
        },
        {
          "questions" : [
            {
              "globalN" : 36,
              "question" : "What do you recommend?",
              "options" : [
                {
                  "text" : "Create a personal version under `~/.claude/skills/` with a different name, e.g., `/my-commit`.",
                  "correct" : false,
                  "letter" : "A"
                },
                {
                  "text" : "Add conditional logic based on username in the project skill frontmatter.",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Create a personal version at `~/.claude/skills/commit/SKILL.md` with the same name.",
                  "correct" : true,
                  "letter" : "C"
                },
                {
                  "text" : "Set `override: true` in the personal skill frontmatter to prioritize it over the project version.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Personal skills take precedence over project skills with the same name. A personal skill at `~/.claude/skills/commit/SKILL.md` will override the team’s project skill, allowing the developer to customize their workflow while maintaining the familiar `/commit` command name for their personal use. This approach is better than option A because it preserves the original command name, improving the developer’s workflow without affecting teammates.",
              "correct" : "C",
              "scenario" : "Code Generation with Claude Code",
              "situation" : "Your team uses a `/commit` skill in `.claude/skills/commit/SKILL.md`. A developer wants to customize it for their personal workflow (different commit message format, extra checks) without affecting teammates."
            },
            {
              "globalN" : 37,
              "question" : "What is the most likely cause and fix?",
              "options" : [
                {
                  "text" : "The guidance lives in the original developers’ user-level `~/.claude/CLAUDE.md` files, not in the project `.claude/CLAUDE.md`. Move the instruction to the project-level file so all team members receive it.",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "The new developer’s `~/.claude/CLAUDE.md` contains conflicting instructions overriding project settings; they should delete the conflicting section.",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Claude Code learns per-user preferences over time; the new developer must repeat the requirement until Claude “remembers” it.",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Claude Code caches CLAUDE.md after first read; original developers use cached versions. Everyone should clear the Claude Code cache.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "If the guidance was added only to the original developers’ user-level configs and not to the project-level `.claude/CLAUDE.md`, new team members won’t receive it. Moving it to the project-level configuration ensures all current and future team members automatically get the guidance.",
              "correct" : "A",
              "scenario" : "Code Generation with Claude Code",
              "situation" : "Your team has used Claude Code for months. Recently, three developers report Claude follows the guidance “always include comprehensive error handling,” but a fourth developer who just joined says Claude does not follow it. All four work in the same repo and have up-to-date code."
            },
            {
              "globalN" : 38,
              "question" : "Which configuration approach is most effective?",
              "options" : [
                {
                  "text" : "Add endpoint examples and pattern documentation to the project CLAUDE.md so they are always available.",
                  "correct" : false,
                  "letter" : "A"
                },
                {
                  "text" : "Manually reference endpoint examples in every generation request by copying code into the prompt.",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Configure path-specific rules in `.claude/rules/api/` that include endpoint examples and activate when working in the API directory.",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Create a skill that references the endpoint examples and contains pattern-following instructions, invoked on demand via a slash command.",
                  "correct" : true,
                  "letter" : "D"
                }
              ],
              "explanation" : "A skill invoked on demand loads the example context only when generating new endpoints, not during unrelated tasks like debugging or review. This keeps the main context clean while preserving high-quality generation when needed.",
              "correct" : "D",
              "scenario" : "Code Generation with Claude Code",
              "situation" : "You find that including 2–3 full endpoint implementation examples as context significantly improves consistency when generating new API endpoints. However, this context is useful only when creating new endpoints—not when debugging, reviewing code, or other work in the API directory."
            },
            {
              "globalN" : 39,
              "question" : "Which configuration approach fixes all three problems?",
              "options" : [
                {
                  "text" : "Use positional parameters `$1` and `$2` instead of `$ARGUMENTS` to enforce specific inputs, include explicit schema file references via `@` syntax for context control, and add a frontmatter description warning about destructive operations.",
                  "correct" : false,
                  "letter" : "A"
                },
                {
                  "text" : "Add `argument-hint` in frontmatter to request required parameters, use `context: fork` to isolate execution, and restrict `allowed-tools` to file-write operations.",
                  "correct" : true,
                  "letter" : "B"
                },
                {
                  "text" : "Split into `/migration-create` and `/migration-apply` skills, add validation instructions to request migration name if missing, and use different `allowed-tools` scopes for each.",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Add validation instructions in the skill SKILL.md to ensure `$ARGUMENTS` is a valid name, add prompts to ignore prior conversation context, and list prohibited operations to avoid.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "This uses three separate configuration features to address each problem: `argument-hint` improves argument entry and reduces missing arguments, `context: fork` prevents context leakage from prior conversations, and `allowed-tools` constrains the skill to safe file-writing operations, preventing destructive actions.",
              "correct" : "B",
              "scenario" : "Code Generation with Claude Code",
              "situation" : "Your team created a `/migration` skill that generates database migration files. It takes the migration name via `$ARGUMENTS`. In production you observe three issues: (1) developers often run the skill without arguments, causing poorly named files, (2) the skill sometimes uses database schema details from unrelated prior conversations, and (3) a developer accidentally ran destructive test cleanup when the skill had broad tool access."
            },
            {
              "globalN" : 40,
              "question" : "What is the most supported way to ensure Claude automatically applies the correct conventions when generating code?",
              "options" : [
                {
                  "text" : "Put all conventions in the root CLAUDE.md under headings for each area and rely on Claude to infer which section applies.",
                  "correct" : false,
                  "letter" : "A"
                },
                {
                  "text" : "Create skills in `.claude/skills/` for each code type, embedding conventions in each SKILL.md.",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Place a separate CLAUDE.md file in each subdirectory containing conventions for that area.",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Create rule files under `.claude/rules/` with YAML frontmatter specifying glob patterns to conditionally apply conventions based on file paths.",
                  "correct" : true,
                  "letter" : "D"
                }
              ],
              "explanation" : "`.claude/rules/` files with YAML frontmatter and glob patterns (e.g., `**/*.test.tsx`, `src/api/**/*.ts`) enable deterministic, path-based convention application regardless of directory structure. This is the most supported approach for cross-cutting patterns like distributed test files.",
              "correct" : "D",
              "scenario" : "Code Generation with Claude Code",
              "situation" : "Your codebase contains areas with different coding conventions: React components use functional style with hooks, API handlers use async/await with specific error handling, and database models follow the repository pattern. Test files are distributed across the codebase next to the code under test (e.g., `Button.test.tsx` next to `Button.tsx`), and you want all tests to follow the same conventions regardless of location."
            }
          ],
          "examKind" : "examConcept",
          "domain" : "Exam practice",
          "title" : "Drill 2",
          "symbol" : "target",
          "id" : "l_2_1",
          "cards" : [

          ]
        },
        {
          "questions" : [
            {
              "globalN" : 41,
              "question" : "Where should you create the command file?",
              "options" : [
                {
                  "text" : "In `~/.claude/commands/` in each developer’s home directory.",
                  "correct" : false,
                  "letter" : "A"
                },
                {
                  "text" : "In the project repository under `.claude/commands/`.",
                  "correct" : true,
                  "letter" : "B"
                },
                {
                  "text" : "In `.claude/config.json` as an array of commands.",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "In the root project CLAUDE.md.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Putting custom slash commands under `.claude/commands/` inside the project repository ensures they are version-controlled and automatically available to every developer who clones or updates the repo. This is the intended location for project-level custom commands in Claude Code.",
              "correct" : "B",
              "scenario" : "Code Generation with Claude Code",
              "situation" : "You want to create a custom slash command `/review` that runs your team’s standard code review checklist. It should be available to every developer when they clone or update the repository."
            },
            {
              "globalN" : 42,
              "question" : "What approach does Claude Code support to organize project-level instructions into focused topical modules?",
              "options" : [
                {
                  "text" : "Define a `.claude/config.yaml` mapping file patterns to specific sections inside CLAUDE.md.",
                  "correct" : false,
                  "letter" : "A"
                },
                {
                  "text" : "Create separate Markdown files in `.claude/rules/`, each covering one topic (e.g., `testing.md`, `api-conventions.md`).",
                  "correct" : true,
                  "letter" : "B"
                },
                {
                  "text" : "Split instructions into README.md files in relevant subdirectories that Claude automatically loads as instructions.",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Create multiple files named CLAUDE.md at different levels of the directory tree, each overriding parent instructions.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Claude Code supports a `.claude/rules/` directory where you can create separate Markdown files for topical guidance (e.g., `testing.md`, `api-conventions.md`), allowing teams to organize large instruction sets into focused, maintainable modules.",
              "correct" : "B",
              "scenario" : "Code Generation with Claude Code",
              "situation" : "Your team’s CLAUDE.md grew beyond 500 lines mixing TypeScript conventions, testing guidance, API patterns, and deployment procedures. Developers find it hard to locate and update the right sections."
            },
            {
              "globalN" : 43,
              "question" : "How should you most effectively configure this skill?",
              "options" : [
                {
                  "text" : "Use the `!` prefix in the skill to run exploration logic as a bash subprocess.",
                  "correct" : false,
                  "letter" : "A"
                },
                {
                  "text" : "Add `context: fork` in the skill frontmatter.",
                  "correct" : true,
                  "letter" : "B"
                },
                {
                  "text" : "Split into two skills—`/explore-start` and `/explore-end`—to mark boundaries when exploration context should be discarded.",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Create the skill in `~/.claude/skills/` instead of `.claude/skills/`.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "`context: fork` runs the skill in an isolated subagent context so exploration discussions do not pollute the main conversation history. This prevents rejected approaches and brainstorming context from influencing subsequent implementation work.",
              "correct" : "B",
              "scenario" : "Code Generation with Claude Code",
              "situation" : "You create a custom skill `/explore-alternatives` that your team uses to brainstorm and evaluate implementation approaches before choosing one. Developers report that after running the skill, subsequent Claude responses are influenced by the alternatives discussion—sometimes referencing rejected approaches or retaining exploration context that interferes with actual implementation."
            },
            {
              "globalN" : 44,
              "question" : "Which configuration approach is most effective?",
              "options" : [
                {
                  "text" : "Have each developer add the server in user scope via `claude mcp add --scope user`.",
                  "correct" : false,
                  "letter" : "A"
                },
                {
                  "text" : "Create an MCP server wrapper that reads tokens from a `.env` file and proxies GitHub API calls, then add the wrapper to the project `.mcp.json`.",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Add the server to the project `.mcp.json` using environment variable substitution (`${GITHUB_TOKEN}`) for auth and document the required environment variable in the project README.",
                  "correct" : true,
                  "letter" : "C"
                },
                {
                  "text" : "Configure the server in project scope with a placeholder token, then tell developers to override it in their local config.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "A project `.mcp.json` with environment variable substitution is idiomatic: it provides a single version-controlled source of truth for MCP configuration while letting each developer supply credentials via environment variables. Documenting the variable makes onboarding easy without committing secrets.",
              "correct" : "C",
              "scenario" : "Code Generation with Claude Code",
              "situation" : "Your team wants to add a GitHub MCP server for searching PRs and checking CI status via Claude Code. Each of six developers has their own personal GitHub access token. You want consistent tooling across the team without committing credentials to version control."
            },
            {
              "globalN" : 45,
              "question" : "Which approach is most effective to complete the task while maintaining implementation consistency?",
              "options" : [
                {
                  "text" : "Use an Explore subagent for Phase 1 to isolate verbose discovery output and return a summary, then continue Phases 2–3 in the main conversation.",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Do all phases in the main conversation, periodically using `/compact` to reduce context usage while moving through files.",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Switch to headless mode with `--continue`, passing explicit context summaries between batch calls to maintain continuity.",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Define the error-handling pattern in CLAUDE.md, then process files in batches across multiple sessions relying on the shared memory file for consistency.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "An Explore subagent isolates the verbose discovery output in a separate context and returns only a concise summary to the main conversation. This preserves the main context window for the collaborative design and consistent implementation phases where retained context is most valuable.",
              "correct" : "A",
              "scenario" : "Code Generation with Claude Code",
              "situation" : "You’re adding error-handling wrappers around external API calls across a 120-file codebase. The work has three phases: (1) discover all call sites and patterns, (2) collaboratively design the error-handling approach, and (3) implement wrappers consistently. In Phase 1, Claude generates large output listing hundreds of call sites with context, quickly filling the context window before discovery finishes."
            }
          ],
          "examKind" : "examConcept",
          "domain" : "Exam practice",
          "title" : "Drill 3",
          "symbol" : "target",
          "id" : "l_2_2",
          "cards" : [

          ]
        }
      ],
      "kicker" : "Think: a pair-programmer who reads the whole house first.",
      "title" : "Code Generation with Claude Code",
      "subtitle" : "15 exam questions · 3 drills",
      "colorIndex" : 8,
      "id" : "u_s2"
    },
    {
      "lessons" : [
        {
          "questions" : [
            {
              "globalN" : 46,
              "question" : "What should you check first?",
              "options" : [
                {
                  "text" : "Implement a preprocessing classifier to detect order-related requests and route them directly to `lookup_order`.",
                  "correct" : false,
                  "letter" : "A"
                },
                {
                  "text" : "Reduce the number of tools available to the agent to simplify choice.",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Add few-shot examples to the system prompt covering all possible order request patterns to improve tool selection.",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Check the tool descriptions to ensure they clearly differentiate each tool’s purpose.",
                  "correct" : true,
                  "letter" : "D"
                }
              ],
              "explanation" : "Tool descriptions are the primary input the model uses to decide which tool to call. When an agent consistently picks the wrong tool, the first diagnostic step is to verify that tool descriptions clearly separate each tool’s purpose and usage boundaries.",
              "correct" : "D",
              "scenario" : "Customer Support Agent",
              "situation" : "While testing, you notice the agent often calls `get_customer` when users ask about order status, even though `lookup_order` would be more appropriate. What should you check first to address this problem?"
            },
            {
              "globalN" : 47,
              "question" : "What approach is most effective?",
              "options" : [
                {
                  "text" : "Implement a preprocessing layer that uses a separate model call to decompose multi-issue messages into separate requests, handle each independently, and merge results.",
                  "correct" : false,
                  "letter" : "A"
                },
                {
                  "text" : "Combine related tools into fewer universal tools.",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Add few-shot examples to the prompt demonstrating correct reasoning and tool sequencing for multi-issue requests.",
                  "correct" : true,
                  "letter" : "C"
                },
                {
                  "text" : "Implement response validation that detects incomplete answers and automatically reprompts the agent to resolve missed issues.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Few-shot examples that demonstrate correct reasoning and tool sequencing for multi-issue requests are most effective because the agent already performs well on single issues—what it needs is guidance on the pattern for decomposing and routing multiple issues and keeping parameters separated.",
              "correct" : "C",
              "scenario" : "Customer Support Agent",
              "situation" : "Your agent handles single-issue requests with 94% accuracy (e.g., “I need a refund for order #1234”). But when customers include multiple issues in one message (e.g., “I need a refund for order #1234 and also want to update the shipping address for order #5678”), tool selection accuracy drops to 58%. The agent usually solves only one issue or mixes parameters across requests. What approach most effectively improves reliability for multi-issue requests?"
            },
            {
              "globalN" : 48,
              "question" : "What change is most effective?",
              "options" : [
                {
                  "text" : "Add explicit verification checkpoints between stages, requiring the agent to record progress after resolving each issue before moving to the next.",
                  "correct" : false,
                  "letter" : "A"
                },
                {
                  "text" : "Reduce the number of tools by combining `get_customer`, `lookup_order`, and billing-related tools into a single `investigate_issue` tool.",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Decompose the request into separate issues, then investigate each in parallel using shared customer context before synthesizing a final resolution.",
                  "correct" : true,
                  "letter" : "C"
                },
                {
                  "text" : "Add few-shot examples to the system prompt demonstrating ideal tool-call sequences for various multi-faceted billing scenarios.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Decomposing into separate issues and investigating in parallel with shared customer context fixes both key problems: it eliminates redundant data retrieval by reusing shared context across issues and reduces total tool-call loops by parallelizing investigation before synthesizing a single resolution.",
              "correct" : "C",
              "scenario" : "Customer Support Agent",
              "situation" : "Production logs show that for simple requests like “refund for order #1234,” your agent resolves the issue in 3–4 tool calls with 91% success. But for complex requests like “I was billed twice, my discount didn’t apply, and I want to cancel,” the agent averages 12+ tool calls with only 54% success—often investigating issues sequentially and fetching redundant customer data for each. What change most effectively improves handling of complex requests?"
            },
            {
              "globalN" : 49,
              "question" : "What is the most effective way to improve escalation calibration?",
              "options" : [
                {
                  "text" : "Require the agent to self-rate confidence on a 1–10 scale before each response and automatically route to humans when confidence drops below a threshold.",
                  "correct" : false,
                  "letter" : "A"
                },
                {
                  "text" : "Deploy a separate classifier model trained on historical tickets to predict which requests need escalation before the main agent starts processing.",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Add explicit escalation criteria to the system prompt with few-shot examples showing when to escalate versus resolve autonomously.",
                  "correct" : true,
                  "letter" : "C"
                },
                {
                  "text" : "Implement sentiment analysis to determine customer frustration level and automatically escalate past a negative sentiment threshold.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Explicit escalation criteria with few-shot examples directly address the root cause—unclear decision boundaries between simple and complex cases. It’s the most proportional, effective first intervention that teaches the agent when to escalate and when to resolve autonomously without extra infrastructure.",
              "correct" : "C",
              "scenario" : "Customer Support Agent",
              "situation" : "Your agent achieves 55% first-contact resolution, well below the 80% target. Logs show it escalates simple cases (standard replacements for damaged goods with photo proof) while trying to handle complex situations requiring policy exceptions autonomously. What is the most effective way to improve escalation calibration?"
            },
            {
              "globalN" : 50,
              "question" : "Which situation is most justified for escalation?",
              "options" : [
                {
                  "text" : "A customer wants to cancel an order shipped yesterday and arriving tomorrow. The agent should escalate because the customer might change their mind after receiving the package.",
                  "correct" : false,
                  "letter" : "A"
                },
                {
                  "text" : "A customer claims they didn’t receive an order, but tracking shows it was delivered and signed for at their address three days ago. The agent should escalate because presenting contradictory evidence could harm the customer relationship.",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "A customer requests competitor price matching. Your policies allow price adjustments for price drops on your own site within 14 days, but say nothing about competitor prices. The agent should escalate for policy interpretation.",
                  "correct" : true,
                  "letter" : "C"
                },
                {
                  "text" : "A customer message contains both a billing question and a product return. The agent should escalate so a human can coordinate both issues in one interaction.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "This is a genuine policy gap: company rules cover price drops on your own site but do not address competitor price matching. The agent must not invent policy and should escalate for human judgment on how to interpret or extend existing rules.",
              "correct" : "C",
              "scenario" : "Customer Support Agent",
              "situation" : "After calling `get_customer` and `lookup_order`, the agent has all available system data but still faces uncertainty. Which situation is the most justified trigger for calling `escalate_to_human`?"
            }
          ],
          "examKind" : "examConcept",
          "domain" : "Exam practice",
          "title" : "Drill 1",
          "symbol" : "target",
          "id" : "l_3_0",
          "cards" : [

          ]
        },
        {
          "questions" : [
            {
              "globalN" : 51,
              "question" : "What change is most effective?",
              "options" : [
                {
                  "text" : "Add few-shot examples showing that the agent always calls `get_customer` first, even when customers voluntarily provide order details.",
                  "correct" : false,
                  "letter" : "A"
                },
                {
                  "text" : "Implement a routing classifier that analyzes each request and enables only a subset of tools appropriate for that request type.",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Add a programmatic precondition that blocks `lookup_order` and `process_refund` until `get_customer` returns a verified customer identifier.",
                  "correct" : true,
                  "letter" : "C"
                },
                {
                  "text" : "Strengthen the system prompt stating that customer verification via `get_customer` is mandatory before any order operations.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "A programmatic precondition provides a deterministic guarantee that required sequencing is followed. It’s the most effective approach because it eliminates the possibility of skipping verification, regardless of LLM behavior.",
              "correct" : "C",
              "scenario" : "Customer Support Agent",
              "situation" : "Production logs show that in 12% of cases your agent skips `get_customer` and calls `lookup_order` directly using only the customer-provided name, sometimes leading to misidentified accounts and incorrect refunds. What change most effectively fixes this reliability problem?"
            },
            {
              "globalN" : 52,
              "question" : "What approach is most effective?",
              "options" : [
                {
                  "text" : "Add a self-critique stage where the agent evaluates a draft response for completeness—ensuring it resolves the customer’s issue, includes relevant context, and anticipates follow-up questions.",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Add a confirmation stage where the agent asks “Does this fully resolve your issue?” before closing, allowing customers to request additional information if needed.",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Upgrade the model from Haiku to Sonnet for complex cases, routing based on a defined complexity metric.",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Implement few-shot examples in the system prompt showing complete explanations for five common complex case types, demonstrating how to include policy context, timelines, and next steps.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "A self-critique stage (the evaluator-optimizer pattern) directly addresses inconsistent explanation completeness by forcing the agent to assess its own draft against concrete criteria—such as policy context, timelines, and next steps—before presenting it. This catches case-specific gaps without human oversight.",
              "correct" : "A",
              "scenario" : "Customer Support Agent",
              "situation" : "Production metrics show that when resolving complex billing disputes or multi-order returns, customer satisfaction scores are 15% lower than for simple cases—even when the resolution is technically correct. Root-cause analysis shows the agent provides accurate solutions but inconsistently explains rationale: sometimes omitting relevant policy details, sometimes missing timeline info or next steps. The specific context gaps vary case by case. You want to improve solution quality without adding human oversight. What approach is most effective?"
            },
            {
              "globalN" : 53,
              "question" : "What is the most effective way to reduce loops?",
              "options" : [
                {
                  "text" : "Implement speculative execution that automatically calls likely-needed tools in parallel with any requested tool and returns all results regardless of what was requested.",
                  "correct" : false,
                  "letter" : "A"
                },
                {
                  "text" : "Increase `max_tokens` to give Claude more room to plan and naturally combine tool requests.",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Create composite tools like `get_customer_with_orders` that bundle common lookup combinations into single calls.",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Instruct Claude in the prompt to bundle tool requests into one turn and return all results together before the next API call.",
                  "correct" : true,
                  "letter" : "D"
                }
              ],
              "explanation" : "Prompting Claude to bundle related tool requests into a single turn leverages its native ability to request multiple tools at once. It directly fixes the sequential-call pattern with minimal architectural change.",
              "correct" : "D",
              "scenario" : "Customer Support Agent",
              "situation" : "Production metrics show your agent averages 4+ API loops per resolution. Analysis reveals Claude often requests `get_customer` and `lookup_order` in separate sequential turns even when both are needed initially. What is the most effective way to reduce the number of loops?"
            },
            {
              "globalN" : 54,
              "question" : "What fix is most effective?",
              "options" : [
                {
                  "text" : "Increase the summarization threshold from 70% to 85% so conversations have more room before summarization triggers.",
                  "correct" : false,
                  "letter" : "A"
                },
                {
                  "text" : "Store full conversation history in external storage and implement retrieval when the agent detects references like “as I mentioned.”",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Extract transactional facts (amounts, dates, order numbers) into a persistent “case facts” block included in every prompt outside the summarized history.",
                  "correct" : true,
                  "letter" : "C"
                },
                {
                  "text" : "Revise the summarization prompt to explicitly preserve all numbers, percentages, dates, and customer-stated expectations verbatim.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Summarization inherently loses precise details. Extracting transactional facts into a structured “case facts” block outside the summarized history preserves critical information so it’s reliably available in every prompt regardless of how many turns have been summarized.",
              "correct" : "C",
              "scenario" : "Customer Support Agent",
              "situation" : "Production logs show a pattern: customers reference specific amounts (e.g., “the 15% discount I mentioned”), but the agent responds with incorrect values. Investigation shows these details were mentioned 20+ turns ago and condensed into vague summaries like “promotional pricing was discussed.” What fix is most effective?"
            },
            {
              "globalN" : 55,
              "question" : "How should you address this?",
              "options" : [
                {
                  "text" : "Implement a confidence scoring system that acts autonomously above 85% confidence and requests clarification below the threshold.",
                  "correct" : false,
                  "letter" : "A"
                },
                {
                  "text" : "Instruct Claude to request an additional identifier (email, phone, or order number) when `get_customer` returns multiple matches before taking any customer-specific action.",
                  "correct" : true,
                  "letter" : "B"
                },
                {
                  "text" : "Modify `get_customer` to return only a single most-likely match based on a ranking algorithm, eliminating ambiguity.",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Add few-shot examples to the prompt demonstrating correct reasoning and tool sequencing for ambiguous matches.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Asking the user for an additional identifier is the most reliable way to resolve ambiguity because the user has definitive knowledge of their identity. One extra conversational turn is a small price to pay to eliminate a 15% error rate caused by choosing the wrong account.",
              "correct" : "B",
              "scenario" : "Customer Support Agent",
              "situation" : "Your `get_customer` tool returns all matches when searching by name. Currently, when there are multiple results, Claude picks the customer with the most recent order, but production data shows this selects the wrong account 15% of the time for ambiguous matches. How should you address this?"
            }
          ],
          "examKind" : "examConcept",
          "domain" : "Exam practice",
          "title" : "Drill 2",
          "symbol" : "target",
          "id" : "l_3_1",
          "cards" : [

          ]
        },
        {
          "questions" : [
            {
              "globalN" : 56,
              "question" : "What is the most likely root cause?",
              "options" : [
                {
                  "text" : "The system prompt contains keyword-sensitive instructions that steer behavior based on terms like “account,” creating unintended tool-selection patterns.",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "The model’s base training creates associations between “account” terminology and customer-related operations that override tool descriptions.",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "The model needs more training data on multi-concept messages and should be fine-tuned on examples containing both account and order terminology.",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Tool descriptions need additional negative examples specifying when NOT to use each tool to prevent this keyword-induced confusion.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "The systematic keyword-driven pattern (78% vs 93%) strongly indicates explicit routing logic in the system prompt reacting to the word “account” and steering the agent toward customer-related tools. Since tool descriptions are already clear, the discrepancy points to prompt-level instructions creating unintended behavioral steering.",
              "correct" : "A",
              "scenario" : "Customer Support Agent",
              "situation" : "Production logs show a consistent pattern: when customers include the word “account” in their message (e.g., “I want to check my account for an order I made yesterday”), the agent calls `get_customer` first 78% of the time. When customers phrase similar requests without “account” (e.g., “I want to check an order I made yesterday”), it calls `lookup_order` first 93% of the time. Tool descriptions are clear and unambiguous. What is the most likely root cause of this discrepancy?"
            },
            {
              "globalN" : 57,
              "question" : "What is the most effective first step?",
              "options" : [
                {
                  "text" : "Implement a routing layer that analyzes user input before each turn and preselects the correct tool based on detected keywords and ID patterns.",
                  "correct" : false,
                  "letter" : "A"
                },
                {
                  "text" : "Combine both tools into a single `lookup_entity` that accepts any identifier and internally decides which backend to query.",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Add few-shot examples to the system prompt demonstrating correct tool selection patterns, with 5–8 examples routing order-related queries to `lookup_order`.",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Expand each tool’s description to include input formats, example queries, edge cases, and boundaries explaining when to use it versus similar tools.",
                  "correct" : true,
                  "letter" : "D"
                }
              ],
              "explanation" : "Expanding tool descriptions with input formats, example queries, edge cases, and clear boundaries directly fixes the root cause—minimal descriptions that don’t give the LLM enough information to distinguish similar tools. It’s a low-effort, high-impact first step that improves the primary mechanism the LLM uses for tool selection.",
              "correct" : "D",
              "scenario" : "Customer Support Agent",
              "situation" : "Production logs show the agent often calls `get_customer` when users ask about orders (e.g., “check my order #12345”) instead of calling `lookup_order`. Both tools have minimal descriptions (“Gets customer information” / “Gets order details”) and accept similar-looking identifier formats. What is the most effective first step to improve tool selection reliability?"
            },
            {
              "globalN" : 58,
              "question" : "What determines this decision?",
              "options" : [
                {
                  "text" : "Check the `stop_reason` field in Claude’s response—continue if it is `tool_use` and stop if it is `end_turn`.",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Parse Claude’s text for phrases like “I’m done” or “Can I help with anything else?”—natural language signals indicate task completion.",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Set a maximum iteration count (e.g., 10 calls) and stop when reached, regardless of whether Claude indicates more work is needed.",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Check whether the response contains assistant text content—if Claude generated explanatory text, the loop should terminate.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "`stop_reason` is Claude’s explicit structured signal for loop control: `tool_use` indicates Claude wants to run a tool and receive results back, while `end_turn` indicates Claude has completed its response and the loop should end.",
              "correct" : "A",
              "scenario" : "Customer Support Agent",
              "situation" : "You are implementing the agent loop for your support agent. After each Claude API call, you must decide whether to continue the loop (run requested tools and call Claude again) or stop (present the final answer to the customer). What determines this decision?"
            },
            {
              "globalN" : 59,
              "question" : "Which approach is most maintainable?",
              "options" : [
                {
                  "text" : "Use a PostToolUse hook to intercept tool outputs and apply formatting transformations before the agent processes them.",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Modify tools you control to return human-readable formats and create wrappers for third-party tools.",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Create a `normalize_data` tool that the agent calls after every data retrieval to transform values.",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Add detailed format documentation to the system prompt explaining each tool’s data conventions.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "A PostToolUse hook provides a centralized, deterministic point to intercept and normalize all tool outputs—including third-party MCP server data—before the agent processes them. It’s more maintainable because transformations live in code and apply uniformly, rather than relying on LLM interpretation.",
              "correct" : "A",
              "scenario" : "Customer Support Agent",
              "situation" : "Production logs show the agent misinterprets outputs from your MCP tools: Unix timestamps from `get_customer`, ISO 8601 dates from `lookup_order`, and numeric status codes (1=pending, 2=shipped). Some tools are third-party MCP servers you cannot modify. Which approach to data format normalization is most maintainable?"
            },
            {
              "globalN" : 60,
              "question" : "Which approach is most effective?",
              "options" : [
                {
                  "text" : "Add explicit “use when” and “don’t use when” guidance in each tool description covering ambiguous cases.",
                  "correct" : false,
                  "letter" : "A"
                },
                {
                  "text" : "Add examples grouped by tool—all `get_customer` scenarios together, then all `lookup_order` scenarios.",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Add 4–6 examples targeted at ambiguous scenarios, each with rationale for why one tool was chosen over plausible alternatives.",
                  "correct" : true,
                  "letter" : "C"
                },
                {
                  "text" : "Add 10–15 examples of clear, unambiguous requests demonstrating correct tool choice for typical scenarios for each tool.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Targeting few-shot examples at the specific ambiguous scenarios where errors occur, with explicit rationale for why one tool is preferable to alternatives, teaches the model the comparative decision process needed for edge cases. This is more effective than generic examples or declarative rules.",
              "correct" : "C",
              "scenario" : "Customer Support Agent",
              "situation" : "Production logs show the agent sometimes chooses `get_customer` when `lookup_order` would be more appropriate, especially for ambiguous queries like “I need help with my recent purchase.” You decide to add few-shot examples to the system prompt to improve tool selection. Which approach most effectively addresses the problem?"
            }
          ],
          "examKind" : "examConcept",
          "domain" : "Exam practice",
          "title" : "Drill 3",
          "symbol" : "target",
          "id" : "l_3_2",
          "cards" : [

          ]
        }
      ],
      "kicker" : "Think: a concierge who knows when to escalate.",
      "title" : "Customer Support Agent",
      "subtitle" : "15 exam questions · 3 drills",
      "colorIndex" : 9,
      "id" : "u_s3"
    },
    {
      "lessons" : [
        {
          "questions" : [
            {
              "globalN" : 101,
              "question" : "Which change is most effective?",
              "options" : [
                {
                  "text" : "Add a programmatic precondition that blocks `lookup_order` and `process_refund` until an ID is obtained from `get_customer`",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Improve the system prompt",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Add few-shot examples",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Implement a routing classifier",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "When critical business logic requires a specific tool sequence, software provides **deterministic guarantees** that prompt-based approaches (B, C) cannot. D addresses availability, not tool ordering.",
              "correct" : "A",
              "scenario" : "Worked Examples",
              "situation" : "[Customer Support Agent] Data shows that in 12% of cases the agent skips `get_customer` and calls `lookup_order` using only the customer’s name, which leads to incorrect refunds."
            },
            {
              "globalN" : 102,
              "question" : "What is the first step?",
              "options" : [
                {
                  "text" : "Few-shot examples",
                  "correct" : false,
                  "letter" : "A"
                },
                {
                  "text" : "Expand each tool’s description with input formats, examples, and boundaries",
                  "correct" : true,
                  "letter" : "B"
                },
                {
                  "text" : "Add a routing layer",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Merge the tools",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Tool descriptions are the model’s primary selection mechanism. This is the lowest-effort, highest-impact fix. A adds tokens without addressing the root cause. C is overengineering. D requires more effort than justified.",
              "correct" : "B",
              "scenario" : "Worked Examples",
              "situation" : "[Customer Support Agent] The agent often calls `get_customer` instead of `lookup_order` for order-related questions. Tool descriptions are minimal and similar."
            },
            {
              "globalN" : 103,
              "question" : "How do you improve calibration?",
              "options" : [
                {
                  "text" : "Add explicit escalation criteria with few-shot examples",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Self-rated confidence (1–10) with automatic escalation",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "A separate classifier trained on historical data",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Sentiment analysis",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "It directly addresses the root cause—unclear decision boundaries. B is unreliable (the model can be confidently wrong). C is overengineering. D solves a different problem (mood != complexity).",
              "correct" : "A",
              "scenario" : "Worked Examples",
              "situation" : "[Customer Support Agent] The agent resolves only 55% of issues with a target of 80%. It escalates simple cases and tries to handle complex policy exceptions autonomously."
            },
            {
              "globalN" : 104,
              "question" : "Where should you create the command file?",
              "options" : [
                {
                  "text" : "`.claude/commands/` in the project repository",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "`~/.claude/commands/`",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Root `CLAUDE.md`",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "`.claude/config.json`",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Project commands stored in `.claude/commands/` are version-controlled and automatically available to everyone. B is for personal commands. C is for instructions, not command definitions. D does not exist.",
              "correct" : "A",
              "scenario" : "Worked Examples",
              "situation" : "[Code Generation with Claude Code] You need a custom `/review` command for standard code review that is available to the whole team when they clone the repository."
            },
            {
              "globalN" : 105,
              "question" : "What approach should you use?",
              "options" : [
                {
                  "text" : "Planning mode: explore the codebase, understand dependencies, design an approach",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Direct execution incrementally",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Direct execution with detailed up-front instructions",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Direct execution and switch to planning when it gets hard",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Planning mode is designed for large changes, multiple possible approaches, and architectural decisions. B risks expensive rework. C assumes you already know the structure. D is reactive.",
              "correct" : "A",
              "scenario" : "Worked Examples",
              "situation" : "[Code Generation with Claude Code] You need to restructure a monolith into microservices (dozens of files, service-boundary decisions)."
            }
          ],
          "examKind" : "examConcept",
          "domain" : "Exam practice",
          "title" : "Drill 1",
          "symbol" : "target",
          "id" : "l_4_0",
          "cards" : [

          ]
        },
        {
          "questions" : [
            {
              "globalN" : 106,
              "question" : "What approach should you use?",
              "options" : [
                {
                  "text" : "`.claude/rules/` files with YAML frontmatter and glob patterns",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Put everything in the root CLAUDE.md",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Skills in `.claude/skills/`",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "CLAUDE.md in every directory",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "`.claude/rules/` with glob patterns (e.g., `**/*.test.tsx`) enables automatic convention application based on file paths—ideal for tests spread across the codebase. B relies on model inference. C is manual/on-demand. D does not work well when relevant files are in many directories.",
              "correct" : "A",
              "scenario" : "Worked Examples",
              "situation" : "[Code Generation with Claude Code] A codebase has different conventions across areas (React, API, database). Tests are co-located with code. You want conventions to be applied automatically."
            },
            {
              "globalN" : 107,
              "question" : "What’s the cause?",
              "options" : [
                {
                  "text" : "The synthesis agent does not detect gaps",
                  "correct" : false,
                  "letter" : "A"
                },
                {
                  "text" : "The coordinator decomposed the task too narrowly",
                  "correct" : true,
                  "letter" : "B"
                },
                {
                  "text" : "The web search agent does not search thoroughly enough",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "The document analysis agent filters out non-visual sources",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "The logs show the coordinator decomposed “creative industries” only into visual subtopics, completely missing music, literature, and film. Subagents executed correctly—the issue is what they were assigned.",
              "correct" : "B",
              "scenario" : "Worked Examples",
              "situation" : "[Multi-agent Research System] The system researches “AI impact on creative industries,” but reports cover only visual art. The coordinator decomposed the topic into: “AI in digital art,” “AI in graphic design,” “AI in photography.”"
            },
            {
              "globalN" : 108,
              "question" : "Which error propagation approach best enables intelligent recovery?",
              "options" : [
                {
                  "text" : "Return structured error context to the coordinator: failure type, query, partial results, and alternatives",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Implement automatic retries with exponential backoff inside the subagent, then return a generic “search unavailable” status",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Catch the timeout inside the subagent and return an empty result set marked as success",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Propagate the timeout exception to a top-level handler that terminates the whole workflow",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Structured error context gives the coordinator what it needs to decide whether to retry with a modified query, try an alternative approach, or continue with partial results. B hides context behind a generic status. C masks failure as success. D aborts the entire workflow unnecessarily.",
              "correct" : "A",
              "scenario" : "Worked Examples",
              "situation" : "[Multi-agent Research System] A web-search subagent times out while researching a complex topic. You need to design how error information is passed back to the coordinator."
            },
            {
              "globalN" : 109,
              "question" : "How do you reduce overhead while maintaining reliability?",
              "options" : [
                {
                  "text" : "Give the synthesis agent a limited `verify_fact` tool for simple checks, and continue routing complex verification through the coordinator",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Accumulate all verification needs into a batch and return them to the coordinator at the end",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Give the synthesis agent full access to all web-search tools",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Proactively cache additional context around each source",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "This applies the principle of least privilege: the synthesis agent gets exactly what it needs for the 85% common case (simple fact checks) while preserving the coordinator-mediated path for complex investigations. B introduces blocking dependencies (later synthesis steps may depend on earlier verified facts). C breaks separation of responsibilities. D relies on speculative caching that cannot reliably predict needs.",
              "correct" : "A",
              "scenario" : "Worked Examples",
              "situation" : "[Multi-agent Research System] The synthesis agent often needs to verify specific claims while merging results. Currently, when verification is needed, the synthesis agent hands control back to the coordinator, which calls the web-search agent and then re-runs synthesis with the new results. This adds 2–3 extra round trips per task and increases latency by 40%. Your assessment shows that 85% of these checks are simple fact checks (dates, names, statistics), while 15% require deeper investigation."
            },
            {
              "globalN" : 110,
              "question" : "What is the correct approach?",
              "options" : [
                {
                  "text" : "Use the `-p` flag: `claude -p \"Analyze this pull request for security issues\"`",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Set `CLAUDE_HEADLESS=true`",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Redirect stdin from `/dev/null`",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Use `--batch`",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "`-p` (or `--print`) is the documented way to run Claude Code in non-interactive mode. It processes the prompt, prints to stdout, and exits. The other options are either non-existent features or Unix workarounds.",
              "correct" : "A",
              "scenario" : "Worked Examples",
              "situation" : "[Claude Code for CI] A pipeline runs `claude \"Analyze this pull request for security issues\"`, but hangs waiting for interactive input."
            }
          ],
          "examKind" : "examConcept",
          "domain" : "Exam practice",
          "title" : "Drill 2",
          "symbol" : "target",
          "id" : "l_4_1",
          "cards" : [

          ]
        },
        {
          "questions" : [
            {
              "globalN" : 111,
              "question" : "How should you evaluate this proposal?",
              "options" : [
                {
                  "text" : "Use batch processing only for tech-debt reports; keep real-time calls for pre-merge checks",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Move both workflows to batch processing and poll for completion",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Keep real-time calls for both to avoid ordering issues in batch results",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Move both to batch processing with a fallback to real time if a batch takes too long",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "The Message Batches API saves 50%, but processing time can be up to 24 hours with no guaranteed latency SLA. That makes it unsuitable for blocking pre-merge checks where developers are waiting, but ideal for overnight batch workloads like tech-debt reports.",
              "correct" : "A",
              "scenario" : "Worked Examples",
              "situation" : "[Claude Code for CI] The team wants to reduce API cost for automated analysis. Claude currently serves two workflows in real time: (1) a blocking pre-merge check that must complete before developers can merge a PR, and (2) a tech-debt report generated overnight for morning review. A manager proposes moving both to the Message Batches API to save 50%."
            },
            {
              "globalN" : 112,
              "question" : "How should you restructure the review?",
              "options" : [
                {
                  "text" : "Split into focused passes: analyze each file individually for local issues, then run a separate integration pass for cross-file data flows",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Require developers to split large PRs into submissions of 3–4 files",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Switch to a higher-tier model with a larger context window to review all 14 files in one pass",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Run three independent full-PR review passes and report only issues found in at least two runs",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Focused passes directly address the root cause—attention dilution when processing many files at once. Per-file analysis ensures consistent depth, and a separate integration pass catches cross-file issues. B shifts burden to developers without improving the system. C is a misconception: larger context does not fix attention quality. D suppresses real bugs by requiring consensus across inconsistent detections.",
              "correct" : "A",
              "scenario" : "Worked Examples",
              "situation" : "[Multi-file Code Review] A pull request changes 14 files in an inventory tracking module. A single-pass review of all files produces inconsistent results: detailed comments for some files but superficial ones for others, missed obvious bugs, and contradictory feedback (a pattern is flagged as problematic in one file but approved in identical code in another file)."
            }
          ],
          "examKind" : "examConcept",
          "domain" : "Exam practice",
          "title" : "Drill 3",
          "symbol" : "target",
          "id" : "l_4_2",
          "cards" : [

          ]
        }
      ],
      "kicker" : "Read the reasoning, not just the answer.",
      "title" : "Worked Examples",
      "subtitle" : "12 exam questions · 3 drills",
      "colorIndex" : 10,
      "id" : "u_s4"
    },
    {
      "lessons" : [
        {
          "questions" : [
            {
              "globalN" : 61,
              "question" : "What is the most reliable approach?",
              "options" : [
                {
                  "text" : "Add server-side validation that permits `dry_run=false` only when a `dry_run=true` call with identical parameters occurred within the past 60 seconds.",
                  "correct" : false,
                  "letter" : "A"
                },
                {
                  "text" : "Annotate the tool as requiring confirmation and configure the orchestration layer to prompt the user for approval before forwarding any calls to annotated tools.",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Add detailed instructions and few-shot examples to the tool description requiring the agent to always call with `dry_run=true` first and wait for user confirmation before calling again.",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Replace with two tools: `preview_remove_member` returns impact details and a single-use confirmation token; `execute_remove_member` requires that token, binding execution to the preview.",
                  "correct" : true,
                  "letter" : "D"
                }
              ],
              "explanation" : "The two-tool token-binding approach makes it architecturally impossible to execute without a prior preview—the execute tool literally requires a token that only the preview tool can generate. This is the only approach that enforces the constraint at the code level rather than relying on LLM compliance with instructions (C), timing heuristics (A), or orchestration infrastructure (B).",
              "correct" : "D",
              "scenario" : "Conversational AI Architecture Patterns",
              "situation" : "Your `remove_team_member` tool uses a `dry_run: boolean` parameter for previewing impacts before execution. Production monitoring shows the agent bypasses the preview step by calling with `dry_run=false` directly. You need to ensure every removal is preceded by a preview that the user explicitly confirms."
            },
            {
              "globalN" : 62,
              "question" : "How should you modify the tool's error handling?",
              "options" : [
                {
                  "text" : "Add few-shot examples to your system prompt demonstrating how to distinguish network errors from syntax errors.",
                  "correct" : false,
                  "letter" : "A"
                },
                {
                  "text" : "Apply exponential backoff retry logic to all errors uniformly.",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Implement automatic retry with backoff for network timeouts inside the tool; return syntax errors immediately with parameter validation details.",
                  "correct" : true,
                  "letter" : "C"
                },
                {
                  "text" : "Return all errors with a `retryable` boolean flag and error type details.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Handling retries at the tool level for transient errors is the correct abstraction boundary—the tool has definitive knowledge of the error type and can implement deterministic retry logic without relying on the agent to interpret a flag (D) or follow prompt-level instructions (A). Uniform backoff (B) wastes time on syntax errors that will never succeed.",
              "correct" : "C",
              "scenario" : "Conversational AI Architecture Patterns",
              "situation" : "Production monitoring shows your `search_catalog` tool fails 12% of the time: 8% are network timeouts that succeed when retried, and 4% are query syntax errors that never succeed regardless of retries. Currently both error types are returned identically, causing wasted retries."
            },
            {
              "globalN" : 63,
              "question" : "Which approach best ensures the recommendation aligns with the user's actual priority?",
              "options" : [
                {
                  "text" : "Surface the contradiction and ask the user to clarify which matters more.",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Provide separate recommendations for both scenarios.",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Proceed with the most recently stated preference.",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Recommend a balanced portfolio without addressing the conflict.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "When user preferences directly contradict each other, surfacing the conflict and asking for clarification is the only way to guarantee the recommendation aligns with the user's true intent. Any other approach involves making an assumption that may be wrong—maximizing returns and low risk tolerance are fundamentally incompatible goals that require a human decision.",
              "correct" : "A",
              "scenario" : "Conversational AI Architecture Patterns",
              "situation" : "Over several turns discussing investment strategy, a user stated \"I have a very low risk tolerance\" and later \"I want to maximize my returns.\" They now ask: \"What should I invest in?\""
            },
            {
              "globalN" : 64,
              "question" : "What is the most likely cause?",
              "options" : [
                {
                  "text" : "Claude requires a vector database connection to maintain conversation memory.",
                  "correct" : false,
                  "letter" : "A"
                },
                {
                  "text" : "The model's context window has been exceeded.",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "The Claude API requires a `session_id` parameter.",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Your application isn't including prior messages in the `messages` array.",
                  "correct" : true,
                  "letter" : "D"
                }
              ],
              "explanation" : "Claude has no server-side memory—every API call is stateless. Without including the full conversation history in the `messages` array of each request, Claude has no knowledge of prior turns. Vector databases (A) and `session_id` (C) are not part of Claude's architecture; context window overflow (B) is impossible for two-message exchanges.",
              "correct" : "D",
              "scenario" : "Conversational AI Architecture Patterns",
              "situation" : "Users refine playlist preferences over multiple conversation turns. Two messages after a user said \"I love jazz,\" Claude asks \"What genres do you enjoy?\""
            },
            {
              "globalN" : 65,
              "question" : "What approach best balances preservation with token reduction?",
              "options" : [
                {
                  "text" : "Summarize the entire conversation history.",
                  "correct" : false,
                  "letter" : "A"
                },
                {
                  "text" : "Keep only the most recent 20,000 tokens.",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Extract critical structured data (allergies, quantities, preferences), summarize general discussion, and keep recent exchanges verbatim.",
                  "correct" : true,
                  "letter" : "C"
                },
                {
                  "text" : "Store the full conversation externally and retrieve relevant parts via semantic search.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "The hybrid approach preserves the highest-value information at the lowest cost. Critical facts like allergies and recipe quantities are extracted into a compact structured block (preventing the precision loss that occurs during summarization), general discussion is summarized, and recent exchanges are kept verbatim for conversational coherence. Options A and B risk losing critical dietary information; D is architectural overkill for a single cooking session.",
              "correct" : "C",
              "scenario" : "Conversational AI Architecture Patterns",
              "situation" : "After a 40-minute cooking session, the conversation reaches 78,000 tokens. History includes allergies, recipe scaling, clarified cooking terms, and general discussion. You must reduce tokens while preserving important information."
            }
          ],
          "examKind" : "examConcept",
          "domain" : "Exam practice",
          "title" : "Drill 1",
          "symbol" : "target",
          "id" : "l_5_0",
          "cards" : [

          ]
        },
        {
          "questions" : [
            {
              "globalN" : 66,
              "question" : "What is the most effective solution?",
              "options" : [
                {
                  "text" : "Hybrid approach: summarize older messages while keeping recent ones verbatim.",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Vector similarity search over the full conversation history.",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Increase the window to 50 message pairs.",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Summarize dropped messages every turn and prepend the running summary.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "The hybrid approach addresses both dimensions of the problem: retaining exact recent context (critical for conversational coherence) while maintaining a compressed representation of earlier preferences (preventing total loss when pairs are dropped). Increasing the window (C) simply delays the same problem. Vector search (B) may miss important context that isn't semantically similar to the current query. Full per-turn summarization (D) adds overhead and accumulates summarization errors.",
              "correct" : "A",
              "scenario" : "Conversational AI Architecture Patterns",
              "situation" : "Users report that during extended conversations the assistant loses track of earlier topics and preferences. Your current implementation keeps only the last 25 message pairs."
            },
            {
              "globalN" : 67,
              "question" : "What is the primary cause?",
              "options" : [
                {
                  "text" : "The entire conversation history is included with each API request.",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "The model generates progressively longer responses.",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Database operations slow down as history grows.",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "The model builds an internal user profile requiring more processing.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Claude's API is fully stateless—every request must include the complete conversation history in the `messages` array. As conversations grow, each request carries more tokens, which directly increases both processing latency and cost. The model does not maintain any internal state between calls (D is false), and response length is not inherently tied to conversation length (B).",
              "correct" : "A",
              "scenario" : "Conversational AI Architecture Patterns",
              "situation" : "Users report that latency increases and costs rise when conversations exceed 50 turns."
            },
            {
              "globalN" : 68,
              "question" : "What is the most effective approach?",
              "options" : [
                {
                  "text" : "Rolling window truncation.",
                  "correct" : false,
                  "letter" : "A"
                },
                {
                  "text" : "Progressive summarization capturing key conclusions.",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Semantic embeddings with retrieval of relevant exchanges.",
                  "correct" : true,
                  "letter" : "C"
                },
                {
                  "text" : "Add structured XML tags marking discussion conclusions.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Semantic search over conversation history is the only approach that scales to three months of discussion while being able to surface specific relevant exchanges on demand. Rolling window (A) would discard most of the history. Progressive summarization (B) compresses discussions into abstractions that lose the specific conclusions users are asking about. XML tags (D) require restructuring all past content and don't solve the retrieval problem at this scale.",
              "correct" : "C",
              "scenario" : "Conversational AI Architecture Patterns",
              "situation" : "After three months of weekly sessions, conversation history grows to 85,000 tokens. When a user asks \"What did we conclude about the theme of isolation?\", the assistant gives generic answers instead of referencing previous discussions."
            },
            {
              "globalN" : 69,
              "question" : "What is the best solution?",
              "options" : [
                {
                  "text" : "Move behavioral guidelines into the first user message.",
                  "correct" : false,
                  "letter" : "A"
                },
                {
                  "text" : "Start a new conversation after 20 turns.",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Insert user-role messages reinforcing guidelines at conversation breakpoints.",
                  "correct" : true,
                  "letter" : "C"
                },
                {
                  "text" : "Use post-response validation to regenerate non-compliant responses.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Periodic injection of behavioral reminders directly combats instruction drift by re-establishing constraints at regular intervals as conversation history accumulates. Moving guidelines to the first user message (A) reduces their authority. Starting a new conversation (B) destroys context. Post-response validation (D) is corrective rather than preventive and adds significant latency.",
              "correct" : "C",
              "scenario" : "Conversational AI Architecture Patterns",
              "situation" : "During QA testing, Claude follows system prompt guidelines for the first 10–15 turns, but later responses deviate. The conversation is still within token limits."
            },
            {
              "globalN" : 70,
              "question" : "What is the most effective fix?",
              "options" : [
                {
                  "text" : "Inject reminders every 4–5 turns.",
                  "correct" : false,
                  "letter" : "A"
                },
                {
                  "text" : "Replace verbose rules with few-shot examples demonstrating proficiency-level adaptation.",
                  "correct" : true,
                  "letter" : "B"
                },
                {
                  "text" : "Place critical rules at the end of the system prompt.",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Evaluate responses and regenerate if difficulty level mismatches.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "A 2,800-token system prompt with declarative rules is vulnerable to drift because abstract rules require the model to reason about them on every turn. Replacing verbose rules with concrete few-shot examples that demonstrate correct proficiency-level adaptation gives the model clear behavioral patterns to match—this is more reliably followed across many turns than abstract instructions. Reminder injection (A) helps but addresses symptoms; end-placement (C) helps initially but not with turn-level drift; regeneration (D) is expensive and corrective.",
              "correct" : "B",
              "scenario" : "Conversational AI Architecture Patterns",
              "situation" : "Your AI tutor has a 2,800-token system prompt defining teaching methodology and adaptation rules. After 12 turns, the assistant starts ignoring proficiency levels."
            }
          ],
          "examKind" : "examConcept",
          "domain" : "Exam practice",
          "title" : "Drill 2",
          "symbol" : "target",
          "id" : "l_5_1",
          "cards" : [

          ]
        },
        {
          "questions" : [
            {
              "globalN" : 71,
              "question" : "Where should these behavioral guidelines be defined?",
              "options" : [
                {
                  "text" : "Prepended to each user message.",
                  "correct" : false,
                  "letter" : "A"
                },
                {
                  "text" : "In the system prompt.",
                  "correct" : true,
                  "letter" : "B"
                },
                {
                  "text" : "In the first assistant message.",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "In environment variables.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "The system prompt is specifically designed for persistent behavioral constraints and guidelines that apply throughout the entire conversation. Prepending to each user message (A) is redundant overhead. The first assistant message (C) is unreliable because the model can deviate from its own prior statements. Environment variables (D) have no effect on model behavior.",
              "correct" : "B",
              "scenario" : "Conversational AI Architecture Patterns",
              "situation" : "Your assistant must maintain an enthusiastic tone, explain its reasoning, and ask clarifying questions. Where should these behavioral guidelines be defined?"
            },
            {
              "globalN" : 72,
              "question" : "What is the most effective approach?",
              "options" : [
                {
                  "text" : "Append a partial assistant message with a direct response opening.",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Lower the temperature setting.",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Post-process responses to remove greetings.",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Add system prompt instructions to avoid those phrases.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Prefilling the assistant's response with the beginning of a direct answer prevents greeting patterns at the generation level—the model continues from the prefill rather than generating new opening phrases. System prompt instructions (D) can help but are less reliable since the model may still produce variants. Post-processing (C) is a fragile workaround. Temperature (B) controls randomness, not specific phrase patterns.",
              "correct" : "A",
              "scenario" : "Conversational AI Architecture Patterns",
              "situation" : "Users report repetitive response openings like \"Certainly!\" and \"I'd be happy to help!\""
            },
            {
              "globalN" : 73,
              "question" : "What is the best approach?",
              "options" : [
                {
                  "text" : "Add shipping status to the system prompt.",
                  "correct" : false,
                  "letter" : "A"
                },
                {
                  "text" : "Send an immediate synthetic user message.",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Force the assistant to call a status tool on each turn.",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Append the status update as a prefix to the next user message.",
                  "correct" : true,
                  "letter" : "D"
                }
              ],
              "explanation" : "Prefixing the status update to the next user message injects real-time context at a natural conversation boundary without disrupting the flow. Modifying the system prompt (A) requires rebuilding the session or is architecturally cumbersome. A synthetic user message (B) can break the natural dialogue flow and confuse attribution. Forcing a tool call each turn (C) is wasteful when events are rare.",
              "correct" : "D",
              "scenario" : "Conversational AI Architecture Patterns",
              "situation" : "A webhook notifies your system that a user's package has shipped while the user is actively chatting. You want the assistant to incorporate this naturally into the next response."
            },
            {
              "globalN" : 74,
              "question" : "What approach best improves the trade-off?",
              "options" : [
                {
                  "text" : "Proceed with hidden defaults.",
                  "correct" : false,
                  "letter" : "A"
                },
                {
                  "text" : "Ask all clarifying questions in one compound message.",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "State assumptions explicitly and proceed while inviting corrections.",
                  "correct" : true,
                  "letter" : "C"
                },
                {
                  "text" : "Use a structured intake form.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Stating assumptions explicitly and proceeding gives the user an immediate, useful response while preserving their ability to correct wrong assumptions. Hidden defaults (A) leave the user unaware of what was assumed. A compound question list (B) still demands upfront effort from the user. A structured form (D) adds more friction, not less—contradicting the goal of reducing abandonment.",
              "correct" : "C",
              "scenario" : "Conversational AI Architecture Patterns",
              "situation" : "Users frequently send requests like \"Book a venue for the party.\" The assistant asks 4+ clarifying questions, causing 35% abandonment."
            },
            {
              "globalN" : 75,
              "question" : "What is the most likely cause?",
              "options" : [
                {
                  "text" : "System prompts only establish initial behavior.",
                  "correct" : false,
                  "letter" : "A"
                },
                {
                  "text" : "Model attention weakens as turns accumulate.",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Accumulated assistant responses dilute system prompt influence.",
                  "correct" : true,
                  "letter" : "C"
                },
                {
                  "text" : "The system prompt is only sent once.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "As assistant responses accumulate in the conversation history, the proportion of text reflecting the system prompt's behavioral constraints decreases relative to the growing body of assistant-generated content. The model increasingly pattern-matches to its own prior outputs rather than the system prompt, compounding drift even at short token lengths. The system prompt is included in every API call (D is false as a standalone explanation), and model attention degradation (B) doesn't operate at 2,500 tokens.",
              "correct" : "C",
              "scenario" : "Conversational AI Architecture Patterns",
              "situation" : "Your assistant uses a contractor-persona system prompt. Early turns follow the rules, but by turn 7 the assistant gives generic advice. Conversation length is only 2,500 tokens."
            }
          ],
          "examKind" : "examConcept",
          "domain" : "Exam practice",
          "title" : "Drill 3",
          "symbol" : "target",
          "id" : "l_5_2",
          "cards" : [

          ]
        },
        {
          "questions" : [
            {
              "globalN" : 76,
              "question" : "What is the best solution?",
              "options" : [
                {
                  "text" : "Make reasonable assumptions, state them explicitly, and offer to adjust.",
                  "correct" : true,
                  "letter" : "A"
                },
                {
                  "text" : "Classify ambiguity with a smaller model before responding.",
                  "correct" : false,
                  "letter" : "B"
                },
                {
                  "text" : "Use predefined interpretations without stating assumptions.",
                  "correct" : false,
                  "letter" : "C"
                },
                {
                  "text" : "Limit the assistant to one clarifying question per turn.",
                  "correct" : false,
                  "letter" : "D"
                }
              ],
              "explanation" : "Proceeding with reasonable stated assumptions eliminates the back-and-forth entirely while keeping the user informed and in control. Predefined silent interpretations (C) leave users confused when the response doesn't match their intent. A single-question limit (D) still requires turns of back-and-forth. A smaller classification model (B) adds latency and infrastructure complexity without solving the core UX problem.",
              "correct" : "A",
              "scenario" : "Conversational AI Architecture Patterns",
              "situation" : "Users ask vague requests like \"Can you help with the report?\" The assistant responds by asking multiple questions (which report? what help? deadline?), causing 40% abandonment."
            }
          ],
          "examKind" : "examConcept",
          "domain" : "Exam practice",
          "title" : "Drill 4",
          "symbol" : "target",
          "id" : "l_5_3",
          "cards" : [

          ]
        }
      ],
      "kicker" : "Think: design the rails so the wrong move is impossible.",
      "title" : "Conversational AI Architecture Patterns",
      "subtitle" : "16 exam questions · 4 drills",
      "colorIndex" : 11,
      "id" : "u_s5"
    }
  ],
  "bank" : [
    {
      "question" : "Which approach is most effective?",
      "globalN" : 1,
      "options" : [
        {
          "text" : "Apply credibility heuristics to pick the most likely correct number, finish analysis with that value, and add a footnote mentioning the discrepancy.",
          "correct" : false,
          "letter" : "A"
        },
        {
          "text" : "Include both numbers in the analysis output without marking them as conflicting, letting the synthesis agent decide which to use based on broader context.",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Stop analysis and immediately escalate to the coordinator, asking it to decide which source is more authoritative before continuing.",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Complete analysis with both numbers, explicitly annotate the conflict with source attribution, and let the coordinator decide how to reconcile the data before passing to synthesis.",
          "correct" : true,
          "letter" : "D"
        }
      ],
      "explanation" : "This approach preserves separation of responsibilities: the analysis agent completes its core work without blocking, preserves both conflicting values with clear attribution, and correctly passes reconciliation to the coordinator, which has broader context.",
      "correct" : "D",
      "scenario" : "Multi-agent Research System",
      "situation" : "A document analysis agent discovers that two credible sources contain directly contradictory statistics for a key metric: a government report states 40% growth, while an industry analysis states 12%. Both sources look credible, and the discrepancy could materially affect the research conclusions. How should the document analysis agent handle this situation most effectively?"
    },
    {
      "question" : "Which next step is most appropriate?",
      "globalN" : 2,
      "options" : [
        {
          "text" : "Each agent sends its results directly to the report-writing agent, bypassing the coordinator.",
          "correct" : false,
          "letter" : "A"
        },
        {
          "text" : "The document analysis agent requests web-search results and merges them internally.",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "The coordinator passes both sets of results to the synthesis agent for a unified integration.",
          "correct" : true,
          "letter" : "C"
        },
        {
          "text" : "The coordinator concatenates the raw outputs from both agents and returns them as the final result.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "In a coordinator–subagent architecture, the coordinator forwards both result sets to the synthesis agent for centralized integration, preserving control and ensuring high-quality merging.",
      "correct" : "C",
      "scenario" : "Multi-agent Research System",
      "situation" : "The web-search and document-analysis agents have completed their tasks and returned results to the coordinator. What is the next step for creating an integrated research report?"
    },
    {
      "question" : "Which improvement is most effective?",
      "globalN" : 3,
      "options" : [
        {
          "text" : "Create a dedicated error-handling agent that monitors all failures via a shared queue and decides recovery actions, sending restart commands directly to subagents.",
          "correct" : false,
          "letter" : "A"
        },
        {
          "text" : "Configure the subagent to always return partial results with a success status, embedding error details in metadata; the coordinator treats all responses as successful.",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Make the coordinator validate all documents before sending them to the subagent, rejecting documents that might cause failures.",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Implement local recovery in the subagent for transient failures and escalate to the coordinator only errors it cannot resolve, including attempted steps and partial results.",
          "correct" : true,
          "letter" : "D"
        }
      ],
      "explanation" : "Handle errors at the lowest level capable of resolving them. Local recovery reduces coordinator workload while still escalating truly unrecoverable issues with full context and partial progress.",
      "correct" : "D",
      "scenario" : "Multi-agent Research System",
      "situation" : "A document analysis subagent frequently fails when processing PDF files: some have corrupted sections that trigger parsing exceptions, others are password-protected, and sometimes the parsing library hangs on large files. Currently, any exception immediately terminates the subagent and returns an error to the coordinator, which must decide whether to retry, skip, or fail the whole task. This causes excessive coordinator involvement in routine error handling. What architectural improvement is most effective?"
    },
    {
      "question" : "What is the most likely root cause?",
      "globalN" : 4,
      "options" : [
        {
          "text" : "The synthesis agent lacks instructions to detect coverage gaps.",
          "correct" : false,
          "letter" : "A"
        },
        {
          "text" : "The document analysis agent filters out non-visual sources due to overly strict relevance criteria.",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "The coordinator’s task decomposition is too narrow, assigning subagents work that does not cover all relevant areas.",
          "correct" : true,
          "letter" : "C"
        },
        {
          "text" : "The web-search agent’s queries are insufficient and should be broadened to cover more sectors.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "The coordinator decomposed a broad topic only into visual-art subtasks, missing music, literature, and film entirely. Since subagents executed their assignments correctly, the narrow decomposition is the obvious root cause.",
      "correct" : "C",
      "scenario" : "Multi-agent Research System",
      "situation" : "After running the system on “AI impact on creative industries,” you observe that every subagent completes successfully: the web-search agent finds relevant articles, the document analysis agent summarizes them correctly, and the synthesis agent produces coherent text. However, final reports cover only visual art and completely miss music, literature, and film. In the coordinator logs, you see it decomposed the topic into three subtasks: “AI in digital art,” “AI in graphic design,” and “AI in photography.” What is the most likely root cause?"
    },
    {
      "question" : "Which error-propagation strategy is most effective?",
      "globalN" : 5,
      "options" : [
        {
          "text" : "Continue synthesis using only successful sources and produce an output without mentioning which data was unavailable.",
          "correct" : false,
          "letter" : "A"
        },
        {
          "text" : "The synthesis subagent returns an error to the coordinator, triggering a full retry or task failure due to incomplete data.",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "The synthesis subagent asks the coordinator to retry timed-out sources with a longer timeout before starting synthesis.",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Structure the synthesis output with coverage annotations that indicate which conclusions are well-supported and where gaps exist due to unavailable sources.",
          "correct" : true,
          "letter" : "D"
        }
      ],
      "explanation" : "Coverage annotations implement graceful degradation with transparency, preserving value from completed work while propagating uncertainty to enable informed decisions about confidence.",
      "correct" : "D",
      "scenario" : "Multi-agent Research System",
      "situation" : "The web-search subagent returns results for only 3 of 5 requested source categories (competitor sites and industry reports succeed, but news archives and social feeds time out). The document analysis subagent successfully processes all provided documents. The synthesis subagent must produce a summary from mixed-quality upstream inputs. Which error-propagation strategy is most effective?"
    },
    {
      "question" : "Which approach is most effective?",
      "globalN" : 6,
      "options" : [
        {
          "text" : "Return an error with context to the coordinator agent, allowing it to decide how to proceed.",
          "correct" : true,
          "letter" : "A"
        },
        {
          "text" : "Silently skip the corrupted document and continue processing the remaining files to avoid interrupting the workflow.",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Automatically retry parsing the document three times with exponential backoff before reporting a failure.",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Throw an exception that terminates the entire research workflow.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "Returning an error with context to the coordinator is the most effective approach because it lets the coordinator make an informed decision—skip the file, try an alternative parsing method, or notify the user—while maintaining visibility into the failure.",
      "correct" : "A",
      "scenario" : "Multi-agent Research System",
      "situation" : "The document analysis subagent encounters a corrupted PDF file that it cannot parse. When designing the system’s error handling, what is the most effective way to handle this failure?"
    },
    {
      "question" : "How should you fix the misrouting problem?",
      "globalN" : 7,
      "options" : [
        {
          "text" : "Add a pre-routing classifier that detects whether the user refers to uploaded files or web content before the coordinator decides on delegation.",
          "correct" : false,
          "letter" : "A"
        },
        {
          "text" : "Rename the web-search tool to `extract_web_results` and update its description to “processes and returns information retrieved from web search and URLs.”",
          "correct" : true,
          "letter" : "B"
        },
        {
          "text" : "Add few-shot examples to the coordinator prompt showing correct routing: “User uploads a quarterly report → document analysis agent” and “User asks about a web page → web-search agent.”",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Expand the document analysis tool description with usage examples like “Use for uploaded PDFs, Word docs, and spreadsheets,” leaving the web-search tool unchanged.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "Renaming the web-search tool to `extract_web_results` and updating its description to explicitly reference web search and URLs directly removes the root cause by eliminating semantic overlap between the two tool names and descriptions. This makes each tool’s purpose unambiguous, enabling the coordinator to reliably distinguish document analysis from web search.",
      "correct" : "B",
      "scenario" : "Multi-agent Research System",
      "situation" : "Production logs show a persistent pattern: requests like “analyze the uploaded quarterly report” are routed to the web-search agent 45% of the time instead of the document analysis agent. Reviewing tool definitions, you find that the web-search agent has a tool `analyze_content` described as “analyzes content and extracts key information,” while the document analysis agent has a tool `analyze_document` described as “analyzes documents and extracts key information.” How should you fix the misrouting problem?"
    },
    {
      "question" : "What is the main advantage of keeping the coordinator as the central hub?",
      "globalN" : 8,
      "options" : [
        {
          "text" : "The coordinator can observe all interactions, handle errors uniformly, and decide what information each subagent should receive.",
          "correct" : true,
          "letter" : "A"
        },
        {
          "text" : "The coordinator batches multiple requests to subagents, reducing total API calls and overall latency.",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Routing through the coordinator enables automatic retry logic that direct inter-agent calls cannot support.",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Subagents use isolated memory, and direct communication would require complex serialization that only the coordinator can perform.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "The coordinator pattern provides centralized visibility into all interactions, uniform error handling across the system, and fine-grained control over what information each subagent receives—these are the primary advantages of a star-shaped communication topology.",
      "correct" : "A",
      "scenario" : "Multi-agent Research System",
      "situation" : "A colleague proposes that the document analysis agent should send its results directly to the synthesis agent, bypassing the coordinator. What is the main advantage of keeping the coordinator as the central hub for all communication between subagents?"
    },
    {
      "question" : "Which error-propagation approach best enables intelligent recovery?",
      "globalN" : 9,
      "options" : [
        {
          "text" : "Return structured error context to the coordinator including the failure type, the query executed, any partial results, and potential alternative approaches.",
          "correct" : true,
          "letter" : "A"
        },
        {
          "text" : "Catch the timeout within the subagent and return an empty result set marked as successful.",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Implement automatic exponential-backoff retries inside the subagent, only returning a generic “search unavailable” status after exhausting retries.",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Propagate the timeout exception directly to the top-level handler, terminating the entire research workflow.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "Returning structured error context—including failure type, executed query, partial results, and alternative approaches—gives the coordinator everything needed to make intelligent recovery decisions (e.g., retry with a modified query or continue with partial results). It preserves maximum context for informed coordination-level decision-making.",
      "correct" : "A",
      "scenario" : "Multi-agent Research System",
      "situation" : "The web-search subagent times out while researching a complex topic. You need to design how information about this failure is returned to the coordinator. Which error-propagation approach best enables intelligent recovery?"
    },
    {
      "question" : "Which fix is most effective?",
      "globalN" : 10,
      "options" : [
        {
          "text" : "Replace `fetch_url` with a `load_document` tool that validates that URLs point to document formats.",
          "correct" : true,
          "letter" : "A"
        },
        {
          "text" : "Remove `fetch_url` from the document analysis agent and route all URL fetching through the coordinator to the web-search agent.",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Implement filtering that blocks `fetch_url` calls to known search engine domains while allowing other URLs.",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Add instructions to the document analysis agent prompt that `fetch_url` should only be used to download document URLs, not to search.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "Replacing a general-purpose tool with a document-specific tool that validates URLs against document formats fixes the root cause by constraining capability at the interface level. This follows the principle of least privilege, making undesired search behavior impossible rather than merely discouraged.",
      "correct" : "A",
      "scenario" : "Multi-agent Research System",
      "situation" : "In your system design, you gave the document analysis agent access to a general-purpose tool `fetch_url` so it could download documents by URL. Production logs show this agent now frequently downloads search engine results pages to perform ad hoc web search—behavior that should be routed through the web-search agent—causing inconsistent results. Which fix is most effective?"
    },
    {
      "question" : "What is the most effective way to address this?",
      "globalN" : 11,
      "options" : [
        {
          "text" : "Allow both agents to finish in parallel, then have the coordinator deduplicate overlapping results before passing them to the synthesis agent.",
          "correct" : false,
          "letter" : "A"
        },
        {
          "text" : "The coordinator explicitly partitions the research space before delegating, assigning each agent distinct subtopics or source types.",
          "correct" : true,
          "letter" : "B"
        },
        {
          "text" : "Implement a shared-state mechanism where agents log their current focus area so other agents can dynamically avoid duplication during execution.",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Switch to sequential execution where document analysis runs only after web search completes, using web-search results as context to avoid duplication.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "Having the coordinator explicitly partition the research space before delegating is most effective because it addresses the root cause—unclear task boundaries—before any work begins. It preserves parallelism while preventing duplicated effort and wasted tokens.",
      "correct" : "B",
      "scenario" : "Multi-agent Research System",
      "situation" : "While researching a broad topic, you observe that the web-search agent and the document analysis agent investigate the same subtopics, leading to substantial duplication in their outputs. Token usage nearly doubles without a proportional increase in research breadth or depth. What is the most effective way to address this?"
    },
    {
      "question" : "Which approach enables the best recovery decisions?",
      "globalN" : 12,
      "options" : [
        {
          "text" : "Aggregate the results into a single success-percentage metric (e.g., “67% source coverage”) with detailed logs available on demand.",
          "correct" : false,
          "letter" : "A"
        },
        {
          "text" : "Report both “timeout” and “0 results” as failures requiring coordinator intervention.",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Retry transient failures internally and report only persistent errors.",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Distinguish access failures (timeout) that require a retry decision from valid empty results (“0 results”) that represent successful queries.",
          "correct" : true,
          "letter" : "D"
        }
      ],
      "explanation" : "A timeout (access failure) and “0 results” (valid empty result) are semantically different outcomes requiring different responses. Distinguishing them allows the coordinator to retry the patent database while accepting the industry reports “0 results” as a valid, informative finding.",
      "correct" : "D",
      "scenario" : "Multi-agent Research System",
      "situation" : "During research, the web-search subagent queries three source categories with different outcomes: academic databases return 15 relevant papers, industry reports return “0 results,” and patent databases return “Connection timeout.” When designing error propagation to the coordinator, which approach enables the best recovery decisions?"
    },
    {
      "question" : "How should you restructure the aggregated input?",
      "globalN" : 13,
      "options" : [
        {
          "text" : "Summarize all subagent outputs to under 20K tokens before aggregation to keep content within the model’s reliable processing range.",
          "correct" : false,
          "letter" : "A"
        },
        {
          "text" : "Stream subagent results to the synthesis agent incrementally, processing web-search results first to completion, then adding document analysis results.",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Place a key-findings summary at the start of the aggregated input and organize detailed results with explicit section headings for easier navigation.",
          "correct" : true,
          "letter" : "C"
        },
        {
          "text" : "Implement rotation that alternates which subagent’s results appear first across research tasks to ensure both sources get equal top positioning over time.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "Putting a key-findings summary at the start leverages primacy effects so critical information sits in the most reliably processed position. Adding explicit section headings throughout helps the model navigate and attend to mid-input content, directly mitigating the “lost in the middle” phenomenon.",
      "correct" : "C",
      "scenario" : "Multi-agent Research System",
      "situation" : "Production monitoring shows inconsistent synthesis quality. When aggregated results are ~75K tokens, the synthesis agent reliably cites information from the first 15K tokens (web-search headlines/snippets) and the last 10K tokens (document analysis conclusions), but often misses critical findings in the middle 50K tokens—even when they directly answer the research question. How should you restructure the aggregated input?"
    },
    {
      "question" : "Which solution is most effective?",
      "globalN" : 14,
      "options" : [
        {
          "text" : "Modify upstream agents to return structured data (key facts, quotes, relevance scores) instead of verbose content and reasoning.",
          "correct" : true,
          "letter" : "A"
        },
        {
          "text" : "Add an intermediate summarization agent that condenses findings before passing them to synthesis.",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Have the synthesis agent process findings in sequential batches, maintaining state between calls.",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Store findings in a vector database and give the synthesis agent search tools to query during its work.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "Modifying upstream agents to return structured data fixes the root cause by reducing token volume at the source while preserving essential information. It avoids passing bulky page content and reasoning traces that inflate tokens without improving the synthesis step.",
      "correct" : "A",
      "scenario" : "Multi-agent Research System",
      "situation" : "In testing, the combined output of the web-search agent (85K tokens including page content) and the document analysis agent (70K tokens including chains of thought) totals 155K tokens, but the synthesis agent performs best with inputs under 50K tokens. Which solution is most effective?"
    },
    {
      "question" : "Which approach is most effective?",
      "globalN" : 15,
      "options" : [
        {
          "text" : "Give the synthesis agent access to all web-search tools so it can handle any verification need directly without coordinator loops.",
          "correct" : false,
          "letter" : "A"
        },
        {
          "text" : "Have the synthesis agent accumulate all verification needs and return them as a batch to the coordinator at the end, which then sends them all to the web-search agent at once.",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Have the web-search agent proactively cache extra context around each source during initial research in anticipation of synthesis needing verification.",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Give the synthesis agent a limited-scope `verify_fact` tool for simple checks, while routing complex verifications through the coordinator to the web-search agent.",
          "correct" : true,
          "letter" : "D"
        }
      ],
      "explanation" : "A limited-scope fact-verification tool lets the synthesis agent handle 85% of simple checks directly, eliminating most loops, while preserving the coordinator delegation path for the 15% of complex verifications. This applies least privilege while significantly reducing latency.",
      "correct" : "D",
      "scenario" : "Multi-agent Research System",
      "situation" : "In testing, you observe that the synthesis agent often needs to verify specific claims while merging results. Currently, when verification is needed, the synthesis agent returns control to the coordinator, which calls the web-search agent and then re-invokes synthesis with the results. This adds 2–3 extra loops per task and increases latency by 40%. Your assessment shows 85% of these verifications are simple fact checks (dates, names, stats) and 15% require deeper research. Which approach most effectively reduces overhead while preserving system reliability?"
    },
    {
      "question" : "Which approach is most effective?",
      "globalN" : 16,
      "options" : [
        {
          "text" : "Add an “Output Format for Review” section to CLAUDE.md with examples of structured findings so Claude learns the expected format from project context.",
          "correct" : false,
          "letter" : "A"
        },
        {
          "text" : "Use the CLI flags `--output-format json` and `--json-schema` to enforce structured findings, then parse the output to post inline comments via the GitHub API.",
          "correct" : true,
          "letter" : "B"
        },
        {
          "text" : "Include explicit formatting instructions in the review prompt requiring each finding to follow a parseable template like `[FILE:path] [LINE:n] [SEVERITY:level] ...`.",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Keep narrative review format but add a summarization step that uses Claude to generate a structured JSON summary of findings.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "Using `--output-format json` with `--json-schema` enforces structured output at the CLI level, guaranteeing well-formed JSON with the required fields (file path, line number, severity, suggested fix) that can be reliably parsed and posted as inline PR comments via the GitHub API. It leverages built-in CLI capabilities designed specifically for structured output.",
      "correct" : "B",
      "scenario" : "Claude Code for Continuous Integration",
      "situation" : "Your CI pipeline runs the Claude Code CLI (in `--print` mode) using CLAUDE.md to provide project context for code review, and developers generally find the reviews substantive. However, they report that integrating findings into the workflow is difficult—Claude outputs narrative paragraphs that must be manually copied into PR comments. The team wants to automatically post each finding as a separate inline PR comment at the relevant place in code, which requires structured data with file path, line number, severity level, and suggested fix. Which approach is most effective?"
    },
    {
      "question" : "Which approach directly addresses the root cause?",
      "globalN" : 17,
      "options" : [
        {
          "text" : "Run a second independent instance of Claude Code to review the changes without access to the generator’s reasoning.",
          "correct" : true,
          "letter" : "A"
        },
        {
          "text" : "Enable extended thinking mode for the generation stage to allow more thorough deliberation before producing suggestions.",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Add explicit self-review instructions to the generation prompt asking Claude to critique its own suggestions before finalizing output.",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Include full test files and documentation in prompt context so Claude better understands expected behavior during generation.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "A second independent Claude Code instance without access to the generator’s reasoning directly addresses the root cause by avoiding confirmation bias. This “fresh eyes” perspective mirrors human peer review, where another reviewer catches issues the author rationalized.",
      "correct" : "A",
      "scenario" : "Claude Code for Continuous Integration",
      "situation" : "Your team uses Claude Code for generating code suggestions, but you notice a pattern: non-obvious issues—performance optimizations that break edge cases, cleanups that unexpectedly change behavior—are only caught when another team member reviews the PR. Claude’s reasoning during generation shows it considered these cases but concluded its approach was correct. Which approach directly addresses the root cause of this self-check limitation?"
    },
    {
      "question" : "What is the primary technical limitation?",
      "globalN" : 18,
      "options" : [
        {
          "text" : "Batch processing does not include correlation IDs to map outputs back to input requests.",
          "correct" : false,
          "letter" : "A"
        },
        {
          "text" : "The asynchronous model cannot execute tools mid-request and return results for Claude to continue analysis.",
          "correct" : true,
          "letter" : "B"
        },
        {
          "text" : "The Batch API does not support tool definitions in request parameters.",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "The batch processing latency of up to 24 hours is too slow for pull request feedback, although the workflow would otherwise function.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "A “fire-and-forget” asynchronous Batch API model has no mechanism to intercept a tool call during a request, execute the tool, and return results for Claude to continue analysis. This is fundamentally incompatible with iterative tool-calling workflows that require multiple tool request/response rounds within a single logical interaction.",
      "correct" : "B",
      "scenario" : "Claude Code for Continuous Integration",
      "situation" : "Your code review component is iterative: Claude analyzes the changed file, then may request related files (imports, base classes, tests) via tool calls to understand context before providing final feedback. Your application defines a tool that lets Claude request file contents; Claude calls the tool, gets results, and continues analysis. You’re evaluating batch processing to reduce API cost. What is the primary technical limitation when considering batch processing for this workflow?"
    },
    {
      "question" : "Which combination is correct?",
      "globalN" : 19,
      "options" : [
        {
          "text" : "Use the Message Batches API for all three tasks to maximize 50% savings, configuring the pipeline to poll for batch completion.",
          "correct" : false,
          "letter" : "A"
        },
        {
          "text" : "Use synchronous calls for PR style checks; use the Message Batches API for weekly security audits and nightly test generation.",
          "correct" : true,
          "letter" : "B"
        },
        {
          "text" : "Use synchronous calls for all three tasks for consistent response times, relying on prompt caching to reduce costs across workloads.",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Use synchronous calls for PR style checks and nightly test generation; use the Message Batches API only for weekly security audits.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "PR style checks block developers and require immediate responses via synchronous calls, while weekly security audits and nightly test generation are scheduled tasks with flexible deadlines that can tolerate up to a 24-hour batch window—capturing 50% savings for both.",
      "correct" : "B",
      "scenario" : "Claude Code for Continuous Integration",
      "situation" : "Your CI/CD system runs three Claude-based analyses: (1) fast style checks on every PR that block merging until completion, (2) comprehensive weekly security audits of the entire codebase, and (3) nightly test-case generation for recently changed modules. The Message Batches API offers 50% savings but processing can take up to 24 hours. You want to optimize API cost while maintaining an acceptable developer experience. Which combination correctly matches each task to an API approach?"
    },
    {
      "question" : "Which prompting technique is most reliable?",
      "globalN" : 20,
      "options" : [
        {
          "text" : "Further refine instructions with more explicit requirements for each part of the feedback format (location, issue, severity, proposed fix).",
          "correct" : false,
          "letter" : "A"
        },
        {
          "text" : "Expand the context window to include more surrounding codebase so the model has enough information to propose concrete fixes.",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Implement a two-pass approach where one prompt identifies issues and a second generates fixes, allowing specialization.",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Add 3–4 few-shot examples showing the exact required format: identified issue, location in code, concrete fix suggestion.",
          "correct" : true,
          "letter" : "D"
        }
      ],
      "explanation" : "Few-shot examples are the most effective technique for achieving consistent output format when instructions alone produce variable results. Providing 3–4 examples that show the exact desired structure (issue, location, concrete fix) gives the model a concrete pattern to follow, which is more reliable than abstract instructions.",
      "correct" : "D",
      "scenario" : "Claude Code for Continuous Integration",
      "situation" : "Your automated reviews find real issues, but developers report the feedback is not actionable. Findings include phrases like “complex ticket routing logic” or “potential null pointer” without specifying what exactly to change. When you add detailed instructions like “always include concrete fix suggestions,” the model still produces inconsistent output—sometimes detailed, sometimes vague. Which prompting technique most reliably produces consistently actionable feedback?"
    },
    {
      "question" : "Which mode should use batch processing?",
      "globalN" : 21,
      "options" : [
        {
          "text" : "Only the pre-merge-commit hook.",
          "correct" : false,
          "letter" : "A"
        },
        {
          "text" : "Only the deep analysis.",
          "correct" : true,
          "letter" : "B"
        },
        {
          "text" : "Both modes.",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Neither mode.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "Deep analysis is an ideal candidate for batch processing because it already runs overnight, tolerates delay, and uses a polling model before publishing results—matching the asynchronous, polling-based architecture of the Message Batches API while capturing 50% savings.",
      "correct" : "B",
      "scenario" : "Claude Code for Continuous Integration",
      "situation" : "Your CI pipeline includes two Claude-based code review modes: a pre-merge-commit hook that blocks PR merge until completion, and a “deep analysis” that runs overnight, polls for batch completion, and posts detailed suggestions to the PR. You want to reduce API cost using the Message Batches API, which offers 50% savings but requires polling and can take up to 24 hours. Which mode should use batch processing?"
    },
    {
      "question" : "What change addresses the root cause?",
      "globalN" : 22,
      "options" : [
        {
          "text" : "Include `git blame` data so Claude can identify comments that predate recent code changes.",
          "correct" : false,
          "letter" : "A"
        },
        {
          "text" : "Add few-shot examples of misleading comments to help the model recognize similar patterns in the codebase.",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Filter TODO, FIXME, and descriptive comment patterns before analysis to reduce noise.",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Specify explicit criteria: flag comments only when the behavior they claim contradicts the code’s actual behavior.",
          "correct" : true,
          "letter" : "D"
        }
      ],
      "explanation" : "Explicit criteria—flagging comments only when claimed behavior contradicts actual code behavior—directly addresses the root cause by replacing a vague instruction with a precise definition of what constitutes a problem. This reduces false positives on acceptable patterns and misses of truly misleading comments.",
      "correct" : "D",
      "scenario" : "Claude Code for Continuous Integration",
      "situation" : "Your automated review analyzes comments and docstrings. The current prompt instructs Claude to “check that comments are accurate and up to date.” Findings often flag acceptable patterns (TODO markers, simple descriptions) while missing comments describing behavior the code no longer implements. What change addresses the root cause of this inconsistent analysis?"
    },
    {
      "question" : "Which approach best restores developer trust?",
      "globalN" : 23,
      "options" : [
        {
          "text" : "Temporarily disable high-false-positive categories (style, naming, documentation) and keep only high-precision categories while improving prompts.",
          "correct" : true,
          "letter" : "A"
        },
        {
          "text" : "Keep all categories enabled but display confidence scores with each finding so developers can decide what to investigate.",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Keep all categories enabled and add few-shot examples to improve accuracy for each category over the next few weeks.",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Apply a uniform strictness reduction across all categories to bring the overall false-positive rate down.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "Temporarily disabling high-false-positive categories immediately stops trust erosion by removing noisy findings that cause developers to dismiss everything, while preserving value from high-precision categories like security and correctness. It also creates space to improve prompts for problematic categories before re-enabling them.",
      "correct" : "A",
      "scenario" : "Claude Code for Continuous Integration",
      "situation" : "Your automated code review system shows inconsistent severity ratings—similar issues like null pointer risks are rated “critical” in some PRs but only “medium” in others. Developer surveys show growing distrust—many start dismissing findings without reading because “half are wrong.” High-false-positive categories erode trust in accurate categories. Which approach best restores developer trust while improving the system?"
    },
    {
      "question" : "What change is most effective?",
      "globalN" : 24,
      "options" : [
        {
          "text" : "Include the existing test file in context so Claude can determine what scenarios are already covered.",
          "correct" : true,
          "letter" : "A"
        },
        {
          "text" : "Reduce the requested number of suggestions from 10 to 5, assuming Claude prioritizes the most valuable cases first.",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Add instructions directing Claude to focus exclusively on edge cases and error conditions rather than success paths.",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Implement post-processing that filters suggestions whose descriptions match existing test names via keyword overlap.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "Including the existing test file fixes the root cause of duplication: Claude can only avoid suggesting already-covered scenarios if it knows what tests already exist. This gives Claude the information needed to propose genuinely new, valuable tests.",
      "correct" : "A",
      "scenario" : "Claude Code for Continuous Integration",
      "situation" : "Your automated review generates test-case suggestions for each PR. Reviewing a PR that adds course completion tracking, Claude suggests 10 test cases, but developer feedback shows that 6 duplicate scenarios already covered by the existing test suite. What change most effectively reduces duplicate suggestions?"
    },
    {
      "question" : "What is the most effective way to eliminate redundant feedback?",
      "globalN" : 25,
      "options" : [
        {
          "text" : "Run review only when the PR is created and in the final pre-merge state, skipping intermediate commits.",
          "correct" : false,
          "letter" : "A"
        },
        {
          "text" : "Add a post-processing filter that removes findings that match previous ones by file paths and issue descriptions before posting comments.",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Restrict review scope to files changed in the most recent push, excluding files from earlier commits.",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Include previous review findings in context and instruct Claude to report only new or still-unresolved issues.",
          "correct" : true,
          "letter" : "D"
        }
      ],
      "explanation" : "Including prior review findings in context lets Claude distinguish new problems from those already addressed in recent commits. This preserves review thoroughness while using Claude’s reasoning to avoid redundant feedback on fixed code.",
      "correct" : "D",
      "scenario" : "Claude Code for Continuous Integration",
      "situation" : "After an initial automated review identifies 12 findings, a developer pushes new commits to address issues. Re-running review produces 8 findings, but developers report that 5 duplicate previous comments on code that was already fixed in the new commits. What is the most effective way to eliminate this redundant feedback while maintaining thoroughness?"
    },
    {
      "question" : "What is the correct approach?",
      "globalN" : 26,
      "options" : [
        {
          "text" : "Add a `--batch` flag: `claude --batch \"Analyze this pull request for security issues\"`.",
          "correct" : false,
          "letter" : "A"
        },
        {
          "text" : "Add the `-p` flag: `claude -p \"Analyze this pull request for security issues\"`.",
          "correct" : true,
          "letter" : "B"
        },
        {
          "text" : "Redirect stdin from `/dev/null`: `claude \"Analyze this pull request for security issues\" < /dev/null`.",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Set the environment variable `CLAUDE_HEADLESS=true` before running the command.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "The `-p` (or `--print`) flag is the documented way to run Claude Code non-interactively. It processes the prompt, prints the result to stdout, and exits without waiting for user input—ideal for CI/CD pipelines.",
      "correct" : "B",
      "scenario" : "Claude Code for Continuous Integration",
      "situation" : "Your pipeline script runs `claude \"Analyze this pull request for security issues\"`, but the job hangs indefinitely. Logs show Claude Code is waiting for interactive input. What is the correct approach to run Claude Code in an automated pipeline?"
    },
    {
      "question" : "How should you restructure the review?",
      "globalN" : 27,
      "options" : [
        {
          "text" : "Run three independent full-PR review passes and flag only issues that appear in at least two of the three runs.",
          "correct" : false,
          "letter" : "A"
        },
        {
          "text" : "Split into focused passes: review each file individually for local issues, then run a separate integration-oriented pass to examine cross-file data flows.",
          "correct" : true,
          "letter" : "B"
        },
        {
          "text" : "Require developers to split large PRs into smaller submissions of 3–4 files before running automated review.",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Switch to a larger model with a bigger context window so it can pay sufficient attention to all 14 files in one pass.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "Focused per-file passes address the root cause—attention dilution—by ensuring consistent depth and reliable local issue detection. A separate integration-oriented pass then covers cross-file concerns such as dependency and data-flow interactions.",
      "correct" : "B",
      "scenario" : "Claude Code for Continuous Integration",
      "situation" : "A pull request changes 14 files in an inventory tracking module. A single-pass review that analyzes all files together produces inconsistent results: detailed feedback on some files but shallow comments on others, missed obvious bugs, and contradictory feedback (a pattern is flagged in one file but identical code is approved in another file in the same PR). How should you restructure the review?"
    },
    {
      "question" : "What change best addresses investigation time?",
      "globalN" : 28,
      "options" : [
        {
          "text" : "Require Claude to include its rationale and confidence estimate directly in each finding.",
          "correct" : true,
          "letter" : "A"
        },
        {
          "text" : "Add a post-processor that analyzes finding patterns and automatically suppresses those that match historical false-positive signatures.",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Categorize findings as “blocking issues” vs “suggestions,” with different review requirements by level.",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Configure Claude to show only high-confidence findings, filtering uncertain flags before developers see them.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "Including rationale and confidence directly in each finding reduces investigation time by letting developers quickly triage without opening each finding. It satisfies the “no filtering” constraint because all findings remain visible while accelerating developer decision-making.",
      "correct" : "A",
      "scenario" : "Claude Code for Continuous Integration",
      "situation" : "Your automated code review averages 15 findings per pull request, and developers report a 40% false-positive rate. The bottleneck is investigation time: developers must click into each finding to read Claude’s rationale before deciding whether to fix or dismiss it. Your CLAUDE.md already contains comprehensive rules for acceptable patterns, and stakeholders rejected any approach that filters findings before developers see them. What change best addresses investigation time?"
    },
    {
      "question" : "Which approach best restores developer trust?",
      "globalN" : 29,
      "options" : [
        {
          "text" : "Temporarily disable high-false-positive categories (style, naming, documentation) and keep only high-precision categories while improving prompts.",
          "correct" : true,
          "letter" : "A"
        },
        {
          "text" : "Keep all categories enabled but display confidence scores with each finding so developers can decide what to investigate.",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Keep all categories enabled and add few-shot examples to improve accuracy for each category over the next few weeks.",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Apply a uniform strictness reduction across all categories to bring the overall false-positive rate down.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "Temporarily disabling high-false-positive categories immediately stops trust erosion by removing noisy findings that cause developers to dismiss everything, while preserving value from high-precision categories like security and correctness. It also creates space to improve prompts for problematic categories before re-enabling them.",
      "correct" : "A",
      "scenario" : "Claude Code for Continuous Integration",
      "situation" : "Analysis of your automated code review shows large differences in false-positive rates by finding category: security/correctness findings have 8% false positives, performance findings 18%, style/naming findings 52%, and documentation findings 48%. Developer surveys show growing distrust—many start dismissing findings without reading because “half are wrong.” High-false-positive categories erode trust in accurate categories. Which approach best restores developer trust while improving the system?"
    },
    {
      "question" : "How should you evaluate this proposal?",
      "globalN" : 30,
      "options" : [
        {
          "text" : "Move both to batch processing with fallback to synchronous calls if batches take too long.",
          "correct" : false,
          "letter" : "A"
        },
        {
          "text" : "Move both workflows to batch processing with status polling to verify completion.",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Use batch processing only for technical debt reports; keep synchronous calls for pre-merge checks.",
          "correct" : true,
          "letter" : "C"
        },
        {
          "text" : "Keep synchronous calls for both workflows to avoid issues with batch result ordering.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "Message Batches API processing can take up to 24 hours with no latency SLA, which is acceptable for overnight technical debt reports but unacceptable for blocking pre-merge checks where developers wait. This matches each workflow to the right API based on latency requirements.",
      "correct" : "C",
      "scenario" : "Claude Code for Continuous Integration",
      "situation" : "Your team wants to reduce API costs for automated analysis. Currently, synchronous Claude calls support two workflows: (1) a blocking pre-merge check that must complete before developers can merge, and (2) a technical debt report generated overnight for review the next morning. Your manager proposes moving both to the Message Batches API to save 50%. How should you evaluate this proposal?"
    },
    {
      "question" : "Which approach is most effective for the next iteration?",
      "globalN" : 31,
      "options" : [
        {
          "text" : "Write a JSON schema describing the expected output structure and validate Claude’s output against it after each iteration.",
          "correct" : false,
          "letter" : "A"
        },
        {
          "text" : "Provide 2–3 concrete input-output examples showing the expected transformation for representative API responses.",
          "correct" : true,
          "letter" : "B"
        },
        {
          "text" : "Rewrite requirements with more technical precision, specifying exact field mappings, nesting rules, and timestamp format strings.",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Ask Claude to explain its current understanding of the requirements to identify where interpretations diverge.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "Concrete input-output examples remove ambiguity inherent in prose descriptions by showing Claude the exact expected transformation results. This directly addresses the root cause—misinterpretation of textual requirements—by providing unambiguous patterns for field nesting and timestamp formatting.",
      "correct" : "B",
      "scenario" : "Code Generation with Claude Code",
      "situation" : "You asked Claude Code to implement a function that transforms API responses into an internal normalized format. After two iterations, the output structure still doesn’t match expectations—some fields are nested differently and timestamps are formatted incorrectly. You described requirements in prose, but Claude interprets them differently each time."
    },
    {
      "question" : "How should you approach this task?",
      "globalN" : 32,
      "options" : [
        {
          "text" : "Start in direct execution mode using incoming webhooks to match the existing one-way notification pattern.",
          "correct" : false,
          "letter" : "A"
        },
        {
          "text" : "Switch to planning mode to explore integration options and architectural implications, then present a recommendation before implementation.",
          "correct" : true,
          "letter" : "B"
        },
        {
          "text" : "Start in direct execution mode by scaffolding a Slack channel class using existing patterns, deferring the integration method decision.",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Start in direct execution mode using a bot-token approach to ensure delivery confirmation is possible.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "Slack integration has multiple valid approaches with significantly different architectural implications, and requirements are ambiguous. Planning mode lets you evaluate trade-offs among webhooks, bot tokens, and Slack Apps and align on an approach before implementation.",
      "correct" : "B",
      "scenario" : "Code Generation with Claude Code",
      "situation" : "You need to add Slack as a new notification channel. The existing codebase has clear, established patterns for email, SMS, and push channels. However, Slack’s API offers fundamentally different integration approaches—incoming webhooks (simple, one-way), bot tokens (support delivery confirmation and programmatic control), or Slack Apps (two-way events, requires workspace approval). Your task says “add Slack support” without specifying integration method or requiring advanced features like delivery tracking."
    },
    {
      "question" : "Which restructuring approach is most effective?",
      "globalN" : 33,
      "options" : [
        {
          "text" : "Move all guidance into separate Skills files organized by workflow type, leaving only a brief project description in CLAUDE.md.",
          "correct" : false,
          "letter" : "A"
        },
        {
          "text" : "Keep everything in CLAUDE.md but use `@import` syntax to organize into separately maintained files by category.",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Split CLAUDE.md into files under `.claude/rules/` with path-bound glob patterns so each rule loads only for the relevant file types.",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Keep universal standards in CLAUDE.md and create Skills for workflow-specific guidance (PR review, deploy, migrations) with trigger keywords.",
          "correct" : true,
          "letter" : "D"
        }
      ],
      "explanation" : "CLAUDE.md content loads in every session, ensuring coding standards and testing conventions always apply, while Skills are invoked on demand when Claude detects trigger keywords—ideal for workflow-specific guidance like PR review, deployment, and migrations.",
      "correct" : "D",
      "scenario" : "Code Generation with Claude Code",
      "situation" : "Your CLAUDE.md file has grown to 400+ lines containing coding standards, testing conventions, a detailed PR review checklist, deployment instructions, and database migration procedures. You want Claude to always follow coding standards and testing conventions, but apply PR review, deploy, and migration guidance only when doing those tasks."
    },
    {
      "question" : "Which approach should you choose?",
      "globalN" : 34,
      "options" : [
        {
          "text" : "Switch to planning mode to explore the codebase, understand dependencies, and design the implementation approach before making changes.",
          "correct" : true,
          "letter" : "A"
        },
        {
          "text" : "Start in direct execution mode and switch to planning only after encountering unexpected complexity during implementation.",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Start in direct execution mode and make incremental changes, letting implementation reveal natural service boundaries.",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Use direct execution with detailed upfront instructions that specify each service structure.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "Planning mode is the right strategy for complex architectural restructuring like splitting a monolith: it allows safe exploration and informed decisions about boundaries before committing to potentially expensive changes across many files.",
      "correct" : "A",
      "scenario" : "Code Generation with Claude Code",
      "situation" : "You’re tasked with restructuring your team’s monolithic application into microservices. This impacts changes across dozens of files and requires decisions about service boundaries and module dependencies."
    },
    {
      "question" : "How do you most effectively fix this while keeping full analysis capabilities?",
      "globalN" : 35,
      "options" : [
        {
          "text" : "Add `context: fork` in the skill frontmatter to run the analysis in an isolated subagent context.",
          "correct" : true,
          "letter" : "A"
        },
        {
          "text" : "Add `model: haiku` in frontmatter to use a faster, cheaper model for analysis.",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Split the skill into three smaller skills, each producing less output.",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Add instructions to the skill to compress all results into a short summary before displaying them.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "`context: fork` runs the analysis in an isolated subagent context so the large output does not pollute the main session’s context window and Claude does not lose track of the original task. It preserves full analysis capability while keeping the main session responsive.",
      "correct" : "A",
      "scenario" : "Code Generation with Claude Code",
      "situation" : "Your team created a `/analyze-codebase` skill that performs deep code analysis—dependency scanning, test coverage counts, and code quality metrics. After running the command, team members report Claude becomes less responsive in the session and loses the context of the original task."
    },
    {
      "question" : "What do you recommend?",
      "globalN" : 36,
      "options" : [
        {
          "text" : "Create a personal version under `~/.claude/skills/` with a different name, e.g., `/my-commit`.",
          "correct" : false,
          "letter" : "A"
        },
        {
          "text" : "Add conditional logic based on username in the project skill frontmatter.",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Create a personal version at `~/.claude/skills/commit/SKILL.md` with the same name.",
          "correct" : true,
          "letter" : "C"
        },
        {
          "text" : "Set `override: true` in the personal skill frontmatter to prioritize it over the project version.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "Personal skills take precedence over project skills with the same name. A personal skill at `~/.claude/skills/commit/SKILL.md` will override the team’s project skill, allowing the developer to customize their workflow while maintaining the familiar `/commit` command name for their personal use. This approach is better than option A because it preserves the original command name, improving the developer’s workflow without affecting teammates.",
      "correct" : "C",
      "scenario" : "Code Generation with Claude Code",
      "situation" : "Your team uses a `/commit` skill in `.claude/skills/commit/SKILL.md`. A developer wants to customize it for their personal workflow (different commit message format, extra checks) without affecting teammates."
    },
    {
      "question" : "What is the most likely cause and fix?",
      "globalN" : 37,
      "options" : [
        {
          "text" : "The guidance lives in the original developers’ user-level `~/.claude/CLAUDE.md` files, not in the project `.claude/CLAUDE.md`. Move the instruction to the project-level file so all team members receive it.",
          "correct" : true,
          "letter" : "A"
        },
        {
          "text" : "The new developer’s `~/.claude/CLAUDE.md` contains conflicting instructions overriding project settings; they should delete the conflicting section.",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Claude Code learns per-user preferences over time; the new developer must repeat the requirement until Claude “remembers” it.",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Claude Code caches CLAUDE.md after first read; original developers use cached versions. Everyone should clear the Claude Code cache.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "If the guidance was added only to the original developers’ user-level configs and not to the project-level `.claude/CLAUDE.md`, new team members won’t receive it. Moving it to the project-level configuration ensures all current and future team members automatically get the guidance.",
      "correct" : "A",
      "scenario" : "Code Generation with Claude Code",
      "situation" : "Your team has used Claude Code for months. Recently, three developers report Claude follows the guidance “always include comprehensive error handling,” but a fourth developer who just joined says Claude does not follow it. All four work in the same repo and have up-to-date code."
    },
    {
      "question" : "Which configuration approach is most effective?",
      "globalN" : 38,
      "options" : [
        {
          "text" : "Add endpoint examples and pattern documentation to the project CLAUDE.md so they are always available.",
          "correct" : false,
          "letter" : "A"
        },
        {
          "text" : "Manually reference endpoint examples in every generation request by copying code into the prompt.",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Configure path-specific rules in `.claude/rules/api/` that include endpoint examples and activate when working in the API directory.",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Create a skill that references the endpoint examples and contains pattern-following instructions, invoked on demand via a slash command.",
          "correct" : true,
          "letter" : "D"
        }
      ],
      "explanation" : "A skill invoked on demand loads the example context only when generating new endpoints, not during unrelated tasks like debugging or review. This keeps the main context clean while preserving high-quality generation when needed.",
      "correct" : "D",
      "scenario" : "Code Generation with Claude Code",
      "situation" : "You find that including 2–3 full endpoint implementation examples as context significantly improves consistency when generating new API endpoints. However, this context is useful only when creating new endpoints—not when debugging, reviewing code, or other work in the API directory."
    },
    {
      "question" : "Which configuration approach fixes all three problems?",
      "globalN" : 39,
      "options" : [
        {
          "text" : "Use positional parameters `$1` and `$2` instead of `$ARGUMENTS` to enforce specific inputs, include explicit schema file references via `@` syntax for context control, and add a frontmatter description warning about destructive operations.",
          "correct" : false,
          "letter" : "A"
        },
        {
          "text" : "Add `argument-hint` in frontmatter to request required parameters, use `context: fork` to isolate execution, and restrict `allowed-tools` to file-write operations.",
          "correct" : true,
          "letter" : "B"
        },
        {
          "text" : "Split into `/migration-create` and `/migration-apply` skills, add validation instructions to request migration name if missing, and use different `allowed-tools` scopes for each.",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Add validation instructions in the skill SKILL.md to ensure `$ARGUMENTS` is a valid name, add prompts to ignore prior conversation context, and list prohibited operations to avoid.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "This uses three separate configuration features to address each problem: `argument-hint` improves argument entry and reduces missing arguments, `context: fork` prevents context leakage from prior conversations, and `allowed-tools` constrains the skill to safe file-writing operations, preventing destructive actions.",
      "correct" : "B",
      "scenario" : "Code Generation with Claude Code",
      "situation" : "Your team created a `/migration` skill that generates database migration files. It takes the migration name via `$ARGUMENTS`. In production you observe three issues: (1) developers often run the skill without arguments, causing poorly named files, (2) the skill sometimes uses database schema details from unrelated prior conversations, and (3) a developer accidentally ran destructive test cleanup when the skill had broad tool access."
    },
    {
      "question" : "What is the most supported way to ensure Claude automatically applies the correct conventions when generating code?",
      "globalN" : 40,
      "options" : [
        {
          "text" : "Put all conventions in the root CLAUDE.md under headings for each area and rely on Claude to infer which section applies.",
          "correct" : false,
          "letter" : "A"
        },
        {
          "text" : "Create skills in `.claude/skills/` for each code type, embedding conventions in each SKILL.md.",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Place a separate CLAUDE.md file in each subdirectory containing conventions for that area.",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Create rule files under `.claude/rules/` with YAML frontmatter specifying glob patterns to conditionally apply conventions based on file paths.",
          "correct" : true,
          "letter" : "D"
        }
      ],
      "explanation" : "`.claude/rules/` files with YAML frontmatter and glob patterns (e.g., `**/*.test.tsx`, `src/api/**/*.ts`) enable deterministic, path-based convention application regardless of directory structure. This is the most supported approach for cross-cutting patterns like distributed test files.",
      "correct" : "D",
      "scenario" : "Code Generation with Claude Code",
      "situation" : "Your codebase contains areas with different coding conventions: React components use functional style with hooks, API handlers use async/await with specific error handling, and database models follow the repository pattern. Test files are distributed across the codebase next to the code under test (e.g., `Button.test.tsx` next to `Button.tsx`), and you want all tests to follow the same conventions regardless of location."
    },
    {
      "question" : "Where should you create the command file?",
      "globalN" : 41,
      "options" : [
        {
          "text" : "In `~/.claude/commands/` in each developer’s home directory.",
          "correct" : false,
          "letter" : "A"
        },
        {
          "text" : "In the project repository under `.claude/commands/`.",
          "correct" : true,
          "letter" : "B"
        },
        {
          "text" : "In `.claude/config.json` as an array of commands.",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "In the root project CLAUDE.md.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "Putting custom slash commands under `.claude/commands/` inside the project repository ensures they are version-controlled and automatically available to every developer who clones or updates the repo. This is the intended location for project-level custom commands in Claude Code.",
      "correct" : "B",
      "scenario" : "Code Generation with Claude Code",
      "situation" : "You want to create a custom slash command `/review` that runs your team’s standard code review checklist. It should be available to every developer when they clone or update the repository."
    },
    {
      "question" : "What approach does Claude Code support to organize project-level instructions into focused topical modules?",
      "globalN" : 42,
      "options" : [
        {
          "text" : "Define a `.claude/config.yaml` mapping file patterns to specific sections inside CLAUDE.md.",
          "correct" : false,
          "letter" : "A"
        },
        {
          "text" : "Create separate Markdown files in `.claude/rules/`, each covering one topic (e.g., `testing.md`, `api-conventions.md`).",
          "correct" : true,
          "letter" : "B"
        },
        {
          "text" : "Split instructions into README.md files in relevant subdirectories that Claude automatically loads as instructions.",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Create multiple files named CLAUDE.md at different levels of the directory tree, each overriding parent instructions.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "Claude Code supports a `.claude/rules/` directory where you can create separate Markdown files for topical guidance (e.g., `testing.md`, `api-conventions.md`), allowing teams to organize large instruction sets into focused, maintainable modules.",
      "correct" : "B",
      "scenario" : "Code Generation with Claude Code",
      "situation" : "Your team’s CLAUDE.md grew beyond 500 lines mixing TypeScript conventions, testing guidance, API patterns, and deployment procedures. Developers find it hard to locate and update the right sections."
    },
    {
      "question" : "How should you most effectively configure this skill?",
      "globalN" : 43,
      "options" : [
        {
          "text" : "Use the `!` prefix in the skill to run exploration logic as a bash subprocess.",
          "correct" : false,
          "letter" : "A"
        },
        {
          "text" : "Add `context: fork` in the skill frontmatter.",
          "correct" : true,
          "letter" : "B"
        },
        {
          "text" : "Split into two skills—`/explore-start` and `/explore-end`—to mark boundaries when exploration context should be discarded.",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Create the skill in `~/.claude/skills/` instead of `.claude/skills/`.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "`context: fork` runs the skill in an isolated subagent context so exploration discussions do not pollute the main conversation history. This prevents rejected approaches and brainstorming context from influencing subsequent implementation work.",
      "correct" : "B",
      "scenario" : "Code Generation with Claude Code",
      "situation" : "You create a custom skill `/explore-alternatives` that your team uses to brainstorm and evaluate implementation approaches before choosing one. Developers report that after running the skill, subsequent Claude responses are influenced by the alternatives discussion—sometimes referencing rejected approaches or retaining exploration context that interferes with actual implementation."
    },
    {
      "question" : "Which configuration approach is most effective?",
      "globalN" : 44,
      "options" : [
        {
          "text" : "Have each developer add the server in user scope via `claude mcp add --scope user`.",
          "correct" : false,
          "letter" : "A"
        },
        {
          "text" : "Create an MCP server wrapper that reads tokens from a `.env` file and proxies GitHub API calls, then add the wrapper to the project `.mcp.json`.",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Add the server to the project `.mcp.json` using environment variable substitution (`${GITHUB_TOKEN}`) for auth and document the required environment variable in the project README.",
          "correct" : true,
          "letter" : "C"
        },
        {
          "text" : "Configure the server in project scope with a placeholder token, then tell developers to override it in their local config.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "A project `.mcp.json` with environment variable substitution is idiomatic: it provides a single version-controlled source of truth for MCP configuration while letting each developer supply credentials via environment variables. Documenting the variable makes onboarding easy without committing secrets.",
      "correct" : "C",
      "scenario" : "Code Generation with Claude Code",
      "situation" : "Your team wants to add a GitHub MCP server for searching PRs and checking CI status via Claude Code. Each of six developers has their own personal GitHub access token. You want consistent tooling across the team without committing credentials to version control."
    },
    {
      "question" : "Which approach is most effective to complete the task while maintaining implementation consistency?",
      "globalN" : 45,
      "options" : [
        {
          "text" : "Use an Explore subagent for Phase 1 to isolate verbose discovery output and return a summary, then continue Phases 2–3 in the main conversation.",
          "correct" : true,
          "letter" : "A"
        },
        {
          "text" : "Do all phases in the main conversation, periodically using `/compact` to reduce context usage while moving through files.",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Switch to headless mode with `--continue`, passing explicit context summaries between batch calls to maintain continuity.",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Define the error-handling pattern in CLAUDE.md, then process files in batches across multiple sessions relying on the shared memory file for consistency.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "An Explore subagent isolates the verbose discovery output in a separate context and returns only a concise summary to the main conversation. This preserves the main context window for the collaborative design and consistent implementation phases where retained context is most valuable.",
      "correct" : "A",
      "scenario" : "Code Generation with Claude Code",
      "situation" : "You’re adding error-handling wrappers around external API calls across a 120-file codebase. The work has three phases: (1) discover all call sites and patterns, (2) collaboratively design the error-handling approach, and (3) implement wrappers consistently. In Phase 1, Claude generates large output listing hundreds of call sites with context, quickly filling the context window before discovery finishes."
    },
    {
      "question" : "What should you check first?",
      "globalN" : 46,
      "options" : [
        {
          "text" : "Implement a preprocessing classifier to detect order-related requests and route them directly to `lookup_order`.",
          "correct" : false,
          "letter" : "A"
        },
        {
          "text" : "Reduce the number of tools available to the agent to simplify choice.",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Add few-shot examples to the system prompt covering all possible order request patterns to improve tool selection.",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Check the tool descriptions to ensure they clearly differentiate each tool’s purpose.",
          "correct" : true,
          "letter" : "D"
        }
      ],
      "explanation" : "Tool descriptions are the primary input the model uses to decide which tool to call. When an agent consistently picks the wrong tool, the first diagnostic step is to verify that tool descriptions clearly separate each tool’s purpose and usage boundaries.",
      "correct" : "D",
      "scenario" : "Customer Support Agent",
      "situation" : "While testing, you notice the agent often calls `get_customer` when users ask about order status, even though `lookup_order` would be more appropriate. What should you check first to address this problem?"
    },
    {
      "question" : "What approach is most effective?",
      "globalN" : 47,
      "options" : [
        {
          "text" : "Implement a preprocessing layer that uses a separate model call to decompose multi-issue messages into separate requests, handle each independently, and merge results.",
          "correct" : false,
          "letter" : "A"
        },
        {
          "text" : "Combine related tools into fewer universal tools.",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Add few-shot examples to the prompt demonstrating correct reasoning and tool sequencing for multi-issue requests.",
          "correct" : true,
          "letter" : "C"
        },
        {
          "text" : "Implement response validation that detects incomplete answers and automatically reprompts the agent to resolve missed issues.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "Few-shot examples that demonstrate correct reasoning and tool sequencing for multi-issue requests are most effective because the agent already performs well on single issues—what it needs is guidance on the pattern for decomposing and routing multiple issues and keeping parameters separated.",
      "correct" : "C",
      "scenario" : "Customer Support Agent",
      "situation" : "Your agent handles single-issue requests with 94% accuracy (e.g., “I need a refund for order #1234”). But when customers include multiple issues in one message (e.g., “I need a refund for order #1234 and also want to update the shipping address for order #5678”), tool selection accuracy drops to 58%. The agent usually solves only one issue or mixes parameters across requests. What approach most effectively improves reliability for multi-issue requests?"
    },
    {
      "question" : "What change is most effective?",
      "globalN" : 48,
      "options" : [
        {
          "text" : "Add explicit verification checkpoints between stages, requiring the agent to record progress after resolving each issue before moving to the next.",
          "correct" : false,
          "letter" : "A"
        },
        {
          "text" : "Reduce the number of tools by combining `get_customer`, `lookup_order`, and billing-related tools into a single `investigate_issue` tool.",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Decompose the request into separate issues, then investigate each in parallel using shared customer context before synthesizing a final resolution.",
          "correct" : true,
          "letter" : "C"
        },
        {
          "text" : "Add few-shot examples to the system prompt demonstrating ideal tool-call sequences for various multi-faceted billing scenarios.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "Decomposing into separate issues and investigating in parallel with shared customer context fixes both key problems: it eliminates redundant data retrieval by reusing shared context across issues and reduces total tool-call loops by parallelizing investigation before synthesizing a single resolution.",
      "correct" : "C",
      "scenario" : "Customer Support Agent",
      "situation" : "Production logs show that for simple requests like “refund for order #1234,” your agent resolves the issue in 3–4 tool calls with 91% success. But for complex requests like “I was billed twice, my discount didn’t apply, and I want to cancel,” the agent averages 12+ tool calls with only 54% success—often investigating issues sequentially and fetching redundant customer data for each. What change most effectively improves handling of complex requests?"
    },
    {
      "question" : "What is the most effective way to improve escalation calibration?",
      "globalN" : 49,
      "options" : [
        {
          "text" : "Require the agent to self-rate confidence on a 1–10 scale before each response and automatically route to humans when confidence drops below a threshold.",
          "correct" : false,
          "letter" : "A"
        },
        {
          "text" : "Deploy a separate classifier model trained on historical tickets to predict which requests need escalation before the main agent starts processing.",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Add explicit escalation criteria to the system prompt with few-shot examples showing when to escalate versus resolve autonomously.",
          "correct" : true,
          "letter" : "C"
        },
        {
          "text" : "Implement sentiment analysis to determine customer frustration level and automatically escalate past a negative sentiment threshold.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "Explicit escalation criteria with few-shot examples directly address the root cause—unclear decision boundaries between simple and complex cases. It’s the most proportional, effective first intervention that teaches the agent when to escalate and when to resolve autonomously without extra infrastructure.",
      "correct" : "C",
      "scenario" : "Customer Support Agent",
      "situation" : "Your agent achieves 55% first-contact resolution, well below the 80% target. Logs show it escalates simple cases (standard replacements for damaged goods with photo proof) while trying to handle complex situations requiring policy exceptions autonomously. What is the most effective way to improve escalation calibration?"
    },
    {
      "question" : "Which situation is most justified for escalation?",
      "globalN" : 50,
      "options" : [
        {
          "text" : "A customer wants to cancel an order shipped yesterday and arriving tomorrow. The agent should escalate because the customer might change their mind after receiving the package.",
          "correct" : false,
          "letter" : "A"
        },
        {
          "text" : "A customer claims they didn’t receive an order, but tracking shows it was delivered and signed for at their address three days ago. The agent should escalate because presenting contradictory evidence could harm the customer relationship.",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "A customer requests competitor price matching. Your policies allow price adjustments for price drops on your own site within 14 days, but say nothing about competitor prices. The agent should escalate for policy interpretation.",
          "correct" : true,
          "letter" : "C"
        },
        {
          "text" : "A customer message contains both a billing question and a product return. The agent should escalate so a human can coordinate both issues in one interaction.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "This is a genuine policy gap: company rules cover price drops on your own site but do not address competitor price matching. The agent must not invent policy and should escalate for human judgment on how to interpret or extend existing rules.",
      "correct" : "C",
      "scenario" : "Customer Support Agent",
      "situation" : "After calling `get_customer` and `lookup_order`, the agent has all available system data but still faces uncertainty. Which situation is the most justified trigger for calling `escalate_to_human`?"
    },
    {
      "question" : "What change is most effective?",
      "globalN" : 51,
      "options" : [
        {
          "text" : "Add few-shot examples showing that the agent always calls `get_customer` first, even when customers voluntarily provide order details.",
          "correct" : false,
          "letter" : "A"
        },
        {
          "text" : "Implement a routing classifier that analyzes each request and enables only a subset of tools appropriate for that request type.",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Add a programmatic precondition that blocks `lookup_order` and `process_refund` until `get_customer` returns a verified customer identifier.",
          "correct" : true,
          "letter" : "C"
        },
        {
          "text" : "Strengthen the system prompt stating that customer verification via `get_customer` is mandatory before any order operations.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "A programmatic precondition provides a deterministic guarantee that required sequencing is followed. It’s the most effective approach because it eliminates the possibility of skipping verification, regardless of LLM behavior.",
      "correct" : "C",
      "scenario" : "Customer Support Agent",
      "situation" : "Production logs show that in 12% of cases your agent skips `get_customer` and calls `lookup_order` directly using only the customer-provided name, sometimes leading to misidentified accounts and incorrect refunds. What change most effectively fixes this reliability problem?"
    },
    {
      "question" : "What approach is most effective?",
      "globalN" : 52,
      "options" : [
        {
          "text" : "Add a self-critique stage where the agent evaluates a draft response for completeness—ensuring it resolves the customer’s issue, includes relevant context, and anticipates follow-up questions.",
          "correct" : true,
          "letter" : "A"
        },
        {
          "text" : "Add a confirmation stage where the agent asks “Does this fully resolve your issue?” before closing, allowing customers to request additional information if needed.",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Upgrade the model from Haiku to Sonnet for complex cases, routing based on a defined complexity metric.",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Implement few-shot examples in the system prompt showing complete explanations for five common complex case types, demonstrating how to include policy context, timelines, and next steps.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "A self-critique stage (the evaluator-optimizer pattern) directly addresses inconsistent explanation completeness by forcing the agent to assess its own draft against concrete criteria—such as policy context, timelines, and next steps—before presenting it. This catches case-specific gaps without human oversight.",
      "correct" : "A",
      "scenario" : "Customer Support Agent",
      "situation" : "Production metrics show that when resolving complex billing disputes or multi-order returns, customer satisfaction scores are 15% lower than for simple cases—even when the resolution is technically correct. Root-cause analysis shows the agent provides accurate solutions but inconsistently explains rationale: sometimes omitting relevant policy details, sometimes missing timeline info or next steps. The specific context gaps vary case by case. You want to improve solution quality without adding human oversight. What approach is most effective?"
    },
    {
      "question" : "What is the most effective way to reduce loops?",
      "globalN" : 53,
      "options" : [
        {
          "text" : "Implement speculative execution that automatically calls likely-needed tools in parallel with any requested tool and returns all results regardless of what was requested.",
          "correct" : false,
          "letter" : "A"
        },
        {
          "text" : "Increase `max_tokens` to give Claude more room to plan and naturally combine tool requests.",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Create composite tools like `get_customer_with_orders` that bundle common lookup combinations into single calls.",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Instruct Claude in the prompt to bundle tool requests into one turn and return all results together before the next API call.",
          "correct" : true,
          "letter" : "D"
        }
      ],
      "explanation" : "Prompting Claude to bundle related tool requests into a single turn leverages its native ability to request multiple tools at once. It directly fixes the sequential-call pattern with minimal architectural change.",
      "correct" : "D",
      "scenario" : "Customer Support Agent",
      "situation" : "Production metrics show your agent averages 4+ API loops per resolution. Analysis reveals Claude often requests `get_customer` and `lookup_order` in separate sequential turns even when both are needed initially. What is the most effective way to reduce the number of loops?"
    },
    {
      "question" : "What fix is most effective?",
      "globalN" : 54,
      "options" : [
        {
          "text" : "Increase the summarization threshold from 70% to 85% so conversations have more room before summarization triggers.",
          "correct" : false,
          "letter" : "A"
        },
        {
          "text" : "Store full conversation history in external storage and implement retrieval when the agent detects references like “as I mentioned.”",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Extract transactional facts (amounts, dates, order numbers) into a persistent “case facts” block included in every prompt outside the summarized history.",
          "correct" : true,
          "letter" : "C"
        },
        {
          "text" : "Revise the summarization prompt to explicitly preserve all numbers, percentages, dates, and customer-stated expectations verbatim.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "Summarization inherently loses precise details. Extracting transactional facts into a structured “case facts” block outside the summarized history preserves critical information so it’s reliably available in every prompt regardless of how many turns have been summarized.",
      "correct" : "C",
      "scenario" : "Customer Support Agent",
      "situation" : "Production logs show a pattern: customers reference specific amounts (e.g., “the 15% discount I mentioned”), but the agent responds with incorrect values. Investigation shows these details were mentioned 20+ turns ago and condensed into vague summaries like “promotional pricing was discussed.” What fix is most effective?"
    },
    {
      "question" : "How should you address this?",
      "globalN" : 55,
      "options" : [
        {
          "text" : "Implement a confidence scoring system that acts autonomously above 85% confidence and requests clarification below the threshold.",
          "correct" : false,
          "letter" : "A"
        },
        {
          "text" : "Instruct Claude to request an additional identifier (email, phone, or order number) when `get_customer` returns multiple matches before taking any customer-specific action.",
          "correct" : true,
          "letter" : "B"
        },
        {
          "text" : "Modify `get_customer` to return only a single most-likely match based on a ranking algorithm, eliminating ambiguity.",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Add few-shot examples to the prompt demonstrating correct reasoning and tool sequencing for ambiguous matches.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "Asking the user for an additional identifier is the most reliable way to resolve ambiguity because the user has definitive knowledge of their identity. One extra conversational turn is a small price to pay to eliminate a 15% error rate caused by choosing the wrong account.",
      "correct" : "B",
      "scenario" : "Customer Support Agent",
      "situation" : "Your `get_customer` tool returns all matches when searching by name. Currently, when there are multiple results, Claude picks the customer with the most recent order, but production data shows this selects the wrong account 15% of the time for ambiguous matches. How should you address this?"
    },
    {
      "question" : "What is the most likely root cause?",
      "globalN" : 56,
      "options" : [
        {
          "text" : "The system prompt contains keyword-sensitive instructions that steer behavior based on terms like “account,” creating unintended tool-selection patterns.",
          "correct" : true,
          "letter" : "A"
        },
        {
          "text" : "The model’s base training creates associations between “account” terminology and customer-related operations that override tool descriptions.",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "The model needs more training data on multi-concept messages and should be fine-tuned on examples containing both account and order terminology.",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Tool descriptions need additional negative examples specifying when NOT to use each tool to prevent this keyword-induced confusion.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "The systematic keyword-driven pattern (78% vs 93%) strongly indicates explicit routing logic in the system prompt reacting to the word “account” and steering the agent toward customer-related tools. Since tool descriptions are already clear, the discrepancy points to prompt-level instructions creating unintended behavioral steering.",
      "correct" : "A",
      "scenario" : "Customer Support Agent",
      "situation" : "Production logs show a consistent pattern: when customers include the word “account” in their message (e.g., “I want to check my account for an order I made yesterday”), the agent calls `get_customer` first 78% of the time. When customers phrase similar requests without “account” (e.g., “I want to check an order I made yesterday”), it calls `lookup_order` first 93% of the time. Tool descriptions are clear and unambiguous. What is the most likely root cause of this discrepancy?"
    },
    {
      "question" : "What is the most effective first step?",
      "globalN" : 57,
      "options" : [
        {
          "text" : "Implement a routing layer that analyzes user input before each turn and preselects the correct tool based on detected keywords and ID patterns.",
          "correct" : false,
          "letter" : "A"
        },
        {
          "text" : "Combine both tools into a single `lookup_entity` that accepts any identifier and internally decides which backend to query.",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Add few-shot examples to the system prompt demonstrating correct tool selection patterns, with 5–8 examples routing order-related queries to `lookup_order`.",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Expand each tool’s description to include input formats, example queries, edge cases, and boundaries explaining when to use it versus similar tools.",
          "correct" : true,
          "letter" : "D"
        }
      ],
      "explanation" : "Expanding tool descriptions with input formats, example queries, edge cases, and clear boundaries directly fixes the root cause—minimal descriptions that don’t give the LLM enough information to distinguish similar tools. It’s a low-effort, high-impact first step that improves the primary mechanism the LLM uses for tool selection.",
      "correct" : "D",
      "scenario" : "Customer Support Agent",
      "situation" : "Production logs show the agent often calls `get_customer` when users ask about orders (e.g., “check my order #12345”) instead of calling `lookup_order`. Both tools have minimal descriptions (“Gets customer information” / “Gets order details”) and accept similar-looking identifier formats. What is the most effective first step to improve tool selection reliability?"
    },
    {
      "question" : "What determines this decision?",
      "globalN" : 58,
      "options" : [
        {
          "text" : "Check the `stop_reason` field in Claude’s response—continue if it is `tool_use` and stop if it is `end_turn`.",
          "correct" : true,
          "letter" : "A"
        },
        {
          "text" : "Parse Claude’s text for phrases like “I’m done” or “Can I help with anything else?”—natural language signals indicate task completion.",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Set a maximum iteration count (e.g., 10 calls) and stop when reached, regardless of whether Claude indicates more work is needed.",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Check whether the response contains assistant text content—if Claude generated explanatory text, the loop should terminate.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "`stop_reason` is Claude’s explicit structured signal for loop control: `tool_use` indicates Claude wants to run a tool and receive results back, while `end_turn` indicates Claude has completed its response and the loop should end.",
      "correct" : "A",
      "scenario" : "Customer Support Agent",
      "situation" : "You are implementing the agent loop for your support agent. After each Claude API call, you must decide whether to continue the loop (run requested tools and call Claude again) or stop (present the final answer to the customer). What determines this decision?"
    },
    {
      "question" : "Which approach is most maintainable?",
      "globalN" : 59,
      "options" : [
        {
          "text" : "Use a PostToolUse hook to intercept tool outputs and apply formatting transformations before the agent processes them.",
          "correct" : true,
          "letter" : "A"
        },
        {
          "text" : "Modify tools you control to return human-readable formats and create wrappers for third-party tools.",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Create a `normalize_data` tool that the agent calls after every data retrieval to transform values.",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Add detailed format documentation to the system prompt explaining each tool’s data conventions.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "A PostToolUse hook provides a centralized, deterministic point to intercept and normalize all tool outputs—including third-party MCP server data—before the agent processes them. It’s more maintainable because transformations live in code and apply uniformly, rather than relying on LLM interpretation.",
      "correct" : "A",
      "scenario" : "Customer Support Agent",
      "situation" : "Production logs show the agent misinterprets outputs from your MCP tools: Unix timestamps from `get_customer`, ISO 8601 dates from `lookup_order`, and numeric status codes (1=pending, 2=shipped). Some tools are third-party MCP servers you cannot modify. Which approach to data format normalization is most maintainable?"
    },
    {
      "question" : "Which approach is most effective?",
      "globalN" : 60,
      "options" : [
        {
          "text" : "Add explicit “use when” and “don’t use when” guidance in each tool description covering ambiguous cases.",
          "correct" : false,
          "letter" : "A"
        },
        {
          "text" : "Add examples grouped by tool—all `get_customer` scenarios together, then all `lookup_order` scenarios.",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Add 4–6 examples targeted at ambiguous scenarios, each with rationale for why one tool was chosen over plausible alternatives.",
          "correct" : true,
          "letter" : "C"
        },
        {
          "text" : "Add 10–15 examples of clear, unambiguous requests demonstrating correct tool choice for typical scenarios for each tool.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "Targeting few-shot examples at the specific ambiguous scenarios where errors occur, with explicit rationale for why one tool is preferable to alternatives, teaches the model the comparative decision process needed for edge cases. This is more effective than generic examples or declarative rules.",
      "correct" : "C",
      "scenario" : "Customer Support Agent",
      "situation" : "Production logs show the agent sometimes chooses `get_customer` when `lookup_order` would be more appropriate, especially for ambiguous queries like “I need help with my recent purchase.” You decide to add few-shot examples to the system prompt to improve tool selection. Which approach most effectively addresses the problem?"
    },
    {
      "question" : "Which change is most effective?",
      "globalN" : 101,
      "options" : [
        {
          "text" : "Add a programmatic precondition that blocks `lookup_order` and `process_refund` until an ID is obtained from `get_customer`",
          "correct" : true,
          "letter" : "A"
        },
        {
          "text" : "Improve the system prompt",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Add few-shot examples",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Implement a routing classifier",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "When critical business logic requires a specific tool sequence, software provides **deterministic guarantees** that prompt-based approaches (B, C) cannot. D addresses availability, not tool ordering.",
      "correct" : "A",
      "scenario" : "Worked Examples",
      "situation" : "[Customer Support Agent] Data shows that in 12% of cases the agent skips `get_customer` and calls `lookup_order` using only the customer’s name, which leads to incorrect refunds."
    },
    {
      "question" : "What is the first step?",
      "globalN" : 102,
      "options" : [
        {
          "text" : "Few-shot examples",
          "correct" : false,
          "letter" : "A"
        },
        {
          "text" : "Expand each tool’s description with input formats, examples, and boundaries",
          "correct" : true,
          "letter" : "B"
        },
        {
          "text" : "Add a routing layer",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Merge the tools",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "Tool descriptions are the model’s primary selection mechanism. This is the lowest-effort, highest-impact fix. A adds tokens without addressing the root cause. C is overengineering. D requires more effort than justified.",
      "correct" : "B",
      "scenario" : "Worked Examples",
      "situation" : "[Customer Support Agent] The agent often calls `get_customer` instead of `lookup_order` for order-related questions. Tool descriptions are minimal and similar."
    },
    {
      "question" : "How do you improve calibration?",
      "globalN" : 103,
      "options" : [
        {
          "text" : "Add explicit escalation criteria with few-shot examples",
          "correct" : true,
          "letter" : "A"
        },
        {
          "text" : "Self-rated confidence (1–10) with automatic escalation",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "A separate classifier trained on historical data",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Sentiment analysis",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "It directly addresses the root cause—unclear decision boundaries. B is unreliable (the model can be confidently wrong). C is overengineering. D solves a different problem (mood != complexity).",
      "correct" : "A",
      "scenario" : "Worked Examples",
      "situation" : "[Customer Support Agent] The agent resolves only 55% of issues with a target of 80%. It escalates simple cases and tries to handle complex policy exceptions autonomously."
    },
    {
      "question" : "Where should you create the command file?",
      "globalN" : 104,
      "options" : [
        {
          "text" : "`.claude/commands/` in the project repository",
          "correct" : true,
          "letter" : "A"
        },
        {
          "text" : "`~/.claude/commands/`",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Root `CLAUDE.md`",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "`.claude/config.json`",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "Project commands stored in `.claude/commands/` are version-controlled and automatically available to everyone. B is for personal commands. C is for instructions, not command definitions. D does not exist.",
      "correct" : "A",
      "scenario" : "Worked Examples",
      "situation" : "[Code Generation with Claude Code] You need a custom `/review` command for standard code review that is available to the whole team when they clone the repository."
    },
    {
      "question" : "What approach should you use?",
      "globalN" : 105,
      "options" : [
        {
          "text" : "Planning mode: explore the codebase, understand dependencies, design an approach",
          "correct" : true,
          "letter" : "A"
        },
        {
          "text" : "Direct execution incrementally",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Direct execution with detailed up-front instructions",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Direct execution and switch to planning when it gets hard",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "Planning mode is designed for large changes, multiple possible approaches, and architectural decisions. B risks expensive rework. C assumes you already know the structure. D is reactive.",
      "correct" : "A",
      "scenario" : "Worked Examples",
      "situation" : "[Code Generation with Claude Code] You need to restructure a monolith into microservices (dozens of files, service-boundary decisions)."
    },
    {
      "question" : "What approach should you use?",
      "globalN" : 106,
      "options" : [
        {
          "text" : "`.claude/rules/` files with YAML frontmatter and glob patterns",
          "correct" : true,
          "letter" : "A"
        },
        {
          "text" : "Put everything in the root CLAUDE.md",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Skills in `.claude/skills/`",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "CLAUDE.md in every directory",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "`.claude/rules/` with glob patterns (e.g., `**/*.test.tsx`) enables automatic convention application based on file paths—ideal for tests spread across the codebase. B relies on model inference. C is manual/on-demand. D does not work well when relevant files are in many directories.",
      "correct" : "A",
      "scenario" : "Worked Examples",
      "situation" : "[Code Generation with Claude Code] A codebase has different conventions across areas (React, API, database). Tests are co-located with code. You want conventions to be applied automatically."
    },
    {
      "question" : "What’s the cause?",
      "globalN" : 107,
      "options" : [
        {
          "text" : "The synthesis agent does not detect gaps",
          "correct" : false,
          "letter" : "A"
        },
        {
          "text" : "The coordinator decomposed the task too narrowly",
          "correct" : true,
          "letter" : "B"
        },
        {
          "text" : "The web search agent does not search thoroughly enough",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "The document analysis agent filters out non-visual sources",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "The logs show the coordinator decomposed “creative industries” only into visual subtopics, completely missing music, literature, and film. Subagents executed correctly—the issue is what they were assigned.",
      "correct" : "B",
      "scenario" : "Worked Examples",
      "situation" : "[Multi-agent Research System] The system researches “AI impact on creative industries,” but reports cover only visual art. The coordinator decomposed the topic into: “AI in digital art,” “AI in graphic design,” “AI in photography.”"
    },
    {
      "question" : "Which error propagation approach best enables intelligent recovery?",
      "globalN" : 108,
      "options" : [
        {
          "text" : "Return structured error context to the coordinator: failure type, query, partial results, and alternatives",
          "correct" : true,
          "letter" : "A"
        },
        {
          "text" : "Implement automatic retries with exponential backoff inside the subagent, then return a generic “search unavailable” status",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Catch the timeout inside the subagent and return an empty result set marked as success",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Propagate the timeout exception to a top-level handler that terminates the whole workflow",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "Structured error context gives the coordinator what it needs to decide whether to retry with a modified query, try an alternative approach, or continue with partial results. B hides context behind a generic status. C masks failure as success. D aborts the entire workflow unnecessarily.",
      "correct" : "A",
      "scenario" : "Worked Examples",
      "situation" : "[Multi-agent Research System] A web-search subagent times out while researching a complex topic. You need to design how error information is passed back to the coordinator."
    },
    {
      "question" : "How do you reduce overhead while maintaining reliability?",
      "globalN" : 109,
      "options" : [
        {
          "text" : "Give the synthesis agent a limited `verify_fact` tool for simple checks, and continue routing complex verification through the coordinator",
          "correct" : true,
          "letter" : "A"
        },
        {
          "text" : "Accumulate all verification needs into a batch and return them to the coordinator at the end",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Give the synthesis agent full access to all web-search tools",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Proactively cache additional context around each source",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "This applies the principle of least privilege: the synthesis agent gets exactly what it needs for the 85% common case (simple fact checks) while preserving the coordinator-mediated path for complex investigations. B introduces blocking dependencies (later synthesis steps may depend on earlier verified facts). C breaks separation of responsibilities. D relies on speculative caching that cannot reliably predict needs.",
      "correct" : "A",
      "scenario" : "Worked Examples",
      "situation" : "[Multi-agent Research System] The synthesis agent often needs to verify specific claims while merging results. Currently, when verification is needed, the synthesis agent hands control back to the coordinator, which calls the web-search agent and then re-runs synthesis with the new results. This adds 2–3 extra round trips per task and increases latency by 40%. Your assessment shows that 85% of these checks are simple fact checks (dates, names, statistics), while 15% require deeper investigation."
    },
    {
      "question" : "What is the correct approach?",
      "globalN" : 110,
      "options" : [
        {
          "text" : "Use the `-p` flag: `claude -p \"Analyze this pull request for security issues\"`",
          "correct" : true,
          "letter" : "A"
        },
        {
          "text" : "Set `CLAUDE_HEADLESS=true`",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Redirect stdin from `/dev/null`",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Use `--batch`",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "`-p` (or `--print`) is the documented way to run Claude Code in non-interactive mode. It processes the prompt, prints to stdout, and exits. The other options are either non-existent features or Unix workarounds.",
      "correct" : "A",
      "scenario" : "Worked Examples",
      "situation" : "[Claude Code for CI] A pipeline runs `claude \"Analyze this pull request for security issues\"`, but hangs waiting for interactive input."
    },
    {
      "question" : "How should you evaluate this proposal?",
      "globalN" : 111,
      "options" : [
        {
          "text" : "Use batch processing only for tech-debt reports; keep real-time calls for pre-merge checks",
          "correct" : true,
          "letter" : "A"
        },
        {
          "text" : "Move both workflows to batch processing and poll for completion",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Keep real-time calls for both to avoid ordering issues in batch results",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Move both to batch processing with a fallback to real time if a batch takes too long",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "The Message Batches API saves 50%, but processing time can be up to 24 hours with no guaranteed latency SLA. That makes it unsuitable for blocking pre-merge checks where developers are waiting, but ideal for overnight batch workloads like tech-debt reports.",
      "correct" : "A",
      "scenario" : "Worked Examples",
      "situation" : "[Claude Code for CI] The team wants to reduce API cost for automated analysis. Claude currently serves two workflows in real time: (1) a blocking pre-merge check that must complete before developers can merge a PR, and (2) a tech-debt report generated overnight for morning review. A manager proposes moving both to the Message Batches API to save 50%."
    },
    {
      "question" : "How should you restructure the review?",
      "globalN" : 112,
      "options" : [
        {
          "text" : "Split into focused passes: analyze each file individually for local issues, then run a separate integration pass for cross-file data flows",
          "correct" : true,
          "letter" : "A"
        },
        {
          "text" : "Require developers to split large PRs into submissions of 3–4 files",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Switch to a higher-tier model with a larger context window to review all 14 files in one pass",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Run three independent full-PR review passes and report only issues found in at least two runs",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "Focused passes directly address the root cause—attention dilution when processing many files at once. Per-file analysis ensures consistent depth, and a separate integration pass catches cross-file issues. B shifts burden to developers without improving the system. C is a misconception: larger context does not fix attention quality. D suppresses real bugs by requiring consensus across inconsistent detections.",
      "correct" : "A",
      "scenario" : "Worked Examples",
      "situation" : "[Multi-file Code Review] A pull request changes 14 files in an inventory tracking module. A single-pass review of all files produces inconsistent results: detailed comments for some files but superficial ones for others, missed obvious bugs, and contradictory feedback (a pattern is flagged as problematic in one file but approved in identical code in another file)."
    },
    {
      "question" : "What is the most reliable approach?",
      "globalN" : 61,
      "options" : [
        {
          "text" : "Add server-side validation that permits `dry_run=false` only when a `dry_run=true` call with identical parameters occurred within the past 60 seconds.",
          "correct" : false,
          "letter" : "A"
        },
        {
          "text" : "Annotate the tool as requiring confirmation and configure the orchestration layer to prompt the user for approval before forwarding any calls to annotated tools.",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Add detailed instructions and few-shot examples to the tool description requiring the agent to always call with `dry_run=true` first and wait for user confirmation before calling again.",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Replace with two tools: `preview_remove_member` returns impact details and a single-use confirmation token; `execute_remove_member` requires that token, binding execution to the preview.",
          "correct" : true,
          "letter" : "D"
        }
      ],
      "explanation" : "The two-tool token-binding approach makes it architecturally impossible to execute without a prior preview—the execute tool literally requires a token that only the preview tool can generate. This is the only approach that enforces the constraint at the code level rather than relying on LLM compliance with instructions (C), timing heuristics (A), or orchestration infrastructure (B).",
      "correct" : "D",
      "scenario" : "Conversational AI Architecture Patterns",
      "situation" : "Your `remove_team_member` tool uses a `dry_run: boolean` parameter for previewing impacts before execution. Production monitoring shows the agent bypasses the preview step by calling with `dry_run=false` directly. You need to ensure every removal is preceded by a preview that the user explicitly confirms."
    },
    {
      "question" : "How should you modify the tool's error handling?",
      "globalN" : 62,
      "options" : [
        {
          "text" : "Add few-shot examples to your system prompt demonstrating how to distinguish network errors from syntax errors.",
          "correct" : false,
          "letter" : "A"
        },
        {
          "text" : "Apply exponential backoff retry logic to all errors uniformly.",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Implement automatic retry with backoff for network timeouts inside the tool; return syntax errors immediately with parameter validation details.",
          "correct" : true,
          "letter" : "C"
        },
        {
          "text" : "Return all errors with a `retryable` boolean flag and error type details.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "Handling retries at the tool level for transient errors is the correct abstraction boundary—the tool has definitive knowledge of the error type and can implement deterministic retry logic without relying on the agent to interpret a flag (D) or follow prompt-level instructions (A). Uniform backoff (B) wastes time on syntax errors that will never succeed.",
      "correct" : "C",
      "scenario" : "Conversational AI Architecture Patterns",
      "situation" : "Production monitoring shows your `search_catalog` tool fails 12% of the time: 8% are network timeouts that succeed when retried, and 4% are query syntax errors that never succeed regardless of retries. Currently both error types are returned identically, causing wasted retries."
    },
    {
      "question" : "Which approach best ensures the recommendation aligns with the user's actual priority?",
      "globalN" : 63,
      "options" : [
        {
          "text" : "Surface the contradiction and ask the user to clarify which matters more.",
          "correct" : true,
          "letter" : "A"
        },
        {
          "text" : "Provide separate recommendations for both scenarios.",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Proceed with the most recently stated preference.",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Recommend a balanced portfolio without addressing the conflict.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "When user preferences directly contradict each other, surfacing the conflict and asking for clarification is the only way to guarantee the recommendation aligns with the user's true intent. Any other approach involves making an assumption that may be wrong—maximizing returns and low risk tolerance are fundamentally incompatible goals that require a human decision.",
      "correct" : "A",
      "scenario" : "Conversational AI Architecture Patterns",
      "situation" : "Over several turns discussing investment strategy, a user stated \"I have a very low risk tolerance\" and later \"I want to maximize my returns.\" They now ask: \"What should I invest in?\""
    },
    {
      "question" : "What is the most likely cause?",
      "globalN" : 64,
      "options" : [
        {
          "text" : "Claude requires a vector database connection to maintain conversation memory.",
          "correct" : false,
          "letter" : "A"
        },
        {
          "text" : "The model's context window has been exceeded.",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "The Claude API requires a `session_id` parameter.",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Your application isn't including prior messages in the `messages` array.",
          "correct" : true,
          "letter" : "D"
        }
      ],
      "explanation" : "Claude has no server-side memory—every API call is stateless. Without including the full conversation history in the `messages` array of each request, Claude has no knowledge of prior turns. Vector databases (A) and `session_id` (C) are not part of Claude's architecture; context window overflow (B) is impossible for two-message exchanges.",
      "correct" : "D",
      "scenario" : "Conversational AI Architecture Patterns",
      "situation" : "Users refine playlist preferences over multiple conversation turns. Two messages after a user said \"I love jazz,\" Claude asks \"What genres do you enjoy?\""
    },
    {
      "question" : "What approach best balances preservation with token reduction?",
      "globalN" : 65,
      "options" : [
        {
          "text" : "Summarize the entire conversation history.",
          "correct" : false,
          "letter" : "A"
        },
        {
          "text" : "Keep only the most recent 20,000 tokens.",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Extract critical structured data (allergies, quantities, preferences), summarize general discussion, and keep recent exchanges verbatim.",
          "correct" : true,
          "letter" : "C"
        },
        {
          "text" : "Store the full conversation externally and retrieve relevant parts via semantic search.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "The hybrid approach preserves the highest-value information at the lowest cost. Critical facts like allergies and recipe quantities are extracted into a compact structured block (preventing the precision loss that occurs during summarization), general discussion is summarized, and recent exchanges are kept verbatim for conversational coherence. Options A and B risk losing critical dietary information; D is architectural overkill for a single cooking session.",
      "correct" : "C",
      "scenario" : "Conversational AI Architecture Patterns",
      "situation" : "After a 40-minute cooking session, the conversation reaches 78,000 tokens. History includes allergies, recipe scaling, clarified cooking terms, and general discussion. You must reduce tokens while preserving important information."
    },
    {
      "question" : "What is the most effective solution?",
      "globalN" : 66,
      "options" : [
        {
          "text" : "Hybrid approach: summarize older messages while keeping recent ones verbatim.",
          "correct" : true,
          "letter" : "A"
        },
        {
          "text" : "Vector similarity search over the full conversation history.",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Increase the window to 50 message pairs.",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Summarize dropped messages every turn and prepend the running summary.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "The hybrid approach addresses both dimensions of the problem: retaining exact recent context (critical for conversational coherence) while maintaining a compressed representation of earlier preferences (preventing total loss when pairs are dropped). Increasing the window (C) simply delays the same problem. Vector search (B) may miss important context that isn't semantically similar to the current query. Full per-turn summarization (D) adds overhead and accumulates summarization errors.",
      "correct" : "A",
      "scenario" : "Conversational AI Architecture Patterns",
      "situation" : "Users report that during extended conversations the assistant loses track of earlier topics and preferences. Your current implementation keeps only the last 25 message pairs."
    },
    {
      "question" : "What is the primary cause?",
      "globalN" : 67,
      "options" : [
        {
          "text" : "The entire conversation history is included with each API request.",
          "correct" : true,
          "letter" : "A"
        },
        {
          "text" : "The model generates progressively longer responses.",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Database operations slow down as history grows.",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "The model builds an internal user profile requiring more processing.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "Claude's API is fully stateless—every request must include the complete conversation history in the `messages` array. As conversations grow, each request carries more tokens, which directly increases both processing latency and cost. The model does not maintain any internal state between calls (D is false), and response length is not inherently tied to conversation length (B).",
      "correct" : "A",
      "scenario" : "Conversational AI Architecture Patterns",
      "situation" : "Users report that latency increases and costs rise when conversations exceed 50 turns."
    },
    {
      "question" : "What is the most effective approach?",
      "globalN" : 68,
      "options" : [
        {
          "text" : "Rolling window truncation.",
          "correct" : false,
          "letter" : "A"
        },
        {
          "text" : "Progressive summarization capturing key conclusions.",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Semantic embeddings with retrieval of relevant exchanges.",
          "correct" : true,
          "letter" : "C"
        },
        {
          "text" : "Add structured XML tags marking discussion conclusions.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "Semantic search over conversation history is the only approach that scales to three months of discussion while being able to surface specific relevant exchanges on demand. Rolling window (A) would discard most of the history. Progressive summarization (B) compresses discussions into abstractions that lose the specific conclusions users are asking about. XML tags (D) require restructuring all past content and don't solve the retrieval problem at this scale.",
      "correct" : "C",
      "scenario" : "Conversational AI Architecture Patterns",
      "situation" : "After three months of weekly sessions, conversation history grows to 85,000 tokens. When a user asks \"What did we conclude about the theme of isolation?\", the assistant gives generic answers instead of referencing previous discussions."
    },
    {
      "question" : "What is the best solution?",
      "globalN" : 69,
      "options" : [
        {
          "text" : "Move behavioral guidelines into the first user message.",
          "correct" : false,
          "letter" : "A"
        },
        {
          "text" : "Start a new conversation after 20 turns.",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Insert user-role messages reinforcing guidelines at conversation breakpoints.",
          "correct" : true,
          "letter" : "C"
        },
        {
          "text" : "Use post-response validation to regenerate non-compliant responses.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "Periodic injection of behavioral reminders directly combats instruction drift by re-establishing constraints at regular intervals as conversation history accumulates. Moving guidelines to the first user message (A) reduces their authority. Starting a new conversation (B) destroys context. Post-response validation (D) is corrective rather than preventive and adds significant latency.",
      "correct" : "C",
      "scenario" : "Conversational AI Architecture Patterns",
      "situation" : "During QA testing, Claude follows system prompt guidelines for the first 10–15 turns, but later responses deviate. The conversation is still within token limits."
    },
    {
      "question" : "What is the most effective fix?",
      "globalN" : 70,
      "options" : [
        {
          "text" : "Inject reminders every 4–5 turns.",
          "correct" : false,
          "letter" : "A"
        },
        {
          "text" : "Replace verbose rules with few-shot examples demonstrating proficiency-level adaptation.",
          "correct" : true,
          "letter" : "B"
        },
        {
          "text" : "Place critical rules at the end of the system prompt.",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Evaluate responses and regenerate if difficulty level mismatches.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "A 2,800-token system prompt with declarative rules is vulnerable to drift because abstract rules require the model to reason about them on every turn. Replacing verbose rules with concrete few-shot examples that demonstrate correct proficiency-level adaptation gives the model clear behavioral patterns to match—this is more reliably followed across many turns than abstract instructions. Reminder injection (A) helps but addresses symptoms; end-placement (C) helps initially but not with turn-level drift; regeneration (D) is expensive and corrective.",
      "correct" : "B",
      "scenario" : "Conversational AI Architecture Patterns",
      "situation" : "Your AI tutor has a 2,800-token system prompt defining teaching methodology and adaptation rules. After 12 turns, the assistant starts ignoring proficiency levels."
    },
    {
      "question" : "Where should these behavioral guidelines be defined?",
      "globalN" : 71,
      "options" : [
        {
          "text" : "Prepended to each user message.",
          "correct" : false,
          "letter" : "A"
        },
        {
          "text" : "In the system prompt.",
          "correct" : true,
          "letter" : "B"
        },
        {
          "text" : "In the first assistant message.",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "In environment variables.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "The system prompt is specifically designed for persistent behavioral constraints and guidelines that apply throughout the entire conversation. Prepending to each user message (A) is redundant overhead. The first assistant message (C) is unreliable because the model can deviate from its own prior statements. Environment variables (D) have no effect on model behavior.",
      "correct" : "B",
      "scenario" : "Conversational AI Architecture Patterns",
      "situation" : "Your assistant must maintain an enthusiastic tone, explain its reasoning, and ask clarifying questions. Where should these behavioral guidelines be defined?"
    },
    {
      "question" : "What is the most effective approach?",
      "globalN" : 72,
      "options" : [
        {
          "text" : "Append a partial assistant message with a direct response opening.",
          "correct" : true,
          "letter" : "A"
        },
        {
          "text" : "Lower the temperature setting.",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Post-process responses to remove greetings.",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Add system prompt instructions to avoid those phrases.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "Prefilling the assistant's response with the beginning of a direct answer prevents greeting patterns at the generation level—the model continues from the prefill rather than generating new opening phrases. System prompt instructions (D) can help but are less reliable since the model may still produce variants. Post-processing (C) is a fragile workaround. Temperature (B) controls randomness, not specific phrase patterns.",
      "correct" : "A",
      "scenario" : "Conversational AI Architecture Patterns",
      "situation" : "Users report repetitive response openings like \"Certainly!\" and \"I'd be happy to help!\""
    },
    {
      "question" : "What is the best approach?",
      "globalN" : 73,
      "options" : [
        {
          "text" : "Add shipping status to the system prompt.",
          "correct" : false,
          "letter" : "A"
        },
        {
          "text" : "Send an immediate synthetic user message.",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Force the assistant to call a status tool on each turn.",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Append the status update as a prefix to the next user message.",
          "correct" : true,
          "letter" : "D"
        }
      ],
      "explanation" : "Prefixing the status update to the next user message injects real-time context at a natural conversation boundary without disrupting the flow. Modifying the system prompt (A) requires rebuilding the session or is architecturally cumbersome. A synthetic user message (B) can break the natural dialogue flow and confuse attribution. Forcing a tool call each turn (C) is wasteful when events are rare.",
      "correct" : "D",
      "scenario" : "Conversational AI Architecture Patterns",
      "situation" : "A webhook notifies your system that a user's package has shipped while the user is actively chatting. You want the assistant to incorporate this naturally into the next response."
    },
    {
      "question" : "What approach best improves the trade-off?",
      "globalN" : 74,
      "options" : [
        {
          "text" : "Proceed with hidden defaults.",
          "correct" : false,
          "letter" : "A"
        },
        {
          "text" : "Ask all clarifying questions in one compound message.",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "State assumptions explicitly and proceed while inviting corrections.",
          "correct" : true,
          "letter" : "C"
        },
        {
          "text" : "Use a structured intake form.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "Stating assumptions explicitly and proceeding gives the user an immediate, useful response while preserving their ability to correct wrong assumptions. Hidden defaults (A) leave the user unaware of what was assumed. A compound question list (B) still demands upfront effort from the user. A structured form (D) adds more friction, not less—contradicting the goal of reducing abandonment.",
      "correct" : "C",
      "scenario" : "Conversational AI Architecture Patterns",
      "situation" : "Users frequently send requests like \"Book a venue for the party.\" The assistant asks 4+ clarifying questions, causing 35% abandonment."
    },
    {
      "question" : "What is the most likely cause?",
      "globalN" : 75,
      "options" : [
        {
          "text" : "System prompts only establish initial behavior.",
          "correct" : false,
          "letter" : "A"
        },
        {
          "text" : "Model attention weakens as turns accumulate.",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Accumulated assistant responses dilute system prompt influence.",
          "correct" : true,
          "letter" : "C"
        },
        {
          "text" : "The system prompt is only sent once.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "As assistant responses accumulate in the conversation history, the proportion of text reflecting the system prompt's behavioral constraints decreases relative to the growing body of assistant-generated content. The model increasingly pattern-matches to its own prior outputs rather than the system prompt, compounding drift even at short token lengths. The system prompt is included in every API call (D is false as a standalone explanation), and model attention degradation (B) doesn't operate at 2,500 tokens.",
      "correct" : "C",
      "scenario" : "Conversational AI Architecture Patterns",
      "situation" : "Your assistant uses a contractor-persona system prompt. Early turns follow the rules, but by turn 7 the assistant gives generic advice. Conversation length is only 2,500 tokens."
    },
    {
      "question" : "What is the best solution?",
      "globalN" : 76,
      "options" : [
        {
          "text" : "Make reasonable assumptions, state them explicitly, and offer to adjust.",
          "correct" : true,
          "letter" : "A"
        },
        {
          "text" : "Classify ambiguity with a smaller model before responding.",
          "correct" : false,
          "letter" : "B"
        },
        {
          "text" : "Use predefined interpretations without stating assumptions.",
          "correct" : false,
          "letter" : "C"
        },
        {
          "text" : "Limit the assistant to one clarifying question per turn.",
          "correct" : false,
          "letter" : "D"
        }
      ],
      "explanation" : "Proceeding with reasonable stated assumptions eliminates the back-and-forth entirely while keeping the user informed and in control. Predefined silent interpretations (C) leave users confused when the response doesn't match their intent. A single-question limit (D) still requires turns of back-and-forth. A smaller classification model (B) adds latency and infrastructure complexity without solving the core UX problem.",
      "correct" : "A",
      "scenario" : "Conversational AI Architecture Patterns",
      "situation" : "Users ask vague requests like \"Can you help with the report?\" The assistant responds by asking multiple questions (which report? what help? deadline?), causing 40% abandonment."
    }
  ]
};
