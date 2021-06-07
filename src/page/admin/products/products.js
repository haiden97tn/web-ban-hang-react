import React from 'react';
import ListProducts from './ListProducts';
const ProductsAdmin = (props) => {
    return (
        <div>
            <div className="mt-28 container-fluid">
                <div className="row">
                    <main>
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">Quản lý sản phẩm</h1>
                        </div>
                        <div className="table-responsive" >
                            <ListProducts {...props} />
                        </div>
                    </main>
                </div>
            </div>

        </div>
    )
}

export default ProductsAdmin
