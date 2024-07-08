import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import App from './pages/mainpage/App';
import ScrollToTop from './Components/ScrollToTop';

// 라우터 파일

const AppRouter = () => {

    return (
        <Router>
            <Layout>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<App />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default AppRouter;