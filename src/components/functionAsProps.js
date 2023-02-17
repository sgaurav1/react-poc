import React from "react";
import UseState from "./usestate";
import { useState } from "react";
import UserTabel from "./userData";
import ReactDOM from "react-dom/client";
import { unmountComponentAtNode } from 'react-dom';

const FunctionAsProps = ({})=>{
    const [name,changeName] = useState('Gaurav');
    
    function updateData(e){
        changeName(e)
    }
    function showUserList(){
        // @ts-ignore
        ReactDOM.createRoot(document.getElementById('userTable')).render(<UserTabel />);
    }
    function unmuntShownList(){
        // @ts-ignore
        ReactDOM.unmountComponentAtNode(document.getElementById('userTable'));
    }
    return (
        <>
        {/* It is useful when we need to update state of parent component from child component */}
            <div className="text-success">Function As Props</div> 
            <div>My Name from child: {name}</div> 
        <br/>
        <br/>
        <br/>
        <div>Child Component</div> 
            <UseState changeNameEvent={updateData}/>
        
        <br/>
        <br/>
        <button onClick={showUserList}>Show list</button>
        <div id="userTable">Render usertable</div> 
        <button onClick={unmuntShownList}>Umount List</button>
        </>

    )
}

export default FunctionAsProps;