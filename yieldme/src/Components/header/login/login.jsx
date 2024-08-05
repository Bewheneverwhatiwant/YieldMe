import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CustomFont from '../../Container/CustomFont';
import CustomColumn from '../../Container/CustomColumn';
import CustomRow from '../../Container/CustomRow';
import StyledImg from '../../Container/StyledImg';
import { AuthContext } from '../../../pages/subpage/AuthContext';

const ContainerCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: white;
`;

const PageContainer = styled(ContainerCenter)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8vh 0 5vh;
  gap: 2rem;
  background-color: white;
  padding-bottom: 10vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  width: 80%;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid #777777;
  border-radius: 1rem;
  font-size: 1rem;
`;

const Button = styled.button`
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  background-color: ${props => (props.disabled ? '#E0E0E0' : '#FEE187')};
  color: black;
  border: none;
  border-radius: 1rem;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const GoSignup = styled.button`
  background-color: transparent;
  border: none;
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
  z-index: 999;
`;

const LoginPage = () => {
  const navigate = useNavigate();
  const { setAuthInfo } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [point, setPoint] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const isFormValid = username !== '' && password !== '';

  const handleLogin = async (e) => {
    e.preventDefault();

    const data = {
      login_id: username,
      password: password,
      point: point,
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_SERVER}/login/`, data);
      console.log(response.data);

      if (response && response.status === 200) {
        const { login_id, username, point } = response.data.user;
        const accessToken = response.data.token.access;

        setAuthInfo(login_id, username, accessToken, point);

        setModalMessage('로그인되었습니다!');
        console.log(accessToken);
        setShowModal(true);
        setTimeout(() => {
          setShowModal(false);
          navigate('/');
        }, 2000);
      } else {
        setModalMessage('로그인에 실패하였습니다.');
        setShowModal(true);
        setTimeout(() => {
          setShowModal(false);
        }, 2000);
      }
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
      setModalMessage('로그인에 실패하였습니다.');
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
      }, 2000);
    }
  };

  return (
    <ContainerCenter>
      <PageContainer>
        <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='5rem'>
          <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.5rem'>
            <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.8rem'>
              <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='0.2rem'>
                <CustomFont color='#FFD15B' font='1.6rem' fontWeight='bold'>Yello, Yield 路!</CustomFont>
                <CustomFont color='#FFD15B' font='0.8rem' fontWeight='bold'>여러분의 Yello로 세상이 따뜻해져요.</CustomFont>
              </CustomColumn>
              <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='0.2rem'>
                <CustomRow width='100%' alignItems='center' justifyContent='space-around' >
                  <StyledImg src={'icon_wound.png'} width='50px' height='50px' />
                  <StyledImg src={'icon_world.png'} width='100px' height='100px' />
                  <StyledImg src={'icon_oldest.png'} width='50px' height='50px' />
                </CustomRow>
                <CustomRow width='100%' alignItems='center' justifyContent='space-around' >
                  <StyledImg src={'icon_normal.png'} width='50px' height='50px' />
                  <StyledImg src={'icon_preg.png'} width='50px' height='50px' />
                </CustomRow>
              </CustomColumn>
            </CustomColumn>
            <CustomFont color='#FFD15B' font='1.5rem' fontWeight='bold'>LOG IN</CustomFont>
          </CustomColumn>

          <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='3rem'>
            <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
              <Input
                type="text"
                placeholder="아이디"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <CustomRow width='100%' alignItems='center' justifyContent='center' gap='0.5rem'>
                <CustomFont color='#FFCD38' font='1rem' fontWeight='bold'>아직 계정이 없다면</CustomFont>
                <GoSignup onClick={() => navigate('/signup')}>
                  <CustomFont color='black' font='1rem' fontWeight='bold'>회원가입하기</CustomFont>
                </GoSignup>
              </CustomRow>
            </CustomColumn>

            <Button type="submit" disabled={!isFormValid} onClick={handleLogin}>
              <CustomFont color='white' font='1.1rem' fontWeight='bold'>로그인 하기</CustomFont>
            </Button>
          </CustomColumn>
        </CustomColumn>
      </PageContainer>

      {showModal && <Backdrop />}
      <Modal show={showModal}>
        <CustomFont color='black' font='1.2rem' fontWeight='bold'>{modalMessage}</CustomFont>
      </Modal>
    </ContainerCenter>
  );
};

export default LoginPage;
