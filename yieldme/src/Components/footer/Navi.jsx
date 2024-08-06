import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import StyledImg from '../Container/StyledImg';
import CustomColumn from '../Container/CustomColumn';
import CustomFont from '../Container/CustomFont';
import CustomRow from '../Container/CustomRow';
import { AuthContext } from '../../pages/subpage/AuthContext';

const NaviContainer = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 20vh;
  background-color: #FEE187;
  position: relative;
  bottom: 0;
  left: 0;
  border-top: 2px solid #FFCD38;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  z-index: 1000; /* 추가 */
  pointer-events: auto; /* 추가 */
  margin: 2vh;
`;

const NaviButton = styled.button`
  background-color: transparent;
  color: black;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  width: 33%;
`;

const Modal = styled.div`
width: 60%;
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

const Button = styled.button`
  background-color: ${props => (props.primary ? '#FEE187' : '#E0E0E0')};
  font-size: 12px;
  text-align: center;
  justify-content: center;
  border-radius: 30px;
  width: 90px;
  padding: 0.3rem;
  cursor: pointer;
  border: none;
  margin: 5px;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const Navi = () => {
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);

  const handleMyPageClick = () => {
    if (auth.accessToken) {
      navigate('/mypage');
    } else {
      setShowModal(true);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleLogin = () => {
    setShowModal(false);
    navigate('/login');
  };

  const handleCancel = () => {
    setShowModal(false);
    navigate('/');
  };

  return (
    <NaviContainer>
      <NaviButton onClick={() => navigate('/')}>
        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.1rem'>
          <StyledImg src={'icon_home.png'} width='2rem' height='2rem' />
          <CustomFont color='black' font='0.7rem' fontWeight='bold'>홈</CustomFont>
        </CustomColumn>
      </NaviButton>
      <NaviButton onClick={() => navigate('/favor')}>
        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.1rem'>
          <StyledImg src={'icon_joystick.png'} width='2rem' height='2rem' />
          <CustomFont color='black' font='0.7rem' fontWeight='bold'>인기</CustomFont>
        </CustomColumn>
      </NaviButton>
      <NaviButton onClick={handleMyPageClick}>
        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.1rem'>
          <StyledImg src={'icon_my.png'} width='1.7rem' height='1.7rem' />
          <CustomFont color='black' font='0.7rem' fontWeight='bold'>마이</CustomFont>
        </CustomColumn>
      </NaviButton>

      {showModal && <Backdrop />}
      <Modal show={showModal}>
        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
          <CustomFont color='black' font='1rem' fontWeight='bold'>로그인 후 이용하실 수 있는 기능입니다.</CustomFont>
          <CustomRow width='100%' alignItems='center' justifyContent='space-between'>
            <Button primary onClick={handleLogin}>확인</Button>
            <Button onClick={handleCancel}>취소</Button>
          </CustomRow>
        </CustomColumn>
      </Modal>
    </NaviContainer>
  );
};

export default Navi;
