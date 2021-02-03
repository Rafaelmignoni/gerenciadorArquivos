import { call, put } from 'redux-saga/effects'
import { actions as toastrActions } from 'react-redux-toastr'
import api from '../../services/api'

import FilesActions from '../ducks/files'

export function* getFiles() {
    const response = yield call(api.get, 'files')

    yield put(FilesActions.getFilesSuccess(response.data))
}

export function* createFile({ data }) {
    try {

        const arquivo = new FormData();
        arquivo.append(
            'file',
            data
        );

        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };

        const response = yield call(api.post, 'files', arquivo, config)

        yield put(FilesActions.createFileSuccess(response.data))

    } catch (err) {
        yield put(toastrActions.add({
            options: {
                showCloseButton: true
            },
            type: 'error',
            title: 'Erro na operção',
            message: 'Houve um erro. Verifique se o arquivo foi selecionado e tente novamente'
        }))
    }

}
