import React, {Component} from "react";
import { connect } from "react-redux";
import { getData } from "../redux-part/actions";

export class Posts extends Component{
   
    componentDidMount(){
        console.log('props', this.props);
        console.log('props', this.state);
        this.props.getData();
    }

    render(){
        return(
            <>
            <h5 className="text-center text-info mt-5">Posts</h5>
            {this.props.isLoading && <h5 className="text-center text-info mt-5">Post Loading</h5>}
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.posts.map((item, i)=>
                            (<tr key={item['id']}>
                                <td>{i+1}</td>
                                <td>{item['title']}</td>
                                <td>{item['body']}</td>
                            </tr>)
                        )}
                    </tbody>
                </table>
            </>
        )
    }
}

function mapStateTProps(state){
    return{
        posts: state.postRedeucer.posts.splice(0, 10),
        isLoading: state.postRedeucer.isPostLoading
    }
}

function mapDispatchToProps(dispatch){
    return {
        getData: ()=> dispatch(getData())
    };
}

export default connect(mapStateTProps,mapDispatchToProps)(Posts)