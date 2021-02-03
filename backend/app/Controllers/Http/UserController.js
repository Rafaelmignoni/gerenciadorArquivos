'use strict'

const User = use('App/Models/User')

class UserController {
  async store ({ request, response, auth }) {
    const data = request.only(['name', 'email', 'password'])

    const dataUser = await User.create(data)

    if (dataUser) {
      const token = await auth.attempt(data.email, data.password)
      return token
    }
  }
}

module.exports = UserController
