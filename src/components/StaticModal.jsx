import React, { useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { GameContext } from './Game';

export default function StaticModal(props) {
    const {
        openModalStatic,
        handleCloseStatic,
        correctWord,
    } = useContext(GameContext);

    function playAgain(){
        window.location.reload();
    }

    return ( 
        <>
            <Modal
                show={openModalStatic}
                onHide={handleCloseStatic}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{props.gameResult}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Correct word is {correctWord}.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseStatic}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={playAgain}>Play Again</Button>
                </Modal.Footer>
            </Modal>
        </>        
    );
}
