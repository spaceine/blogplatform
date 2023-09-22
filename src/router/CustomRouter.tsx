import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";

const CustomRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/sign-in' element={<SignInPage />} />
                <Route path='/sign-up' element={<SignUpPage />} />
                <Route path='/profile' element={<ProfilePage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default CustomRouter;