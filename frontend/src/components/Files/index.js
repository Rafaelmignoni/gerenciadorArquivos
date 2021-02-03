import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import FilesActions from '../../store/ducks/files'
import MembersActions from '../../store/ducks/members'
import Members from '../Members'

import Button from '../../styles/components/Button'

import { Container, File, InputFile } from './styles'

class Files extends Component {
    static propTypes = {
        getFilesRequest: PropTypes.func.isRequired,
        createFileRequest: PropTypes.func.isRequired,
        openMembersModal: PropTypes.func.isRequired,
        activeGroup: PropTypes.shape({
            name: PropTypes.string
        }).isRequired,
        members: PropTypes.shape({
            membersModalOpen: PropTypes.bool
        }).isRequired
    }

    state = {
        newFile: ''
    }

    componentDidMount() {

        const { getFilesRequest, activeGroup } = this.props;

        if (activeGroup) {
            getFilesRequest();
        }

    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.files[0] })
    }

    handleCreateFile = e => {

        const { createFileRequest } = this.props;
        const { newFile } = this.state;

        createFileRequest(newFile)

        this.setState({ newFile: '' })

    }

    render() {
        const { activeGroup, files, openMembersModal, members } = this.props;

        if (!activeGroup) return null

        return (
            <Container>
                <header>
                    <h1>{activeGroup.name}</h1>
                    <div>
                        <InputFile type="file" name="newFile" onChange={this.handleInputChange}></InputFile>
                        <Button type="file" onClick={this.handleCreateFile}>Enviar Arquivo</Button>
                        <Button onClick={openMembersModal}>Membros</Button>
                    </div>
                </header>

                {files.data.map(file => (
                    <File key={file.id}>
                        <p>{file.name}</p>
                    </File>
                ))}

                {members.membersModalOpen && <Members></Members>}
            </Container>
        )

    }
}




const mapStateToProps = state => ({
    activeGroup: state.groups.active,
    members: state.members,
    files: state.files
})

const mapDispatchToProps = dispatch => bindActionCreators({ ...FilesActions, ...MembersActions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Files)

