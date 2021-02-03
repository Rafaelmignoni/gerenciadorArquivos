'use strict'

class Group {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      name: 'required'
    }
  }
}

module.exports = Group
