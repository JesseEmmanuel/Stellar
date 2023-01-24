import { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

function StartupUI() {
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
return (
<div className="content-wrapper">
    <div className="container-xxl flex-grow-1 container-p-y">
        <div className="row">
            <div className="d-flex justify-content-center">
                <h3 className="pb-1 mb-4">Start-up Savings</h3>
            </div>
            <div className="row mb-5 d-flex justify-content-center">
                <div className="col-md-6">
                    <div className="card mb-3">
                        <div className="row">
                            <div className="col-md-6">
                                <img className="card-img card-img-left rounded-circle my-2 mx-2"
                                    src={process.env.PUBLIC_URL+ "/assets/img/avatars/1.png" } alt="" />
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h6 className="card-title">Name: <span className="badge bg-warning">
                                            Juan Dela Cruz
                                        </span></h6>
                                    <h6 className="card-title">UserID: <span className="badge bg-info">
                                            2016100900
                                        </span></h6>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins
                                            ago</small>
                                    </p>
                                    <h6 className="card-title mb-0"> <small>Note:</small></h6>
                                    <p className="card-text"> <small> -Startup up to 4rth level <br />-Great Savings up
                                            to 5th level</small>

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mb-5">
                <div className="card-group mb-5">
                    <div className="card">
                        <img className="card-img" src={process.env.PUBLIC_URL+ "/assets/img/activestar-v2.png" }
                            alt="Card image cap" />
                        <div className="card-body">
                            <div className="d-flex justify-content-center mb-2">
                                <img src={process.env.PUBLIC_URL+ "/assets/img/avatars/1.png" } alt
                                    className="w-px-40 h-auto rounded-circle" />
                            </div>
                            <a href="#">
                                <div className="d-flex justify-content-center">
                                    <span className="badge bg-warning">
                                        Juan Dela Cruz <br />
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src={process.env.PUBLIC_URL+ "/assets/img/activestar-v2.png" }
                            alt="Card image cap" />
                        <div className="card-body">
                            <div className="d-flex justify-content-center mb-2">
                                <img src={process.env.PUBLIC_URL+ "/assets/img/profile.png" } alt
                                    className="w-px-40 h-auto rounded-circle" />
                            </div>
                            <a href="#">
                                <div className="d-flex justify-content-center">
                                    <span className="badge bg-warning">
                                        Juan Dela Cruz <br />
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src={process.env.PUBLIC_URL+ "/assets/img/activestar-v2.png" }
                            alt="Card image cap" />
                        <div className="card-body">
                            <div className="d-flex justify-content-center mb-2">
                                <img src={process.env.PUBLIC_URL+ "/assets/img/avatars/7.png" } alt
                                    className="w-px-40 h-auto rounded-circle" />
                            </div>
                            <a href="#">
                                <div className="d-flex justify-content-center">
                                    <span className="badge bg-warning">
                                        Juan Dela Cruz <br />
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src={process.env.PUBLIC_URL+ "/assets/img/activestar-v2.png" }
                            alt="Card image cap" />
                        <div className="card-body">
                            <div className="d-flex justify-content-center mb-2">
                                <img src={process.env.PUBLIC_URL+ "/assets/img/avatars/6.png" } alt
                                    className="w-px-40 h-auto rounded-circle" />
                            </div>
                            <a href="#">
                                <div className="d-flex justify-content-center">
                                    <span className="badge bg-warning">
                                        Juan Dela Cruz <br />
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src={process.env.PUBLIC_URL+ "/assets/img/activestar-v2.png" }
                            alt="Card image cap" />
                        <div className="card-body">
                            <div className="d-flex justify-content-center mb-2">
                                <img src={process.env.PUBLIC_URL+ "/assets/img/avatars/5.png" } alt
                                    className="w-px-40 h-auto rounded-circle" />
                            </div>
                            <a href="#">
                                <div className="d-flex justify-content-center">
                                    <span className="badge bg-warning">
                                        Juan Dela Cruz <br />
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src={process.env.PUBLIC_URL+ "/assets/img/inactivestar.png" }
                            alt="Card image cap" />
                        <div className="card-body">
                            <div className="d-flex justify-content-center">
                                <img src={process.env.PUBLIC_URL+ "/assets/img/profile.png" } alt
                                    className="w-px-40 h-auto rounded-circle" />
                            </div>
                            <div className="d-flex justify-content-center">
                                <div className="p-2 bd-highlight">
                                    <Button className='btn btn-secondary' onClick={handleShow}>
                                        <i className='bx bxs-plus-circle'></i> Add
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add User</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form id='formAuthentication' className='mb-3'>
                                <div className="mb-3">
                                    <Form.Control type='text' id='firstName' className='form-control'
                                        placeholder='First Name'>
                                    </Form.Control>
                                </div>
                                <div className="mb-3">
                                    <Form.Control type='text' id='middleName' className='form-control'
                                        placeholder='Middle Name'>
                                    </Form.Control>
                                </div>
                                <div className="mb-3">
                                    <Form.Control type='text' id='lastName' className='form-control'
                                        placeholder='Last Name'>
                                    </Form.Control>
                                </div>
                                <div className="mb-3">
                                <label class="form-label">Date Of Birth</label>
                                    <Form.Control type='date' id='username' className='form-control'
                                        placeholder='birth date'>
                                    </Form.Control>
                                </div>
                                <div className="mb-3">
                                    <Form.Control type='number' id='username' className='form-control'
                                        placeholder='Contact Info'>
                                    </Form.Control>
                                </div>
                                <div className="mb-3">
                                    <Form.Control type='text' id='username' className='form-control'
                                        placeholder='Email Address'>
                                    </Form.Control>
                                </div>
                                <Button className='mx-1' variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button className='mx-1' variant="primary" onClick={handleClose}>
                                    Submit
                                </Button>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    </div>
</div>)
}

export default StartupUI