import React from "react";

// export default function Functional(props) {


const Functioal = ({ data }) => {
    return (
        <>
            <div>Hii Functioal Component {data[0].name} {data[0].designation}</div>
            <ul>
                {data.map((item, i) => (
                    <li key={i}>{item.name}</li>
                ))}
            </ul>
        </>
    )
}
// }

export default Functioal;