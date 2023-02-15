import React from "react";
import { useState } from "react";

const UseState = (props)=>{

    const [count, setCount] = useState(0);
    const changeCount = ()=>{
        setCount(count + 1)
    }

    return(
        <>
            <div>Hi This is UseStae Count: {count}</div>
            <button onClick={changeCount}>Change Count</button>
            <button onClick={() => props.changeNameEvent('Ravi Singh')}>Change Parent Name Data</button>
        </>
    )
}

export default UseState;