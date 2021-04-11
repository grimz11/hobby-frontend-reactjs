import { Redirect, Route } from "react-router-dom";
import utils from "../../utils/utils";

const ProtectedRoute = ({
  path,
  component: Component,
  permission,
  render,
  ...rest
}: any) => {
  return (
    <Route
      {...rest}
      render={(props: any) => {
        // if (!utils.getCookie("access_token"))
        //   return (
        //     <Redirect
        //       to={{
        //         pathname: "/",
        //         state: { from: props.location },
        //       }}
        //     />
        //   );

        // if (permission && !utils.getCookie("access_token")) {
        //   return (
        //     <Redirect
        //       to={{
        //         pathname: "/exception?type=401",
        //         state: { from: props.location },
        //       }}
        //     />
        //   );
        // }

        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;
