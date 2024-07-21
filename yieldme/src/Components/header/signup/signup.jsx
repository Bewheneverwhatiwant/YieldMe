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
  cursor: pointer;
`;

const Button2 = styled.button`
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  background-color: #FEE187;
  color: black;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
`;

const GoSignup = styled.button`
background-color: transparent;
border: none;
display: flex;
align-items: center;
justofy-content: center;
`;

const SignUpPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const isFormValid = username !== '' && password !== '' && name !== '' && password2 !== '';

  const handleSignup = (e) => {
    alert('회원가입이 완료되었습니다!');
    navigate('/');
  };

  return (
    <ContainerCenter>
      <PageContainer>
        <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='5rem'>

          <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.5rem'>
            <StyledImg src={'logo.png'} width='130px' height='130px' />
            <CustomFont color='#FFD15B' font='1rem' fontWeight='bold'>Yello : Yield 路</CustomFont>
            <CustomFont color='#FFD15B' font='1.5rem' fontWeight='bold'>SignUp</CustomFont>
          </CustomColumn>

          <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='3rem'>
            <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
              <Input
                type="text"
                placeholder="성함"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <CustomRow width='100%' alignItems='center' justifyContent='center' gap='0.3rem'>
                <CustomRow width='80%' alignItems='center' justifyContent='center'>
                  <Input
                    type="text"
                    placeholder="아이디"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </CustomRow>
                <CustomRow width='20%' alignItems='center' justifyContent='center'>
                  <Button2>
                    <CustomFont color='white' font='0.8rem' fontWeight='bold'>검사</CustomFont>
                  </Button2>
                </CustomRow>
              </CustomRow>
              <Input
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Input
                type="password2"
                placeholder="비밀번호 재입력"
                value={password2}
                onChange={(e) => setPassword(e.target.value)}
              />
            </CustomColumn>

            <Button type="submit" disabled={!isFormValid} onClick={handleSignup}>
              <CustomFont color='white' font='1.1rem' fontWeight='bold'>회원가입 하기</CustomFont>
            </Button>
          </CustomColumn>

        </CustomColumn>
      </PageContainer>
    </ContainerCenter>
  );
};

export default SignUpPage;
