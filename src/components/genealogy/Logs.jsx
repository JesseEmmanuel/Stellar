import React from 'react'

function Logs() {
return (
<div className="content-wrapper">
    <div className="container-xxl flex-grow-1 container-p-y">
        <h5 className="py-3 my-4">Genealogy/Logs</h5>

        <div className="row">
            <div className="col-xl-12">
                <div className="nav-align-top mb-4">
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                            <button type="button" className="nav-link active" role="tab" data-bs-toggle="tab"
                                data-bs-target="#navs-top-home" aria-controls="navs-top-home" aria-selected="true">
                                Startup Savings
                            </button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="nav-link" role="tab" data-bs-toggle="tab"
                                data-bs-target="#navs-top-profile" aria-controls="navs-top-profile"
                                aria-selected="false">
                                Great Savings
                            </button>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="navs-top-home" role="tabpanel">
                            <div className="table-responsive text-nowrap">
                                <table className="table card-table">
                                    <thead>
                                        <tr>
                                            <th>Date/Time</th>
                                            <th>Name</th>
                                            <th>UserID</th>
                                            <th>Stars Earned</th>
                                            <th>Rebates Earned</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="table-border-bottom-0">
                                        <tr>
                                            <td><i className="fab fa-angular fa-lg text-danger me-3"></i>
                                                <strong>January 1, 2023/2:00PM</strong>
                                            </td>
                                            <td>
                                                <img src={process.env.PUBLIC_URL+ "/assets/img/avatars/1.png"}
                                                    alt className="w-px-40 h-auto rounded-circle" />
                                                Juan DeLa Cruz
                                            </td>
                                            <td>123456789</td>
                                            <td>0</td>
                                            <td>Php 50</td>
                                            <td><span className="badge bg-label-primary me-1">Active</span></td>
                                        </tr>
                                        <tr>
                                            <td><i className="fab fa-angular fa-lg text-danger me-3"></i>
                                                <strong>January 8, 2023/5:00PM</strong>
                                            </td>
                                            <td>
                                                <img src={process.env.PUBLIC_URL+ "/assets/img/avatars/5.png"}
                                                    alt className="w-px-40 h-auto rounded-circle" />
                                                John Doe
                                            </td>
                                            <td>123456789</td>
                                            <td>0</td>
                                            <td>Php 500</td>
                                            <td><span className="badge bg-label-primary me-1">Active</span></td>
                                        </tr>
                                        <tr>
                                            <td><i className="fab fa-angular fa-lg text-danger me-3"></i>
                                                <strong>January 3, 2023/12:00PM</strong>
                                            </td>
                                            <td>
                                                <img src={process.env.PUBLIC_URL+ "/assets/img/avatars/6.png"}
                                                    alt className="w-px-40 h-auto rounded-circle" />
                                                Maria Gomez
                                            </td>
                                            <td>123456789</td>
                                            <td>0</td>
                                            <td>Php 100</td>
                                            <td><span className="badge bg-label-primary me-1">Active</span></td>
                                        </tr>
                                        <tr>
                                            <td><i className="fab fa-angular fa-lg text-danger me-3"></i>
                                                <strong>January 15, 2023/7:00PM</strong>
                                            </td>
                                            <td>
                                                <img src={process.env.PUBLIC_URL+ "/assets/img/avatars/7.png"}
                                                    alt className="w-px-40 h-auto rounded-circle" />
                                                Nics Balanay
                                            </td>
                                            <td>123456789</td>
                                            <td>0</td>
                                            <td>Php 550</td>
                                            <td><span className="badge bg-label-primary me-1">Active</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="navs-top-profile" role="tabpanel">
                            <div className="table-responsive text-nowrap">
                                <table className="table card-table">
                                    <thead>
                                        <tr>
                                            <th>Date/Time</th>
                                            <th>Name</th>
                                            <th>UserID</th>
                                            <th>Stars Earned</th>
                                            <th>Rebates Earned</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="table-border-bottom-0">
                                        <tr>
                                            <td><i className="fab fa-angular fa-lg text-danger me-3"></i>
                                                <strong>January 1, 2023/2:00PM</strong>
                                            </td>
                                            <td>
                                                <img src={process.env.PUBLIC_URL+ "/assets/img/avatars/1.png"}
                                                    alt className="w-px-40 h-auto rounded-circle" />
                                                Juan DeLa Cruz
                                            </td>
                                            <td>123456789</td>
                                            <td>0</td>
                                            <td>Php 50</td>
                                            <td><span className="badge bg-label-primary me-1">Active</span></td>
                                        </tr>
                                        <tr>
                                            <td><i className="fab fa-angular fa-lg text-danger me-3"></i>
                                                <strong>January 8, 2023/5:00PM</strong>
                                            </td>
                                            <td>
                                                <img src={process.env.PUBLIC_URL+ "/assets/img/avatars/5.png"}
                                                    alt className="w-px-40 h-auto rounded-circle" />
                                                John Doe
                                            </td>
                                            <td>123456789</td>
                                            <td>0</td>
                                            <td>Php 500</td>
                                            <td><span className="badge bg-label-primary me-1">Active</span></td>
                                        </tr>
                                        <tr>
                                            <td><i className="fab fa-angular fa-lg text-danger me-3"></i>
                                                <strong>January 3, 2023/12:00PM</strong>
                                            </td>
                                            <td>
                                                <img src={process.env.PUBLIC_URL+ "/assets/img/avatars/6.png"}
                                                    alt className="w-px-40 h-auto rounded-circle" />
                                                Maria Gomez
                                            </td>
                                            <td>123456789</td>
                                            <td>0</td>
                                            <td>Php 100</td>
                                            <td><span className="badge bg-label-primary me-1">Active</span></td>
                                        </tr>
                                        <tr>
                                            <td><i className="fab fa-angular fa-lg text-danger me-3"></i>
                                                <strong>January 15, 2023/7:00PM</strong>
                                            </td>
                                            <td>
                                                <img src={process.env.PUBLIC_URL+ "/assets/img/avatars/7.png"}
                                                    alt className="w-px-40 h-auto rounded-circle" />
                                                Nics Balanay
                                            </td>
                                            <td>123456789</td>
                                            <td>0</td>
                                            <td>Php 550</td>
                                            <td><span className="badge bg-label-primary me-1">Active</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
)
}

export default Logs