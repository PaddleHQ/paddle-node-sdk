const fs = require('fs');

fs.writeFileSync('./src/version.ts', `export const SDK_VERSION = '${process.env.npm_package_version}';`);
