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
  },
  {
    path: "/home",
    name: "home",
    title: "Home",
    component: LoadableComponent(() => import("../../scenes/Home")),
  },
  {
    path: "/cat/:id",
    name: "cat",
    title: "Cat",
    component: LoadableComponent(
      () => import("../../scenes/Home/components/CatView"),
    ),
  },
  {
    path: "/cat/create",
    name: "cat",
    title: "Cat",
    component: LoadableComponent(() => import("../CatDetail")),
  },
  {
    path: "/exception?:type",
    title: "Exception",
    name: "exception",
    component: LoadableComponent(() => import("../../scenes/Exception")),
  },
];

export const routers = [...appRouters];
