import React from 'react';
import {Modal} from "@nextui-org/react";
import './modal.scss';

const Modall = ({isOpen, closeHandler, children, heading}) => {
  return (
        <Modal autoMargin width='80vw' className="modal" open={isOpen} onClose={closeHandler} blur>
            <Modal.Header justify='space-between' className="modalHeader">
                <div className="close" onClick={closeHandler}>x</div>
                <div>{heading}</div>
            </Modal.Header>
            <Modal.Body className="modalBody">
                {children}
            </Modal.Body>
        </Modal>
  )
}

export default Modall