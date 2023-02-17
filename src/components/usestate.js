import React from "react";
import { useState, useEffect } from "react";

const UseState = (props)=>{

    const [count, setCount] = useState(0);
    const changeCount = ()=>{
        setCount(count + 1)
    }

    useEffect(()=>{
        document.title = `You clicked ${count} times`
        console.log('Clicked', count);
    })

    return(
        <>
            <div>Hi This is UseStae Count: {count}</div>
            <button onClick={changeCount}>Change Count</button>
            <button onClick={() => props.changeNameEvent('Ravi Singh')}>Change Parent Name Data</button>
        </>
    )
}

export default UseState;