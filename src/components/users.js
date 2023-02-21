import React from "react";
import { connect } from "react-redux";


const ConnectUser = (props) => {
    console.log('props users', props);
    return (
        <>
        <h5 className="text-center text-info mt-5">Employee List</h5>
        {props.isLoading && <h5 className="text-center text-info mt-5">Employee List Loading</h5>}
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>EMP ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Company</th>
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
                            <td>{item['companyName']}</td>
                        </tr>)
                    )}
                </tbody>
            </table>
        </>
    )
}

const mapStateToProps = state=> {
    console.log(state, state.addUserandArticleReducer.users);
    return {
        users: state.addUserandArticleReducer.users,
        isLoading: state.addUserandArticleReducer.isUserLoading
    }
}

const UserList = connect(mapStateToProps)(ConnectUser);

export default UserList;