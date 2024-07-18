import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CustomFont from '../../../Components/Container/CustomFont';
import CustomColumn from '../../../Components/Container/CustomColumn';
import CustomRow from '../../../Components/Container/CustomRow';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: white;
  gap: 4rem;
`;

const Button = styled.button`
  width: 80%;
  padding: 1rem;
  font-size: 1rem;
  background-color: #FEC7FF;
  color: black;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  margin-bottom: 1rem;
`;

const Button2 = styled.button`
  width: 80%;
  padding: 1rem;
  font-size: 1rem;
  background-color: #A4CEFF;
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
      <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.9rem'>
        <CustomFont color='black' font='1.2rem' fontWeight='bold'>회원 유형을 선택해주세요.</CustomFont>
        <CustomFont color='black' font='0.9rem'>현재를 기준으로 선택해주세요.</CustomFont>
      </CustomColumn>

      <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.5rem'>
        <Button onClick={() => navigate('/certificate')}>
          <CustomFont color='white' fontWeight='bold' font='1.2rem'>임산부</CustomFont>
        </Button>
        <Button2 onClick={() => navigate('/finalsignup')}>
          <CustomFont color='white' fontWeight='bold' font='1.2rem'>일반인</CustomFont>
        </Button2>
      </CustomColumn>
    </Container>
  );
};

export default SignupStep1;
