import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import StyledImg from '../../Components/Container/StyledImg';
import CustomRow from '../../Components/Container/CustomRow';
import CustomFont from '../../Components/Container/CustomFont';
import CustomColumn from '../../Components/Container/CustomColumn';

const SplashContainer = styled.div`
width: 100%;
gap: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  min-height: 100vh;
  background-color: #ffffff;
  overflow: hidden;
`;

const Splash = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/');
        }, 3000); // 나중에 3초로 바꾸기

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <SplashContainer>

            <StyledImg src={'splash_top2.png'} width='100%' height='25vh' />

            <CustomColumn width='100%' alignItems='center' justifyContent='center'>
                <CustomColumn width='70%' alignItems='flex-start' justifyContent='center' gap='0.5rem'>
                    <CustomFont color='black' font='1rem' fontWeight='bold'>아플 때,</CustomFont>
                    <CustomFont color='black' font='1rem' fontWeight='bold'>힘들 때,</CustomFont>
                    <CustomFont color='black' font='1rem' fontWeight='bold'>그리고 혼자가 아닐 때</CustomFont>
                </CustomColumn>
                <StyledImg src={'splashLogo.png'} width='95%' />
                <CustomRow width='70%' alignItems='center' justifyContent='flex-end'>
                    <CustomFont color='black' fontWeight='bold' font='1rem'>언제든지 하세요,</CustomFont>
                </CustomRow>
                <CustomRow width='70%' alignItems='center' justifyContent='flex-end'>
                    <CustomFont color='#FFCD38' fontWeight='bold' font='1.7rem'>YELLO</CustomFont>
                </CustomRow>
            </CustomColumn>

            <StyledImg src={'splash_bottom.png'} width='100%' height='20vh' />

        </SplashContainer>
    );
};

export default Splash;
