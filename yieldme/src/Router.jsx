import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import ScrollToTop from './Components/ScrollToTop';

const AppRouter = () => {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="*" element={<Layout />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
