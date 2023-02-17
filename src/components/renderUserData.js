import React from "react";
import ReactDOM  from "react-dom";
import UserTabel from "./userData";

export default class RenderUserData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: 'Gaurav'
        }
    }

    mountUserList(type){
        if(type === 'mount'){
            // @ts-ignore
            ReactDOM.render(<UserTabel />, document.getElementById('userList'));
        }else if(type === 'unmount'){
            // @ts-ignore
            ReactDOM.unmountComponentAtNode(document.getElementById('userList'));
        }else{
            this.setState({
                userName: this.props.name
            })
        }
    }

    // render

    render() {
        return (
            <>
                <div className="py-4 bg-light">
                    <h4 className="text-info">User Data</h4>
                    <h6 className="text-warning">Initial State: <span className="text-success">{this.state.userName}</span></h6>
                </div>

                <h5>Lifecycle Examples</h5>
                <button className="btn btn-dark me-1" onClick={()=> this.mountUserList('mount')}>Mount User List</button>
                <button className="btn btn-dark me-1" onClick={()=> this.mountUserList('unmount')}>Unmount User List</button>
                <button className="btn btn-dark me-1" onClick={()=> this.mountUserList('changeprops')}>Change Props</button>
                <div className="bg-light mt-4 py-3">
                    <h6>User List</h6>
                    <div id="userList"></div>
                </div>
            </>
        )
    }


}