import React from 'react'

const Dashboard = (props) => {
    console.log(props);
    return (
        <div>
            <main className="">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Dashboard</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <div className="btn-group me-2">
                            <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                        </div>
                        <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                            <span data-feather="calendar" />
                            This week
                        </button>
                    </div>
                </div>

                <h2 className="py-3 text-center">Bảng thống kê</h2>
                <div className="table-responsive ">
                    <div className="row py-5 ">
                        <div className="col-3">
                            <div className="col-12 rounded-3 text-center border border-danger">
                                <h3 className="bg-danger py-4 text-white" >Total Page</h3>
                                <p className="fs-1 text-danger py-5 fw-bold"  >5 </p>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="col-12 rounded-3 text-center border border-primary">
                                <h3 className="bg-primary py-4 text-white" >Total Product</h3>
                                <p className="fs-1 text-primary py-5 fw-bold"  >{props.products ? (props.products).length : ''} </p>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="col-12 rounded-3 text-center border border-warning">
                                <h3 className="bg-warning py-4 text-white" >Total Category</h3>
                                <p className="fs-1 text-warning py-5 fw-bold"  >{props.categories ? (props.categories).length : ''}</p>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="col-12 rounded-3 text-center border border-info">
                                <h3 className="bg-info py-4 text-white" >Account</h3>
                                <p className="fs-1 text-info py-5 fw-bold"  >7 </p>
                            </div>
                        </div>

                    </div>
                    <div className="row py-1">
                        <div className="col-3">
                            <div className="col-12 rounded-3 text-center border border-success">
                                <h3 className="bg-success py-4 text-white" >Total News</h3>
                                <p className="fs-1 text-success py-5 fw-bold"  >{props.listNews ? (props.listNews).length : ''} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </div>

    )
}

export default Dashboard
