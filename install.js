#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

// ANSI color codes for better output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function logSuccess(message) {
  console.log(`${colors.green}✅ ${message}${colors.reset}`);
}

function logWarning(message) {
  console.log(`${colors.yellow}⚠️  ${message}${colors.reset}`);
}

function logError(message) {
  console.log(`${colors.red}❌ ${message}${colors.reset}`);
}

function logInfo(message) {
  console.log(`${colors.cyan}ℹ️  ${message}${colors.reset}`);
}

// Get Claude Code config directory
function getClaudeDir() {
  // Check for test/custom directory from command line
  const args = process.argv.slice(2);
  const testDirIndex = args.indexOf('--test-dir');
  if (testDirIndex !== -1 && args[testDirIndex + 1]) {
    return path.resolve(args[testDirIndex + 1]);
  }
  return path.join(os.homedir(), '.claude');
}

// Check if Claude Code is installed
function checkClaudeInstallation() {
  const claudeDir = getClaudeDir();
  
  // Skip check if using test directory
  if (process.argv.includes('--test-dir')) {
    logInfo(`Using test directory: ${claudeDir}`);
    return true;
  }
  
  if (!fs.existsSync(claudeDir)) {
    logError('Claude Code directory not found. Please ensure Claude Code is installed.');
    logInfo('Visit https://claude.ai/code for installation instructions.');
    return false;
  }
  return true;
}

// Create necessary directories
function createDirectories() {
  const claudeDir = getClaudeDir();
  const agentsDir = path.join(claudeDir, 'agents');
  const commandsDir = path.join(claudeDir, 'commands');

  [agentsDir, commandsDir].forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      logSuccess(`Created directory: ${dir}`);
    }
  });

  return { agentsDir, commandsDir };
}

// Check for conflicting agents
function checkConflicts(targetDir, files, type) {
  const conflicts = [];
  files.forEach(file => {
    const targetPath = path.join(targetDir, path.basename(file));
    if (fs.existsSync(targetPath)) {
      conflicts.push(path.basename(file));
    }
  });

  if (conflicts.length > 0) {
    logWarning(`Found existing ${type}: ${conflicts.join(', ')}`);
    return true;
  }
  return false;
}

// Copy files to target directory
function copyFiles(sourceDir, targetDir, type) {
  const files = fs.readdirSync(sourceDir)
    .filter(file => file.endsWith('.md'))
    .map(file => path.join(sourceDir, file));

  if (files.length === 0) {
    logWarning(`No ${type} files found in ${sourceDir}`);
    return;
  }

  const hasConflicts = checkConflicts(targetDir, files, type);
  
  files.forEach(file => {
    const targetPath = path.join(targetDir, path.basename(file));
    try {
      fs.copyFileSync(file, targetPath);
      logSuccess(`Installed ${type}: ${path.basename(file)}`);
    } catch (error) {
      logError(`Failed to copy ${path.basename(file)}: ${error.message}`);
    }
  });

  if (hasConflicts) {
    logWarning('Some files were overwritten. Previous versions have been replaced.');
  }
}

// Main installation function
function install() {
  log('\n🚀 Claude-VSpec Installation\n', 'bright');
  log('Installing V-Model specification-driven development agent...', 'cyan');

  // Check Claude Code installation
  if (!checkClaudeInstallation()) {
    process.exit(1);
  }

  // Create directories
  const { agentsDir, commandsDir } = createDirectories();

  // Copy agents
  const agentsSourceDir = path.join(__dirname, 'agents');
  if (fs.existsSync(agentsSourceDir)) {
    log('\n📦 Installing agents...', 'blue');
    copyFiles(agentsSourceDir, agentsDir, 'agent');
  } else {
    logError('Agents directory not found in package');
  }

  // Copy commands
  const commandsSourceDir = path.join(__dirname, 'commands');
  if (fs.existsSync(commandsSourceDir)) {
    log('\n📦 Installing commands...', 'blue');
    copyFiles(commandsSourceDir, commandsDir, 'command');
  } else {
    logError('Commands directory not found in package');
  }

  // Success message
  log('\n✨ Installation Complete!\n', 'bright');
  
  if (process.argv.includes('--test-dir')) {
    log('Test Installation Details:', 'yellow');
    log(`  Installed to: ${getClaudeDir()}`);
    log('  This is a TEST installation\n');
  } else {
    log('Usage:', 'green');
    log('  1. In Claude Code, type: /vspec-feature "Your user story"');
    log('  2. Or mention V-Model in your request');
    log('  3. Example: /vspec-feature "Amy adds todo item"');
  }
  
  log('\nFeatures:', 'blue');
  log('  • ATDD → SDD → TDD hierarchical development');
  log('  • Automatic traceability and consistency checking');
  log('  • Gherkin acceptance test generation');
  log('  • V-Model progress tracking');

  log('\nDocumentation:', 'cyan');
  log('  https://github.com/yiidtw/claude-vspec');
  
  // Check if called from npm postinstall
  if (process.argv.includes('--auto')) {
    log('\n📌 Installed via npm. Ready to use!', 'green');
  }
}

// Run installation
try {
  install();
} catch (error) {
  logError(`Installation failed: ${error.message}`);
  process.exit(1);
}