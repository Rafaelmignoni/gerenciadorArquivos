
class GroupController {
  async index ({ auth }) {
    const groups = await auth.user.groups().fetch()

    return groups
  }

  async store ({ request, auth }) {
    const data = request.only(['name'])

    const group = await auth.user.groups().create({
      ...data,
      user_id: auth.user.id
    })

    return group
  }

  async show ({ params, auth }) {
    const group = await auth.user.groups().where('group_id', params.id).first()

    return group
  }

  async update ({ params, request, auth }) {
    const data = request.only(['name'])

    const group = await auth.user.groups().where('group_id', params.id).first()

    group.merge(data)

    await group.save()

    return group
  }

  async destroy ({ params, auth }) {
    const group = await auth.user.groups().where('group_id', params.id).first()

    await group.delete()
  }
}

module.exports = GroupController
