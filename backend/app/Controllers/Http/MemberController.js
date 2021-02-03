'use strict'

const UserGroup = use('App/Models/UserGroup')

class MemberController {
  async index ({ request }) {
    const members = await UserGroup.query()
      .where('group_id', request.group.id)
      .with('user').fetch()

    return members
  }
}

module.exports = MemberController
