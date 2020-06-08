import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import { connect } from "react-redux";
import ShippedOrderList from "../components/ShippedOrderList";
import { doShippedOrdersFetch } from "../redux/actions/shippedOrdersAction";
import { getShippedOrders, getShippedOrdersIsFetch } from "../redux/selectors/shippedOrdersSelector";

class ShippedOrderListPage extends Component {
  componentDidMount() {
    this.props.onFetchShippedOrders();
  }

  render() {
    const { shippedOrders, shippedOrdersIsFetch } = this.props;
    return (
      <Segment loading={shippedOrdersIsFetch}>
        <ShippedOrderList datas={shippedOrders} />
      </Segment>
    );
  }
}

const mapStateToProps = (state) => ({
  shippedOrders: getShippedOrders(state),
  shippedOrdersIsFetch: getShippedOrdersIsFetch(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFetchShippedOrders: () => dispatch(doShippedOrdersFetch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShippedOrderListPage);
