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
        <strong><FormattedMessage id={"LOGIN.PLEASE-LOGIN"} /></strong>
        <span>{process.env.REACT_APP_ADMIN_MAIL}</span>
        <span>{process.env.REACT_APP_ADMIN_PASSWORD}</span>
      <S.FormContainer>
        <LoginForm />
      </S.FormContainer>
    </S.Container>
  );
};

export default Login;
