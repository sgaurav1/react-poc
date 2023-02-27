import React, { useState } from "react";
import Layout from "../../common/layout/layout";
import { addNewUser } from "../../services/userData";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const AddNewUser = (props) => {

    const [isUserAdded, setResponse] = useState(false)
    const [newUserData, setData] = useState({});
    const [errorOccured, setError] = useState();

    // useForm hoo 
    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = (formData) => {
        addNewUser(formData).then((res) => {
            if (res) {
                console.log('res', res);
                console.log(res.data.id);
                setData(res.data)
                setResponse(true);
            }
        }).catch((e) => {
            console.log(e);
            setError(e.message);
        })
    };

    return (
        <Layout>
            <div className="content-head pt-3 pb-2 borderw-2">
                <h6 className="text-secondary">{!isUserAdded && <><span>Add a user</span><span className="text-info ms-2">{'(Add with given details as api allows with this credentials only)'}</span> </>} {isUserAdded && <span>User added successfully!</span>}</h6>
            </div>
            {isUserAdded && <h6 className="mt-3">User Added with ID: {newUserData['id']}</h6>}
            <div className="formwrp-adduser col-md-6 col-xl-5 px-3 pt-4">
                {errorOccured && <p className="text-danger">{errorOccured}</p>}
                {!isUserAdded && <>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group mb-3">
                            <input type="text" className="form-control" defaultValue="eve.holt@reqres.in" {...register("email", { required: true })} />
                            {errors.email && <div className="text-danger mt-1">This field is required</div>}
                        </div>
                        <div className="form-group mb-3">
                            <input type="password" defaultValue="pistol" className="form-control" {...register("password", { required: true })} />
                            {errors.password && <div className="text-danger mt-1">This field is required</div>}
                        </div>
                        <div>
                            <button className="btn btn-primary" type="submit">Add</button>
                            <button className="btn btn-secondary ms-2" type="reset">Reset</button>
                        </div>
                    </form>
                </>}
            </div>
            <Link to="/userList" className="btn btn-secondary setBottom">Back</Link>
        </Layout>
    )
}

export default AddNewUser;