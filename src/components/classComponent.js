import React from "react";

class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'First',
            count: 0
        }
        this.handleClick = this.handleClick.bind(this);
        this.checkBinding = this.checkBinding.bind(this);
        this.incrementCounter = this.incrementCounter.bind(this);
    }
    handleClick(){
        this.setState({
            name: 'Updated Now to Second'
        })
    }
    checkBinding(){
        console.log('Check binding with getting state: ', this.state.name);
    }

    incrementCounter(){
        this.setState({
            count: this.state.count + 1
        });
    }
    decrementCounter(){
        this.setState({count: this.state.count - 1});
    }
    resetCounter(){
        this.setState({count: 0});
    }

    render() {
        return (
            <>
                <div>Hi Class Component {this.props.data[0].name}</div>
                <div>State: {this.state.name}</div>
                <div>State Count: {this.state.count}</div>
                {/* <button onClick={()=> this.handleClick()}>Change stae</button>, //when we open it we don't need to bind it inside constructor  */}
                {/* to call the function inside a button as mentioned below we need to bind the event with itself inside constructor and that is also knsown as event binding */}
                <button onClick={this.handleClick}>Change State</button> 
                <button onClick={this.checkBinding}>Chckbinding</button> 

                {/* Event handling */}

                <button onClick={this.incrementCounter}>Type 1</button>
                <button onClick={()=> this.decrementCounter()}>Type 2</button>
                <button onClick={this.resetCounter.bind(this)}>Type 3</button>

            </>
        )
    }
}

export default ClassComponent;