import { routers } from "../components/Router/router.config";

class Utils {
  getRoute = (path: string): any => {
    return routers.filter((route) => route.path === path)[0];
  };
  getPageTitle = (pathname: string): any => {
    const route = routers.filter((route) => route.path === pathname);
    const localizedAppName = "Cat Collection";
    if (!route || route.length === 0) {
      return localizedAppName;
    }

    return localizedAppName + " :: " + route[0].title;
  };
}

export default new Utils();
