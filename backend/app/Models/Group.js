/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Group extends Model {
  static boot () {
    super.boot()

    this.addTrait('@provider:Lucid/Slugify', {
      fields: {
        name_slug: 'name'
      },
      strategy: 'dbIncrement',
      disableUpdates: false
    })
  }

  users () {
    return this.belongsToMany('App/Models/User').pivotModel('App/Models/UserGroup')
  }

  files () {
    return this.belongsToMany('App/Models/File').pivotModel('App/Models/FileGroup')
  }
}

module.exports = Group
