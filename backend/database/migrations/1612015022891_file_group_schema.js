'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FileGroupSchema extends Schema {
  up () {
    this.create('file_groups', (table) => {
      table.increments()
      table
        .integer('file_id')
        .notNullable()
        .references('id')
        .inTable('files')
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
    this.drop('file_groups')
  }
}

module.exports = FileGroupSchema
