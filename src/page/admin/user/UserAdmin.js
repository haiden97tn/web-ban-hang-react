import React, { useEffect, useState } from 'react'
import UserApi from '../../../api/UserApi'

const UserAdmin = () => {

    const [account, setAccount] = useState([])

    useEffect(() => {
        const CallApi = async () => {
            const { data } = await UserApi.getAll();
            setAccount(data.data)
        }
        CallApi()
    }, [])

    const onRemove = (id) => {
        var result = account.filter(x => {
            return x._id !== id
        })
        setAccount(result);
        UserApi.remove(id);
    }


    return (
        <div className="mt-28 container-fluid">
            <div className="row">
                <main>
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 className="h2">Quản lý tài khoản</h1>
                    </div>
                    <div className="table-responsive" >
                        <div className="row fs-4">
                            <div className="col">Tên nhân viên</div>
                            <div className="col">Email</div>
                            <div className="col">Phân quyền</div>
                            <div className="col">Tác vụ</div>
                        </div>
                        <hr />
                        {
                            account.map((x, index) => {
                                return <div className="row py-3" key={index}>
                                    <div className="col">{x.name}</div>
                                    <div className="col">{x.email}</div>
                                    <div className="col">{x.role === 1 ? 'Admin' : 'Nhân viên'}</div>
                                    <div className="col"><button className="btn btn-danger" onClick={() => onRemove(x._id)} >Xóa</button></div>
                                </div>
                            })
                        }

                    </div>
                </main>
            </div>
        </div>
    )
}

export default UserAdmin
