import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import HomePage from './pages/mainpage/homepage/homepage';
import CameraPage from './pages/mainpage/homepage/camerapage/camerapage';
import MyPage from './pages/mainpage/mypage/mypage';
import LoginPage from './Components/header/login/login';
import SignupStep1 from './Components/header/signup/signup_step1';
import SignupCertificate from './Components/header/signup/signup_certificate';
import FinalSignup from './Components/header/signup/FinalSignup';
import IWantToYield from './pages/mainpage/homepage/yield/iwanttoyield';
import WriteYield from './pages/mainpage/homepage/yield/writeyield';
import MyYield from './pages/mainpage/homepage/yield/myyield';
import YieldHistory from './pages/mainpage/mypage/yieldhistory';
import PointCharge from './pages/mainpage/mypage/pointcharge';
import Favor from './pages/mainpage/favor/favor';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/camera" element={<CameraPage />} />
                    <Route path="/favor" element={<Favor />} />
                    <Route path="/mypage" element={<MyPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupStep1 />} />
                    <Route path="/certificate" element={<SignupCertificate />} />
                    <Route path="/finalsignup" element={<FinalSignup />} />
                    <Route path="/iwanttoyield" element={<IWantToYield />} />
                    <Route path="/writeyield" element={<WriteYield />} />
                    <Route path="/myyield" element={<MyYield />} />
                    <Route path="/yieldhistory" element={<YieldHistory />} />
                    <Route path="/pointcharge" element={<PointCharge />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRouter;
