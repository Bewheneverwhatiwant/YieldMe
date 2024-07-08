import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CustomFont from '../../../Components/Container/CustomFont';

const ContainerCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;

const PageContainer = styled(ContainerCenter)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8vh 0 5vh;
  gap: 1rem;
  background-color: white;
`;

const Section = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;

const InfoText = styled.p`
  font-size: 1rem;
  color: black;
`;

const StatusContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #E0E0E0;
  padding: 0.5rem;
  border-radius: 4px;
`;

const StatusButton = styled.button`
  background-color: ${props => (props.active ? '#FF00FF' : '#E0E0E0')};
  color: ${props => (props.active ? 'white' : 'black')};
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 4px;
`;

const PointsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #E0E0E0;
  padding: 0.5rem;
  border-radius: 4px;
`;

const PointsText = styled.p`
  font-size: 1rem;
  color: black;
`;

const PointsButton = styled.button`
  background-color: #E0E0E0;
  color: black;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 4px;
`;

const MyPage = () => {
  const [status, setStatus] = useState('임산부');
  const navigate = useNavigate();

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    if (newStatus === '임산부') {
      navigate('/certificate');
    }
  };

  return (
    <ContainerCenter>
      <PageContainer>
        <Section>
          <CustomFont color='black' font='1.5rem' fontWeight='bold'>내 정보</CustomFont>
          <CustomFont font='1rem' color='black'>이름: 000</CustomFont>
          <CustomFont font='1rem' color='black'>아이디: lny021102</CustomFont>
        </Section>
        <Section>
          <CustomFont color='black' font='1.5rem' fontWeight='bold'>내 상태</CustomFont>
          <CustomFont font='1rem' color='black'>임산부의 경우, 10개월 뒤 자동으로 일반인 모드로 전환됩니다.</CustomFont>
          <StatusContainer>
            <StatusButton active={status === '임산부'} onClick={() => handleStatusChange('임산부')}>임산부</StatusButton>
            <StatusButton active={status === '일반인'} onClick={() => handleStatusChange('일반인')}>일반인</StatusButton>
          </StatusContainer>
        </Section>
        <Section>
          <CustomFont color='black' font='1.5rem' fontWeight='bold'>내 자리양보 점수</CustomFont>
          <PointsContainer>
            <PointsText>지금까지 00점</PointsText>
            <PointsButton>내역 확인</PointsButton>
          </PointsContainer>
        </Section>
        <Section>
          <CustomFont color='black' font='1.5rem' fontWeight='bold'>보상받기</CustomFont>
          <CustomFont font='1rem' color='black'>뱃지 부여, 포인트 구매, '자리 양보받아요/자리 양보할게요 조회 등...</CustomFont>
        </Section>
      </PageContainer>
    </ContainerCenter>
  );
};

export default MyPage;
