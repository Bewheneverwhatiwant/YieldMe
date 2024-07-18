import React from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import CustomRow from '../Container/CustomRow';
import StyledImg from '../Container/StyledImg';
import CustomFont from '../Container/CustomFont';

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
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const HeaderButton = styled.button`
  background-color: #FEE187;
  font-size: 12px;
  text-align: center;
  justify-content: center;
  border-radius: 30px;
  width: 90px;
  padding: 0.3rem;
  cursor: pointer;
  border: none;
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
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    if (isRootPath) {
      navigate('/');
    } else {
      navigate(-1);
    }
  };

  const isRootPath = location.pathname === '/' || location.pathname === '/mypage';

  return (
    <HeaderContainer>
      <CustomRow width='97%' justifyContent='space-between'>
        {!isRootPath && (
          <BackButton onClick={handleBack}>
            <StyledImg src={'icon_back.png'} width='30px' />
          </BackButton>
        )}

        {isRootPath && (
          <BackButton onClick={handleBack}>
            <StyledImg src={'logo.png'} width='45px' height='45px' />
          </BackButton>
        )}
        <CustomRow width='100%' justifyContent='flex-end'>
          <HeaderButton onClick={() => navigate('/login')}>
            <CustomFont color='#FFCD38' fontWeight='bold' font='1rem'>로그인</CustomFont>
          </HeaderButton>
        </CustomRow>
      </CustomRow>
    </HeaderContainer>
  );
}
