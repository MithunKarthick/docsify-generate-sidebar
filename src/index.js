const fs = require("fs");
const os = require("os");
const generateContent = require("./generateContent");

// function generateSidebar(directory, outputFileName) {
//   const content = generateContent(directory);
//   const markdownContent = ['', ...content].join('\n');
//   fs.writeFileSync(outputFileName, markdownContent, 'utf-8');
//   console.log(`sidebar contents generated and saved to ${outputFileName}`);
// }

function generateSidebar(cwdPath, sidebarPath) {
  const sidebarContent = generateContent(cwdPath, cwdPath).join(os.EOL)
  fs.writeFileSync(sidebarPath, sidebarContent, 'utf8', err => {
    if (err) {
      logger.error(`Couldn't generate the sidebar file, error: ${err.message}`)
    }
  })
}

module.exports = generateSidebar;