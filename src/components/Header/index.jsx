import React from 'react'

import log from "../../assets/logo-dio.png"

import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRigth,
    Row,
    Wrapper,
    UserPicture
} from "./styles"
import { Button } from "../Button"

const Header = ({ autenticado }) => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={log} alt='Logo da dio' />
                {autenticado ? (
                    <>
                        <BuscarInputContainer>
                            <Input placeholder='Buscar...' />
                        </BuscarInputContainer>
                        <Menu>Live code</Menu>
                        <Menu>Global</Menu>
                    </>
                ) : null}
            </Row>
            <Row>
                {autenticado ? (
                    <UserPicture src='https://avatars.githubusercontent.com/u/111985773?s=400&u=2980fe1226957d0d6dc6d2e1a7b09120e8591d8f&v=4' />
                ) : (
                    <>
                        <MenuRigth href='/'>Home</MenuRigth>
                        <Button title="Entrar" />
                        <Button title="Cadastrar" />
                    </>
                )}
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }