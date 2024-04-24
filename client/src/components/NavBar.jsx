import React, { Component } from 'react'
import styled from 'styled-components'

import Logo from './Logo'
import Links from './Links'

const Container = styled.div.attrs({
    className: 'container',
})`
    height: 150px;
`

const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg navbar-dark bg-dark',
})`
    margin-bottom: 20 px;
`

class NavBar extends Component {
    render() {
        return (
            <Container>
                <Nav>
                    <h1 style={{color:'white'}}>Prashant Chopra</h1>
                <h1 style={{color:'white'}}>21BCP408</h1>
                    <Logo />
                    <Links />
                </Nav>
            </Container>
        )
    }
}

export default NavBar
