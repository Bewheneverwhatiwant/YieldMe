import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import CustomRow from '../Container/CustomRow';
import StyledImg from '../Container/StyledImg';
import CustomFont from '../Container/CustomFont';
import { AuthContext } from '../../pages/subpage/AuthContext';

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

const Modal = styled.div`
width: 250px;
height: 70px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  text-align: center;
  display: ${props => (props.show ? 'block' : 'none')};
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2000;
`;

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { auth, setAuthInfo } = useContext(AuthContext);
  const [modalMessage, setModalMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleBack = () => {
    if (isRootPath) {
      navigate('/');
    } else {
      navigate(-1);
    }
  };

  const handleLogout = () => {
    setAuthInfo('', '', ''); // 로그인 상태 초기화
    setModalMessage('로그아웃되었습니다.');
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
      navigate('/login'); // 로그아웃 후 로그인 페이지로 이동
    }, 2000);
  };

  const isRootPath = location.pathname === '/' || location.pathname === '/mypage' || location.pathname === '/favor';

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
          {auth.accessToken ? (
            <HeaderButton onClick={handleLogout}>
              <CustomFont color='#FFCD38' fontWeight='bold' font='1rem'>로그아웃</CustomFont>
            </HeaderButton>
          ) : (
            <HeaderButton onClick={() => navigate('/login')}>
              <CustomFont color='#FFCD38' fontWeight='bold' font='1rem'>로그인</CustomFont>
            </HeaderButton>
          )}
        </CustomRow>
      </CustomRow>

      {showModal && <Backdrop />}
      <Modal show={showModal}>
        <CustomFont color='black' font='1.2rem' fontWeight='bold'>{modalMessage}</CustomFont>
      </Modal>
    </HeaderContainer>
  );
}
