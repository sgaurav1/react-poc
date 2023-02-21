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
    console.log('state', state);
    return {articles: state.addUserandArticleReducer.articles}
}

const List = connect(mapStateTProps, null)(ConnectedList);

export default List;