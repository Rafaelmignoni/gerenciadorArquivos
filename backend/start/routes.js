'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', ({ response }) => { response.redirect('/docs') })

Route.post('sessions', 'SessionController.store').validator('Session')
Route.post('users', 'UserController.store').validator('User')

Route.group(() => {
  Route.resource('groups', 'GroupController')
    .apiOnly()
    .validator(new Map(
      [
        [
          ['groups.store', 'groups.update'], ['Group']
        ]
      ]
    )
    )
}).middleware('auth')

Route.group(() => {
  Route.get('members', 'MemberController.index')

  Route.resource('files', 'FileController')
    .apiOnly()
    .validator(new Map(
      [
        [
          ['files.store'], ['File']
        ]
      ]
    )
    )
}).middleware(['auth', 'group'])
