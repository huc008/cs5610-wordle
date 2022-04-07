import React, {useContext} from 'react';
import {Button, Modal} from 'react-bootstrap';
import { AppContext } from './EasyGame';

export default function GameModal(props) {
    const {openModal, setOpenModal, handleShow, handleClose} = useContext(AppContext);

    return (
        <Modal show={openModal} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Warning</Modal.Title>
            </Modal.Header>
            <Modal.Body>Oh no, word not found!</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>  
    );
}
