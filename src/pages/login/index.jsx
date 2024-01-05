import { MdEmail, MdLock } from "react-icons/md"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import {
    Column,
    Container,
    CriarText,
    EsqueciText,
    Row,
    SubTitleLogin,
    Title,
    TitleLogin,
    Wrapper
} from "./styles"

const schema = yup
    .object({
        email: yup.string().email('Email não é valido').required("Campo obrigatório"),
        password: yup.string().min('3', 'No minimo 3 caracteres').required("Campo obrigatório"),
    })
    .required()

const Login = () => {
    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });

    console.log(isValid, errors)

    const onSubmit = (data) => console.log(data)

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate("/feed")
    }

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias
                    e entrar mais rapido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="email" errorMessage={errors.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />} />
                        <Input name="password" errorMessage={errors.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />} />
                        <Button title="Entrar" variant="secundary" type="submit" />
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText>Criar Conta</CriarText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Login }