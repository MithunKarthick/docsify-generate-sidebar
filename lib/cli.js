const args = process.argv.slice(2);
const directoryPath = process.cwd() + '/docs/pages'
require('../index.js')(directoryPath,'./docs/_sidebar.md');