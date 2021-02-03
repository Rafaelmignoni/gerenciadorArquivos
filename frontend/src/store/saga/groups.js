import { call, put } from 'redux-saga/effects'
import { actions as toastrActions } from 'react-redux-toastr'
import api from '../../services/api'

import GroupsActions from '../ducks/groups'

export function* getGroups() {
    const response = yield call(api.get, 'groups')

    yield put(GroupsActions.getGroupsSuccess(response.data))
}

export function* createGroup({ name }) {
    try {
        const response = yield call(api.post, 'groups', { name });

        yield put(GroupsActions.createGroupSuccess(response.data))
        yield put(GroupsActions.closeGroupModal());
    } catch (err) {
        yield put(toastrActions.add({
            type: 'error',
            title: 'Erro na operação',
            message: 'Houve um erro, tente novamente'
        }))
    }

}