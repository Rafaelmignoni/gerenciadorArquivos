import { createReducer, createActions } from 'reduxsauce'
import immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
    signInRequest: ['email', 'password'],
    signUpRequest: ['name', 'email', 'password'],
    signInSuccess: ['token'],
    signOut: null,
})

export const AuthTypes = Types
export default Creators

export const INITIAL_STATE = immutable({
    signedIn: !!localStorage.getItem('@Soluti:token'),
    token: localStorage.getItem('@Soluti:token') || null
})

export const success = (state, { token }) => {
    return state.merge({ signedIn: true, token })
}

export const logout = (state) => state.merge({ signedIn: false, token: null })

export const reducer = createReducer(INITIAL_STATE, {
    [Types.SIGN_IN_SUCCESS]: success,
    [Types.SIGN_OUT]: logout
})