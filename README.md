# Agent Workflow Template

🤖 **Reusable agent ecosystem for AI-assisted software development**

This template provides a complete agent collaboration workflow with 5 specialized agents (ProductOwner, Architect, TechLead, Tester, DevOps) and 11 documented workflow patterns.

## What's Included

- ✅ **5 Agent Templates** (.github/agents/)
  - `product-owner.agent.md` — Product vision, user stories, validation
  - `architect.agent.md` — System design, tech decisions, code review
  - `TechLead.agent.md` — Implementation, bug fixes, refactoring
  - `tester.agent.md` — Security audits, edge cases, stress testing
  - `devops.agent.md` — CI/CD, deployment, monitoring

- ✅ **11 Workflow Patterns** (CONTRIBUTING.md)
  - Full Feature Flow, Bug Fix Flow, Security Audit Flow, Research Flow
  - Quick Fix Flow, Performance Flow, Refactoring Flow, Hotfix Flow
  - Documentation Flow, DevOps Flow, API Design Flow

- ✅ **Customization Script** (scripts/setup-agents.js)
  - Interactive setup to customize agents for your project

## Quick Start

### Option 1: Use as GitHub Template

1. Click "Use this template" on GitHub
2. Create your new repository
3. Clone and run setup:

```bash
git clone https://github.com/your-username/your-project.git
cd your-project
npm run setup-agents
# Answer the prompts
```

### Option 2: Manual Setup

1. Copy this directory to your project:

```bash
cp -r agent-workflow-template/.github your-project/
cp agent-workflow-template/CONTRIBUTING.md your-project/
cp agent-workflow-template/package.json your-project/
cp -r agent-workflow-template/scripts your-project/
```

2. Run customization:

```bash
cd your-project
npm run setup-agents
```

## Setup Process

The `setup-agents` script will ask you:

- **Project name**: e.g., "VapeMap", "TaskFlow"
- **Description**: e.g., "a vape shop mapping platform"
- **GitHub owner/repo**: e.g., "mariussun/vapemap"
- **Product vision**: One sentence describing your goal
- **Target users**: Who will use this?
- **Value proposition**: What makes this unique?
- **Tech stack**: e.g., "Next.js + Prisma + PostgreSQL"
- **North Star metric**: e.g., "Weekly active users"

All placeholders (e.g., `{{PROJECT_NAME}}`) will be replaced with your answers.

## How to Use the Agents

### In VS Code with GitHub Copilot Chat

Simply mention the agent name in your prompt:

```
"ProductOwner: Create user story for user authentication"

"Architect: Design the database schema for user profiles"

"TechLead: Implement the login form component"

"Tester: Audit the authentication flow for security issues"

"DevOps: Set up CI/CD pipeline for automated testing"
```

### Workflow Selection

Check the **Workflow Selection Matrix** in CONTRIBUTING.md to pick the right workflow for your task:

| Scenario | Workflow | Example Prompt |
|----------|----------|----------------|
| New feature | Full Feature Flow | "Build user dashboard. Use full feature flow." |
| Bug fix | Bug Fix Flow | "Login button broken. Use bug fix flow." |
| Security review | Security Audit Flow | "Audit payment flow. Security audit flow." |
| Tech decision | Research Flow | "Should we use REST or GraphQL? Research flow." |

See CONTRIBUTING.md for all 11 workflows with detailed examples.

## Customization

After running `setup-agents`, you can manually edit:

- `.github/agents/*.md` — Add project-specific context
- `CONTRIBUTING.md` — Update coding standards, branch naming, etc.

## Project Structure

```
your-project/
├── .github/
│   └── agents/
│       ├── product-owner.agent.md
│       ├── architect.agent.md
│       ├── TechLead.agent.md
│       ├── tester.agent.md
│       └── devops.agent.md
├── scripts/
│   └── setup-agents.js
├── CONTRIBUTING.md
└── package.json
```

## Example Projects Using This Template

- **MoveOn** — AI-driven medical fitness platform ([github.com/mariussun/moveon](https://github.com/mariussun/moveon))
- *(Add your project here after using the template!)*

## Benefits

- ✅ **Reusable** — Use across multiple projects
- ✅ **Consistent** — Same agent structure everywhere
- ✅ **Documented** — 11 workflows with examples
- ✅ **Customizable** — Easy to adapt to your needs
- ✅ **Fast setup** — 5 minutes from template to working agents

## Contributing

Improvements to the template are welcome! Please:

1. Fork this repo
2. Make your changes
3. Submit a PR with description of improvements

## License

MIT License — use freely for personal and commercial projects

---

**Built by [@mariussun](https://github.com/mariussun)** | Powered by GitHub Copilot & Claude Sonnet 4.5
