// scripts/validate-dist.js

const fs = require('fs');
const path = require('path');

const apps = ['laughspace-app', 'laughspace-project'];
const distRoot = path.join(__dirname, '..', 'dist', 'apps');

let hasErrors = false;

for (const app of apps) {
  const appDistPath = path.join(distRoot, app);
  if (!fs.existsSync(appDistPath)) {
    console.error(`❌ Missing build output for app: ${app}`);
    hasErrors = true;
  } else {
    const mainJs = path.join(appDistPath, 'main.js');
    if (!fs.existsSync(mainJs)) {
      console.warn(`⚠️  Build exists but main.js missing in: ${app}`);
      hasErrors = true;
    } else {
      console.log(`✅ Build OK for ${app}`);
    }
  }
}

if (hasErrors) {
  console.error('\n💥 Build validation failed. Run `npm run build` again.\n');
  process.exit(1);
} else {
  console.log('\n🎉 All apps compiled successfully.\n');
}
