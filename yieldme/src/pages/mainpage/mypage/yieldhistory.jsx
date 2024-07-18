import React from 'react';
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

const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  background-color: transparent;
  
`;

const HistoryItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #E0E0E0;
  padding: 1rem;
  border-radius: 4px;
`;

const HistoryDetail = styled.div`
  display: flex;
  gap: 1rem;
  flex-grow: 1;
`;

const PointText = styled.div`
  color: black;
  font-size: 0.6rem;
`;

const TotalPointText = styled(PointText)`
  font-weight: bold;
`;

const YieldHistory = () => {
    const historyData = [
        {
            date: '2024년 7월 9일',
            from: '내가(임산부)',
            to: '일반인에게',
            points: '+ 2점',
            totalPoints: '총 999점',
        },
        {
            date: '2024년 7월 8일',
            from: '내가(임산부)',
            to: '임산부에게',
            points: '+ 4점',
            totalPoints: '총 996점',
        },
        {
            date: '2024년 7월 8일',
            from: '내가(임산부)',
            to: '임산부에게',
            points: '+ 4점',
            totalPoints: '총 992점',
        },
        {
            date: '2023년 12월 9일',
            from: '내가(일반인)',
            to: '임산부에게',
            points: '+ 4점',
            totalPoints: '총 988점',
        },
        {
            date: '2023년 5월 18일',
            from: '내가(일반인)',
            to: '일반인에게',
            points: '+ 3점',
            totalPoints: '총 985점',
        }
    ];

    return (
        <ContainerCenter>
            <PageContainer>
                <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='1rem'>

                    <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                        <CustomFont color='black' font='1.5rem' fontWeight='bold'>내 양보 내역</CustomFont>
                    </CustomRow>

                    <HistoryContainer>
                        {historyData.map((history, index) => (
                            <HistoryItem key={index}>
                                <HistoryDetail>
                                    <PointText>{history.date}</PointText>
                                    <PointText>{history.from}</PointText>
                                    <PointText>{history.to}</PointText>
                                    <PointText>{history.points}</PointText>
                                </HistoryDetail>
                                <TotalPointText>{history.totalPoints}</TotalPointText>
                            </HistoryItem>
                        ))}
                    </HistoryContainer>
                </CustomColumn>
            </PageContainer>
        </ContainerCenter>
    );
};

export default YieldHistory;
