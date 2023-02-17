import React from "react";
import { Route, Routes } from 'react-router-dom'
import Login from './auth/login/login';
import Nomatch from "./common/nomatch/nomatch";
import Home from './pages/home/home';
import Profile from './pages/profile/profile';
export default class Routers extends React.Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="login" element={<Login />}></Route>
                <Route path="home" index element={<Home />}></Route>
                <Route path="profile" element={<Profile />}></Route>
                <Route path="*" element={<Nomatch />}></Route>
            </Routes>
        )
    }
}

// export default Routers;