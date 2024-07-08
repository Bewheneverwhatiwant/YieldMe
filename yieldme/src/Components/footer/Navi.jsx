import React from 'react';
import styled from 'styled-components';

const NaviContainer = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 60px;
  background: #E0E0E0;
  color: black;
  position: fixed;
  bottom: 0;
`;

const NaviButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  font-size: 16px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const Navi = ({ setCurrentPage }) => {
  return (
    <NaviContainer>
      <NaviButton onClick={() => setCurrentPage('홈')}>홈</NaviButton>
      <NaviButton onClick={() => setCurrentPage('카메라')}>카메라</NaviButton>
      <NaviButton onClick={() => setCurrentPage('마이')}>마이</NaviButton>
    </NaviContainer>
  );
};

export default Navi;
