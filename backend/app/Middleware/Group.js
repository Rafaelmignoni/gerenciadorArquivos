'use strict'

class Group {
  async handle ({ request, response, auth }, next) {
    const name_slug = request.header('GROUP')

    let group = null

    if (name_slug) {
      group = await auth.user.groups().where('name_slug', name_slug).first()
    }

    if (!group) {
      return response.status(401).send()
    }

    auth.user.currentGroup = group.id
    request.group = group

    await next()
  }
}

module.exports = Group
