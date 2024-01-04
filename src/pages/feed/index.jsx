import { Header } from "../../components/Header"

import {
    Container,
    Column,
    Title,
    TitleHighlight
} from "./styles"

import { Card } from "../../components/Card"
import { UserInfo } from "../../components/UserInfo"


const Feed = () => {
    return (<>
        <Header autenticado={true} />
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlight># RANKING TOP 5 DA SEMANA</TitleHighlight>
                <UserInfo name="Carlos Henrique" percentual={50} image='https://avatars.githubusercontent.com/u/111985773?s=400&u=2980fe1226957d0d6dc6d2e1a7b09120e8591d8f&v=4' />
                <UserInfo name="Carlos Henrique" percentual={90} image='https://avatars.githubusercontent.com/u/111985773?s=400&u=2980fe1226957d0d6dc6d2e1a7b09120e8591d8f&v=4' />
                <UserInfo name="Carlos Henrique" percentual={30} image='https://avatars.githubusercontent.com/u/111985773?s=400&u=2980fe1226957d0d6dc6d2e1a7b09120e8591d8f&v=4' />
                <UserInfo name="Carlos Henrique" percentual={20} image='https://avatars.githubusercontent.com/u/111985773?s=400&u=2980fe1226957d0d6dc6d2e1a7b09120e8591d8f&v=4' />
                <UserInfo name="Carlos Henrique" percentual={60} image='https://avatars.githubusercontent.com/u/111985773?s=400&u=2980fe1226957d0d6dc6d2e1a7b09120e8591d8f&v=4' />
            </Column>
        </Container>
    </>)
}

export { Feed }