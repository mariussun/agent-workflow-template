# {{PROJECT_NAME}} — Contributing Guide

Thank you for contributing to {{PROJECT_NAME}}!

## Getting Started

```bash
git clone https://github.com/{{GITHUB_OWNER}}/{{GITHUB_REPO}}.git
cd {{GITHUB_REPO}}
{{INSTALL_COMMAND}}
{{SETUP_COMMANDS}}
```

{{BRANCH_NAMING}}

{{COMMIT_CONVENTION}}

{{PR_PROCESS}}

{{CODE_STANDARDS}}

{{PROJECT_STRUCTURE}}

{{ENVIRONMENT_SETUP}}

## Questions?

Open a GitHub Discussion or create an issue with the `question` label.

---

## Agent Collaboration Workflow

{{PROJECT_NAME}} uses a **{{NUM_AGENTS}}-agent ecosystem** for development. Each agent has a specific role and works together to deliver features from idea to production.

### The Agents

| Agent | Role | When to Invoke |
|-------|------|---------------|
| **ProductOwner** | Defines product vision, prioritizes features, writes user stories | Feature prioritization, user story creation, implementation validation |
| **Architect** | System design, GitHub governance, technical decisions | Architecture reviews, milestone planning, tech stack decisions, API design |
| **TechLead** | Implementation, code quality, bug fixes, orchestration | Feature implementation, bug fixes, refactoring, performance optimization |
| **Tester** | Security audits, edge cases, chaos engineering | Security reviews, penetration testing, stress testing, finding vulnerabilities |
| **DevOps** | CI/CD, deployment, monitoring, infrastructure (Phase 2+) | Deployment pipelines, infrastructure setup, monitoring configuration |

### Development Lifecycle

```
┌──────────────┐
│ ProductOwner │  1. Writes user story, defines acceptance criteria
└──────┬───────┘
       │
       v
┌──────────────┐
│  Architect   │  2. Creates GitHub issue, designs system, specifies API/DB
└──────┬───────┘
       │
       v
┌──────────────┐
│  TechLead    │  3. Implements feature, writes tests, follows standards
└──────┬───────┘
       │
       v
┌──────────────┐
│   Tester     │  4. Security audit, edge case testing, chaos engineering
└──────┬───────┘
       │
       v
┌──────────────┐
│  Architect   │  5. Code review, approve merge
└──────┬───────┘
       │
       v
┌──────────────┐
│ ProductOwner │  6. Validate feature solves user problem
└──────────────┘
```

### Example Workflow: {{EXAMPLE_FEATURE_NAME}}

**1. ProductOwner writes user story:**
```
{{EXAMPLE_USER_STORY}}
```

**2. Architect creates GitHub issue:**
```
{{EXAMPLE_GITHUB_ISSUE}}
```

**3. TechLead implements:**
```{{EXAMPLE_CODE_LANG}}
{{EXAMPLE_IMPLEMENTATION}}
```

**4. Tester audits security:**
```
{{EXAMPLE_SECURITY_AUDIT}}
```

**5. TechLead fixes findings:**
```{{EXAMPLE_CODE_LANG}}
{{EXAMPLE_FIX}}
```

**6. Architect approves merge → ProductOwner validates feature**

### Agent Invocation Examples

In your commits, PRs, or comments, you can tag agents:

```markdown
@ProductOwner: {{EXAMPLE_PO_QUESTION}}

@Architect: {{EXAMPLE_ARCH_QUESTION}}

@TechLead: {{EXAMPLE_TL_REQUEST}}

@Tester: {{EXAMPLE_TESTER_REQUEST}}
```

### Decision Escalation

| Conflict Type | Resolution |
|--------------|-----------|
| **Product vs Technical** | ProductOwner and Architect decide jointly |
| **Security concern** | Tester finding → TechLead must fix before merge |
| **Performance issue** | Architect decides if acceptable or needs optimization |
| **Scope creep** | ProductOwner has final say on feature scope |

### Best Practices

1. **Always start with ProductOwner** — understand user value before designing
2. **Architect gates all code merges** — no PR merges without architectural approval
3. **TechLead owns implementation quality** — tests, type safety, standards
4. **Tester has veto power on security** — p0-critical findings block deployment
5. **Communicate in GitHub issues** — keep all decisions documented and traceable

---

## Workflow Patterns

Different types of work require different agent collaboration flows. Use this matrix to quickly determine which workflow to use for your task.

