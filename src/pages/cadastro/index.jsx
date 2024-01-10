import React from 'react'
import { api } from '../../services/api';

import { MdEmail, MdLock } from "react-icons/md"
import { FaUser } from "react-icons/fa6";
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Header } from "../../components/Header"
import {
    Container,
    Column,
    Title,
    Wrapper,
    TitleLogin,
    SubTitleLogin,
    ToLogin
} from "./styles"

import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup
    .object({
        name: yup.string().required("Campo obrigatório"),
        email: yup.string().email('Email não é valido').required("Campo obrigatório"),
        password: yup.string().min('3', 'No minimo 3 caracteres').required("Campo obrigatório"),
    })
    .required()

const Cadastro = () => {
    const navigate = useNavigate();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });

    const onRegister = async formData => {
        try {
            const { data } = await api.get(`users?email=${formData.email}`);
            if (data.length === 0) {
                const newUser = {
                    id: Date.now(), // Gera um ID único baseado no timestamp atual
                    name: formData.name,
                    email: formData.email,
                    senha: formData.password
                };
                console.log(newUser)
                await api.post('users', newUser);
                alert("Usuário cadastrado com sucesso!");
                navigate("/feed")
            } else {
                alert("Email já cadastrado!");
            }
        } catch {
            alert("Houve um erro ao cadastrar o usuário!");
        }
    };
    
    


    const Login = () => {
        navigate("/login")
    }

    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias e
                        entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Comece agora grátis</TitleLogin>
                        <SubTitleLogin>Crie sua conta e make the change._</SubTitleLogin>
                        <form onSubmit={handleSubmit(onRegister)}>
                            <Input name="name" errorMessage={errors.name?.message} control={control} placeholder="Nome completo" leftIcon={<FaUser />} />
                            <Input name="email" errorMessage={errors.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />} />
                            <Input name="password" errorMessage={errors.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />} />
                            <Button title="Criar minha conta" variant="secundary" type="submit" />
                        </form>
                        <SubTitleLogin>
                            Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de
                            Privacidade e os Termos de Uso da DIO.
                        </SubTitleLogin>
                        <ToLogin>Já tenho conta. <span onClick={Login}>Fazer login</span></ToLogin>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
}

export { Cadastro }