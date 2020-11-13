import * as React from 'react';
import * as S from './Login.styles';
import logo from '../assets/images/logo.png';
import LoginForm from "./LoginForm/LoginForm";
const Login = () => {
    return (<S.Container>
            <S.LogoImg src={logo}/>
            <S.Title>Hello</S.Title>
            <S.FormContainer>
                <LoginForm/>
            </S.FormContainer>
        </S.Container>
    );
};

export default Login;