### 📊 Workflow Selection Matrix (Start Here!)

| Scenario | Workflow | Duration | Agents | Example Prompt |
|----------|----------|----------|--------|----------------|
| **New feature** | Full Feature Flow | 2-4 hours | PO → Arch → TL → Test → TL → Arch → PO | *"Build user dashboard. Use full feature flow."* |
| **Bug fix** | Bug Fix Flow | 30 min | Test → TL → Test | *"Button doesn't submit form. Use bug fix flow."* |
| **Security issue** | Security Audit Flow | 1-2 hours | Test → Arch → TL → Test | *"Audit authentication for vulnerabilities. Security flow."* |
| **Tech decision** | Research Flow | 1 hour | PO → Arch → PO | *"Should we use REST or GraphQL? Research flow."* |
| **Typo/UI tweak** | Quick Fix Flow | 5 min | TL only | *"TechLead: fix typo in welcome message (quick fix)."* |
| **Performance** | Performance Flow | 1-2 hours | Test → Arch → TL → Test | *"API is slow. Use performance flow to optimize."* |
| **Code quality** | Refactoring Flow | 1 hour | Arch → TL → Arch | *"Refactor API routes to reduce duplication."* |
| **Production down** | Hotfix Flow | 15 min | TL → Test → Arch | *"HOTFIX: Users can't sign in. Emergency fix needed."* |
| **Documentation** | Documentation Flow | 30 min | PO → Arch → PO | *"Document the user API. Documentation flow."* |
| **Infrastructure** | DevOps Flow | 2-3 hours | Arch → DevOps → Test → Arch | *"Set up CI/CD pipeline. DevOps flow."* (Phase 2+) |
| **API design** | API Design Flow | 1 hour | PO → Arch → Test → PO | *"Design user profile API. API design flow."* |

---

### 1️⃣ Full Feature Flow (Default for New Features)

**Use when:** Building new user-facing features from scratch

```
ProductOwner → Architect → TechLead → Tester → TechLead (fixes) → Architect (review) → ProductOwner (validate)
```

**Process:**
1. **ProductOwner**: Write user story, acceptance criteria, success metrics
2. **Architect**: Design system (DB schema, API, components), create GitHub issue
3. **TechLead**: Implement feature, write tests, follow coding standards
4. **Tester**: Security audit, find edge cases, stress test
5. **TechLead**: Fix all p0-critical and p1-high findings
6. **Architect**: Code review, approve architecture
7. **ProductOwner**: Validate feature meets user needs

**Example prompts:**
```
"Build a user dashboard with activity feed. Use full feature flow."

"Implement social features (follow/unfollow users). Full feature flow."

"Add AI-powered content recommendations. Use complete workflow."
```

**When to skip:** Simple bug fixes, typos, minor UI tweaks

---

### 2️⃣ Bug Fix Flow (Fast Track)

**Use when:** Fixing reported bugs with no new features

```
Tester (reproduce) → TechLead (fix + test) → Tester (verify) → ✅ Merge
```

**Process:**
1. **Tester**: Reproduce bug, diagnose root cause, document steps
2. **TechLead**: Fix bug, add regression test, verify fix works
3. **Tester**: Verify fix resolves issue, test edge cases
4. **Merge**: Skip ProductOwner/Architect review for minor bugs

**Example prompts:**
```
"Bug: Form submit button doesn't work after validation error. Use bug fix flow."

"Users can't delete their account. Bug fix flow."

"Images not loading on mobile. Fix using bug flow."
```

**When to skip:** Use full flow if bug fix requires architectural changes

---

### 3️⃣ Security Audit Flow (Tester-First)

**Use when:** Auditing existing code, pre-launch security reviews, compliance checks

```
Tester (audit) → Architect (assess) → TechLead (harden) → Tester (verify) → Architect (review)
```

**Process:**
1. **Tester**: Find vulnerabilities, test attack vectors, document findings
2. **Architect**: Assess severity (p0/p1/p2), design security fixes
3. **TechLead**: Implement security hardening, add security tests
4. **Tester**: Verify all vulnerabilities patched, re-test attack vectors
5. **Architect**: Final security posture review, approve for production

**Example prompts:**
```
"Audit authentication system for security issues. Security audit flow."

"Pre-launch security review before going public. Use security flow."

"Compliance audit for user data handling. Security audit flow."
```

**When to use:** Always before major releases, quarterly security reviews, after incidents

