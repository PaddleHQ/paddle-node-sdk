import pkg from '../package.json';

Bun.write(
  './src/version.ts',
  `export const SDK_VERSION = '${pkg.version}';
  `,
);
