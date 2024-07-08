import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CustomFont from '../../../Components/Container/CustomFont';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: white;
`;

const Input = styled.input`
  width: 80%;
  padding: 0.5rem;
  border: 1px solid black;
  border-radius: 30px;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  width: 80%;
  padding: 1rem;
  font-size: 1rem;
  background-color: #E0E0E0;
  color: black;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  margin-top: 1rem;
`;

const FinalSignup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    alert('완료되었습니다!');
    navigate('/');
  };

  return (
    <Container>
      <CustomFont font='1.5rem' color='black'>회원가입</CustomFont>
      <Input
        type="text"
        placeholder="성함을 입력해주세요."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="text"
        placeholder="아이디를 설정해주세요."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type="password"
        placeholder="비밀번호를 설정해주세요."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        type="password"
        placeholder="한번 더 입력"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Button onClick={handleSignup}>회원가입 완료</Button>
    </Container>
  );
};

export default FinalSignup;
