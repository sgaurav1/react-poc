import React from "react";

class MountingCmp extends React.Component {
    mountingMethods = ['constructor()', 'getDerivedStateFromProps()', 'render()', 'componentDidMount()'];
    data = [];
    constructor(props) {
        super(props);
        this.state = {
            favColor: 'red'
        }
    };

    // getderivedStateFromProps()
    //it is called right before the rendring of HTML,
    //it actually uses to update state wit props value and takes a state as an argument and return object with updated vale of changes in the perspective of pops value.
    // static getDerivedStateFromProps(props, state) {
    //     console.log('mounting');
    //     console.log('from getDerived: ', props, state);
    //     return {
    //         favColor: props.updatedState
    //     }
    // }

    // It is called as the HTMl is rendered, and the api calls and other DOm related functionality code should written inside it 
    componentDidMount(){
        // this.setState({})
        console.log('Component mounted successfully and now we can call apis and other connections of the app')
        fetch('https://jsonplaceholder.typicode.com/todos').then(results=> results.json()).then((res)=>{
            this.data = res;
            console.log(this.data);
        });
        setTimeout(()=>{
            this.setState({favColor: 'gaurav'})
            console.log('color',this.state.favColor);
        }, 1000)
    }

    // render() it is actually the method which renders the html, it is reponsible to outputs the HTMl to the DOM

    render() {
        console.log('Rendered successfullly');
        return (
            <>
                <h4 className="text-info">Mounting Check Component</h4>
                <h6 className="text-dark">Componnent State: <span className="text-danger">{this.state.favColor}</span></h6>
                <p className="text-warning">Methods called at the time of mounting</p>
                <div className="col-md-3 mx-auto py-4">
                    <ul>
                        {this.mountingMethods.map((item, i) => (
                            <li key={i} className="text-start text-danger">{item}</li>
                        ))}
                    </ul>
                    <ul>
                        {this.data.map((item, i) => (
                            <li key={i} className="text-start text-danger">{item.title}</li>
                        ))}
                    </ul>
                </div>
            </>
        )
    }

}

export default MountingCmp;