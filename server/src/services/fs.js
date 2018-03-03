import fs from 'fs'
import path from 'path'

export function requireDir(dir, excepts = []) {
  return fs
    .readdirSync(dir)
    .filter(file => path.extname(file) === '.js' && !excepts.includes(file))
    .map(file => require(path.join(dir, file)))
}

export function requireDirWithArgs(dir, excepts = [], ...args) {
  return fs
    .readdirSync(dir)
    .filter(file => path.extname(file) === '.js' && !excepts.includes(file))
    .map(file => {
      let module = require(path.join(dir, file))
      if (args.length) {
        module = module(...args)
      }

      module.sourceFilename = module.sourceFilename || path.parse(file).name

      return module
    })
}

export default {
  requireDir,
  requireDirWithArgs
}
