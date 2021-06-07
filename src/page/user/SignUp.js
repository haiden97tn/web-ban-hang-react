import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './style.css';
import { useForm } from "react-hook-form";
import UserApi from '../../api/UserApi';

const SignUp = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [error, setError] = useState();
    const [success, setSuccess] = useState()

    const signUp = async (body) => {
        try {
            const { data: user } = await UserApi.add(body);
            console.log(user);
        } catch (error) {
            console.log(error);
        }
    }

    const onSubmit = (data) => {
        signUp(data);
    }
    return (
        <div>
            <div className="formLogin">
                <form onSubmit={handleSubmit(onSubmit)} className="mt-5 mt-52" encType="multipart/form-data">
                    <div className="mb-4">
                        <b className="fs-1">Register </b>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="fullname"
                            aria-describedby="emailHelp"
                            {...register('name', { required: true })}
                        />
                        {errors.name && <span className="text-danger" >Không được bỏ trống họ tên</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            aria-describedby="emailHelp"
                            {...register('email', { required: true })}
                        />
                        {errors.email && <span className="text-danger" >Không được bỏ trống email</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            {...register('password', { required: true })}
                        />
                        {errors.password && <span className="text-danger" >Không được bỏ trống password</span>}
                    </div>
                    <button type="submit" id="btnRegister" className="btn btn-primary mb-3">Register</button>
                    <div className="mb-3">
                        <Link to="/signin" >Login Here...</Link>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default SignUp
