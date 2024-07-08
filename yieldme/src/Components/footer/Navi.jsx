import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const NaviContainer = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 60px;
  background: #e0e0e0;
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
`;

const Navi = () => {
  const navigate = useNavigate();

  return (
    <NaviContainer>
      <NaviButton onClick={() => navigate('/')}>홈</NaviButton>
      <NaviButton onClick={() => navigate('/camera')}>카메라</NaviButton>
      <NaviButton onClick={() => navigate('/mypage')}>마이</NaviButton>
    </NaviContainer>
  );
};

export default Navi;
