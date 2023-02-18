import axios from "axios";
import React from "react";
import styles from './list.module.css';
import ReactDOM from "react-dom";

export default class AddPost extends React.Component {
    apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    constructor(props) {
        super(props);
        this.state = {
            postData: {
                id: null,
                title: '',
                body: '',
                userId: 1
            },
            formState: 'addpost'
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.editPostData.formState && props.editPostData.formState != 'addpost') {
            return { formState: props.editPostData.formState }
        }
        else {
            return { formState: props.editPostData.formState }
        }
        // return null
    }

    componentDidMount() {
        if (this.state.formState === 'editPost') {
            this.setState(prevState => ({
                postData: this.props.editPostData.data
            }))
        } else {
            this.setState(prevState => ({
                postData: {
                    id: null,
                    title: '',
                    body: '',
                    userId: 1
                }
            }))
        }
    }

    handleChanges(event, type) {
        if (type === 'title') {
            this.setState(prevState => ({
                postData: { ...prevState.postData, title: event.target.value }
            }))
        }
        if (type === 'body') {
            this.setState(prevState => ({
                postData: { ...prevState.postData, body: event.target.value }
            }))
        }
    }

    reset() {
        this.setState(prevState => ({
            postData: {
                id: null,
                title: '',
                body: '',
            }
        }))
    }

    cancelUpdating() {
        this.props.editPostData.closeTheForm(true)
        this.setState({
            postData: {
                title: '',
                body: '',
                userId: 1
            },
            formState: 'addpost'
        })
    }

    handleSubmit(event, actiontype) {
        if (actiontype == 'ADD_POST') {
            const dataToSend = {
                title: this.state.postData.title,
                body: this.state.postData.body,
                userId: this.state.postData.userId,
            }
            axios.post('https://jsonplaceholder.typicode.com/posts', dataToSend).then((res) => {
                console.log('post', res);
                if(res){
                    alert(`Added Item Id: ${res.data.id}, Title: ${res.data.title}, Body: ${res.data.body}`);
                }
            }).catch((e)=>{
                alert(e)
            })
        } else {
            axios.put(`https://jsonplaceholder.typicode.com/posts/${this.state.postData.id}`, this.state.postData).then((res) => {
                console.log('update', res);
                if(res){
                    alert(`Udated Item Id: ${res.data.id}, Title: ${res.data.title}, Body: ${res.data.body}`);
                }
            }).catch((e)=>{
                alert(e);
            })
        }

        event.preventDefault();
    }

    render() {
        let heading = '';
        let buttonToPerformActio = null;
        if (this.state.formState === 'addpost') {
            heading = 'Add New Post'
            buttonToPerformActio = <><button className='btn btn-dark' type='button' onClick={(event) => this.handleSubmit(event, 'ADD_POST')}>Add</button><button className='btn btn-dark ms-2' type='button' onClick={() => this.reset()}>Reset</button></>;
        } else {
            heading = 'Update the post';
            buttonToPerformActio = <><button className='btn btn-dark' type='button' onClick={(event) => this.handleSubmit(event, 'EDIT_POST')}>Save</button><button className='btn btn-dark ms-2' type='button' onClick={() => this.cancelUpdating()}>Cancel</button></>;
        }
        return (
            <div className='addpostform'>
                <div className='px-3'>
                    <h5 className='text-center text-success mb-0'>{heading}</h5>
                    <p className="text-warning mb-3 text-center">Check response on console and network</p>
                    <form>
                        <div className={styles.formGroup}>
                            <label>Post Title</label>
                            <input type='text' className='form-control' placeholder='Title' name='title' value={this.state['postData'].title || ''} onChange={(event) => this.handleChanges(event, 'title')} />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Post Body</label>
                            <textarea className='form-control' name='Description' rows={4} value={this.state['postData'].body || ''} onChange={(event) => this.handleChanges(event, 'body')}></textarea>
                        </div>
                        <div className='d-flex justify-content-center'>
                            {buttonToPerformActio}
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}