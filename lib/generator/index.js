const fs = require("fs");
const os = require("os");
const path = require("path");
const chalk = require("chalk")
const generateContent = require("./generateContent");

function generateSidebar(cwdPath, sidebarPath) {
  const sidebarContent = generateContent(cwdPath, sidebarPath).join(os.EOL)
  fs.writeFileSync(path.join(sidebarPath, '_sidebar.md'), sidebarContent, 'utf8', err => {
    if (err) {
      console.log(chalk.bold.red(`Couldn't generate the sidebar file, error: ${err.message}`))
    }
  })
}

module.exports = generateSidebar;