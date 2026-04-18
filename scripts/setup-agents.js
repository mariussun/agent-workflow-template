#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('\n🚀 Agent Workflow Setup\n');
console.log('This script will customize the agent templates for your project.\n');

const questions = [
  { key: 'PROJECT_NAME', prompt: 'Project name (e.g., VapeMap, TaskFlow): ' },
  { key: 'PROJECT_DESCRIPTION', prompt: 'Short description (e.g., "a vape shop mapping platform"): ' },
  { key: 'GITHUB_OWNER', prompt: 'GitHub username/org (e.g., mariussun): ' },
  { key: 'GITHUB_REPO', prompt: 'GitHub repo name (e.g., vapemap): ' },
  { key: 'PROJECT_PATH', prompt: 'Project directory path (e.g., E:\\VapeMap): ' },
  { key: 'PRODUCT_VISION', prompt: 'Product vision (one sentence): ' },
  { key: 'VISION_STATEMENT', prompt: 'Vision statement (tagline, e.g., "Discover vape shops near you"): ' },
  { key: 'TARGET_USERS', prompt: 'Target users (e.g., "Vapers looking for local shops"): ' },
  { key: 'VALUE_PROPOSITION', prompt: 'Unique value proposition (what makes this special?): ' },
  { key: 'CURRENT_PHASE_PRIORITIES', prompt: 'Current phase priorities (e.g., "Phase 0: Map view + shop listings"): ' },
  { key: 'NORTH_STAR_METRIC', prompt: 'North Star metric (e.g., "Weekly active users"): ' },
  { key: 'TECH_STACK', prompt: 'Tech stack (e.g., "Next.js + Prisma + PostgreSQL"): ' },
  { key: 'INSTALL_COMMAND', prompt: 'Install command (e.g., "npm install", "yarn", "pnpm install"): ', default: 'npm install' },
  { key: 'SETUP_COMMANDS', prompt: 'Setup commands (e.g., "cp .env.example .env.local\\nnpm run dev"): ', default: 'npm run dev' },
];

const answers = {};

function ask(question) {
  return new Promise(resolve => {
    rl.question(question.prompt, answer => {
      answers[question.key] = answer || question.default || `[${question.key}]`;
      resolve();
    });
  });
}

