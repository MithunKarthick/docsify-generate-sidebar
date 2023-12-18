const fs = require("fs");
const generateContent = require("./generateContent");

function generateSidebar(directory, outputFileName) {
  const content = generateContent(directory);
  const markdownContent = ['', ...content].join('\n');
  fs.writeFileSync(outputFileName, markdownContent, 'utf-8');
  console.log(`sidebar contents generated and saved to ${outputFileName}`);
}

module.exports = generateSidebar;