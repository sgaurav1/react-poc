import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./components/posts/posts";

export default class Routers extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" index element={<Posts />}></Route>
                    <Route index element={<Posts />}></Route>
                    <Route path="posts" element={<Posts />}></Route>
                </Routes>
            </>
        )
    }
}