import React from "react";
import { connect } from "react-redux";


const ConnectUser = (props) => {
    console.log('props', props);
    return (
        <>
        <h5 className="text-center text-info mt-5">Employee List</h5>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>EMP ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.map((item, i)=>
                        (<tr key={item['id']}>
                            <td>{i+1}</td>
                            <td>{item['empId']}</td>
                            <td>{item['name']}</td>
                            <td>{item['age']}</td>
                            <td>{item['gender']}</td>
                        </tr>)
                    )}
                </tbody>
            </table>
        </>
    )
}

const mapPropsToState = state=> {
    console.log(state);
    return {users: state.users}
}

const UserList = connect(mapPropsToState, null)(ConnectUser);

export default UserList;