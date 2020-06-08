import React, { Component } from "react";
import { Segment, Button } from "semantic-ui-react";
import OrderList from "../components/OrderList";
import { connect } from "react-redux";
import { getOrdersRowData, getOrdersIsFetch, getOrdersFormIsFetch } from "../redux/selectors/ordersSelector";
import { doOrdersFetch } from "../redux/actions/ordersAction";
import {
  doOrdersFormSelectedOrder,
  doOrdersFormSelectedCancel,
  doOrdersFormOnSubmit,
} from "../redux/actions/ordersFormAction";

class OrderListPage extends Component {
  componentDidMount() {
    this.props.onFetchOrders();
  }

  render() {
    const { orders, ordersIsFetch, ordersFormIsFetch, onSelected, onCancel, onSubmit } = this.props;
    return (
      <Segment loading={ordersIsFetch}>
        <OrderList datas={orders} onSelected={onSelected} onCancel={onCancel} />
        <Button disabled={ordersFormIsFetch} loading={ordersFormIsFetch} content="Confirm" primary onClick={onSubmit} />
      </Segment>
    );
  }
}

const mapStateToProps = (state) => ({
  orders: getOrdersRowData(state),
  ordersIsFetch: getOrdersIsFetch(state),
  ordersFormIsFetch: getOrdersFormIsFetch(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFetchOrders: () => dispatch(doOrdersFetch()),
  onSelected: (id) => dispatch(doOrdersFormSelectedOrder(id)),
  onCancel: (id) => dispatch(doOrdersFormSelectedCancel(id)),
  onSubmit: () => dispatch(doOrdersFormOnSubmit()),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderListPage);
