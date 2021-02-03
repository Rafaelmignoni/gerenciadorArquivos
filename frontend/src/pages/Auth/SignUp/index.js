import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { FiArrowLeft } from 'react-icons/fi';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import AuthActions from '../../../store/ducks/auth'

import { Link } from 'react-router-dom'


import Button from '../../../styles/components/Button'
import { Container, SignForm } from '../styles'

class SigniUp extends Component {
    static propTypes = {
        signUpRequest: PropTypes.func.isRequired
    }

    state = {
        name: '',
        email: '',
        password: ''
    }

    handleSubmit = e => {
        e.preventDefault();

        const { name, email, password } = this.state
        const { signUpRequest } = this.props

        signUpRequest(name, email, password)
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        const { name, email, password } = this.state

        return (
            <Container>
                <SignForm onSubmit={this.handleSubmit}>
                    <h1>Criar Usuário</h1>

                    <span>NOME</span>
                    <input name="name" value={name} onChange={this.handleInputChange} ></input>

                    <span>E-MAIL</span>
                    <input type="email" name="email" value={email} onChange={this.handleInputChange} ></input>

                    <span>SENHA</span>
                    <input type="password" name="password" value={password} onChange={this.handleInputChange}></input>

                    <Button size="big" type="submit">Cadastrar</Button>

                    <Link to="/">
                        <FiArrowLeft />
                        Voltar para logon
                    </Link>
                </SignForm>
            </Container>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch)

export default connect(null, mapDispatchToProps)(SigniUp);