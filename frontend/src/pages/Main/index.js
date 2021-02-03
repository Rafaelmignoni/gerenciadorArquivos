import React, { Component } from 'react'
import GroupSwitcher from '../../components/GroupSwitcher'
import Files from '../../components/Files'

import { Container } from './styles'


const Main = () => (
    <Container>
        <GroupSwitcher></GroupSwitcher>
        <Files></Files>
    </Container>
)

export default Main;