import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import CustomFont from '../../../Components/Container/CustomFont';
import CustomRow from '../../../Components/Container/CustomRow';
import CustomColumn from '../../../Components/Container/CustomColumn';

const ContainerCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
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
  gap: 6rem;
  position: relative;
  background-color: white;
  padding-bottom: 10vh;
`;

const Button = styled.button`
  width: 100%;
  background-color: #E0E0E0;
  color: black;
  border: none;
  padding: 1rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 8px;
`;

const RankingContainer = styled.div`
  width: 90%;
  background-color: #E0E0E0;
  padding: 0.3rem;
  border-radius: 8px;
`;

const YieldContainer = styled.div`
  width: 90%;
  background-color: #FEC7FF;
  padding: 1rem;
  border-radius: 8px;
`;

const Yield2Container = styled.div`
  width: 90%;
  background-color: #A4CEFF;
  padding: 1rem;
  border-radius: 8px;
`;

const RankItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  font-size: 1rem;
  color: ${props => (props.rank <= 3 ? 'red' : 'black')};
`;

const HomePage = () => {

  const navigate = useNavigate();

  const rankings = [
    { rank: 1, name: '이나영', id: 'lny021102', points: 999 },
    { rank: 2, name: '000', id: 'hihi0818', points: 888 },
    { rank: 3, name: '000', id: 'aaaa', points: 777 },
    { rank: 4, name: '000', id: 'bbbb', points: 666 },
    { rank: 5, name: '000', id: 'cccc', points: 555 },
  ];

  return (
    <ContainerCenter>
      <PageContainer>
        <CustomColumn width='100%' alignItems='center' justifyContent='center'>
          <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.3rem'>
            <CustomFont color='black' font='1.2rem' fontWeight='bold'>지금 자리를 양보해드리는 저는</CustomFont>
            <CustomRow width='100%' alignItems='center' justifyContent='center' gap='0.3rem'>
              <CustomFont color='#FF00FF' font='1.5rem' fontWeight='bold'>임산부</CustomFont>
              <CustomFont color='black' font='1.2rem' fontWeight='bold'>입니다.</CustomFont>
            </CustomRow>
          </CustomColumn>

          <CustomFont color='black' font='1rem'>편안한 하루 되세요 :)</CustomFont>

          <QRCodeCanvas value="lny021102" size={150} />

          <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.3rem'>
            <CustomRow width='100%' alignItems='center' justifyContent='center' gap='0.3rem'>
              <CustomFont color='#FF00FF' font='1rem' fontWeight='bold'>
                lny021102
              </CustomFont>
              <CustomFont color='black' font='1rem'>
                님,
              </CustomFont>
            </CustomRow>
            <CustomFont color='black' font='1rem'>
              자리를 양보해주셔서 감사합니다.
            </CustomFont>
            <CustomFont color='black' font='1rem'>
              자리를 양보받을 분께 QR코드를 보여주세요.
            </CustomFont>
          </CustomColumn>

          <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>

            <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='0.5rem'>

              <CustomRow width='100%' alignItems='center' justifyContent='center' gap='0.2rem'>
                <CustomRow width='50%' alignItems='center' justifyContent='center'>
                  <Button onClick={() => navigate('/iwanttoyield')}>현재 양보된 자리</Button>
                </CustomRow>

                <CustomRow width='50%' alignItems='center' justifyContent='center'>
                  <Button onClick={() => navigate('/writeyield')}>자리 양보할래요</Button>
                </CustomRow>
              </CustomRow>
            </CustomColumn>
          </CustomColumn>
        </CustomColumn>

        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='2rem'>
          <CustomColumn width='90%' alignItems='flex-start' justifyContent='center' gap='0.2rem'>
            <CustomFont color='black' font='1.2rem' fontWeight='bold'>소중한 자리양보,</CustomFont>
            <CustomFont color='black' font='1.2rem' fontWeight='bold'>진심으로 감사드립니다.</CustomFont>
          </CustomColumn>

          <RankingContainer>
            {rankings.map(r => (
              <RankItem key={r.rank} rank={r.rank}>
                <CustomRow width='100%' alignItems='center' justifyContent='space-between'>
                  <CustomRow width='25%' alignItems='center' justifyContent='center'>
                    <CustomFont color='black' font='1.2rem' fontWeight='bold'>{r.rank}위</CustomFont>
                  </CustomRow>
                  <CustomRow width='25%' alignItems='center' justifyContent='center'>
                    <CustomFont color='black' font='1rem'>{r.name}님</CustomFont>
                  </CustomRow>
                  <CustomRow width='25%' alignItems='center' justifyContent='center'>
                    <CustomFont color='black' font='1rem'>{r.id}</CustomFont>
                  </CustomRow>
                  <CustomRow width='25%' alignItems='center' justifyContent='center'>
                    <CustomFont color='black' font='1rem'>총 {r.points}점</CustomFont>
                  </CustomRow>
                </CustomRow>
              </RankItem>
            ))}
          </RankingContainer>

          <CustomColumn width='90%' alignItems='flex-start' justifyContent='center' gap='0.2rem'>
            <CustomFont color='black' font='1.2rem' fontWeight='bold'>오늘 하루,</CustomFont>
            <CustomFont color='black' font='1.2rem' fontWeight='bold'>임산부와 소중한 생명이 양보받은 횟수</CustomFont>
          </CustomColumn>

          <YieldContainer>
            <CustomRow width='100%' alignItems='center' justifyContent='center' gap='0.3rem'>
              <CustomFont color='#8E428F' font='2rem' fontWeight='bold'>34,568</CustomFont>
              <CustomFont color='#8E428F' font='1.5rem'>번</CustomFont>
            </CustomRow>
          </YieldContainer>

          <CustomColumn width='90%' alignItems='flex-start' justifyContent='center' gap='0.2rem'>
            <CustomFont color='black' font='1.2rem' fontWeight='bold'>오늘 하루,</CustomFont>
            <CustomFont color='black' font='1.2rem' fontWeight='bold'>자리를 기꺼이 양보한 사람들의 수</CustomFont>
          </CustomColumn>

          <Yield2Container>
            <CustomRow width='100%' alignItems='center' justifyContent='center' gap='0.3rem'>
              <CustomFont color='#224A79' font='2rem' fontWeight='bold'>647</CustomFont>
              <CustomFont color='#224A79' font='1.5rem'>명</CustomFont>
            </CustomRow>
          </Yield2Container>
        </CustomColumn>

      </PageContainer>
    </ContainerCenter>
  );
};

export default HomePage;
