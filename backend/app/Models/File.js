'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Env = use('Env')

class File extends Model {
  static get computed () {
    return ['url']
  }

  getUrl ({ arquivo }) {
    return `${Env.get('APP_URL')}/files/${arquivo}`
  }

  groups () {
    return this.belongsToMany('App/Models/Group').pivotModel('App/Models/FileGroup')
  }
}

module.exports = File
