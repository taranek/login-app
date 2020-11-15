import * as React from "react";
import * as S from "./Login.styles";
import key from "../../assets/icons/key.svg";
import LoginForm from "./LoginForm/LoginForm";
import { FormattedMessage, useIntl } from "react-intl";
import Icon from "../shared/Icon/Icon";

const Login: React.FC = () => {
  const intl = useIntl();
  return (
    <S.Container>
      <S.MainImgWrapper>
        <Icon src={key} />
      </S.MainImgWrapper>
      <S.Title>{intl.formatMessage({ id: "LOGIN.WELCOME-MESSAGE" })}</S.Title>
        <span>sean.maxwell@gmail.com</span>
        <span>Password@1</span>
      <FormattedMessage id={"LOGIN.PLEASE-LOGIN"} />
      <S.FormContainer>
        <LoginForm />
      </S.FormContainer>
    </S.Container>
  );
};

export default Login;
