import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import StyledImg from '../Container/StyledImg';
import CustomColumn from '../Container/CustomColumn';
import CustomFont from '../Container/CustomFont';

const NaviContainer = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 60px;
  background: white;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000;
`;

const NaviButton = styled.button`
  background-color: transparent;
  color: black;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  width: 33%;
`;

const Navi = () => {
  const navigate = useNavigate();

  return (
    <NaviContainer>
      <NaviButton onClick={() => navigate('/')}>
        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.1rem'>
          <StyledImg src={'icon_home.png'} width='2rem' height='2rem' />
          <CustomFont color='black' font='0.7rem' fontWeight='bold'>홈</CustomFont>
        </CustomColumn>
      </NaviButton>
      <NaviButton onClick={() => navigate('/camera')}>
        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.1rem'>
          <StyledImg src={'icon_scanner.png'} width='2rem' height='2rem' />
          <CustomFont color='black' font='0.7rem' fontWeight='bold'>스캐너</CustomFont>
        </CustomColumn>
      </NaviButton>
      <NaviButton onClick={() => navigate('/mypage')}>
        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.1rem'>
          <StyledImg src={'icon_my.png'} width='1.7rem' height='1.7rem' />
          <CustomFont color='black' font='0.7rem' fontWeight='bold'>마이</CustomFont>
        </CustomColumn>
      </NaviButton>
    </NaviContainer>
  );
};

export default Navi;
