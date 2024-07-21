import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
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

const ReviewButton = styled.button`
  background-color: ${props => props.disabled ? '#D9D9D9' : '#FFD700'};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  font-size: 0.6rem;
  color: black;
`;

const YieldHistory = () => {
    const navigate = useNavigate();
    const historyData = [
        {
            date: '2024년 7월 9일',
            from: '내가(임산부)',
            to: '일반인에게',
            points: '+ 2점',
            totalPoints: '총 999점',
            isMe: true,
        },
        {
            date: '2024년 7월 8일',
            from: '내가(임산부)',
            to: '임산부에게',
            points: '+ 4점',
            totalPoints: '총 996점',
            isMe: true,
        },
        {
            date: '2024년 7월 8일',
            from: '내가(임산부)',
            to: '임산부에게',
            points: '+ 4점',
            totalPoints: '총 992점',
            isMe: true,
        },
        {
            date: '2023년 12월 9일',
            from: '내가(일반인)',
            to: '임산부에게',
            points: '+ 4점',
            totalPoints: '총 988점',
            isMe: true,
        },
        {
            date: '2023년 5월 18일',
            from: '내가(일반인)',
            to: '일반인에게',
            points: '+ 3점',
            totalPoints: '총 985점',
            isMe: true,
        },
        {
            date: '2024년 7월 14일',
            from: 'hihi0818',
            to: '내가(일반인)',
            points: '+ 3점',
            totalPoints: '총 982점',
            isMe: false,
            isAlready: false,
        },
        {
            date: '2024년 7월 13일',
            from: 'hungry4595',
            to: '내가(일반인)',
            points: '+ 3점',
            totalPoints: '총 979점',
            isMe: false,
            isAlready: true,
        },
        {
            date: '2024년 7월 11일',
            from: 'thirsty',
            to: '내가(일반인)',
            points: '+ 3점',
            totalPoints: '총 976점',
            isMe: false,
            isAlready: false,
        },
        {
            date: '2024년 7월 8일',
            from: 'gildong',
            to: '내가(일반인)',
            points: '+ 3점',
            totalPoints: '총 973점',
            isMe: false,
            isAlready: true,
        },
        {
            date: '2024년 7월 13일',
            from: 'hungry4595',
            to: '내가(일반인)',
            points: '+ 3점',
            totalPoints: '총 970점',
            isMe: false,
            isAlready: true,
        },
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleReviewClick = () => {
        navigate('/writereview');
    };

    return (
        <ContainerCenter>
            <PageContainer>
                <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='1rem'>
                    <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                        <CustomFont color='black' font='1.5rem' fontWeight='bold'>내 양보 내역</CustomFont>
                    </CustomRow>

                    <HistoryContainer>
                        {historyData.map((history, index) => (
                            <>
                                <HistoryItem key={index}>
                                    <HistoryDetail>
                                        <PointText>{history.date}</PointText>
                                        <PointText>{history.from}</PointText>
                                        <PointText>{history.to}</PointText>
                                        <PointText>{history.points}</PointText>
                                    </HistoryDetail>
                                    <TotalPointText>{history.totalPoints}</TotalPointText>
                                </HistoryItem>
                                {!history.isMe && (
                                    <CustomRow width='100%' alignItems='center' justifyContent='flex-end'>
                                        <ReviewButton
                                            onClick={handleReviewClick}
                                            disabled={history.isAlready}
                                        >
                                            {history.isAlready ? '작성했어요' : '후기 작성'}
                                        </ReviewButton>
                                    </CustomRow>
                                )}
                            </>
                        ))}
                    </HistoryContainer>
                </CustomColumn>
            </PageContainer>
        </ContainerCenter>
    );
};

export default YieldHistory;
