import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SplashContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #ffffff; /* 스플래시 화면 배경색 */
`;

const Splash = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/');
        }, 3000); // 3초 후에 '/'로 이동

        return () => clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머를 정리
    }, [navigate]);

    return (
        <SplashContainer>
            <h1>Loading...</h1> {/* 스플래시 화면에 표시될 내용 */}
        </SplashContainer>
    );
};

export default Splash;
