import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import GroupsActions from '../../store/ducks/groups'
import AuthActions from '../../store/ducks/auth'

import Button from '../../styles/components/Button'
import Modal from '../../components/Modal'

import { Container, GroupList, Group, NewGroup, Logout } from './styles'

class GroupSwitcher extends Component {
    static propTypes = {
        getGroupsRequest: PropTypes.func.isRequired,
        SelectGroup: PropTypes.func.isRequired,
        openGroupModal: PropTypes.func.isRequired,
        closeGroupModal: PropTypes.func.isRequired,
        createGroupRequest: PropTypes.func.isRequired,
        signOut: PropTypes.func.isRequired,
        groups: PropTypes.shape({
            data: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string
            }))
        })
    }

    state = {
        newGroup: ''
    }

    componentDidMount() {
        const { getGroupsRequest } = this.props

        getGroupsRequest()
    }

    handleGroupSelect = (group) => {
        const { selectGroup } = this.props

        selectGroup(group)
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleCreateGroup = e => {
        e.preventDefault();

        const { createGroupRequest } = this.props;
        const { newGroup } = this.state;

        createGroupRequest(newGroup)
    }

    render() {
        const { groups, openGroupModal, closeGroupModal, signOut } = this.props;
        const { newGroup } = this.state

        return <Container>
            <GroupList>
                {groups.data.map(group => (
                    <Group key={group.id} onClick={() => this.handleGroupSelect(group)}>
                        <img
                            alt={group.name}
                            src={`https://ui-avatars.com/api/?font-size=0.33&background=18d16b&color=fff&name=${group.name}`}></img>
                    </Group>
                ))}

                <NewGroup onClick={openGroupModal}>Novo</NewGroup>

                {groups.groupModalOpen && (
                    <Modal>
                        <h1>Criar Grupo</h1>

                        <form onSubmit={this.handleCreateGroup}>
                            <span>Nome</span>
                            <input name="newGroup" value={newGroup} onChange={this.handleInputChange}></input>
                            <Button size="big" type="submit">
                                Salvar
                            </Button>
                            <Button onClick={closeGroupModal} size="small" color="gray" >
                                Cancelar
                            </Button>
                        </form>
                    </Modal>
                )}
            </GroupList>

            <Logout onClick={signOut}>Sair</Logout>
        </Container>
    }
}

const mapStateToProps = state => ({
    groups: state.groups
})

const mapDispatchToProps = dispacth => bindActionCreators({ ...GroupsActions, ...AuthActions }, dispacth)


export default connect(mapStateToProps, mapDispatchToProps)(GroupSwitcher)