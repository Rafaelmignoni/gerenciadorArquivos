import { call, put } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { actions as toastrActions } from 'react-redux-toastr'
import api from '../../services/api'

import AuthActions from '../ducks/auth'

export function* signIn({ email, password }) {
    try {
        const response = yield call(api.post, 'sessions', { email, password })

        localStorage.setItem('@Soluti:token', response.data.token)

        yield put(AuthActions.signInSuccess(response.data.token))
        yield put(push('/'))

    } catch (err) {
        console.log(err)
        yield put(
            toastrActions.add({
                type: 'error',
                title: 'Falha no login',
                message: 'Verifique seu e-mail/senha!'
            })
        )
    }
}

export function* signOut() {
    localStorage.removeItem('@Soluti:token');
    localStorage.removeItem('@Soluti:group');

    yield put(push('/signin'))

}

export function* signUp({ name, email, password }) {
    try {
        const response = yield call(api.post, 'users', { name, email, password })

        localStorage.setItem('@Soluti:token', response.data.token)

        yield put(AuthActions.signInSuccess(response.data.token))
        yield put(push('/'))

    } catch (err) {
        console.log(err)
        yield put(
            toastrActions.add({
                type: 'error',
                title: 'Falha no cadastro',
                message: 'Verifique seu e-mail/senha!'
            })
        )
    }
}