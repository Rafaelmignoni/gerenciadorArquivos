import { all, takeLatest } from 'redux-saga/effects'

import { signIn, signOut, signUp } from './auth'
import { AuthTypes } from '../ducks/auth'

import { getGroups, createGroup } from './groups'
import { GroupsTypes } from '../ducks/groups'

import { getFiles, createFile } from './files'
import { FilesTypes } from '../ducks/files'

import { getMembers } from './members'
import { MembersTypes } from '../ducks/members'

export default function* rootSaga() {
    return yield all([
        takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
        takeLatest(AuthTypes.SIGN_UP_REQUEST, signUp),
        takeLatest(AuthTypes.SIGN_OUT, signOut),

        takeLatest(GroupsTypes.GET_GROUPS_REQUEST, getGroups),
        takeLatest(GroupsTypes.CREATE_GROUP_REQUEST, createGroup),
        takeLatest(GroupsTypes.SELECT_GROUP, getFiles),

        takeLatest(FilesTypes.GET_FILES_REQUEST, getFiles),
        takeLatest(FilesTypes.CREATE_FILE_REQUEST, createFile),

        takeLatest(MembersTypes.GET_MEMBERS_REQUEST, getMembers)

    ])
}