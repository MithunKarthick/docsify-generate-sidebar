const chalk = require('chalk')
const pkg = require('../package.json')
const run = require('../lib')

require('yargonaut')
  .style('yellow', 'required')
  .helpStyle('green')
  .errorsStyle('red.bold')

require('yargs')
  .demandCommand(
    1,
    chalk.red('[ERROR] 0 arguments passed. Please specify a command')
  )
  .strict()
  .recommendCommands()
  .usage(
    chalk.bold(
      'Usage: docsify-generate-sidebar --source [path] --target [path]'
    )
  )
  .command({
    command: 'docsify-generate-sidebar [path]',
    aliases: 'g',
    desc: chalk.gray('generate'),
    builder: yargs =>
      yargs.options({
        overwrite: {
          alias: 'o',
          default: false,
          desc: chalk.gray('Allow overwrite generated files'),
          nargs: 0,
          type: 'boolean'
        },
        sidebar: {
          alias: 's',
          default: '_sidebar.md',
          desc: chalk.gray('Generate sidebar file'),
          nargs: 1,
          requiresArg: true,
          type: 'string'
        }
      }),
    // handler: argv => run.generate(argv.path, argv.sidebar, {overwrite: argv.overwrite})
    handler: argv => run.generate(argv.path, argv.sidebar)
  })
  .help()
  .option('help', {
    alias: 'h',
    type: 'boolean',
    desc: chalk.gray('help'),
    group: chalk.green('Global Options')
  })
  .version('\ndocsify-generate-sidebar version:\s  ' + pkg.version + '\s')
  .option('version', {
    alias: 'v',
    type: 'boolean',
    desc: chalk.gray('Show version number'),
    group: chalk.green('Global Options')
  })
  .epilog(chalk.gray('Documentation:\n  https://docsifyjs.github.io/docsify\n')).argv

// const directoryPath = process.cwd() + '/docs/pages'
// run.generate(directoryPath, './docs/_sidebar.md')
