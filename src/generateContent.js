const fs = require("fs");
const path = require("path");

function generateContent(directory) {
  const files = fs.readdirSync(directory);
  const content = [];

  files.forEach((file) => {
    const filePath = path.join(directory, file);
    const escapedFilePath = escapeSpaces(filePath);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      // Recursive call for subdirectories
      const subdirectoryContents = generateContent(filePath);
      if (
        subdirectoryContents.length > 0 &&
        fs.existsSync(path.join(filePath, "README.md"))
      ) {
        content.push(
          `- [${formatFileName(file)}](${escapedFilePath}/README.md)`,
          ...subdirectoryContents.map((item) => `  ${item}`)
        );
      } else if (subdirectoryContents.length > 0) {
        content.push(
          `- ${formatFileName(file)}`,
          ...subdirectoryContents.map((item) => `  ${item}`)
        );
      } else if (fs.existsSync(path.join(filePath, "README.md"))) {
        // Link to README.md if present in the directory
        content.push(
          `- [${formatFileName(file)}](${escapedFilePath}/README.md)`
        );
      } else {
        // If no README.md, just link to the directory
        content.push(`- [${formatFileName(file)}](${escapedFilePath})`);
      }
    } else if (
      path.extname(file) === ".md" &&
      file != "README.md" &&
      file != "readme.md"
    ) {
      // Add only .md files to the table of contents
      content.push(`- [${formatFileName(file)}](${escapedFilePath})`);
    }
  });

  return content;
}

function escapeSpaces(filePath) {
  return filePath.replace(/ /g, "%20");
}

function formatFileName(filename) {
  const file = filename.split("-");
  const fileWithExtension = file.length > 1 ? file[1] : file[0];
  return fileWithExtension.split(".md")[0];
}

module.exports = generateContent;
