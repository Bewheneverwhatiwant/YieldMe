import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import HomePage from './pages/mainpage/homepage/homepage';
import CameraPage from './pages/mainpage/camerapage/camerapage';
import MyPage from './pages/subpage/mypage/mypage';
import RankingPage from './pages/mainpage/homepage/ranking';
import LoginPage from './pages/subpage/login';
import SignupStep1 from './pages/subpage/signup/signup_step1';
import SignupCertificate from './pages/subpage/signup/signup_certificate';
import FinalSignup from './pages/subpage/signup/FinalSignup';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="camera" element={<CameraPage />} />
                    <Route path="mypage" element={<MyPage />} />
                    <Route path="ranking" element={<RankingPage />} />
                </Route>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupStep1 />} />
                <Route path="/certificate" element={<SignupCertificate />} />
                <Route path="/finalsignup" element={<FinalSignup />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
