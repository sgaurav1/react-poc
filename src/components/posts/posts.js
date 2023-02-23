import React, { Component } from "react";
import { connect } from "react-redux";
import Layout from "../../common/layout/layout";
import { addPost, deletePost, getPosts, updatePost } from "../../redux-config/actions";
import styles from './posts.module.css';
import Modal from 'react-bootstrap/Modal';

export class ConnectPosts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formData: {
                userId: 1,
                title: '',
                body: ''
            },
            modalShow: false,
            isEditMode: false,
            isDataUpdationInPogress: false
        }

        this.handleClose = this.handleClose.bind(this);
    }

    componentDidMount() {
        this.props.getPosts();
    }

    openModal() {
        this.setState({ modalShow: true });
    }

    handleClose() {
        this.setState({
            formData: {
                userId: 1,
                title: '',
                body: ''
            },
            modalShow: false,
            isEditMode: false,
            isDataUpdationInPogress: false,
            isDeleting: false
        });
    }

    handleChanges(event, type) {
        if (type === 'title') {
            this.setState(prevstate => ({
                formData: { ...prevstate.formData, title: event.target.value }
            }))
        }
        if (type === 'body') {
            this.setState(prevstate => ({
                formData: { ...prevstate.formData, body: event.target.value }
            }))
        }
    }

    addNewPost(event) {
        this.setState({ isDataUpdationInPogress: true });
        this.props.addPost(this.state.formData).then(() => {
            if (this.props.error != null) {
                this.setState({ isDataUpdationInPogress: false })
                alert(this.props.error);
                event.preventDefault();
            }
            else {
                this.handleClose();
                alert('New post added successfully!');
            }
        });
        event.preventDefault();
    }

    editPost(item) {
        this.setState({ isEditMode: true, modalShow: true })
        this.setState(prevState => ({
            formData: { ...item }
        }));
    }

    saveUpdateOfPost(event) {
        this.setState({ isDataUpdationInPogress: true });
        this.props.updatePost(this.state.formData).then(() => {
            console.log(this.props);
            if (this.props.error != null) {
                this.setState({ isDataUpdationInPogress: false })
                alert(this.props.error);
                event.preventDefault();
            }
            else {
                this.handleClose();
                alert('Post is updated');
            }
        });
    }

    deletePost(itemId) {
        this.setState({isDeleting: true});
        this.props.deletePost(itemId).then(() => {
            console.log(this.props);
            if (this.props.error != null) {
                this.setState({isDeleting: false});
                alert(this.props.error);
            }
            else {
                this.setState({isDeleting: false});
                this.props.getPosts();
                alert('Post is deleted');
            }
        })
    }

    render() {
        return (
            <>
                <Layout>
                    <div className="container py-4" data-testid="Posts">
                        <div className="d-flex">
                            <h4 className="text-success text-center">Posts</h4>
                            <button className="btn btn-success ms-auto mb-3" onClick={() => this.openModal()}>Add Post</button>
                        </div>
                        {this.props.isLoading && <h5 className="text-center text-info mt-5">Post Loading</h5>}
                        {this.state.isDeleting && <p className="text-center text-warning mt-5">Post deleting please wait...</p>}
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Title</th>
                                    <th>Body</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.posts.map((item, i) => (
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{item['title']}</td>
                                        <td>{item['body']}</td>
                                        <td className={styles.nowrap}>
                                            <button className="btn btn-info" onClick={() => this.editPost(item)}>Edit</button>
                                            <button className="btn btn-danger ms-2" onClick={() => this.deletePost(item['id'])}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Layout>
                <Modal show={this.state.modalShow} onHide={() => this.handleClose()}>
                    <Modal.Header closeButton className='border-0 pb-0'></Modal.Header>
                    <Modal.Body className="pt-0">
                        <h5 className="text-center text-success mb-4">{!this.state.isEditMode && <span>Add New Post</span>} {this.state.isEditMode && <span>Edit Post</span>}</h5>
                        {this.state.isDataUpdationInPogress && <p className="text-info text-center">Working on please wait......</p>}
                        <div id="addpostForm" className="px-4">
                            <form>
                                <div className="form-group mb-3">
                                    <label className="mb-2">Title</label>
                                    <input type="text" className="form-control" name="title" value={this.state['formData'].title || ''} onChange={(event) => this.handleChanges(event, 'title')} />
                                </div>
                                <div className="form-group mb-3">
                                    <label className="mb-2">Body</label>
                                    <input type="text" className="form-control" name="body" value={this.state['formData'].body || ''} onChange={(event) => this.handleChanges(event, 'body')} />
                                </div>
                                {!this.state.isEditMode && <div className="d-flex justify-content-center py-3">
                                    <button className="btn btn-dark" type="button" onClick={(event) => this.addNewPost(event)} disabled={this.state.isDataUpdationInPogress}>Add</button>
                                    <button className="btn btn-dark ms-2" disabled={this.state.isDataUpdationInPogress}>Reset</button>
                                </div>}
                                {this.state.isEditMode && <div className="d-flex justify-content-center py-3">
                                    <button className="btn btn-dark" type="button" onClick={(event) => this.saveUpdateOfPost(event)} disabled={this.state.isDataUpdationInPogress}>Save</button>
                                    <button className="btn btn-dark ms-2" onClick={() => this.handleClose()} disabled={this.state.isDataUpdationInPogress}>Cancel</button>
                                </div>}

                            </form>
                        </div>
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts,
        isLoading: state.isLoading,
        error: state.error
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getPosts: () => dispatch(getPosts()),
        addPost: (data) => dispatch(addPost(data)),
        updatePost: (data) => dispatch(updatePost(data)),
        deletePost: (itemId) => dispatch(deletePost(itemId))
    }
}

const Posts = connect(mapStateToProps, mapDispatchToProps)(ConnectPosts);

export default Posts;