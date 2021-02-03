'use strict'

const User = use('App/Models/User')
const UserGroup = use('App/Models/UserGroup')

class DatabaseSeeder {
  async run () {
    const user = await User.create({
      name: 'Rafael Mignoni',
      email: 'rafaelmignoni@gmail.com',
      password: '123456'
    })

    const user2 = await User.create({
      name: 'Soluti Admin',
      email: 'admin@admin.com',
      password: 'admin'
    })

    const solutiGroup = await user2.groups().create({
      name: 'Soluti',
      user_id: user2.id
    })
    await user2.groups().create({
      name: 'teste_2',
      user_id: user2.id
    })

    await UserGroup.create({
      user_id: user.id,
      group_id: solutiGroup.id
    })
  }
}

module.exports = DatabaseSeeder
