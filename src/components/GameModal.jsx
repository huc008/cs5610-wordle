import React, { useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { GameContext } from './Game';

export default function GameModal(props) {
    const {openModal, setOpenModal, handleShow, handleClose} = useContext(GameContext);

    return (
        <Modal show={openModal} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Warning</Modal.Title>
            </Modal.Header>
            <Modal.Body>{ props.modalVal }</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>  
    );
}
