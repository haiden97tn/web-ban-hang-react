import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";

const Profile = () => {

    const onLogout = () => {
        sessionStorage.clear();
    }
    var user = JSON.parse(sessionStorage.getItem('user'));
    console.log(user.user);
    var userName = user.user.name;
    var userEmail = user.user.email;

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div style={{ textAlign: 'center', paddingTop: '20px' }} >
            <div style={{ display: 'inline-block' }} className="text-center w-25">
                <h2 className="my-5 text-5xl pb-11 pt-10 text-blue-600 font-medium">Thông tin khách hàng</h2>
                <div className="row tableProfile1">
                    <div className="col">
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <div className="mb-3">
                                <label className="form-label fs-4"> Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    defaultValue={userEmail}
                                    {...register('email')}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label fs-4">Full name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    defaultValue={userName}
                                    {...register('name')}

                                />
                            </div>
                            <button type="submit" id="btnUpdate" className="btn btn-primary">Update</button>
                            <Link to="signin" className="btn btn-danger mx-3" onClick={() => onLogout()} >Log out</Link>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile
