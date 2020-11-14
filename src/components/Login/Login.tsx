import * as React from "react";
import * as S from "./Login.styles";
import logo from "../../assets/images/logo.png";
import LoginForm from "./LoginForm/LoginForm";
import {FormattedMessage, useIntl} from "react-intl";

const Login: React.FC = () => {
  const intl = useIntl();
  return (
    <S.Container>
      <S.LogoImg src={logo} />
      <S.Title>{intl.formatMessage({id:'LOGIN.WELCOME-MESSAGE'})}</S.Title>
        <FormattedMessage id={"LOGIN.PLEASE-LOGIN"}/>
      <S.FormContainer>
        <LoginForm />
      </S.FormContainer>
    </S.Container>
  );
};

export default Login;
