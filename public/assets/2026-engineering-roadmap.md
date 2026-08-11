# Victor's Software Engineering Transformation Roadmap — Aug 2026 to Dec 2026

Built around your actual situation: you have **Taxks** (AI task manager, backend + core frontend done), **HI3TORY** (live client e-commerce site), and **Mustard Seed Teens** (church site in progress with Drizzle/Neon/Render) already shipping. That is not a beginner's portfolio — it's proof you can finish things when you stop treating tutorials as the finish line. This roadmap is built to compound that, not restart it.

You have ~5 months of runway before Dec 31, 2026, at ~4 hrs/day when your laptop is available. That is roughly 500–600 usable hours. Enough to become genuinely dangerous in backend engineering, get competent in Go and mobile, and land paid work — not enough to become an expert in everything on your list. So this roadmap cuts scope aggressively. That cutting is the most important thing I'm doing for you here.

---

## PART 1 — CURRENT SKILL ASSESSMENT

**Strengths (real, evidenced by your projects):**
- You can ship full-stack Next.js apps end to end: auth (JWT + bcrypt), Prisma schemas with proper relations/enums/cascades, ownership-based authorization, Zod validation, server components, rate limiting. That is not beginner work — most self-taught devs at your stage cannot articulate `403 on task.userId !== session.sub` as a pattern, but you're already doing it.
- You've made real architecture decisions under real constraints (Render vs Vercel, Drizzle vs Prisma, single shared admin password vs full RBAC for a low-stakes admin panel). Decision-making under trade-offs is a senior skill you're already practicing, even if unconsciously.
- You finish client work (HI3TORY is live, with a real payment-adjacent flow via WhatsApp).

**Weaknesses / gaps (also real):**
- You know *what* to write before you know *why* it works. You can wire JWT auth but likely can't fully explain session fixation, why HS256 vs RS256 matters, or what happens if your JWT secret leaks. This is the fundamentals gap you named yourself.
- Zero Go, zero real system design vocabulary, no exposure to concurrency, no formal DS&A — these are the things that gate you out of higher-paying international/remote roles and any interview with an actual bar.
- No deployed project with real observability (logging, error tracking, monitoring) — Taxks and HI3TORY are functionally solid but operationally invisible if something breaks in production.
- No tests anywhere yet, in any project.
- Flutter is a single step in ("StatelessWidget/StatefulWidget") — this is the least mature part of your stack and needs the earliest sustained attention if it's going to be real by December.

**Dangerous habits to actively kill:**
- AI-generated code you don't verify against docs. You've already named this as your 2022–2024 failure mode. The fix is procedural, not a matter of willpower — see Part 19.
- Watching a course as a substitute for building. You have three live projects; every unfamiliar concept from here on should be learned *inside* one of them, not in an isolated course-follow-along.

**What to stop learning (deliberately dropped from your original list):**
- **Web3/blockchain** — you mentioned it in your background but it's not in your target stack and would dilute focus. Drop it entirely for 2026.
- **Kubernetes / advanced infra** — Docker + one managed platform (Render, which you already use) is enough. K8s is a distraction at your stage and irrelevant to 90% of the jobs you're targeting.
- **NoSQL as a first-class track** — you'll understand *why not* to reach for it by understanding Postgres deeply; a shallow MongoDB detour teaches you nothing you don't get for free from relational modeling.
- **Deep ML/research math** (backprop derivations, model training) — you explicitly want AI *engineering*, not research. Cut linear algebra depth to "just enough to understand embeddings and cosine similarity," nothing more.
- **A second frontend framework.** You know React/Next well. Don't touch Vue/Svelte this year.

**What to prioritize, in order:** (1) fundamentals depth via TypeScript + Go side by side, (2) backend engineering to production standard using Taxks/Mustard Seed as the live testbed, (3) system design vocabulary, (4) Go as a second backend language, (5) Flutter to one shipped app, (6) applied AI as a *feature*, not a track of its own.

---

## PART 2 — RECOMMENDED STACK (and why)

Your proposed stack is correct. Small refinements:

