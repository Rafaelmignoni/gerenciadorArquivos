import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import { reducer as toastr } from 'react-redux-toastr'
import { reducer as auth } from './auth'
import { reducer as groups } from './groups'
import { reducer as files } from './files'
import { reducer as members } from './members'

export default history => combineReducers({
    auth,
    groups,
    files,
    members,
    toastr,
    router: connectRouter(history)
})