(async () => {
  try {
    // Ask all questions
    for (const question of questions) {
      await ask(question);
    }
    
    rl.close();
    
    console.log('\n✨ Customizing agent files...\n');

    // Set default values for optional placeholders
    answers.NUM_AGENTS = answers.NUM_AGENTS || '5';
    answers.CODING_STANDARDS = answers.CODING_STANDARDS || 'Follow standard coding practices for your stack.';
    answers.ERROR_HANDLING = answers.ERROR_HANDLING || 'Use try-catch blocks, log errors, provide user-friendly messages.';
    answers.TESTING_STRATEGY = answers.TESTING_STRATEGY || 'Write unit tests for business logic, integration tests for APIs.';
    answers.COMMON_PATTERNS = answers.COMMON_PATTERNS || 'Document project-specific patterns here.';
    answers.ANTI_PATTERNS = answers.ANTI_PATTERNS || 'Document anti-patterns to avoid here.';
    answers.SECURITY_CHECKLIST = answers.SECURITY_CHECKLIST || 'Auth checks, input validation, no secrets in code.';
    answers.EDGE_CASES = answers.EDGE_CASES || 'Empty inputs, oversized inputs, invalid data types.';
    answers.CHAOS_SCENARIOS = answers.CHAOS_SCENARIOS || 'API timeouts, database failures, network errors.';
    answers.COMMON_VULNERABILITIES = answers.COMMON_VULNERABILITIES || 'SQL injection, XSS, CSRF, auth bypass.';
    answers.TECH_DECISIONS = answers.TECH_DECISIONS || 'Document pending technology decisions here.';
    answers.INFRASTRUCTURE = answers.INFRASTRUCTURE || 'Document infrastructure setup here.';
    answers.ENVIRONMENTS = answers.ENVIRONMENTS || 'Development, Staging, Production.';
    answers.CICD_PIPELINE = answers.CICD_PIPELINE || 'GitHub Actions for automated testing and deployment.';
    answers.MONITORING = answers.MONITORING || 'Error tracking, performance monitoring, uptime monitoring.';
    answers.SECRETS_MANAGEMENT = answers.SECRETS_MANAGEMENT || 'Use environment variables, never commit secrets.';
    answers.DATABASE_OPS = answers.DATABASE_OPS || 'Run migrations, backup regularly, monitor performance.';
    answers.SCALING_STRATEGY = answers.SCALING_STRATEGY || 'Vertical scaling first, horizontal scaling when needed.';
    answers.DISASTER_RECOVERY = answers.DISASTER_RECOVERY || 'Daily backups, tested rollback procedures.';
    
    // CONTRIBUTING.md placeholders
    answers.BRANCH_NAMING = answers.BRANCH_NAMING || '## Branch Naming\n\n```\nfeature/feature-name    # new feature\nfix/bug-description     # bug fix\ndocs/topic              # documentation\nrefactor/description    # refactor\n```';
    answers.COMMIT_CONVENTION = answers.COMMIT_CONVENTION || '## Commit Message Convention\n\n```\nfeat: add new feature\nfix: correct bug\ndocs: update documentation\nrefactor: improve code structure\ntest: add tests\n```';
    answers.PR_PROCESS = answers.PR_PROCESS || '## Pull Request Process\n\n1. Create feature branch\n2. Write or update tests\n3. Ensure tests pass\n4. Request review\n5. Merge after approval';
    answers.CODE_STANDARDS = answers.CODE_STANDARDS || '## Code Standards\n\n- Follow language-specific best practices\n- Write clean, maintainable code\n- No secrets in code\n- Document complex logic';
    answers.PROJECT_STRUCTURE = answers.PROJECT_STRUCTURE || '## Project Structure\n\nDocument your project structure here.';
    answers.ENVIRONMENT_SETUP = answers.ENVIRONMENT_SETUP || '## Environment Setup\n\nDocument required environment variables in `.env.example`.';
    answers.EXAMPLE_FEATURE_NAME = answers.EXAMPLE_FEATURE_NAME || 'User Profile Feature';
    answers.EXAMPLE_USER_STORY = answers.EXAMPLE_USER_STORY || 'As a user, I want to view and edit my profile\nso that I can keep my information up to date.';
    answers.EXAMPLE_GITHUB_ISSUE = answers.EXAMPLE_GITHUB_ISSUE || 'Issue #1: User profile page\nLabels: feature, frontend\n\nTechnical Requirements:\n- Create profile route\n- Add edit form\n- Implement validation';
    answers.EXAMPLE_CODE_LANG = answers.EXAMPLE_CODE_LANG || 'typescript';
    answers.EXAMPLE_IMPLEMENTATION = answers.EXAMPLE_IMPLEMENTATION || '// Implementation example\nexport function UserProfile() {\n  return <div>Profile</div>\n}';
    answers.EXAMPLE_SECURITY_AUDIT = answers.EXAMPLE_SECURITY_AUDIT || 'Security Review:\n✅ Authorization checks present\n✅ Input validation complete';
    answers.EXAMPLE_FIX = answers.EXAMPLE_FIX || '// Fixed implementation\nexport function UserProfile() {\n  // Security fix applied\n  return <div>Profile</div>\n}';
    answers.EXAMPLE_PO_QUESTION = answers.EXAMPLE_PO_QUESTION || 'Is this feature a priority for users?';
    answers.EXAMPLE_ARCH_QUESTION = answers.EXAMPLE_ARCH_QUESTION || 'Should we use REST or GraphQL for this API?';
    answers.EXAMPLE_TL_REQUEST = answers.EXAMPLE_TL_REQUEST || 'Please implement issue #8';
    answers.EXAMPLE_TESTER_REQUEST = answers.EXAMPLE_TESTER_REQUEST || 'Audit the authentication flow for vulnerabilities';

    // Replace placeholders in all agent files AND CONTRIBUTING.md
    const agentDir = path.join(__dirname, '..', '.github', 'agents');
    const rootDir = path.join(__dirname, '..');
    
    if (!fs.existsSync(agentDir)) {
      console.error('❌ Error: .github/agents directory not found');
      console.error('   Make sure you run this from the project root');
      process.exit(1);
    }

    const agentFiles = fs.readdirSync(agentDir);
    const contributingFile = path.join(rootDir, 'CONTRIBUTING.md');
    let filesProcessed = 0;

    // Process agent files
    agentFiles.forEach(file => {
      const filePath = path.join(agentDir, file);
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Replace all placeholders
      Object.entries(answers).forEach(([key, value]) => {
        const placeholder = new RegExp(`\\{\\{${key}\\}\\}`, 'g');
        content = content.replace(placeholder, value);
      });

      fs.writeFileSync(filePath, content);
      filesProcessed++;
      console.log(`   ✓ ${file}`);
    });

    // Process CONTRIBUTING.md
    if (fs.existsSync(contributingFile)) {
      let content = fs.readFileSync(contributingFile, 'utf8');
      
      Object.entries(answers).forEach(([key, value]) => {
        const placeholder = new RegExp(`\\{\\{${key}\\}\\}`, 'g');
        content = content.replace(placeholder, value);
      });

      fs.writeFileSync(contributingFile, content);
      filesProcessed++;
      console.log(`   ✓ CONTRIBUTING.md`);
    }

    console.log(`\n✅ Success! Customized ${filesProcessed} files for ${answers.PROJECT_NAME}\n`);
    console.log('📝 Next steps:');
    console.log('   1. Review the agents in .github/agents/');
    console.log('   2. Update any remaining placeholders manually');
    console.log('   3. Read CONTRIBUTING.md for workflow patterns');
    console.log('   4. Start building! 🚀\n');

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  }
})();
