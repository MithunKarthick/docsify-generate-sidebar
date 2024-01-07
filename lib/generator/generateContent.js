const fs = require("fs");
const path = require("path");
const ignoreFiles = ['_navbar', '_coverpage', '_sidebar', 'node_modules']

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
