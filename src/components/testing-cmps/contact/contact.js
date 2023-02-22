import React, {Component} from "react";

const Contact = (props)=>{
    return(
        <>
            <div className="container" data-testid="Contact">
                <div className="shadow p-3">
                    <h5 className="text-success text-center" id={'phone'+props.phone}>Conatcts {props.phone}</h5>
                </div>
            </div>
        </>
    )
}

export default Contact;