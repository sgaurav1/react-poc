import axios from "axios";
import React from "react";
import styles from './list.module.css';
import ReactDOM  from "react-dom";

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
        console.log('getDerived props', state, props);
        if (props.editPostData.formState && props.editPostData.formState != 'addpost') {
            return { formState: props.editPostData.formState }
        }
        else {
            return { formState: props.editPostData.formState }
        }
        // return null
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('should update', nextProps, nextState);
    //     if(nextProps.editPostData.data != this.state.postData){
    //         return true;
    //     }else{
    //         return false
    //     }
    // }
    componentDidMount() {
        console.log('Calling mount');
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

    // componentDidUpdate(nextProps, nextState){
    //     this.setState(prevState => ({
    //         postData: this.props.editPostData.data
    //     }))
    // }

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
        this.setState({ title: '', body: '', userId: 1 })
    }

    cancelUpdating() {
        this.props.editPostData.closeTheForm(true)
        // @ts-ignore
        // ReactDOM.unmountComponentAtNode(document.getElementById('addpostForm'));
        this.setState({
            postData: {
                title: '',
                body: '',
                userId: 1
            },
            formState: 'addpost'
        })
        console.log(this.state);
    }

    handleSubmit(event, actiontype) {
        console.log('actiontype', actiontype);
        if (actiontype == 'ADD_POST') {
            const dataToSend = {
                title: this.state.postData.title,
                body: this.state.postData.body,
                userId: this.state.postData.userId,
            }
            axios.post('https://jsonplaceholder.typicode.com/posts', dataToSend).then((res) => {
                console.log('post', res);
            })
        } else {
            axios.put(`https://jsonplaceholder.typicode.com/posts/${this.state.postData.id}`, this.state.postData).then((res) => {
                console.log('update', res);
            })
        }

        event.preventDefault();
    }

    render() {
        console.log('state', this.state);
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
            <div className='col-md-5 mx-auto mb-3 addpostform'>
                <div className='border p-3 shadow-lg'>
                    <h5 className='text-center text-success mb-0'>{heading}</h5>
                    <p className="text-info mb-3">Check response on console and network</p>
                    <form>
                        <div className={styles.formGroup}>
                            <label>Post Title</label>
                            <input type='text' className='form-control' placeholder='Enter name' name='title' value={this.state['postData'].title || ''} onChange={(event) => this.handleChanges(event, 'title')} />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Post Body</label>
                            <textarea className='form-control' name='body' value={this.state['postData'].body || ''} onChange={(event) => this.handleChanges(event, 'body')}></textarea>
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