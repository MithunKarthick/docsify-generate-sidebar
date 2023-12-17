#!/usr/bin/env node
const args = process.argv.slice(2);
const directoryPath = process.cwd() + '/pages'
require('../index.js')(directoryPath,'_sidebar.md');