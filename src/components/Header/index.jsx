import React from 'react'

import log from "../../assets/logo-dio.png"

import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRigth,
    Row,
    Wrapper
} from "./styles"
import { Button } from "../Button"

const Header = () => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={log} alt='Logo da dio' />
                <BuscarInputContainer>
                    <Input placeholder='Buscar...' />
                </BuscarInputContainer>
                <Menu>Live code</Menu>
                <Menu>Global</Menu>
            </Row>
            <Row>
                <MenuRigth href='/'>Home</MenuRigth>
                <Button title="Entrar" />
                <Button title="Cadastrar" />
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }