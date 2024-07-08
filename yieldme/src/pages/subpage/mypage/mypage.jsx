import React, { useState } from 'react';
import styled from 'styled-components';

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

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
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

    return (
        <ContainerCenter>
            <PageContainer>
                <Section>
                    <Title>내 정보</Title>
                    <InfoText>이름: 000</InfoText>
                    <InfoText>아이디: lny021102</InfoText>
                </Section>
                <Section>
                    <Title>내 상태</Title>
                    <InfoText>임산부의 경우, 10개월 뒤 자동으로 일반인으로 변경됩니다.</InfoText>
                    <StatusContainer>
                        <StatusButton active={status === '임산부'} onClick={() => setStatus('임산부')}>임산부</StatusButton>
                        <StatusButton active={status === '일반인'} onClick={() => setStatus('일반인')}>일반인</StatusButton>
                    </StatusContainer>
                </Section>
                <Section>
                    <Title>내 자리양보 점수</Title>
                    <PointsContainer>
                        <PointsText>지금까지 00점</PointsText>
                        <PointsButton>내역 확인</PointsButton>
                    </PointsContainer>
                </Section>
                <Section>
                    <Title>보상받기</Title>
                    <InfoText>뱃지 부여, 점수로 뭔가를 구매하기 등...</InfoText>
                </Section>
            </PageContainer>
        </ContainerCenter>
    );
};

export default MyPage;
