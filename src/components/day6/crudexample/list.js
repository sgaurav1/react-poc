import React from "react";
import Layout from "../../../common/layout/layout";
import axios from "axios";
import ReactDOM from 'react-dom';
// import unmount from 'react-dom/client';
import AddPost from "./addpostform";

export default class UserList extends React.Component {
    apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    constructor(props) {
        super(props);
        this.state = {
            postData: [],
            isAddFormOpen: false
        }
        this.loadUserList = this.loadUserList.bind(this);
        this.editPost = this.editPost.bind(this);
        this.closeForm = this.closeForm.bind(this);
        this.shouldUpdateFormClose = this.shouldUpdateFormClose.bind(this);
    }


    loadUserList() {

    }

    componentDidMount() {
        axios.get(this.apiUrl).then((res) => {
            this.setState({ postData: res.data })
            console.log(this.state.postData);
        });

    }

    shouldUpdateFormClose(e){
        console.log('Calling');
        // this.setState({ isAddFormOpen: false })
        console.log(e);
        if(e){
            this.closeForm();
        }
    }

    addnewPost() {
        // @ts-ignore
        const root = ReactDOM.render(<AddPost editPostData={{formState: 'addpost'}} />,document.getElementById('addpostForm'));
        // root.render(<AddPost editPostData={{formState: 'addpost'}} />);
        this.setState({ isAddFormOpen: true })
    }

    editPost(postToEdit){
        console.log('postto edit: ', postToEdit);
        // @ts-ignore
        const root = ReactDOM.render(<AddPost editPostData={{formState: 'editPost',data:{...postToEdit},closeTheForm: this.shouldUpdateFormClose}} />,document.getElementById('addpostForm'));
        // root.render();
        this.setState({ isAddFormOpen: true }) 
    }

    deletePost(postId){
        console.log('postId ',postId);
        axios.delete(`${this.apiUrl}/${postId}`).then(res=>{
            console.log('DELETE API Response: ', res);
        })
    }

    closeForm() {
        const root = document.getElementById('addpostForm');
        // @ts-ignore
        ReactDOM.unmountComponentAtNode(document.getElementById('addpostForm'));
        this.setState({ isAddFormOpen: false })
    }

    componentWillUnmount(){
        console.log('unmount life cycle is running');
    }

    render() {
        let formOpenBtn = <button className="btn btn-success ms-auto" onClick={() => this.addnewPost()}>Add New Post</button>;

        if (this.state.isAddFormOpen) {
            formOpenBtn = <button className="btn btn-danger ms-auto" onClick={() => this.closeForm()}>Close Form</button>
        } else {
            formOpenBtn = <button className="btn btn-success ms-auto" onClick={() => this.addnewPost()}>Add New Post</button>;
        }

        return (
            <Layout>
                <div className='container py-5'>
                    <div className='row justify-content-center align-items-center'>
                        <div className="col-lg-10 mx-auto">
                            <div className="d-flex py-3 align-items-center">
                                <h5 className="text-center text-success mb-0">Posts</h5>
                                {formOpenBtn}
                            </div>
                            <div id='addpostForm'></div>
                            <table className="table table-bordered shadow">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Title</th>
                                        <th>Body</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.postData.map((item, i) => (
                                        <tr key={item['id']}>
                                            <td>{i + 1}</td>
                                            <td>{item['title']}</td>
                                            <td>{item['body']}</td>
                                            <td><button className="btn btn-info" onClick={()=>this.editPost(item)}>Edit</button></td>
                                            <td><button className="btn btn-danger" onClick={()=> this.deletePost(item['id'])}>Delete</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }

}