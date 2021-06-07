import React from 'react'
import ListCategory from './ListCategory'

const CategoryAdmin = (props) => {

    return (
        <div>
            <div className="mt-28 container-fluid">
                <div className="row">
                    <main>
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">Quản lý danh mục</h1>
                        </div>
                        <div className="table-responsive" >
                            <ListCategory {...props} />
                        </div>
                    </main>
                </div>
            </div>

        </div>
    )
}

export default CategoryAdmin