---

### 4️⃣ Research Flow (No Implementation)

**Use when:** Exploring feasibility, comparing technologies, making architecture decisions

```
ProductOwner (problem) → Architect (research) → Architect (write ADR) → ProductOwner (approve) → ⏸️ Stop
```

**Process:**
1. **ProductOwner**: Define problem, constraints, success criteria
2. **Architect**: Research solutions, compare tradeoffs (performance, cost, DX)
3. **Architect**: Write ADR (Architecture Decision Record) with recommendation
4. **ProductOwner**: Approve decision or request alternatives
5. **Stop**: File as future implementation issue, no code written yet

**Example prompts:**
```
"Should we use Prisma or Drizzle ORM? Research flow."

"WebSockets vs Server-Sent Events for real-time updates. Research flow."

"Which AI model for content generation (Claude vs GPT-4)? Research flow."
```

**Output:** ADR document in `docs/adr/`, GitHub issue for implementation

---

### 5️⃣ Quick Fix Flow (TechLead Solo)

**Use when:** Typos, copy changes, minor UI tweaks, non-critical changes

```
TechLead (fix + test) → ✅ Merge
```

**Process:**
1. **TechLead**: Make change, verify it works, commit
2. **Merge**: No review needed for trivial changes

**Example prompts:**
```
"TechLead: Fix typo in dashboard welcome message (quick fix)."

"Change button color to brand-500. Quick fix."

"Update copyright year to 2026. Quick fix."
```

**Criteria for quick fix:**
- ✅ No logic changes
- ✅ No database changes
- ✅ No API changes
- ✅ Low risk if wrong

---

### 6️⃣ Performance Optimization Flow

**Use when:** App is slow, high API latency, database bottlenecks

```
Tester (profile) → Architect (identify) → TechLead (optimize) → Tester (benchmark) → Architect (verify)
```

**Process:**
1. **Tester**: Stress test, profile performance, identify bottlenecks
2. **Architect**: Identify architectural issues (N+1 queries, missing indexes)
3. **TechLead**: Implement optimizations, add performance tests
4. **Tester**: Benchmark improvements, verify targets met
5. **Architect**: Verify no regressions, approve changes

**Example prompts:**
```
"User profile form is slow to submit. Performance flow."

"Dashboard takes 5 seconds to load. Use performance optimization flow."

"API response time >2s. Profile and optimize using performance flow."
```

**Success metrics:** Response time, load time, database query count

---

### 7️⃣ Refactoring Flow (Code Quality)

**Use when:** Tech debt, code smells, improving maintainability

```
Architect (identify) → TechLead (refactor) → Architect (review) → ✅ Merge
```

**Process:**
1. **Architect**: Identify problem areas (duplication, complexity, anti-patterns)
2. **TechLead**: Refactor code, ensure all tests pass, improve structure
3. **Architect**: Review for code quality improvements, approve
4. **Merge**: Skip ProductOwner unless UX changes

**Example prompts:**
```
"Refactor API routes to reduce duplication. Refactoring flow."

"Extract reusable components from dashboard. Use refactoring flow."

"Simplify database queries using ORM features. Refactoring flow."
```

**Rules:**
- ✅ Must maintain existing behavior
- ✅ All tests must pass
- ✅ No new features during refactoring

---

### 8️⃣ Hotfix Flow (Emergency Production Fix)

**Use when:** Production is broken, users are affected **right now**

```
🚨 Incident → TechLead (immediate fix) → Deploy ⚡ → Tester (post-mortem) → Architect (proper fix later)
```

**Process:**
1. **Incident**: Production is down or severely degraded
2. **TechLead**: Immediate fix (skip review, prioritize uptime)
3. **Deploy**: Push to production ASAP
4. **Tester**: Post-mortem audit, document what happened
5. **Architect**: File issue for proper fix, schedule follow-up

**Example prompts:**
```
"HOTFIX: Users can't sign in. Emergency fix needed."

"Production database timeout. Immediate hotfix required."

"User data not saving. URGENT hotfix."
```

**Criteria:**
- ⚠️ Only use for **actual emergencies** (users blocked)
- ⚠️ Follow up with proper fix within 24-48 hours
- ⚠️ Document incident in post-mortem

---

### 9️⃣ Documentation Flow (No Code)

**Use when:** Writing guides, API docs, updating README, onboarding materials

```
ProductOwner (define) → Architect (write) → ProductOwner (review) → ✅ Merge
```

