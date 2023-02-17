import React from "react";
import { useState, useEffect } from "react";

const UseffectComponent = ()=>{
    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);


    useEffect(()=>{
        console.log('Use effect for count', count);
    }, [count])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos').then(res=>res.json()).then((result)=>{
            // let data = result;
            // @ts-ignore
            console.log(result);
            setData(result);
            // console.log(data);
        })
    }, [])
    //the empty array is used as second parameter so that it loads the api once and render one the html

    return(
        <>
            <div className="mx-auto py-4">
                    <button onClick={()=> setCount(count + 1)}>Update Data</button>
                    <p>Count: {count}</p>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                {/* <th>Phone</th>
                                <th>Email</th>
                                <th>Website</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, i) => (
                                <tr key={item['id']}>
                                    <td>{i + 1}</td>
                                    <td>{item['title']}</td>
                                    {/* <td>{item['phone']}</td>
                                    <td>{item['email']}</td>
                                    <td>{item['website']}</td> */}
                                    {/* <td>{item['username']}</td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
        </>
    )

}


export default UseffectComponent;