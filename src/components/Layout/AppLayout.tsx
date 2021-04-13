import "./AppLayout.less";

import * as React from "react";

import { Redirect, Switch, Route } from "react-router-dom";

import DocumentTitle from "react-document-title";
import Footer from "../../components/Footer";
import HomeHeader from "../../components/Header";
import { Layout } from "antd";
import { appRouters } from "../Router/router.config";
import utils from "../../utils/utils";
import NotFoundRoute from "../Router/NotFoundRoute";

const { Content } = Layout;

class AppLayout extends React.Component<any> {
  render() {
    const {
      history,
      location: { pathname },
    } = this.props;

    const { path } = this.props.match;

    const layout = (
      <Layout style={{ minHeight: "100vh" }} className="site-layout-background">
        <HomeHeader />
        <Content style={{ padding: "0 50px" }}>
          <Switch>
            {pathname === "/" && <Redirect from="/" to="/home" />}
            {appRouters
              .filter((item: any) => !item.isLayout)
              .map((route: any, index: any) => (
                <Route
                  exact
                  key={index}
                  path={route.path}
                  component={route.component}
                />
              ))}
            {pathname !== "/" && <NotFoundRoute />}
          </Switch>
        </Content>

        <Footer />
      </Layout>
    );

    return (
      <DocumentTitle title={utils.getPageTitle(pathname)}>
        {layout}
      </DocumentTitle>
    );
  }
}

export default AppLayout;
