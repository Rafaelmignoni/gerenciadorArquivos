'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserGroupSchema extends Schema {
  up () {
    this.create('user_groups', (table) => {
      table.increments()
      table
        .integer('user_id')
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('group_id')
        .notNullable()
        .references('id')
        .inTable('groups')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('user_groups')
  }
}

module.exports = UserGroupSchema
