import React, {Component} from "react";
import { connect } from "react-redux";
import { decrement, increment, reset } from "../redux-part/actions";

export class Counter extends Component{
    render(){
        const {counter, increment, decrement, reset} = this.props
        return(
            <>
                <div className="container py-4">
                    <div className="col-lg-6 mx-auto">
                        <h5>Counter {counter}</h5>
                        <div>
                            <button className="btn btn-dark" onClick={increment}>Increment</button>
                            <button className="btn btn-dark mx-2" onClick={decrement}>Decrement</button>
                            <button className="btn btn-dark" onClick={reset}>Reset</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

function mapStateTProps(state){
    console.log('state: ', state);
    return {
        counter: state.counterReducer.counter
    }
}

function mapDispatchToProps(dispatch){
    return {
        increment: ()=> dispatch(increment()),
        decrement: ()=> dispatch(decrement()),
        reset: ()=> dispatch(reset()),
    }
}

export default connect(mapStateTProps,mapDispatchToProps)(Counter);