- **Frontend:** TypeScript, React, Next.js — unchanged, you're already strong here.
- **Backend:** Node.js/TypeScript (Next.js API routes / route handlers, as you're already doing) + **Go** as your second, "systems" backend language. Not Go *instead of* Node — Go *alongside*, so you understand backend engineering independent of any one runtime.
- **Database:** PostgreSQL (Neon, which you're already on) + Redis for caching/rate-limiting/queues.
- **ORM:** Keep using both Prisma (Taxks) and Drizzle (Mustard Seed) as you already are — this is actually a gift, not a distraction: it forces you to understand what an ORM does rather than memorizing one API.
- **Mobile:** **Flutter/Dart** — see Part 10 for the full justification. Locking this in now so it stops being an open question that drains focus.
- **DevOps:** Linux, Docker, GitHub Actions, Render (you already use it — don't switch clouds just to "learn AWS," that's resume-padding not skill-building; if a job later requires AWS/GCP you'll pick it up fast once you understand the concepts on Render).
- **AI:** Python only for the parts that need it (data/embeddings experimentation); LLM API integration itself (what you're doing in Taxks) stays in TypeScript. Don't force Python into your day-to-day stack — use it as a lab language for the AI-engineering concepts, then bring the concepts back into TS.

**Reasoning:** every technology on this list is either already proven in your hands or fills a named gap (Go = fundamentals-in-a-second-language + backend credibility; Redis = caching/queues you don't have yet; Flutter = mobile). Nothing is here for résumé decoration.

---

## PART 3 — THE FULL ROADMAP, PHASED (Aug–Dec 2026)

Five phases, roughly monthly, each ends with a **hard gate** — you don't move on by finishing tasks, you move on by passing the gate.

### Phase 1 (Aug) — Fundamentals + Finish Taxks to production
**Objective:** Close the fundamentals gap using JS/TS deep dives, and take Taxks from "feature complete" to "actually production-grade" (tests, AI features, deployment, monitoring).
**Concepts:** closures, scope, async/event loop, error handling patterns, OOP vs FP in JS, Big-O basics, HTTP/HTTPS/DNS/TLS fundamentals, JWT/OAuth/CORS deep dive.
**Work:** Finish Taxks remaining build order items 1–12 (you already have this list in your own notes — follow it). Add Vitest tests to at least the auth and task CRUD routes. Deploy to Vercel with real logging (even just structured console logs + Vercel's log drain is fine for now).
**Gate:** You can explain, without notes, what happens between a user submitting the Taxks login form and getting a session cookie back — every hop, including why HttpOnly matters and what an attacker could do without it. Taxks is live, tested (even lightly), and you have a public post explaining one real bug you fixed.

### Phase 2 (Sep) — Backend engineering depth + Postgres mastery + Go begins
**Objective:** Move from "I can write CRUD" to "I understand database and API design," and start Go in parallel.
**Concepts:** normalization, indexes, transactions/ACID/isolation levels, query planning (`EXPLAIN ANALYZE`), N+1 problems, migrations, Redis caching patterns. Go syntax, types, structs, interfaces, error handling, goroutines/channels basics.
**Work:** On Mustard Seed Teens, take over the backend/database layer yourself with Drizzle (you already planned this) — deliberately write raw SQL for at least 3 non-trivial queries before letting the ORM do it, so you feel what the ORM is abstracting. Build a small standalone Go CLI or HTTP service (e.g., a URL shortener with Postgres) purely to get Go syntax into your hands — this is the one place a small "non-Taxks" project is justified, because Go has zero presence in your current work.
**Gate:** You can design a normalized schema from a spoken requirement in under 15 minutes, explain when you'd denormalize, and explain what an index actually does at the B-tree level (even a simplified mental model). Your Go URL shortener works, has one goroutine-based feature (e.g. async click logging), and you can explain channels without looking anything up.

### Phase 3 (Oct) — System design + DevOps + Mustard Seed to production
**Objective:** Build system design vocabulary through repeated exercises, and get comfortable with the DevOps you actually need.
**Concepts:** client-server, monolith vs microservices, caching strategies, load balancing, CAP theorem basics, horizontal vs vertical scaling. Docker, Docker Compose, Nginx as reverse proxy, CI/CD via GitHub Actions, environment/secrets management.
**Work:** Do 3–4 system design write-ups (see Part 9 format) — URL shortener, notification system, a simplified e-commerce backend (directly relevant to HI3TORY). Dockerize Taxks and Mustard Seed locally with Compose (app + Postgres + Redis). Set up a GitHub Actions pipeline that runs tests + lints on every PR for at least one repo. Finish and deploy Mustard Seed Teens to Render.
**Gate:** Given any of the "systems to design" from your list, you can produce requirements → API design → schema → architecture → bottlenecks → trade-offs unaided in ~45 minutes. Mustard Seed is live with a working CI pipeline.

### Phase 4 (Nov) — Go backend service (real) + Flutter push + AI engineering
**Objective:** Build one meaningful Go backend service, get Flutter from zero to a working app shell, and formalize applied-AI skills.
**Concepts:** Go HTTP servers/middleware, Go + Postgres + Redis, Go testing/profiling. Flutter widgets, layout, state management (start with `setState`/Provider, don't jump to Riverpod/Bloc yet), navigation, REST networking. Embeddings, vector search, RAG basics, prompt engineering, tool calling.
**Work:** Build a real Go service — recommend a **habit/analytics microservice for Taxks** (e.g., a Go service that computes daily focus scores / streaks from the Postgres data, exposed via its own small API that the Next.js app calls) — this makes Go *load-bearing* in a real product instead of a toy. Start Flutter Project 2 candidate (see Part 13) — get to a working app that hits a real API (Taxks' or a new one) with auth and local storage. Add a genuine RAG feature (not just an OpenAI wrapper) to Taxks if you haven't already, e.g. "ask questions about your task history."
**Gate:** The Go service is deployed and actually called by Taxks in production. The Flutter app runs on a real device/emulator, authenticates against a real backend, and persists something offline. You can explain what RAG is doing differently from a raw prompt, including its failure modes.

### Phase 5 (Dec) — Second production project (revenue-focused) + job/client push
**Objective:** Ship Project 2 (performance/revenue-focused, see Part 13), and run the job/client acquisition system hard.
**Concepts:** OWASP top 10 practically applied, performance optimization (query + caching + pagination), observability (logging/error tracking with something like Sentry).
**Work:** Build and ship Project 2. Push GitHub/online presence to "recruiter-ready" state (Part 14–15). Run cold outreach and freelance applications continuously (Part 17) — do not wait until this phase to start outreach; start it in Phase 3 and just intensify here.
**Gate:** Project 2 is live, has a real or simulated client, has monitoring, and you can walk a stranger through its architecture end-to-end in 10 minutes. You have applied to or pitched at least 20 real opportunities across the year, with at least a handful of live conversations by December.

---

## PART 4 — WEEKLY STRUCTURE

Think in a 6-day working rhythm (1 day fully off — non-negotiable, burnout kills this kind of plan faster than any skill gap):

- **Mon–Fri:** Learn→Build→Break→Debug→Explain cycle on the current phase's primary project (see Part 5 daily system).
- **Sat:** System design exercise OR Go/Flutter deep-dive block (whichever is behind schedule) + one build-in-public content piece.
- **Sun:** Full rest, or light no-laptop mode only if you want it — never mandatory.
- **Every day, 10–15 min:** write a one-paragraph dev log entry (what you built, what broke, what you learned) — this becomes both your weekly review input and your content pipeline (Part 15).

Weekly time budget at 4 hrs/day × 6 days ≈ 24 hrs/week. Rough split: 60% on the phase's flagship project, 25% on the phase's "new concept" track (Go/Flutter/system design depending on phase), 15% on review/content/outreach.

---

## PART 5 — DAILY TASK SYSTEM (task-based, not clock-based)

Each day, pick from this checklist based on where the current project actually is — don't force all six every day.

1. **Learn** — one specific concept, sourced from what you hit yesterday (a bug, an unfamiliar pattern, a "why does this work" moment). Not a new course topic picked at random.
2. **Build** — apply it directly inside Taxks / Mustard Seed / the Go service / the Flutter app. Never a throwaway sandbox unless you're isolating a Go/Flutter syntax question.
3. **Debug** — when something breaks, spend at minimum 20 minutes attempting it alone before any AI/Stack Overflow (see Part 19 protocol).
4. **Explain** — write 3–5 sentences in your dev log explaining the concept in your own words, as if to a junior.
5. **Ship** — commit something meaningful, even small, with a real commit message.
6. **Document** — update project README/notes if the change affects how the project works.

A "good day" is 2–3 of these done deliberately, not all 6 rushed.

---

## PART 6 — FULL DAY / REDUCED DAY / EMERGENCY / NO-LAPTOP MODE

**Full Day Mode (~4 hrs available):**
1. Review yesterday's dev log (5 min)
2. Learn the day's concept from docs (30–45 min)
3. Build/apply it in the live project (90–120 min)
4. Deliberately break something related, then fix it (30 min)
5. Write dev log + explain concept in own words (10 min)
6. Commit + push (5 min)

**Reduced Day Mode (~1–2 hrs):**
1. Pick ONE task from the current project's backlog, complete it fully.
2. Write a 2-sentence dev log entry.
Skip the "learn new concept" step unless something small and directly needed comes up.

**Emergency Mode (~30 min):**
Pick exactly one:
- Review your own code from 3+ days ago and note one thing you'd do differently.
- Read one section of official docs relevant to your current blocker.
- Write out (by hand/notes app) the schema or API contract for tomorrow's task, so tomorrow starts faster.
- Reply to one outreach message / community thread.

**No-Laptop Mode (phone only):**
- Read documentation (Go docs, Postgres docs, Flutter docs) on your phone.
- Sketch a system design exercise in a notes app (functional/non-functional requirements only, no diagram needed).
- Write pseudocode for tomorrow's feature.
- Review your Git commit history / PR diffs on GitHub mobile and note anything you'd refactor.
- Draft one build-in-public post from your dev log backlog.
- Read one engineering article/blog post and write 2 sentences on what you'd apply.
- Mentally walk through a debugging scenario from memory ("what would I check first if X broke").

The rule across all modes: **something always gets written down**, even one sentence. That's what prevents "falling off" — momentum lives in the dev log, not in code volume.

---

## PART 7 — BACKEND ENGINEERING CURRICULUM

**Sequence (each step done *inside* Taxks or Mustard Seed, not a separate toy repo, unless noted):**

1. **API design fundamentals** — REST conventions, status codes, versioning, pagination/filtering/sorting. Apply: add cursor-based pagination to Taxks' task list endpoint.
2. **Validation & error handling** — Zod schemas everywhere (you've started this), consistent error shape (you already have `{success,error}` — formalize it project-wide).
3. **Auth & authorization depth** — sessions vs JWT trade-offs, refresh tokens, OAuth flow (implement a real "Sign in with Google" on one project to feel OAuth, not just read about it).
4. **Idempotency & webhooks** — add an idempotency key to Taxks' AI-generation endpoints (prevents double-charging AI credits on retry) — directly useful, not academic.
5. **Background jobs/queues** — introduce a simple job queue (BullMQ + Redis, or a Postgres-backed queue) for Taxks' "Daily Focus Brief" generation, instead of doing it synchronously.
6. **Database mastery** — normalization, indexes (add one deliberately and measure the query plan before/after with `EXPLAIN ANALYZE`), transactions (wrap a multi-step operation, e.g. task+project creation, in a transaction and understand what rollback buys you), migrations discipline (never hand-edit a migration once it's applied).
7. **Redis** — caching Taxks' dashboard stats query, rate limiting (replace your in-memory limiter with a Redis-backed one — directly closes a real gap, since in-memory limiters don't survive multi-instance deploys).
8. **Clean architecture** — introduce a service/repository layer in one project (Mustard Seed is the better candidate — "intermediate, not overly layered" as you already decided) so routes stop talking directly to the ORM.
9. **Testing** — unit tests for services/utils, integration tests for API routes (Vitest + Supertest-style approach), one E2E test with Playwright on a critical flow (login → create task).
10. **Security** — OWASP top 10 walked through against your own codebase (SQLi via raw queries — you're safe via ORM but understand why; XSS; broken auth; secrets in env, never in code).
11. **Observability** — structured logging, and wire up Sentry (free tier) on at least one production project so you get a real error notification for the first time in your life. This alone teaches more about "production vs tutorial" than any course.

---

## PART 8 — DEVOPS CURRICULUM

1. Linux fundamentals via daily use — do your Go/Node work from WSL or a real Linux box if possible, not just GUI tools. Learn `ps`, `top`, `netstat`/`ss`, `ssh`, file permissions, by needing them, not by memorizing a cheat sheet.
2. Git deeply — rebase vs merge, interactive rebase to clean history before a PR, resolving real conflicts (you'll get plenty from working solo across branches).
3. Docker — Dockerfile for Taxks (multi-stage build), Docker Compose for local dev (app + Postgres + Redis) so "it works on my machine" stops being a risk.
4. CI/CD — GitHub Actions: lint + typecheck + test on PR, then auto-deploy to Render/Vercel on merge to main. Do this for real on at least one repo.
5. Nginx / reverse proxy concepts — you may not need to hand-configure this if using Render/Vercel, but understand what they're doing for you (TLS termination, routing) so you're not helpless if you ever manage raw infra.
6. Secrets & environment management — `.env` discipline you already have; add: never commit `.env`, rotate a secret at least once deliberately so you've done it, understand what Render/Vercel's env var injection is actually doing.
7. Backups — set up an actual scheduled Postgres backup (Neon has this built in — go find the setting and understand the retention window) on your production databases.

---

## PART 9 — SYSTEM DESIGN CURRICULUM

For every exercise, answer in writing:
1. Functional requirements 2. Non-functional requirements 3. Scale assumptions 4. API design 5. Database schema 6. Architecture (diagram, even hand-drawn) 7. Bottlenecks 8. Failure scenarios 9. Scaling strategy 10. Security concerns 11. Trade-offs.

**Recommended order (start with what's closest to your real projects):**
1. **E-commerce backend** — directly informed by HI3TORY; design the *actual* system HI3TORY doesn't have yet (real payments, inventory, order state machine).
2. **Notification system** — directly useful for Taxks (reminders) and Mustard Seed (event/blog notifications).
3. **URL shortener** — classic, cleanly bounded, good for a first rep.
4. **Chat/real-time system** — forces you to think about WebSockets/SSE, which you haven't touched.
5. **Payment system** — conceptual only (don't build a real payment processor), but essential vocabulary for any e-commerce or SaaS work in Nigeria.
6. Optional stretch if time allows: ride-hailing backend or social feed — good interview-prep exercises, lower priority than the above since less connected to your actual work.

Do one write-up every 1–2 weeks starting Phase 3, continuing through December. Depth compounds — the 4th one should be visibly better than the 1st.

---

## PART 10 — MOBILE: FLUTTER vs REACT NATIVE, DECIDED

**Honest comparison:**

| Factor | Flutter/Dart | React Native/TS |
|---|---|---|
| Leverages existing skill | No — new language | Yes — same JS/React mental model |
| Learning curve from here | Steeper short-term | Shallow — could ship in weeks |
| Nigerian job market | Present, less common than RN | More common (JS-shop default) |
| International remote/freelance | Strong — many agencies standardize on it | Also strong, especially JS-first shops |
| Performance | Better out-of-the-box (compiled, own rendering engine) | Good enough for most apps, occasional bridge/perf friction |
| Ecosystem maturity | Very mature, Google-backed, single toolchain | Mature but more fragmented (Expo vs bare, package sprawl) |
| Backend integration | Same — REST/GraphQL either way | Same |
| Long-term engineering value | Forces you to learn a second language + a different UI paradigm (declarative widget tree) — genuine skill diversification | Reinforces JS-everywhere, less new fundamentals gained |

**Recommendation: Flutter.** Your instinct was right, and here's the actual argument for it beyond "wanting something different": you already have deep React/Next skill. Adding React Native gives you a second *framework* but not much new *engineering understanding* — it's the same language, same async model, same component mental model. Flutter forces you to learn Dart (a real, statically-typed, different-enough language) and a genuinely different UI paradigm. That directly serves your stated goal of becoming someone who understands engineering broadly, not just one ecosystem well. It's also a better complement to Go — both are outside the JS bubble, both make you a more well-rounded engineer, and both are credible signals to employers that you're not a one-trick JS developer.

**Flutter progression:**
1. Dart fundamentals (2–3 days: types, null safety, classes, async/await, futures/streams) — don't linger, Dart is easy to pick up from your JS background.
2. Flutter fundamentals: widget tree, Stateless vs Stateful, layout (Row/Column/Stack/Expanded), the "everything is a widget" mental model.
3. State management — start with `setState` + Provider. Do **not** jump to Riverpod/Bloc until you've felt the pain `setState` creates in a real app; then the "why" of the more advanced solution actually lands.
4. Navigation (go_router recommended — closest to Next.js routing mental model).
5. Networking — `http`/`dio` package, connect to a real backend (Taxks' API is a perfect target: build a Taxks mobile client).
6. Auth — implement real login against Taxks' JWT auth from the Flutter app; store the token securely (flutter_secure_storage).
7. Local storage / offline-first basics — cache tasks locally (sqflite or Hive), sync on reconnect. This is the single most valuable "production" concept in mobile and worth real time.
8. Push notifications — Firebase Cloud Messaging, one real notification flow (e.g. task due reminder).
9. Testing — widget tests for at least 2–3 core screens.
10. App architecture — simple layered structure (screens / widgets / services / models), don't over-engineer for a first app.
11. Deployment — get it onto a real device via TestFlight/internal testing or an APK share; you don't need to fully publish to stores this year unless it becomes a real product, but understand the process.

**Culminating project: "Taxks Mobile"** — a Flutter client for your existing Taxks backend. This reuses your API, database, and AI features, so mobile learning compounds your existing work instead of starting a fourth unrelated project.

---

## PART 11 — GO CURRICULUM

Purely for backend engineering, sequenced to get you shipping fast:

1. Syntax, types, structs, interfaces (interfaces are Go's biggest "aha" vs TS — spend real time here: implicit interface satisfaction is different from anything in JS).
2. Error handling — Go's explicit `if err != nil` model vs try/catch; understand *why* Go chose this (explicit handling forces you to think about every failure point).
3. Packages/modules — `go.mod`, internal package structure.
4. Goroutines & channels — build something that actually needs concurrency (e.g., fetch multiple external API results in parallel) so it's not abstract.
5. Context (`context.Context`) — request cancellation/timeouts, directly relevant to any HTTP service.
6. HTTP servers & REST APIs — start with the standard library (`net/http`) before reaching for a framework, so you understand what a router/middleware actually does; then optionally try `chi` or `gin`.
7. Middleware — logging, auth, recovery middleware, written by hand at least once.
8. PostgreSQL from Go — `pgx` or `database/sql`, no ORM at first (feel raw SQL + scanning), optionally `sqlc` later once you understand what it's generating for you.
9. Redis from Go.
10. Testing — table-driven tests (a very Go-idiomatic pattern, worth internalizing).
11. Profiling/performance — `pprof` basics, enough to say you've looked at a flame graph once.
12. Docker + deployment for a Go binary (small image, multi-stage build).

**Where Go beats Node/TS for you specifically:** true parallelism via goroutines without the event-loop workarounds Node needs; a single static binary with none of the `node_modules`/runtime-version headaches; noticeably lower memory footprint for the same workload, which matters on cheap Nigerian/African hosting where every naira of server cost counts. It's not "better" universally — Node/TS stays your default for anything UI-adjacent or where iteration speed matters more than raw throughput — but it's the right tool when a service needs to be fast, cheap to run, and concurrent (background jobs, analytics, webhooks).

**Culminating project:** the analytics/streak-scoring microservice for Taxks described in Phase 4 — real, load-bearing, not a toy.

---

## PART 12 — APPLIED AI / ML CURRICULUM

Prioritizing AI *engineering* over ML research, as you asked.

1. Python fundamentals — just enough to be fluent (you already know programming; this is syntax transfer, budget 3–4 days max).
2. NumPy/Pandas — basic data manipulation, enough to preprocess something once, not mastery.
3. Statistics/linear algebra — the minimum to understand embeddings: vectors, dot product, cosine similarity. Skip matrix calculus, gradient descent derivations, etc. entirely.
4. ML concepts at a conceptual level only — supervised vs unsupervised, what "training a model" means, model evaluation basics (precision/recall, just enough to read a metric someone else reports). You are not training models this year.
5. Embeddings & vector databases — this is where real time goes. Use a hosted vector DB (Pinecone free tier, or pgvector on your existing Postgres — **prefer pgvector**, since it keeps everything in infra you already run and understand).
6. LLM fundamentals & prompt engineering — you already have hands-on experience via Taxks' OpenAI integration; formalize it: system prompts, few-shot examples, structured output (JSON mode), temperature/token trade-offs.
7. RAG — build it for real in Taxks ("ask questions about your task history" — chunk task/project data, embed with pgvector, retrieve + prompt).
8. Tool calling / agents — extend one Taxks AI feature to use function/tool calling (e.g., the AI can actually call your task-creation endpoint instead of just describing what to create).
9. AI security & cost management — prompt injection awareness, rate limiting AI endpoints (you already have a credit system — formalize the cost tracking per request), never trusting LLM output for anything security-sensitive without validation.
10. Evaluation — a simple, practical eval harness: a set of test prompts + expected properties of the output, run manually or scripted, so you're not just eyeballing whether the AI feature "seems to work."

This entire track lives inside Taxks. You don't need a separate AI project — Taxks *is* your AI engineering project.

---

## PART 13 — TWO PRODUCTION PROJECTS

### Project 1 — AI-Powered Product: **Taxks** (already underway — formalize and finish it)
- **Problem:** People (especially students/freelancers juggling multiple things — your own situation) struggle to prioritize and break down work; Taxks reduces the friction between "I have a pile of tasks" and "I know what to do next."
- **Target users:** students, freelancers, small teams — realistic first users: your own dev community, Nigerian students.
- **Features:** auth, projects/tasks CRUD, AI credits system, Smart Task Breakdown, Priority Engine, Natural Language Input, Daily Focus Brief, Description Generator, and (new, per this roadmap) RAG-based task history Q&A and a Go-based analytics microservice.
- **Architecture:** Next.js full-stack app + Prisma/Neon Postgres + Redis (cache + rate limit + job queue) + a Go microservice for analytics, all containerized, deployed on Vercel (app) + Render (Go service) + Neon (DB).
- **Auth:** JWT (already built) — add refresh tokens and OAuth (Google) as a stretch.
- **Security:** input validation via Zod (done), rate limiting via Redis (upgrade from in-memory), secrets in env only, OWASP pass.
- **Testing:** Vitest unit + integration tests on auth/CRUD, one Playwright E2E flow.
- **DevOps:** Dockerized locally, GitHub Actions CI (lint/test/typecheck), auto-deploy on merge.
- **Deployment:** Vercel + Render + Neon, as above.
- **Monitoring:** Sentry for errors, basic structured logs.
- **Performance:** cached dashboard stats, paginated task lists, indexed queries.
- **Monetization:** freemium AI credits (already designed — 20 free/day), paid tier for higher limits — realistic first revenue path (Path D in Part 18).
- **Milestones:** Aug (finish core + tests + deploy), Sep–Oct (Redis, background jobs, indexing pass), Nov (RAG + Go microservice), Dec (polish, monitoring, first real users).

### Project 2 — Performance + Revenue Product: **HI3TORY Ops** (new — extends your existing client relationship)
Rather than inventing an unrelated idea, extend your real client work: HI3TORY currently redirects to WhatsApp for every order with no backend order/inventory tracking. Build the missing operational backend as a genuinely billable product.
- **Problem:** Small Nigerian e-commerce/streetwear sellers running WhatsApp-order businesses have no inventory tracking, no order history, no sales visibility — everything lives in a WhatsApp chat log. This is a real, common, provable pain point.
- **Target users:** HI3TORY first, then similar small Lagos streetwear/e-commerce sellers as a template product.
- **Features:** inventory management (stock levels, size/variant tracking), order log (even if orders still originate via WhatsApp, staff log them into the system), basic sales analytics dashboard, low-stock alerts.
- **Architecture:** deliberately backend/performance-heavy — this is where you show off the DB/caching/query-optimization skills from Phase 2–3. Next.js or Go for the API (good candidate for a second real Go service), Postgres with proper indexing on inventory/order queries, Redis caching for the analytics dashboard.
- **Database schema:** Product/Variant/InventoryMovement/Order tables, with InventoryMovement as an append-only ledger (not just a mutable stock count) — this is a genuine production pattern worth learning by doing.
- **API design:** REST, paginated order history, filtered/sorted inventory views.
- **Auth:** simple role-based (owner/staff), reuse patterns from Mustard Seed's admin thinking but do it properly with a real user table this time (unlike Mustard Seed's deliberate single-password shortcut).
- **Security:** role-based authorization, input validation, audit trail on inventory changes.
- **Testing:** integration tests on the inventory movement logic specifically (this is where bugs would actually cost the client money — treat it that way).
- **DevOps:** Dockerized, CI/CD, deployed on Render.
- **Monitoring:** error tracking + a simple uptime check.
- **Performance:** indexed inventory/order queries, cached analytics aggregates, explicit load consideration (even at small scale, write down what happens at 10x current order volume).
- **Monetization:** direct client billing model — pitch it as a monthly maintenance/subscription fee to HI3TORY's owner (or whoever runs it) once it demonstrably saves them time; template-able to other small sellers afterward (Path B/C in Part 18).
- **Milestones:** Oct (schema + core API), Nov (dashboard + caching), Dec (deploy, onboard HI3TORY, pitch as paid ongoing service).

---

## PART 14 — GITHUB STRATEGY

What a recruiter/EM should see in 30 seconds on your profile:
- **Pinned repos:** Taxks, Mustard Seed Teens, HI3TORY-Ops (or however you name Project 2), the Go analytics service — not 20 half-finished repos.
- **Every pinned repo needs:** a README with a one-paragraph problem statement, a screenshot/GIF, tech stack list, architecture note (even 3 bullet points), setup instructions, and a live link.
- **Commit practices:** meaningful, present-tense messages (`add rate limiting to auth routes`, not `fix stuff`); commit at a granularity that tells a story if someone reads your history.
- **Issues/PRs:** even solo, use GitHub Issues to track your own backlog on at least one repo, and use PRs-to-main (even self-reviewed) on the ones with CI — this is what makes your CI pipeline visible and credible.
- **CI badges:** a green "tests passing" badge on your README is one of the highest-signal, lowest-effort things you can add.
- A short **`/docs` or architecture doc** in your two flagship repos (Taxks, HI3TORY-Ops) — one page each: what the system does, key trade-offs made, what you'd do differently at scale.

---

## PART 15 — BUILD-IN-PUBLIC STRATEGY

Goal: visible without being an "influencer." Content comes *from* your dev log, not instead of building.

**Daily:** nothing mandatory — optional 1-line "today I..." post if something notable happened.
**Weekly:** 1 substantive post (X + LinkedIn, adapted per platform) — pick the single most interesting thing from your dev log: a bug you fixed, a trade-off you made, a concept you finally understood.
**Monthly:** 1 longer technical write-up (article, could live on Dev.to/Hashnode or your own site) going deep on one thing — e.g. "Why I moved Taxks' rate limiter from in-memory to Redis" or "Designing an append-only inventory ledger for a WhatsApp-order business."

**One feature → multiple pieces of content, concretely:**
Take a real example from your own list — adding Redis-based rate limiting to Taxks:
- X post: the before/after problem (in-memory limiter breaks on multi-instance deploy) in 2–3 lines.
- GitHub commit: the actual change, well-messaged.
- Article: the full "why in-memory rate limiting is a trap in production" write-up.
- Architecture diagram: simple before/after diagram of request flow through Redis.
- LinkedIn post: same story, slightly more business-framed ("this is the kind of bug that only shows up under real traffic").
- Discord/community post: ask a specific technical question you had while building it — real engagement, not just broadcasting.

Time budget: content creation should never exceed ~15% of weekly time (already reflected in Part 4). If a post takes more than 20–30 minutes, you're overproducing — the dev log should make most posts nearly copy-paste-ready.

---

## PART 16 — NETWORKING STRATEGY

- **Nigerian dev communities:** be an active (not lurking) member of at least one — a Slack/Discord for Nigerian devs, a local meetup if accessible in Lagos. Answer questions you actually know the answer to; this builds real reputation faster than posting.
- **International:** contribute small, real PRs to 1–2 open-source projects in your stack (a Next.js ecosystem library, a Go tool) — even docs fixes or small bug fixes count and put your name in a public, credible history.
- **LinkedIn:** treat it as the "professional" mirror of your X build-in-public content, engage with posts from engineers/recruiters at companies you'd want to work for, don't just broadcast.
- **Discord/Slack developer communities:** show up specifically where your target market is — if targeting Nigerian SMB clients (Project 2's model), that's different communities than if targeting international remote roles.

---

## PART 17 — FIRST-JOB / FIRST-CLIENT STRATEGY (runs alongside learning, starting Phase 3)

**Problem → Diagnosis → Solution → Demonstration → Offer**, concretely:
1. **Find a real problem** — for freelance/client work, look at small Lagos businesses (like HI3TORY) with a visible operational gap: no online ordering system, no way to track inventory, manual WhatsApp order logs, slow sites. For employment, look at companies whose job posts mention pain you can name (e.g. "need to improve API performance," "building AI features").
2. **Diagnose specifically** — before reaching out, actually look at their site/product and note 1–2 concrete issues (slow load time, broken mobile checkout, no order tracking).
3. **Propose a solution**, not a generic pitch — "I noticed your product pages take 4+ seconds to load on mobile — that's very likely costing you conversions. I build fast, well-structured e-commerce experiences (here's HI3TORY, live, [link]) — want me to send a quick breakdown of what I'd fix?"
4. **Demonstrate** — always attach or link real proof: HI3TORY, Taxks, or a short Loom walking through the specific issue you diagnosed on *their* site.
5. **Offer** — a scoped, small first engagement (not "hire me full time") — a paid audit, a small fixed-scope fix, a one-month trial.

**Channels, running in parallel from Phase 3 onward:**
- Nigerian market: direct outreach to small business owners (streetwear, food, services) via Instagram/WhatsApp, referrals from HI3TORY's owner.
- International remote: apply to remote-friendly job boards (RemoteOK, WeWorkRemotely, Wellfound) targeting junior/mid full-stack roles; don't wait for "ready," apply once Taxks is production-grade (end of Phase 1).
- Freelance: Upwork/Contra with a portfolio built around Taxks + HI3TORY + Project 2, positioned around a specific niche ("I build backend systems for e-commerce and service businesses") rather than generic "web developer."
- Startups: Nigerian tech Twitter/X and startup Slack communities often post contract/part-time needs before formal job boards.
- Open-source: the PRs from Part 16 double as a networking and credibility channel.

Do not wait to "finish learning" before starting any of this — start applying/pitching once Taxks is live and tested (Phase 1 gate), and keep going continuously.

---

## PART 18 — ₦1,000,000 GOAL: REALISTIC PATHS (not guaranteed)

**Path A — Employment:** a junior remote/contract role paying even ₦150k–₦300k/month would clear ₦1M within 4–7 months of starting — realistic if you land something by Sep/Oct.
**Path B — Freelancing:** e.g. 4–5 small projects at ₦200k–₦250k each (landing pages, small backend fixes, small e-commerce builds for Nigerian SMBs) — realistic given HI3TORY as a live reference.
**Path C — Contract work:** 1 mid-size contract (e.g. Project 2's HI3TORY Ops style engagement) at ₦400k–₦600k plus 2–3 smaller pieces.
**Path D — Product revenue:** Taxks' freemium AI credits — realistically slow to reach ₦1M alone this year without real marketing spend/user acquisition; treat as a long-term compounding path, not your primary 2026 income source.
**Path E — Combination (most realistic for you):** e.g. 1 paid HI3TORY Ops engagement (~₦400k) + 2–3 smaller freelance projects (~₦200k each) + a small amount of Taxks revenue — this is the path I'd actually plan around.

**What makes these realistic, not hopeful:** you already have two live, real client-facing products (not tutorial clones) to show — that is the single biggest lever. The gap between you and ₦1M isn't skill, it's outreach volume and consistency (Part 17). Treat the number as a lagging indicator of doing Part 17 consistently, not a target to chase directly.

---

## PART 19 — ANTI-TUTORIAL-HELL / ANTI-AI-DEPENDENCY SYSTEM

**Anti-tutorial-hell rules:**
1. Never start a course without a named, specific gap it closes (write the gap down before starting).
2. After learning a concept from any source, build something with it *without* the source open.
3. Attempt every implementation yourself before consulting AI or docs — minimum 20 minutes of real attempt.
4. Documentation before AI for any library/API question — AI is second, not first.
5. Rebuild at least one important feature per project from memory, without looking at your own old code.
6. Teach what you learned — the dev log's "explain" step is this, non-negotiable.
7. Ship imperfect — no project waits for "clean enough," ship and iterate publicly.

**AI Dependency Prevention Protocol — explicit rules:**
- **Before asking AI:** you must have attempted the problem yourself and can describe *specifically* where you're stuck (not "it doesn't work" — "the query returns null when I join these two tables, I expect X").
- **When AI gives you code:** you must be able to explain every important line before it goes into your project. If you can't explain a line, that line doesn't get committed until you can.
- **Before accepting AI's solution:** verify it against official docs or a test you write yourself — never trust it because it "looks right" or "runs without error."
- **After using AI:** you should be able to rebuild the feature from memory within a day or two. If you can't, you didn't actually learn it — go back and re-derive it yourself.
- **AI's allowed roles:** explaining concepts, code review, debugging *discussion* (not debugging *for* you), architecture discussion, generating test cases/edge cases, security review, documentation help, brainstorming, learning unfamiliar APIs (as a faster doc-reader, not a doc-replacer).
- **AI's forbidden roles:** writing entire features, generating whole apps, solving a problem before your own attempt, replacing your own debugging process, replacing reading real documentation.

---

## PART 20 — MONTHLY MILESTONE TABLE

| Month | Fundamentals | Backend | DB | DevOps | System Design | Mobile | Go | AI | Projects | GitHub/Presence | Job/Client |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Aug | JS/TS deep dive (async, closures, HTTP stack) | Finish Taxks build order | Neon connection fix, Zod on all routes | Deploy Taxks + basic logging | — | — | — | Taxks AI features formalized | Taxks production-ready + tests | README overhaul, 2 posts | Start watching job boards |
| Sep | Go syntax alongside TS | Redis intro, background jobs | Indexes, transactions, `EXPLAIN ANALYZE` | Docker Compose local | 1st write-up (e-commerce) | Dart + Flutter fundamentals | Go URL shortener | pgvector setup | Mustard Seed backend/DB work | 4 weekly posts | First outreach batch (5–10) |
| Oct | — | Service/repository layer, testing | Migrations discipline | CI pipeline, deploy Mustard Seed | 2 more write-ups | Auth + networking in Flutter | Go service planning | RAG in Taxks | Mustard Seed live + Project 2 schema | Architecture docs added | Outreach continues, first replies |
| Nov | — | OWASP pass, observability | Query optimization pass | Sentry + backups | 1 more write-up | Offline storage + push notifications | Go analytics service live | Tool calling in Taxks | Go service deployed, Flutter app functional | Monthly deep article #1 | Freelance applications live |
| Dec | — | Final security/perf pass on both projects | — | Full CI/CD on all 3 repos | Optional stretch design | Ship Flutter app | — | AI eval harness | Project 2 shipped + client pitch | Recruiter-ready profile | First paid engagement target |

---

## PART 21 — WEEKLY REVIEW & SCORING (out of 100)

Answer every week, score each category, sum to 100:

- What did I build? **(15 pts** — did real, shippable work happen)
- What did I understand (that I couldn't explain last week)? **(15 pts)**
- What did I fail to understand — named specifically? **(5 pts — honesty scores, not evasion)**
- What did I debug alone before reaching for AI? **(10 pts)**
- What did I ship (commit/deploy)? **(10 pts)**
- What did I document (dev log, README, architecture note)? **(10 pts)**
- What did I publish publicly? **(10 pts)**
- What did I learn *without* AI? **(10 pts)**
- Where did I lean on AI too heavily — named specifically? **(5 pts — again, honesty scores)**
- What did I contribute publicly (OSS, community answer, etc.)? **(5 pts)**
- Did I move closer to employment/a client? **(5 pts)**

A week in the 70s is honest and solid. A week that scores 100 with no admitted AI-overreliance or gaps is probably not honestly scored — the two 5-point "honesty" categories exist specifically so you can't game this by hiding struggle.

---

## PART 22 — RULES TO LIVE BY (max 15)

1. Never watch a tutorial without a named, specific gap it closes.
2. Attempt every problem yourself for at least 20 minutes before asking AI.
3. If you can't explain a line of AI-given code, it doesn't get committed.
4. Documentation before AI, always.
5. Every concept gets learned inside a real project — Taxks, Mustard Seed, HI3TORY, or their successors — not a throwaway.
6. Ship imperfect. Perfect never ships.
7. Write something down every single day, even on no-laptop days — momentum lives in the dev log.
8. One full day off per week, no exceptions.
9. Outreach and content happen *alongside* learning, starting Phase 3 — not after you "finish."
10. Depth over breadth: fewer technologies, understood completely, beats more technologies half-understood.
11. Every project needs tests, logging, and a deploy target before you call it "done."
12. Honesty in the weekly review is worth more than a high score.
13. Go and Flutter exist to make you a broader engineer, not to become new tutorial rabbit holes — same rules apply to them.
14. When stuck, name the problem precisely before doing anything else — "it doesn't work" is not a starting point.
15. Progress is measured by what you can build and explain without help, not by what you've watched.
