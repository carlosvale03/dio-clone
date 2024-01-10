import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* align-items: center; */
`

export const Column = styled.div`
    flex: 1;
`

export const Title = styled.h2`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    color: #FFFFFF;
    line-height: 44px;

    width: 380px;
`

export const Wrapper = styled.div`
    max-width: 330px;
`

export const TitleLogin = styled.p`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    color: #FFFFFF;
    line-height: 30px;
`

export const SubTitleLogin = styled.p`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #FFFFFF;
    line-height: 24px;

    margin: 20px 0;
`

export const ToLogin = styled.p`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #FFFFFF;
    line-height: 19px;

    span {
        color: #23DD7A;
        cursor: pointer;
    }
`
