import React from 'react'
import Sidebar from '../page/admin/sidebar';
import './admin.css';



const LayoutAdmin = (props) => {
    return (
        <div className="container-fluid">
            <div className="admin">
                <div >
                    <Sidebar/>
                </div>
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default LayoutAdmin
