const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const files = ['./dist/Angular-Docs/runtime.js', './dist/Angular-Docs/polyfills.js', './dist/Angular-Docs/common.js', './dist/Angular-Docs/main.js'];

  await fs.ensureDir('elements');
  await concat(files, 'elements/demo.js');
  await fs.copyFile('./dist/Angular-Docs/styles.css', 'elements/styles.css');
  await fs.copy('./dist/Angular-Docs/assets/', 'elements/assets/');
})();
