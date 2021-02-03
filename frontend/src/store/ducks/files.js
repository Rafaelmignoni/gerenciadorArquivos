import { createReducer, createActions } from 'reduxsauce'
import immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
    getFilesRequest: null,
    getFilesSuccess: ['data'],
    createFileRequest: ['data'],
    createFileSuccess: ['file']
})

export const FilesTypes = Types
export default Creators

export const INITIAL_STATE = immutable({
    data: []
})

export const success = (state, { data }) => {
    return state.merge({ data })
}

export const createSuccess = (state, { file }) => {
    return state.merge({ data: [...state.data, file] })
}


export const reducer = createReducer(INITIAL_STATE, {
    [Types.GET_FILES_SUCCESS]: success,
    [Types.CREATE_FILE_SUCCESS]: createSuccess

})