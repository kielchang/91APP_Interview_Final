import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import AuthorizeRoute from "./components/api-authorization/AuthorizeRoute";
import ApiAuthorizationRoutes from "./components/api-authorization/ApiAuthorizationRoutes";
import { ApplicationPaths } from "./components/api-authorization/ApiAuthorizationConstants";
import Home from "./pages/HomePage";
import OrderListPage from "./pages/OrderListPage";
import ShippedOrderListPage from "./pages/ShippedOrderListPage";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <AuthorizeRoute path="/OrderList" component={OrderListPage} />
        <AuthorizeRoute path="/ShippedOrderList" component={ShippedOrderListPage} />
        <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
      </Layout>
    );
  }
}
