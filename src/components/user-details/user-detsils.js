import React, { Component, useEffect, useState } from "react";
import Layout from "../../common/layout/layout";
import {Link, useParams} from 'react-router-dom';
import { getUserByUserId } from "../../services/userData";
const UsersDetail = (props) => {

    const [detailsForm, setDetails] = useState({ first_name: '', last_name: '', email: '', avatar: '' });
   const {userId} = useParams()
   console.log('userId', userId);

   function getUser(){
    getUserByUserId(userId).then((res)=>{
        if(res){
            setDetails(res.data.data)
        }
    }).catch((e)=>{
        console.log(e);
    })
   }

   useEffect(()=>{
    getUser();
   },[])

   

    return (
        <Layout>
            <div className="content-head pt-3 pb-2 borderw-2">
                <h6 className="text-secondary">User Details</h6>
            </div>
            <div className="details-wrp d-flex pt-5">
                <div className="imgbox shadow">
                    <img src={detailsForm.avatar} className="img-responsive"/>
                </div>
                <div className="formwrp col-md-6 px-3 ps-5">
                    <form>
                        <div className="form-group d-flex align-items-center mb-3">
                            <label className="col-4 col-md-3">First Name</label>
                            <div className="col-8">
                                <input type="text" className="form-control" disabled readOnly value={detailsForm.first_name || ''} />
                            </div>
                        </div>
                        <div className="form-group d-flex align-items-center mb-3">
                            <label className="col-4 col-md-3">Last Name</label>
                            <div className="col-8">
                                <input type="text" className="form-control" disabled readOnly value={detailsForm.last_name || ''} />
                            </div>
                        </div>
                        <div className="form-group d-flex align-items-center mb-3">
                            <label className="col-4 col-md-3">Email</label>
                            <div className="col-8">
                                <input type="text" className="form-control" disabled readOnly value={detailsForm.email || ''} />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Link to="/userList" className="btn btn-secondary setBottom">Back</Link>
        </Layout>
    )
}




export default UsersDetail;