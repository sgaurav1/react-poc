import { createSlice } from "@reduxjs/toolkit";

export const PostSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: []
    },
    reducers: {
        getPost: (state) => {
            console.log('calling getpost');
            console.log(state);
            // fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(result => {
            
            // })

            // state.posts.push('hii')
        }
    }
})

export const { getPost } = PostSlice.actions
export default PostSlice.reducer