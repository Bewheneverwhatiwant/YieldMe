import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CustomFont from '../../Container/CustomFont';
import CustomColumn from '../../Container/CustomColumn';
import CustomRow from '../../Container/CustomRow';
import StyledImg from '../../Container/StyledImg';

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
justofy-content: center;
`;

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const isFormValid = username !== '' && password !== '';

  const handleLogin = (e) => {
    alert('로그인되었습니다!');
    navigate('/');
  };

  return (
    <ContainerCenter>
      <PageContainer>
        <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='5rem'>

          <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.5rem'>
            <StyledImg src={'logo.png'} width='130px' height='130px' />
            <CustomFont color='#FFD15B' font='1rem' fontWeight='bold'>Yello : Yield 路</CustomFont>
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
    </ContainerCenter>
  );
};

export default LoginPage;
