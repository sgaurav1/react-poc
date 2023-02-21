import { connect } from "react-redux";
import React from "react";

const ConnectedList = (props)=>{
    return(
        <>
            <h5>List Component</h5>
            <ul>
                {props.articles.map((item, i)=>(
                    <li key={i}>{item.name}</li>
                ))}
            </ul>
        </>
    )
}


const mapStateTProps = state=> {
    return {articles: state.articles}
}

const List = connect(mapStateTProps, null)(ConnectedList);

export default List;