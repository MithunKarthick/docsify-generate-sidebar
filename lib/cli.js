const chalk = require('chalk')
const run = require('../lib')
const path = require('path')
const fs = require('fs')

const args = process.argv.slice(2)
let directoryPath, sidebarPath
let hasError = false
switch (args.length) {
  case 0:
    directoryPath = sidebarPath = process.cwd()
    break
  case 1:
    directoryPath = sidebarPath = path.join(process.cwd(), args[0])
    break
  case 2:
    directoryPath = path.join(process.cwd(), args[0])
    sidebarPath = path.join(process.cwd(), args[1])
    break
  default:
    hasError = true
    console.log(chalk.bold.red('Too many arguments passed'))
    break
}

if(!hasError) run.generate(directoryPath, sidebarPath)
