import React from "react";


const UserTabel = ()=>{
    const data = ['Gaurav','Deepak', 'Pranshu', 'Sachin'];
    return(
        <>
            <ul>
                {data.map((item,i)=>(
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </>
    )
}

export default UserTabel;