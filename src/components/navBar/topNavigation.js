import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbar from 'react-bootstrap/Navbar';
/*------- react icon  ------- */
import { RxHamburgerMenu } from 'react-icons/rx';
import { ImSearch } from 'react-icons/im';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';


export const TopNavigation = ({ name, ...props }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <div className="">
            <Navbar bg="white" variant="white">
                <div className='container-fluid'>
                    <div className='d-flex  align-items-center'>
                        <Button variant="light" onClick={handleShow} className="me-2">
                            <RxHamburgerMenu />
                        </Button>
                        <ul className="list-unstyled m-0 p-0">
                            <li className="fw-bold">Home</li>
                        </ul>
                    </div>
                    <Offcanvas show={show} onHide={handleClose} {...props} id="offcanvas-width" >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            Some text as placeholder. In real life you can have the elements you
                            have chosen. Like, text, images, lists, etc.
                        </Offcanvas.Body>
                    </Offcanvas>
                    <Navbar.Brand>
                        <div className='rightnav'>
                            <span><ImSearch /></span>
                            <span><AiOutlineHeart /></span>
                            <span><AiOutlineShoppingCart /></span>
                        </div>
                    </Navbar.Brand>
                </div>
            </Navbar>

        </div>
    );
}

