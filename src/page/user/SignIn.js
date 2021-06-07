import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import UserApi from '../../api/UserApi';
import { useHistory } from "react-router-dom";



const SignIn = () => {
    let history = useHistory();
    const [error, setError] = useState({
        value: '',
        status: false
    });

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const signIn = async (body) => {
        try {
            const { data } = await UserApi.signin(body);
            console.log(data);
            sessionStorage.setItem('user', JSON.stringify(data));
            if (data.user.role == 1) {
                history.push('/admin/dashboard')
            }
            else {
                history.push("/");
            }
        } catch (error) {
            var { data } = error.response;
            setError({
                value: data.error,
                status: true
            })
        }
    }

    const onSubmit = (data) => {
        signIn(data);
    }
    return (
        <div>

            <div className="formLogin">
                <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
                    <div className="mb-4">
                        <b className="fs-1">Login </b>
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
                        {errors.email && <span className="text-danger">Không được để trống email</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            {...register('password', { required: true })}
                        />
                        {errors.password && <span className="text-danger">Không được để trống password</span>}

                    </div>
                    {
                        error.status == true ? <div className="alert alert-danger" role="alert"> {error.value} </div> : ''
                    }
                    <button type="submit" id="btnLogin" className="btn btn-primary mb-3">Login</button>
                    <div className="mb-3">
                        <Link to="/signup" >Register Here...</Link>
                    </div>
                </form>
            </div>

        </div>

    )
}

export default SignIn
