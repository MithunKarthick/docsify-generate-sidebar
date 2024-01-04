const args = process.argv.slice(2);
const directoryPath = process.cwd() + '/docs/pages'
require('./generator/index.js')(directoryPath,'./docs/_sidebar.md');