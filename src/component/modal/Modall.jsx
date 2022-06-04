import React from 'react';
import {Modal} from "@nextui-org/react";
import './modal.scss';

const Modall = ({isOpen, closeHandler, children}) => {
  return (
        <Modal autoMargin width='80vw' className="modal" open={isOpen} onClose={closeHandler}>
            <Modal.Header justify='space-between' className="modalHeader">
                <div className="close" onClick={closeHandler}>x</div>
                <div>3D Human Modeling</div>
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
        </Modal>
  )
}

export default Modall