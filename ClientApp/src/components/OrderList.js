import React from "react";
import { Table, Checkbox } from "semantic-ui-react";
import ProductModal from "./ProductModal";

const OrderItem = ({ id, product, price, cost, status, checked, onSelected, onCancel }) => {
  return (
    <Table.Row>
      <Table.Cell>
        {status !== "To be shipped" && (
          <Checkbox checked={checked} onClick={() => (!checked ? onSelected(id) : onCancel(id))} />
        )}
      </Table.Cell>
      <Table.Cell>{id}</Table.Cell>
      <Table.Cell>
        <ProductModal {...product} />
      </Table.Cell>
      <Table.Cell>{price}</Table.Cell>
      <Table.Cell>{cost}</Table.Cell>
      <Table.Cell>{status}</Table.Cell>
    </Table.Row>
  );
};

export default ({ datas, onSelected, onCancel }) => {
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell></Table.HeaderCell>
          <Table.HeaderCell>Order Id</Table.HeaderCell>
          <Table.HeaderCell>Order Item</Table.HeaderCell>
          <Table.HeaderCell>Price</Table.HeaderCell>
          <Table.HeaderCell>Cost</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {datas.map((data) => (
          <OrderItem key={data.id} {...data} onSelected={onSelected} onCancel={onCancel} />
        ))}
      </Table.Body>
    </Table>
  );
};
