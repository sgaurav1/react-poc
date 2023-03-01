import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { userLogin } from "../../redux-config/actions";
import styles from './login.module.css';
import { useNavigate } from "react-router";
import { useForm } from 'react-hook-form';

const Login = (props) => {
    let navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isLoading, setLoadingStatus] = useState(false);
    const [errorMessage, setError] = useState(null);

    const onSubmit = (formData) => {
        setLoadingStatus(true);
        props.userLogin(formData).then(() => {
            navigate('/userList');
            setLoadingStatus(false);
        }).catch((e) => {
            setLoadingStatus(false);
            setError(e.message);
        });
    }

    return (
        <>
            <div className={styles.loginwrapper}>
                <div className={`container d-flex align-items-center justify-content-center py-2 ${styles.loginwrpcontainer}`}>
                    <div className="col-md-7 col-lg-6 col-xl-5 mx-auto col">
                        <div className={styles.loinform}>
                            <p className="text-center mb-4"><span className="badge bg-primary logotext">Yms</span></p>
                            {errorMessage && <p className="text-danger text-center">{errorMessage}</p>}
                            {isLoading && <p className="text-info text-center">Working on please wait...</p>}
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group mb-3">
                                    <input type="text" className="form-control" defaultValue="eve.holt@reqres.in" {...register("email", { required: true })} />
                                    {errors.email && <div className="text-danger mt-1">This field is required</div>}
                                </div>
                                <div className="form-group">
                                    <input type="password" defaultValue="cityslicka" className="form-control" {...register("password", { required: true })} />
                                    {errors.password && <div className="text-danger mt-1">This field is required</div>}
                                </div>
                                <div className="pt-4 d-flex justify-content-center">
                                    <button className="btn btn-primary" type="submit">Login</button>
                                    <button className="btn btn-secondary ms-2" type="button">Cancel</button>
                                </div>
                                <h6 className="mb-0 py-4 text-center text-secondary">OR</h6>
                                <button className="btn btn-outlineblue d-block mx-auto" type="button">Login with Facebook</button>
                                <button className="btn btn-outlinered d-block mx-auto mt-3" type="button">Login with Google</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}


function mapStateToProps(state) {
    return {
        auth: state.authReducer.auth,
        isLoggedIn: state.authReducer.isLoggedIn
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userLogin: (credentials) => dispatch(userLogin(credentials))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);