**Process:**
1. **ProductOwner**: Define what needs documenting, target audience
2. **Architect**: Write technical documentation, diagrams, examples
3. **ProductOwner**: Review for clarity, completeness
4. **Merge**: No code review needed

**Example prompts:**
```
"Document the user profile API endpoints. Documentation flow."

"Write onboarding guide for new developers. Documentation flow."

"Update README with project roadmap. Documentation flow."
```

**Deliverables:** Markdown docs in `docs/`, updated README, API documentation

---

### 🔟 DevOps Flow (Phase 2+ Infrastructure)

**Use when:** CI/CD, deployment pipelines, monitoring, infrastructure (not needed for Phase 0)

```
Architect (requirements) → DevOps (implement) → Tester (verify) → DevOps (monitoring) → Architect (review)
```

**Process:**
1. **Architect**: Define infrastructure requirements, security standards
2. **DevOps**: Implement CI/CD pipeline, deployment automation
3. **Tester**: Verify deployment works, run security scans
4. **DevOps**: Set up monitoring, alerts, logging
5. **Architect**: Review infrastructure architecture, approve

**Example prompts:**
```
"Set up GitHub Actions for automated testing. DevOps flow."

"Configure Vercel production deployment. DevOps flow."

"Implement blue-green deployment strategy. Use DevOps flow."
```

**Phase 2+ only:** Not needed until scaling to production (Jun 2026+)

---

### 1️⃣1️⃣ API Design Flow (Design-First)

**Use when:** Designing new APIs before implementation, external integrations

```
ProductOwner (use cases) → Architect (design schema) → Tester (security review) → ProductOwner (approve) → ⏸️ Stop
```

**Process:**
1. **ProductOwner**: Define API use cases, client needs
2. **Architect**: Design API schema (REST/GraphQL/tRPC), write OpenAPI spec
3. **Tester**: Review for security issues (auth, rate limiting, injection)
4. **ProductOwner**: Approve API design
5. **Stop**: Hand off to TechLead for implementation (separate task)

**Example prompts:**
```
"Design API for user activity tracking (JSON endpoints). API design flow."

"Design GraphQL schema for user sessions. API design flow."

"ProductOwner + Architect: design authentication API."
```

**Deliverables:** OpenAPI spec, API documentation, Postman collection

---

## How to Request Workflows

### In Issues/PRs:

```markdown
<!-- In issue body -->
**Workflow:** Full Feature Flow
**Agents needed:** ProductOwner → Architect → TechLead → Tester

<!-- In PR description -->
**Workflow used:** Bug Fix Flow (Tester → TechLead → Tester)
**Tester approval:** @tester verified fix in staging
```

### In Chat/Commands:

```
"Build user activity charts. Use full feature flow."

"API latency is high. Use performance optimization flow."

"Should we use tRPC or REST? Research flow."
```

### Agent Mentions:

```
@ProductOwner: Define user story for social features

@Architect: Design database schema for user activity

@TechLead: Implement issue #22 (rate limiting)

@Tester: Security audit the file upload feature

@DevOps: Set up staging environment
```

---

## Workflow Best Practices

### ✅ DO:

- **Use full feature flow** for all new user-facing features
- **Use security audit flow** before major releases
- **Use hotfix flow** sparingly (real emergencies only)
- **Document which workflow** you used in PRs
- **Let agents stay in their lane** (PO = what, Arch = how, TL = build, Test = break)

### ❌ DON'T:

- **Skip Tester** for medical/payment/auth features (HIPAA/PCI compliance)
- **Skip ProductOwner** for user-facing features (must validate user value)
- **Use hotfix flow** for non-urgent bugs (use bug fix flow instead)
- **Mix workflows** (pick one and stick to it)
- **Skip documentation** for complex features (use documentation flow after implementation)

---

## Quick Reference Card

**Need to...**
- Build new feature → **Full Feature Flow**
- Fix a bug → **Bug Fix Flow**
- Make tech decision → **Research Flow**
- Optimize performance → **Performance Flow**
- Refactor code → **Refactoring Flow**
- Audit security → **Security Audit Flow**
- Emergency fix → **Hotfix Flow**
- Write docs → **Documentation Flow**
- Deploy infrastructure → **DevOps Flow** (Phase 2+)
- Design API → **API Design Flow**

**Example:** *"Build workout calendar view. Use full feature flow."*
