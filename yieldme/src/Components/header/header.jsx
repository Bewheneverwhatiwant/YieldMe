import React from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import CustomRow from '../Container/CustomRow';
import StyledImg from '../Container/StyledImg';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 6vh;
  z-index: 99;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: white;
`;

const HeaderButton = styled.button`
  background-color: transparent;
  font-size: 12px;
  color: #979797;
  text-align: center;
  justify-content: center;
  border: 2px solid #D9D9D9;
  border-radius: 30px;
  width: 90px;
  padding: 10px;
  cursor: pointer;
`;

const BackButton = styled.button`
  background-color: transparent;
  font-size: 24px;
  color: #979797;
  text-align: center;
  justify-content: center;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    navigate(-1);
  };

  const isRootPath = location.pathname === '/' || location.pathname === '/camera' || location.pathname === '/mypage';

  return (
    <HeaderContainer>
      <CustomRow width='97%' justifyContent='space-between'>
        {!isRootPath && (
          <BackButton onClick={handleBack}>
            {'<'}
          </BackButton>
        )}
        <CustomRow width='100%' justifyContent='flex-end'>
          <HeaderButton onClick={() => navigate('/login')}>
            로그인
          </HeaderButton>
        </CustomRow>
      </CustomRow>
    </HeaderContainer>
  );
}
