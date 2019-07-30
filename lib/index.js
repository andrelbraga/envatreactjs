const path = require('path')
const fs = require('fs')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)

const pathEnv = resolveApp('.env')
const dotenvFiles = [ pathEnv ].filter(Boolean)

dotenvFiles.forEach(dotenvFile => {
    if (fs.existsSync(dotenvFile)) {
      require('dotenv-expand')(
        require('dotenv').config({
          path: dotenvFile,
        })
      )
    }
})

const APP = /^APP_/i;
const NODE_ENV = process.env.NODE_ENV || "development"

const getEnv = () => {

    const raw = Object.keys(process.env)
      .filter(key => APP.test(key))
      .reduce(
        (env, key) => {
          env[key] = process.env[key];
          return env
        },
        { NODE_ENV }
    )
  
    const stringified = {
      'process.env': Object.keys(raw).reduce((env, key) => {
        env[key] = JSON.stringify(raw[key]);
        return env
      }, {}),
    }
  
    return { raw, stringified }
  }
  
  module.exports = getEnv