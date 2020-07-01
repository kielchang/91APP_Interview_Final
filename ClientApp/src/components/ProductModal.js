import React from "react";
import { Modal } from "semantic-ui-react";

export default ({ id, name, description }) => {
  return (
    <Modal trigger={<p style={{ color: "#4183c4", cursor: "pointer" }}>{name}</p>}>
      <Modal.Header>{name}</Modal.Header>
      <Modal.Content>
        <Modal.Description>{description}</Modal.Description>
      </Modal.Content>
    </Modal>
  );
};
