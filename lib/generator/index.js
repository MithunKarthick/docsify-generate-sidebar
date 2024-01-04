const fs = require("fs");
const os = require("os");
const generateContent = require("./generateContent");

function generateSidebar(cwdPath, sidebarPath) {
  const sidebarContent = generateContent(cwdPath, cwdPath).join(os.EOL)
  fs.writeFileSync(sidebarPath, sidebarContent, 'utf8', err => {
    if (err) {
      logger.error(`Couldn't generate the sidebar file, error: ${err.message}`)
    }
  })
}

module.exports = generateSidebar;