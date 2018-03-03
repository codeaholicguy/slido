import path from 'path'
import Sequelize, {DataTypes} from 'sequelize'

import {ENV} from '../config'
import {requireDirWithArgs} from '../services/fs'

import config from './config'

const db = new Sequelize(ENV, null, null, config[ENV])

const modelDir = path.join(__dirname, 'models')
const models = requireDirWithArgs(modelDir, ['index.js'], db, DataTypes)

for (const model of models) {
  db[model.name] = model
}

Object.keys(db).forEach(modelName => {
  if (db[modelName].hasOwnProperty('associate')) {
    db[modelName].associate(db)
  }
})

export default db
