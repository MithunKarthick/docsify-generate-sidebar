const args = process.argv.slice(2);
const directoryPath = process.cwd() + '/docs/pages'
const run = require('../lib')
run.generate(directoryPath,'./docs/_sidebar.md');