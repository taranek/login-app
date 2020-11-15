import React from "react";
import * as S from "./Users.styles";
import { AppState } from "App";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { UserInfo } from "api/auth-server/model";
import { logoutUser } from "api/auth-server/AuthApi";
import { fetchUsersRequest } from "redux/users/actions";
import { Button } from "@material-ui/core";
import { useIntl } from "react-intl";

const Users: React.FC = () => {
  const intl = useIntl();
  const history = useHistory();
  const dispatch = useDispatch();
  const users: UserInfo[] = useSelector<AppState>(
    (state: AppState) => state.users.users
  ) as UserInfo[];
  React.useEffect(() => {
    dispatch(fetchUsersRequest());
  }, []);
  const handleLogout = async () => {
    await logoutUser();
    history.push("/login");
    window.location.reload(false);
  };
  return (
    <S.UsersContainer>
      <h2>Users</h2>
      {users.map((x) => (
        <S.UserInfo key={x.id}>
          <b>{intl.formatMessage({ id: "GLOBAL.NAME" })}</b>: {x.name}
        </S.UserInfo>
      ))}
      <S.UsersFooter>
        <Button
          type="submit"
          variant="contained"
          size="large"
          color="primary"
          fullWidth
          onClick={handleLogout}
        >
          {intl.formatMessage({ id: "LOGIN.LOGOUT-ACTION" })}
        </Button>
      </S.UsersFooter>
    </S.UsersContainer>
  );
};

export default Users;
