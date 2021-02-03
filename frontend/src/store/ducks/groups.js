import { createReducer, createActions } from 'reduxsauce'
import immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
    getGroupsRequest: null,
    getGroupsSuccess: ['data'],
    selectGroup: ['group'],
    openGroupModal: null,
    closeGroupModal: null,
    createGroupRequest: ['name'],
    createGroupSuccess: ['group']
})

export const GroupsTypes = Types
export default Creators

export const INITIAL_STATE = immutable({
    data: [],
    groupModalOpen: false,
    active: JSON.parse(localStorage.getItem('@Soluti:group')) || null
})

export const getSuccess = (state, { data }) => state.merge({ data })

export const selectGroup = (state, { group }) => {
    localStorage.setItem('@Soluti:group', JSON.stringify(group))

    return state.merge({ active: group })
}

export const openModal = state => state.merge({ groupModalOpen: true })
export const closeModal = state => state.merge({ groupModalOpen: false })

export const createSuccess = (state, { group }) => state.merge({ data: [...state.data, group] })

export const reducer = createReducer(INITIAL_STATE, {
    [Types.GET_GROUPS_SUCCESS]: getSuccess,
    [Types.SELECT_GROUP]: selectGroup,
    [Types.OPEN_GROUP_MODAL]: openModal,
    [Types.CLOSE_GROUP_MODAL]: closeModal,
    [Types.CREATE_GROUP_SUCCESS]: createSuccess,
})