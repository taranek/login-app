import React from "react";
import { isLoggedIn } from "api/auth-server/AuthApi";
import { Route, useHistory } from "react-router-dom";

export type Props = {
  fallback: string;
  targetRoute: string;
  children: JSX.Element;
};
const ProtectedRoute: React.FC<Props> = ({
  targetRoute,
  fallback,
  children,
}) => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const history = useHistory();
  const [isLogged, setIsLogged] = React.useState<boolean | undefined>(false);
  React.useEffect(() => {
    (async function checkIfLoggedIn() {
      try {
        const response = await isLoggedIn();
        setIsLogged(response);
        setLoading(false);
      } catch (e) {
        setIsLogged(false);
        setLoading(false);
      }
    })();
  }, []);
  if(!isLogged && !loading){
    history.push(fallback)
    window.location.reload(false);
  }
  return isLogged && !loading ? (
    <Route path={targetRoute}>{children}</Route>
  ) : (
    <Route path={fallback} />
  );
};

export default ProtectedRoute;
