import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CustomFont from '../../../Components/Container/CustomFont';
import CustomColumn from '../../../Components/Container/CustomColumn';
import CustomRow from '../../../Components/Container/CustomRow';

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
  gap: 3rem;
  background-color: white;
  padding-bottom: 10vh;
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

const PointsButton = styled.button`
  background-color: #777777;
  color: black;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 4px;
`;

const Divider = styled.div`
  width: 100%;
  height: 0.01rem;
  background-color: #777777;
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
        <CustomColumn width='90%' alignItems='flex-start' justifyContent='center' gap='0.5rem'>
          <CustomFont color='black' font='1.5rem' fontWeight='bold'>내 정보</CustomFont>
          <StatusContainer>
            <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1.2rem'>
              <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.2rem'>
                <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                  <CustomFont font='0.9rem' color='black' fontWeight='bold'>성명</CustomFont>
                  <CustomFont font='0.9rem' color='black'>이나영</CustomFont>
                </CustomRow>
                <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                  <CustomFont font='0.9rem' color='black' fontWeight='bold'>아이디</CustomFont>
                  <CustomFont font='0.9rem' color='black'>lny021102</CustomFont>
                </CustomRow>
              </CustomColumn>

              <Divider />

              <CustomRow width='100%' alignItems='center' justifyContent='center' gap='0.2rem'>
                <CustomFont font='0.9rem' color='black' fontWeight='bold'>이나영</CustomFont>
                <CustomFont font='0.9rem' color='black'>님은 현재</CustomFont>
                <CustomFont font='0.9rem' color='#FF00FF' fontWeight='bold'>임산부</CustomFont>
                <CustomFont font='0.9rem' color='black'>모드로 이용 중이십니다.</CustomFont>
              </CustomRow>
            </CustomColumn>
          </StatusContainer>
        </CustomColumn>

        <CustomColumn width='90%' alignItems='flex-start' justifyContent='center' gap='0.5rem'>
          <CustomFont color='black' font='1.5rem' fontWeight='bold'>상태 변경</CustomFont>

          <CustomRow width='100%' alignItems='flex-start' justifyContent='center' gap='0.2rem'>
            <CustomFont font='0.7rem' color='red' fontWeight='bold'>*</CustomFont>
            <CustomColumn width='100%' alignItems='flex-start' justifyContent='center' gap='0.2rem'>
              <CustomFont font='0.7rem' color='black'>임산부의 경우, 10개월 뒤 자동으로 일반인으로 전환됩니다.</CustomFont>
              <CustomFont font='0.7rem' color='black'>경산모님은 '임산부' 버튼을 눌러 재인증 후 이용하실 수 있습니다.</CustomFont>
            </CustomColumn>
          </CustomRow>

          <StatusContainer>
            <StatusButton active={status === '임산부'} onClick={() => handleStatusChange('임산부')}>임산부</StatusButton>
            <StatusButton active={status === '일반인'} onClick={() => handleStatusChange('일반인')}>일반인</StatusButton>
          </StatusContainer>
        </CustomColumn>

        <CustomColumn width='90%' alignItems='flex-start' justifyContent='center' gap='0.5rem'>
          <CustomFont color='black' font='1.5rem' fontWeight='bold'>내 양보 점수</CustomFont>
          <PointsContainer>
            <CustomRow wisth='20%' alignItems='center' justifyContent='space-between'>
              <CustomFont font='1rem' color='black'>지금까지</CustomFont>
              <CustomFont font='1rem' color='black' fontWeight='bold'>00점</CustomFont>
            </CustomRow>

            <PointsButton>
              <CustomFont color='white' font='0.9rem' fontWeight='bold'>내역확인</CustomFont>
            </PointsButton>
          </PointsContainer>
        </CustomColumn>

        <CustomColumn width='90%' alignItems='flex-start' justifyContent='center' gap='0.5rem'>
          <CustomFont color='black' font='1.5rem' fontWeight='bold'>내 포인트</CustomFont>
          <PointsContainer>
            <CustomRow wisth='20%' alignItems='center' justifyContent='space-between'>
              <CustomFont font='1rem' color='black'>잔여</CustomFont>
              <CustomFont font='1rem' color='black' fontWeight='bold'>00원</CustomFont>
            </CustomRow>

            <PointsButton>
              <CustomFont color='white' font='0.9rem' fontWeight='bold'>충전하기</CustomFont>
            </PointsButton>
          </PointsContainer>
        </CustomColumn>

        <CustomColumn width='90%' alignItems='flex-start' justifyContent='center' gap='0.5rem'>
          <CustomFont color='black' font='1.5rem' fontWeight='bold'>결제수단</CustomFont>
          <PointsContainer>
            <CustomRow wisth='20%' alignItems='center' justifyContent='space-between'>
              <CustomFont color='black' fomt='0.9rem'>아직 등록된 결제수단이 없어요.</CustomFont>
            </CustomRow>

            <PointsButton>
              <CustomFont color='white' font='0.9rem' fontWeight='bold'>등록하기</CustomFont>
            </PointsButton>
          </PointsContainer>
        </CustomColumn>

        <CustomColumn width='90%' alignItems='flex-start' justifyContent='center' gap='0.5rem'>
          <CustomFont color='black' font='1.5rem' fontWeight='bold'>보상받기</CustomFont>
          <PointsContainer>
            <CustomRow width='70%' alignItems='center' justifyContent='center'>
              <CustomRow width='30%' alignItems='center' justifyContent='space-between'>
                <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.2rem'>
                  <CustomFont color='black' fomt='0.9rem' fontWeight='bold'>2024년</CustomFont>
                  <CustomFont color='black' fomt='0.9rem' fontWeight='bold'>07월07일</CustomFont>
                </CustomColumn>
              </CustomRow>

              <CustomRow width='70%' alignItems='center' justifyContent='center'>
                <CustomFont color='black' fomt='0.9rem'>임산부에게 자리양보 횟수 10회 달성</CustomFont>
              </CustomRow>
            </CustomRow>

            <PointsButton>
              <CustomFont color='white' font='0.9rem' fontWeight='bold'>보상받기</CustomFont>
            </PointsButton>

          </PointsContainer>
        </CustomColumn>

      </PageContainer>
    </ContainerCenter>
  );
};

export default MyPage;
