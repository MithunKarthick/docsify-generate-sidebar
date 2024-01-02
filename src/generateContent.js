const fs = require("fs");
const path = require("path");

// function generateContent(directory) {
//   const files = fs.readdirSync(directory);
//   const content = [];
//   files.forEach((file) => {
//     const filePath = path.join(directory, file);
//     const escapedFilePath = escapeSpaces(filePath);
//     const stats = fs.statSync(filePath);

//     if (stats.isDirectory()) {
//       // Recursive call for subdirectories
//       const subdirectoryContents = generateContent(filePath);
//       if ( subdirectoryContents.length > 0 && fs.existsSync(path.join(filePath, "README.md"))) {
//         content.push(`- [${formatFileName(file)}](${escapedFilePath}/README.md)`, ...subdirectoryContents.map((item) => `  ${item}`));
//       } else if (subdirectoryContents.length > 0) {
//         content.push(`- ${formatFileName(file)}`, ...subdirectoryContents.map((item) => `  ${item}`));
//       } else if (fs.existsSync(path.join(filePath, "README.md"))) {
//         // Link to README.md if present in the directory
//         content.push(`- [${formatFileName(file)}](${escapedFilePath}/README.md)`);
//       } else {
//         // If no README.md, just link to the directory
//         content.push(`- [${formatFileName(file)}](${escapedFilePath})`);
//       }
//     } else if (
//       path.extname(file) === ".md" &&
//       file != "README.md" &&
//       file != "readme.md"
//     ) {
//       // Add only .md files to the table of contents
//       content.push(`- [${formatFileName(file)}](${escapedFilePath})`);
//     }
//   });

//   return content;
// }

// function escapeSpaces(filePath) {
//   const escapedFilePath = filePath.replace(/ /g, "%20");
//   return escapedFilePath.split('/docs/')[1];
// }

// function formatFileName(filename) {
//   const file = filename.split("-");
//   const fileWithExtension = file.length > 1 ? file[1] : file[0];
//   return fileWithExtension.split(".md")[0];
// }

function generateContent(directory, rootPath) {
  const content = []
  fs.readdirSync(directory).forEach(file => {
    const cwdPath = path.join(directory, file)
    const relativePath = path.relative(rootPath, cwdPath)
    const filePath = relativePath.replace(/\s/g, '%20')
    const filename = modifyFileName(file)

    if (fs.statSync(cwdPath).isDirectory()) {
      const childContent = generateContent(cwdPath, rootPath) // Recursive call

      const isReadmePresent = fs.existsSync(path.join(cwdPath, 'README.md'))
      const hasChildContent = childContent.length > 0

      if (hasChildContent && isReadmePresent) {
        content.push(`- [${filename}](${filePath}/README.md)`, ...childContent.map(item => `  ${item}`))
      } else if (hasChildContent && !isReadmePresent) {
        content.push(`- ${filename}`, ...childContent.map(item => `  ${item}`))
      } else if (!hasChildContent && isReadmePresent) {
        content.push(`- [${filename}](${filePath}/README.md)`)
      } else {
        content.push(`- [${filename}](${filePath})`)
      }
    } else if (path.extname(file) === '.md' &&
          file.toLowerCase() !== 'readme.md' &&
          ignoreFiles.indexOf(filename) === -1) {
      content.push(`- [${filename}](${filePath})`)
    }
  })
  return content
}

function modifyFileName(file) {
  const filename = file.split('-')
  const fileWithExtension = filename.length > 1 ? filename[1] : filename[0]
  return path.basename(fileWithExtension, '.md')
}

module.exports = generateContent;
