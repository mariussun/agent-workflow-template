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

### Option 3: Add to Existing Repository

**For repositories that already have code (like adding agents to an existing project):**

**Quick Method (Copy-Paste into Workspace Chat):**

```
I want to add the agent workflow system from https://github.com/mariussun/agent-workflow-template to this existing repository.

Please:
1. Clone/copy the template files from E:\agent-workflow-template (if available locally) or download from GitHub
2. Copy .github/agents/ directory to this workspace
3. Copy CONTRIBUTING.md to this workspace
4. Copy scripts/ directory to this workspace
5. Look for existing documentation (README.md, docs/PRD.md, package.json, etc.) to understand:
   - Project name and description
   - Tech stack
   - Target users (if documented)
6. Create a customization script that replaces all {{PLACEHOLDERS}} in agents and CONTRIBUTING.md with project-specific values
7. For any unknown values, use "TBD" or ask me
8. Run the customization
9. Commit changes with message: "Add agent workflow infrastructure"

After setup, I'll work with ProductOwner and Architect agents to refine the details.
```

**Manual Steps:**

```powershell
# Step 1: Navigate to your existing repository
cd E:\YourExistingProject

# Step 2: Copy template files (if you have template locally)
Copy-Item -Recurse E:\agent-workflow-template\.github .
Copy-Item E:\agent-workflow-template\CONTRIBUTING.md .
Copy-Item -Recurse E:\agent-workflow-template\scripts .

# If template not local, download from GitHub:
# git clone https://github.com/mariussun/agent-workflow-template temp-template
# Copy-Item -Recurse temp-template\.github .
# Copy-Item temp-template\CONTRIBUTING.md .
# Copy-Item -Recurse temp-template\scripts .
# Remove-Item -Recurse temp-template

# Step 3: Review your project to gather context
# Look at: README.md, package.json, docs/, tech stack

# Step 4: Create customization script
# Copy scripts/setup-agents.js or create custom PowerShell script

# Step 5: Run customization (use TBD for unknowns)
npm run setup-agents
# Or run your custom script

# Step 6: Commit
git add .github/ CONTRIBUTING.md scripts/
git commit -m "Add agent workflow infrastructure

- 5 specialized agents (ProductOwner, Architect, TechLead, Tester, DevOps)
- 11 documented workflow patterns in CONTRIBUTING.md
- Initial customization (TBD items to be refined)"
git push origin main

# Step 7: Open VS Code in this workspace
code .

# Step 8: Refine with agents
# In GitHub Copilot Chat:
# "ProductOwner: Review our project and help me complete the TBD sections in your agent file"
# "Architect: Review the tech stack and complete the architectural details"
```

**What Gets Customized:**

✅ All 5 agent files with your project context  
✅ CONTRIBUTING.md with your repo URL, setup instructions, examples  
✅ Workflow patterns remain generic (reusable across all projects)  

**Unknown Values?**

Use `"TBD - to be refined by ProductOwner"` or `"TBD - to be refined by Architect"` for any placeholders you're unsure about. Then in the workspace:

```
"ProductOwner: I've added the agent workflow. Please review your agent file and help me complete all TBD sections based on our project."
```

---

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
- **VapeMap** — Science-based vape product comparison platform ([github.com/mariussun/vapemap](https://github.com/mariussun/vapemap))
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

## 📋 Quick Reference: Copy-Paste Prompts

### For Adding to Existing Repository

```
I want to add the agent workflow system from https://github.com/mariussun/agent-workflow-template to this repository.

Steps:
1. Copy template files from E:\agent-workflow-template (or clone from GitHub if not local)
2. Copy .github/agents/, CONTRIBUTING.md, and scripts/ to this workspace
3. Analyze this project's README, docs, and code to understand:
   - Project name, description, vision
   - Tech stack and architecture
   - Target users
   - Current priorities
4. Create a customization script with project-specific values (use "TBD" for unknowns)
5. Run customization to replace all {{PLACEHOLDERS}}
6. Commit with: "Add agent workflow infrastructure"
7. I'll refine TBD items with ProductOwner and Architect agents afterward

Please proceed with the setup.
```

### For Refining TBD Placeholders After Setup

```
ProductOwner: I've added the agent workflow system to this project. Your agent file at .github/agents/product-owner.agent.md contains some TBD placeholders. Please:
1. Review our project documentation
2. Help me complete all TBD sections with proper values
3. Update your agent file with the correct content
```

```
Architect: Review .github/agents/architect.agent.md and complete all TBD sections based on our tech stack and architecture.
```

### For Starting a New Project from Template

```
I want to create a new project using the agent workflow template from https://github.com/mariussun/agent-workflow-template.

Project details:
- Name: [YourProjectName]
- Description: [Brief description]
- Tech stack: [Your stack]
- Target users: [Who will use it]

Please:
1. Create directory at E:\[YourProjectName]
2. Copy all template files
3. Run customization with the details above
4. Initialize git repository
5. Create GitHub repository: mariussun/[yourprojectname]
6. Commit and push initial setup

Then I'll be ready to start development with the agents.
```

---

**Built by [@mariussun](https://github.com/mariussun)** | Powered by GitHub Copilot & Claude Sonnet 4.5
