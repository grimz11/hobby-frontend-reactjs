import LoadableComponent from "./../Loadable/index";

export const appRouters: any = [
  {
    path: "/",
    exact: true,
    name: "home",
    title: "Home",
    icon: "home",
    component: LoadableComponent(
      () => import("../../components/Layout/AppLayout"),
    ),
    isLayout: true,
    showInMenu: false,
  },
  {
    path: "/home",
    name: "home",
    permission: "",
    title: "Home",
    showInMenu: true,
    component: LoadableComponent(() => import("../../scenes/Home")),
  },
  {
    path: "/cat/:id",
    name: "cat",
    permission: "",
    title: "Cat",
    showInMenu: true,
    component: LoadableComponent(
      () => import("../../scenes/Home/components/CatView"),
    ),
  },
  {
    path: "/cat/create",
    name: "cat",
    permission: "",
    title: "Cat",
    showInMenu: true,
    component: LoadableComponent(() => import("../CatDetail")),
  },
  {
    path: "/exception?:type",
    permission: "",
    title: "exception",
    name: "exception",
    icon: "info-circle",
    showInMenu: false,
    component: LoadableComponent(() => import("../../scenes/Exception")),
  },
];

export const routers = [...appRouters];
