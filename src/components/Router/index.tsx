import { Route, Switch } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";
import utils from "../../utils/utils";

const Router = () => {
  const AppLayout = utils.getRoute("/").component;

  return (
    <Switch>
      <Route path="/" render={(props: any) => <AppLayout {...props} />} />
    </Switch>
  );
};

export default Router;
