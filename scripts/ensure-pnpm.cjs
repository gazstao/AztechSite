const fs = require('node:fs');
const path = require('node:path');

for (const lockfile of ['package-lock.json', 'yarn.lock']) {
  const filePath = path.join(process.cwd(), lockfile);
  try {
    fs.unlinkSync(filePath);
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }
}

const userAgent = process.env.npm_config_user_agent || '';
if (!userAgent.startsWith('pnpm/')) {
  console.error('Use pnpm instead of npm or yarn.');
  process.exit(1);
}