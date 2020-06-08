import React from "react";
import { Table } from "semantic-ui-react";
import moment from "moment";

const ShippedOrderItem = ({ id, orderId, status, createdDateTime }) => {
  return (
    <Table.Row>
      <Table.Cell>{id}</Table.Cell>
      <Table.Cell>{orderId}</Table.Cell>
      <Table.Cell>{status}</Table.Cell>
      <Table.Cell>{moment(createdDateTime).format("YYYY-MM-DD HH:mm:ss")}</Table.Cell>
    </Table.Row>
  );
};

export default function ShippedOrderList({ datas }) {
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>ID</Table.HeaderCell>
          <Table.HeaderCell>OrderId</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.HeaderCell>CreatedDateTime</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {datas.map((data) => (
          <ShippedOrderItem key={data.id} {...data} />
        ))}
      </Table.Body>
    </Table>
  );
}
