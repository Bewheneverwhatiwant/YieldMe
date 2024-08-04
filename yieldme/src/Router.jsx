import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import HomePage from './pages/mainpage/homepage/homepage';
import CameraPage from './pages/mainpage/homepage/camerapage/camerapage';
import MyPage from './pages/mainpage/mypage/mypage';
import LoginPage from './Components/header/login/login';
import SignUpPage from './Components/header/signup/signup';
import YieldHistory from './pages/mainpage/mypage/yieldhistory';
import WriteReview from './pages/mainpage/mypage/writereview';

import Favor from './pages/mainpage/favor/favor';
import Cashback from './pages/mainpage/homepage/cashback';
import FindNearYield from './pages/mainpage/homepage/findnearyield/findnearyield';
import IWantoYield from './pages/mainpage/homepage/yield/wanttoyield/iwantto_yield';
import IWantoBeYielded from './pages/mainpage/homepage/yield/beyielded/iwantto_beyielded';
import WaitingBeYielded from './pages/mainpage/homepage/yield/beyielded/waiting_beyielded';
import WaitingYield from './pages/mainpage/homepage/yield/wanttoyield/waiting_yield';

import AllReview from './pages/mainpage/homepage/allreview';
import Certificate from './pages/mainpage/mypage/certificate';
import PregnantCert from './pages/mainpage/mypage/all_cettificate/pregnant_cert';
import OldestCert from './pages/mainpage/mypage/all_cettificate/oldest_cert';
import WoundedCert from './pages/mainpage/mypage/all_cettificate/wounded_cert';

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
                    <Route path="/signup" element={<SignUpPage />} />

                    <Route path="/iwanttobeyielded" element={<IWantoBeYielded />} />
                    <Route path="/iwanttoyield" element={<IWantoYield />} />
                    <Route path="/yieldhistory" element={<YieldHistory />} />
                    <Route path="/writereview" element={<WriteReview />} />

                    <Route path="/cashback" element={<Cashback />} />
                    <Route path="/findnearyield" element={<FindNearYield />} />
                    <Route path="/waitingbeyielded" element={<WaitingBeYielded />} />
                    <Route path="/waitingyield" element={<WaitingYield />} />
                    <Route path="/allreview" element={<AllReview />} />
                    <Route path="/certificate" element={<Certificate />} />
                    <Route path="/pregnantcert" element={<PregnantCert />} />
                    <Route path="/oldestcert" element={<OldestCert />} />
                    <Route path="/woundedcert" element={<WoundedCert />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRouter;
