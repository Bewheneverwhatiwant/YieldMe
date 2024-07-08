import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CustomFont from '../../Components/Container/CustomFont';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: white;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 80%;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid black;
  border-radius: 30px;
  font-size: 1rem;
`;

const Button = styled.button`
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  background-color: ${props => (props.disabled ? '#E0E0E0' : '#979797')};
  color: black;
  border: none;
  border-radius: 30px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const SignupLink = styled.p`
  font-size: 0.9rem;
  color: black;
  & > span {
    font-weight: bold;
    cursor: pointer;
  }
`;

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const isFormValid = username !== '' && password !== '';

  const handleLogin = (e) => {
    e.preventDefault();
    if (isFormValid) {
      alert('로그인되었습니다!');
      navigate('/');
    }
  };

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <CustomFont color='black' font='1.5rem'>로그인</CustomFont>
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
        <SignupLink>
          아직 계정이 없다면 <span onClick={() => navigate('/signup')}>회원가입</span>
        </SignupLink>
        <Button type="submit" disabled={!isFormValid}>
          로그인 하기
        </Button>
      </Form>
    </Container>
  );
};

export default LoginPage;
