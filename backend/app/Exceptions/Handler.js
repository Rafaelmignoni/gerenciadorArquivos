'use strict'

const BaseExceptionHandler = use('BaseExceptionHandler')

class ExceptionHandler extends BaseExceptionHandler {
  async handle (error, { request, response }) {
    console.log(error)
    if (error.status !== 400) {
      response
        .status(error.status)
        .send({ erro: { message: error.message } })
    } else {
      request.request.headers.accept = 'application/json'
      return super.handle(...arguments)
    }
  }
}

module.exports = ExceptionHandler
