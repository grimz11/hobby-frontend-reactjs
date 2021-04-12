import { Route } from "react-router-dom";

const ProtectedRoute = ({
  path,
  component: Component,
  permission,
  render,
  ...rest
}: any) => {
  console.log("component", permission);
  return (
    <Route
      {...rest}
      render={(props: any) => {
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;
