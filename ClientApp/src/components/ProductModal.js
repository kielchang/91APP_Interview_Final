import React from "react";
import { Modal } from "semantic-ui-react";

export default function ProductModal({ id, name, description }) {
  return (
    <Modal trigger={<a href="javascript:void(0);">{name}</a>}>
      <Modal.Header>{name}</Modal.Header>
      <Modal.Content>
        <Modal.Description>{description}</Modal.Description>
      </Modal.Content>
    </Modal>
  );
}
