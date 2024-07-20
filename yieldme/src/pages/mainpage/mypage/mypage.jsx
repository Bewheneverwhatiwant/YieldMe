import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CustomFont from '../../../Components/Container/CustomFont';
import CustomColumn from '../../../Components/Container/CustomColumn';
import CustomRow from '../../../Components/Container/CustomRow';
import Changemode from './changemode';
import MyPay from './mypay';
import YieldCoupon from './yieldcoupon';

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
  justify-content: flex-start;
  padding-top: 8vh;
  padding-bottom: 5vh;
  gap: 3rem;
  position: relative;
  background-color: white;
  padding-bottom: 10vh;
`;

const PointsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FFF9C4;
  border: 1px solid #FFC107;
  padding: 10px;
  border-radius: 4px;
`;

const PointsButton2 = styled.button`
  background-color: #FFC107;
  color: ${props => (props.disabled ? 'black' : 'white')};
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  border-radius: 4px;
`;

const YellowButton = styled.button`
background-color:#FFF9C4;
border: 1px solid #FFC107;
border-radius: 4px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
padding: 20px;
gap: 0.6rem;
`;

const MyPage = () => {

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const yieldHistory = () => {
    navigate('/yieldhistory'); // 양보내역 보기
  }

  const shopping = () => {
    navigate('/shopping'); // 양보금액으로 쇼핑하기 
  }

  const changeAccount = () => {
    navigate('/changeaccount'); // 계좌 등록/변경하기
  }

  const changeCard = () => {
    navigate('/changecard'); // 결제수단 등록/변경하기
  }

  const [rewarded, setRewarded] = useState(false);

  const rewards = () => {
    alert('300p가 적립되었습니다!');
    setRewarded(true);
  };

  return (
    <ContainerCenter>
      <PageContainer>
        <Changemode />

        <CustomColumn width='80%' alignItems='flex-start' justifyContent='center' gap='0.5rem'>
          <CustomRow width='100%' alignItems='center' justifyContent='flex-start' gap='1rem'>
            <CustomFont color='black' font='1.3rem' fontWeight='bold'>보상받기</CustomFont>
          </CustomRow>

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

            <PointsButton2 onClick={rewards}>
              <CustomFont color='white' font='0.8rem' fontWeight='bold'>
                {rewarded ? '보상받음' : '보상받기'}
              </CustomFont>
            </PointsButton2>

          </PointsContainer>
        </CustomColumn>

        <CustomColumn width='80%' alignItems='center' justifyContent='center' gap='0.6rem'>
          <YellowButton onClick={yieldHistory}>
            <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
              <CustomFont color='black' font='0.9rem' fontWeight='bold'>
                나의 양보 내역 확인하기
              </CustomFont>
            </CustomRow>
            <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
              <CustomFont color='#FFC107' font='0.6rem' fontWeight='bold'>
                나의 모든 양보 내역과 점수 내역을 볼 수 있어요.
              </CustomFont>
            </CustomRow>
          </YellowButton>

          <YellowButton onClick={shopping}>
            <CustomRow width='100%' alignItems='center' justifyContent='flex-end'>
              <CustomFont color='black' font='0.9rem' fontWeight='bold'>
                내 양보 점수로 쇼핑하기
              </CustomFont>
            </CustomRow>
            <CustomRow width='100%' alignItems='center' justifyContent='flex-end'>
              <CustomFont color='#FFC107' font='0.6rem' fontWeight='bold'>
                대중교통에서 유용한 물품을 구매하실 수 있어요.
              </CustomFont>
            </CustomRow>
          </YellowButton>
        </CustomColumn>

        <YieldCoupon />
        <MyPay />

      </PageContainer>
    </ContainerCenter>
  );
};

export default MyPage;
