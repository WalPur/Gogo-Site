import "./modal.css"

import React, { useState } from "react";

import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

function ModalWindow() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // setTimeout(handleShow, 1000);
    return ( 
        <div className='ModalWindow'>
            <Modal contentClassName="modalContent" show={show} onHide={handleClose}>
                <Modal.Header id="modal-header" closeButton>
                    <Modal.Title>
                        Работайте с нами
                    </Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <div className='footer__buttons'>
                        <Link to='/courier'>
                            Стать курьером
                        </Link>
                        <Link to='/partner'>
                            Стать партнером
                        </Link>
                    </div>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalWindow;