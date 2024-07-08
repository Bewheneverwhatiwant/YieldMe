import React from 'react';
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

const Button = styled.button`
  width: 80%;
  padding: 1rem;
  font-size: 1rem;
  background-color: #E0E0E0;
  color: black;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  margin-bottom: 1rem;
`;

const SignupStep1 = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <CustomFont color='black' font='1.2rem'>회원 유형을 선택해주세요.</CustomFont>
      <CustomFont color='black' font='1.2rem'>현재를 기준으로 선택해주세요.</CustomFont>
      <Button onClick={() => navigate('/certificate')}>임산부</Button>
      <Button onClick={() => navigate('/finalsignup')}>일반인</Button>
    </Container>
  );
};

export default SignupStep1;
