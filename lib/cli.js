const run = require('../lib')
const path = require("path");

const args = process.argv.slice(2)
let directoryPath, sidebarPath
switch (args.length) {
  case 0:
    directoryPath = sidebarPath = process.cwd()
    break;
  case 1:
    directoryPath = sidebarPath =   path.join(process.cwd(),args[0])
    break;
  case 2:
    directoryPath = path.join(process.cwd(),args[0])
    sidebarPath = path.join(process.cwd(),args[1])
    break
  default:
    console.log("Too many arguments passed");
    break;
}
run.generate(directoryPath, path.join(sidebarPath, '_sidebar.md'))
