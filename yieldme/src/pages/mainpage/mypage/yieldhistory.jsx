import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CustomFont from '../../../Components/Container/CustomFont';
import CustomColumn from '../../../Components/Container/CustomColumn';
import CustomRow from '../../../Components/Container/CustomRow';
import { AuthContext } from '../../../pages/subpage/AuthContext'; // AuthContext import 추가

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
    const { auth } = useContext(AuthContext);
    const [historyData, setHistoryData] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_SERVER}/getInfo/`, {
                    headers: {
                        Authorization: `Bearer ${auth.accessToken}`
                    }
                });
                setHistoryData(response.data.received_matches);
            } catch (error) {
                console.error('Error fetching history data:', error);
                setError(true);
            }
        };

        fetchData();
    }, [auth.accessToken]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleReviewClick = (matchId) => {
        navigate('/writereview', { state: { matchId } });
    };

    return (
        <ContainerCenter>
            <PageContainer>
                <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='1rem'>
                    <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                        <CustomFont color='black' font='1.5rem' fontWeight='bold'>내 양보 내역</CustomFont>
                    </CustomRow>

                    <HistoryContainer>
                        {historyData.length === 0 ? (
                            <TotalPointText>아직 양보 내역이 없어요.</TotalPointText>
                        ) : (
                            historyData.map((history, index) => (
                                <React.Fragment key={index}>
                                    <HistoryItem>
                                        <HistoryDetail>
                                            <PointText>{new Date(history.date).toLocaleDateString('ko-KR')}</PointText>
                                            <PointText>양보자 ID: {history.yielding_user}</PointText>
                                            <PointText>받은 포인트: 150</PointText>
                                        </HistoryDetail>
                                        <TotalPointText>{history.describe}</TotalPointText>
                                    </HistoryItem>
                                    <CustomRow width='100%' alignItems='center' justifyContent='flex-end'>
                                        <ReviewButton
                                            onClick={() => handleReviewClick(history.match_id)}
                                            disabled={history.review !== null}
                                        >
                                            {history.review !== null ? '작성했어요' : '후기 작성'}
                                        </ReviewButton>
                                    </CustomRow>
                                </React.Fragment>
                            ))
                        )}
                    </HistoryContainer>
                </CustomColumn>
            </PageContainer>
        </ContainerCenter>
    );
};

export default YieldHistory;
