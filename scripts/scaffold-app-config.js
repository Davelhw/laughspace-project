// Usage: node scripts/scaffold-app-config.js laughspace-api
const fs = require('fs');
const path = require('path');

const appName = process.argv[2];
if (!appName) {
  console.error('❌ Please provide an app name.');
  process.exit(1);
}

const appPath = path.join(__dirname, '..', 'apps', appName);
const tsconfigPath = path.join(appPath, 'tsconfig.app.json');

if (!fs.existsSync(appPath)) {
  console.error(`❌ App folder does not exist: apps/${appName}`);
  process.exit(1);
}

const content = {
  extends: '../../tsconfig.json',
  compilerOptions: {
    outDir: `../../dist/apps/${appName}`
  },
  include: ['src/**/*.ts'],
  exclude: ['node_modules', 'dist', 'test', '**/*.spec.ts']
};

fs.writeFileSync(tsconfigPath, JSON.stringify(content, null, 2));
console.log(`✅ Created tsconfig.app.json for ${appName}`);
