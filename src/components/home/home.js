import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../redux-config/slices/CounterSlice";
import { getPost } from "../../redux-config/slices/PostSlice";

const Home = (props) => {
    // const count = useSelector(state=> state.counter.value)
    const [count, setCount] = useState(0)
    const dispatch = useDispatch()
    console.log('props', props);
    useEffect(()=>{
        dispatch(getPost())
    }, [])

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(getPost())}
                >
                    Increment
                </button>
                <span>{props.counter}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}

function mapStateToProps(state){
    return {
        counter: state.counter.value,
        posts: state.posts.posts
    }
}

function mapDispatchToProps(dispatch){
    return{
        // increment: dispatch(increment()),
        // decrement: dispatch(decrement()),
        // getPosts: ()=> dispatch(getPost())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);