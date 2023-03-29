import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbar from 'react-bootstrap/Navbar';
/*------- react icon  ------- */
import { RxHamburgerMenu, RxLoop } from 'react-icons/rx';
import { ImSearch } from 'react-icons/im';
import { FaHome, FaUserAlt } from 'react-icons/fa';
import { RiStackLine } from 'react-icons/ri';
import { FiLogOut } from 'react-icons/fi';
import { BiChevronRight, BiListUl, BiCategoryAlt } from 'react-icons/bi';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';

import olivia from "../assests/images/olivia.png"
import { Link } from 'react-router-dom';


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
                            <figure className="rounded transparent m-0">
                                <img src={olivia} alt="logo" width={"50px"} />
                            </figure>
                            <Offcanvas.Title>
                                <div style={{ fontSize: "18px" }}>Olivia Johanson</div>
                                <span className='font-size text-black-50 fw-normal'>oliviajon@mail.com</span>
                            </Offcanvas.Title>

                        </Offcanvas.Header>

                        <Offcanvas.Body>
                            <ul className='unlist'>
                                <li className='py-0.5 my-0.5'>
                                    <Link to={"/home"} className='d-flex justify-content-between text-decoration-none align-items-center' >
                                        <div><span className='icon-color'><FaHome /></span>
                                            <span className='px-3 text-black-50 fw-bold'>Home</span>
                                        </div>
                                        <span className='icon-color fs-1'><BiChevronRight /></span>
                                    </Link>
                                </li>
                                <li className='py-0.5 my-0.5'>
                                    <Link to={"/products"} className='d-flex justify-content-between text-decoration-none align-items-center'>
                                        <div><span className='icon-color'><RiStackLine /></span>
                                            <span className='px-3 text-black-50 fw-bold'>Products</span>
                                        </div>
                                        <span className='icon-color fs-1'><BiChevronRight /></span>
                                    </Link>
                                </li>
                                <li className='py-0.5 my-0.5'>
                                    <Link className='d-flex justify-content-between text-decoration-none align-items-center'>
                                        <div><span className='icon-color'><BiCategoryAlt /></span>
                                            <span className='px-3 text-black-50 fw-bold'>Components</span>
                                        </div>
                                        <span className='icon-color fs-1'><BiChevronRight /></span>
                                    </Link>
                                </li>
                                <li className='py-0.5 my-0.5'>
                                    <Link className='d-flex justify-content-between text-decoration-none align-items-center'>
                                        <div><span className='icon-color'><BiListUl /></span>
                                            <span className='px-3 text-black-50 fw-bold'>Featured</span>
                                        </div>
                                        <span className='icon-color fs-1'><BiChevronRight /></span>
                                    </Link>
                                </li>
                                <li className='py-0.5 my-0.5'>
                                    <Link className='d-flex justify-content-between text-decoration-none align-items-center'>
                                        <div><span className='icon-color'><AiOutlineHeart /></span>
                                            <span className='px-3 text-black-50 fw-bold'>Wishlist</span>
                                        </div>
                                        <span className='icon-color fs-1'><BiChevronRight /></span>
                                    </Link>
                                </li>

                                <li className='py-0.5 my-0.5'>
                                    <Link className='d-flex justify-content-between text-decoration-none align-items-center'>
                                        <div><span className='icon-color'><RxLoop /></span>
                                            <span className='px-3 text-black-50 fw-bold'>Orders</span>
                                        </div>
                                        <span className='icon-color fs-1'><BiChevronRight /></span>
                                    </Link>
                                </li><li className='py-0.5 my-0.5'>
                                    <Link className='d-flex justify-content-between text-decoration-none align-items-center'>
                                        <div><span className='icon-color'><AiOutlineShoppingCart /></span>
                                            <span className='px-3 text-black-50 fw-bold'>My Cart</span>
                                        </div>
                                        <span className='icon-color fs-1'><BiChevronRight /></span>
                                    </Link>
                                </li>
                                <li className='py-0.5 my-0.5'>
                                    <Link className='d-flex justify-content-between text-decoration-none align-items-center'>
                                        <div><span className='icon-color'><FaUserAlt /></span>
                                            <span className='px-3 text-black-50 fw-bold'>Profile</span>
                                        </div>
                                        <span className='icon-color fs-1'><BiChevronRight /></span>
                                    </Link>
                                </li>
                                <li className='py-0.5 my-0.5'>
                                    <Link className='d-flex justify-content-between text-decoration-none align-items-center'>
                                        <div><span className='icon-color'><FiLogOut /></span>
                                            <span className='px-3 text-black-50 fw-bold'>Logout</span>
                                        </div>
                                        <span className='icon-color fs-1'><BiChevronRight /></span>
                                    </Link>
                                </li>

                            </ul>
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

