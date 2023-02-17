import React, { useState, useEffect } from "react";
import Layout from "../../../common/layout/layout";
import styles from './form.module.css';

let nextId = 0;

const Form = () => {

    const [inputs, setInputs] = useState({ userName: '', dob: '', gender: '' });
    const [userList, addUser] = useState([]);


    function handleChanges(event, type) {
        if (type === 'userName') {
            setInputs({ ...inputs, userName: event.target.value })
        }
        if (type === 'dob') {
            setInputs({ ...inputs, dob: event.target.value })
        }
        if (type === 'gender') {
            setInputs({ ...inputs, gender: event.target.value })
        }
    }

    function handleSubmit(event) {
        console.log(inputs);
        nextId++;
        // @ts-ignore
        addUser([...userList, { id: nextId, ...inputs }]);
        event.preventDefault();

    }

    function reset() {
        setInputs({userName: '', dob: '', gender: ''})
    }

    function deleteUser(userId){
        console.log('user id to delete: ', userId);
        addUser(userList.filter(item => item['id'] != userId));
    }


    return (
        <Layout>
            <div className='container py-5'>
                <div className='row justify-content-center align-items-center'>
                    <div className='col-md-4'>
                        <div className='border p-3 shadow-lg'>
                            <h5 className='text-center text-success'>Add Yourself in list</h5>
                            <form>
                                <div className={styles.formGroup}>
                                    <label>Name</label>
                                    <input type='text' className='form-control' placeholder='Enter name' name='userName' value={inputs.userName || ''} onChange={(event) => handleChanges(event, 'userName')} />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>DOB</label>
                                    <input type='date' className='form-control' name='dob' value={inputs.dob || ''} onChange={(event) => handleChanges(event, 'dob')} />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Password</label>
                                    <select className='form-control' name='gender' value={inputs.gender || ''} onChange={(event) => handleChanges(event, 'gender')}>
                                        <option selected disabled value=''>Selct an option</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <button className='btn btn-dark' type='button' onClick={(event) => handleSubmit(event)}>Add</button>
                                    <button className='btn btn-dark ms-2' type='button' onClick={reset}>Reset</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-10 mx-auto mt-4">
                        <h5 className="text-center text-success">User List</h5>
                        <table className="table table-bordered shadow">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>DOB</th>
                                    <th>Gender</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userList.map(item => (
                                    <tr key={item['id']}>
                                        <td>{item['userName']}</td>
                                        <td>{item['dob']}</td>
                                        <td>{item['gender']}</td>
                                        <td><button className="btn btn-danger" onClick={()=> deleteUser(item['id'])}>Delete</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Form;