import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CustomFont from '../../../../Components/Container/CustomFont';
import CustomColumn from '../../../../Components/Container/CustomColumn';
import CustomRow from '../../../../Components/Container/CustomRow';

const ContainerCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: white;
  padding: 8vh 0 5vh;
  position: relative;
`;

const PageContainer = styled(ContainerCenter)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 2vh;
  padding-bottom: 5vh;
  gap: 6rem;
  position: relative;
  background-color: white;
  padding-bottom: 10vh;
`;

const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  background-color: transparent;
  padding: 0.5rem;
  border-radius: 4px;
`;

const StatusItem = styled.div`
width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #E0E0E0;
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StatusDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const FixedButton = styled.button`
width: 4rem;
height: 4rem;
position: fixed;
  bottom: 9vh;
  right: 10px;
  background-color: #FD8FFF;
  color: white;
  border: none;
  padding: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 50px;
  z-index: 1000;
`;

const IWantToYield = () => {
    const navigate = useNavigate();

    const statusData = [
        {
            who: '임산부',
            type: '대기 중',
            area: '서울 00시 00동',
            transportType: '지하철',
            transportDetail: '4호선, 당고개행, 현재 사당역, 4-2 플랫폼',
            impression: '빨간 맨투맨에 모자쓰고 있습니다.',
            time: '1분 전',
        },
        {
            who: '일반인',
            type: '양보 완료',
            area: '부산 00시 00동',
            transportType: '버스',
            transportDetail: '지역버스, 61번, 현재 용암역, 다음 진흥역',
            impression: '맨 앞자리에 백팩 안고 있어요',
            time: '3분 전',
        },
        {
            who: '일반인',
            type: '양보 완료',
            area: '용인 00구 00읍',
            transportType: '버스',
            transportDetail: '광역버스, 1150번, 현재 서울역, 다음 송례원역',
            impression: '맨 뒤에서 두번째 좌석, 복도에 탈색머리 남자입니다',
            time: '6분 전',
        },
        {
            who: '임산부',
            type: '양보 완료',
            area: '서울 00시 00동',
            transportType: '지하철',
            transportDetail: '1호선, 인천행, 현재 외대앞역, 6-1 플랫폼',
            impression: '하늘색 원피스 입고있습니다~',
            time: '10분 전',
        }
    ];

    return (
        <ContainerCenter>
            <PageContainer>
                <CustomColumn width='90%' alignItems='center' justifyContent='center'>
                    <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                        <CustomFont color='black' font='1.5rem' >현재 양보된 자리</CustomFont>
                    </CustomRow>

                    <StatusContainer>
                        {statusData.map((status, index) => (
                            <StatusItem key={index}>
                                <StatusDetail>
                                    <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.5px'>
                                        <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                                            <CustomFont font='1rem' color={status.who === '임산부' ? '#FF00FF' : 'black'}>
                                                {status.who}/{status.type}/{status.time}
                                            </CustomFont>
                                        </CustomRow>

                                        <CustomRow width='100%' alignItems='center' justifyContent='flex-start' gap='0.3rem'>
                                            <CustomFont font='1rem' color='black' fontWeight='bold'>지역:</CustomFont>
                                            <CustomFont font='1rem' color='black'>{status.area}</CustomFont>
                                        </CustomRow>

                                        <CustomRow width='100%' alignItems='center' justifyContent='flex-start' gap='0.3rem'>
                                            <CustomFont font='1rem' color='black' fontWeight='bold'>대중교통 종류:</CustomFont>
                                            <CustomFont font='1rem' color='black'>{status.transportType}</CustomFont>
                                        </CustomRow>
                                    </CustomColumn>

                                    <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.5px'>
                                        <CustomColumn width='100%' alignItems='flex-start' justifyContent='center' gap='0.3rem'>
                                            <CustomFont font='1rem' color='black' fontWeight='bold'>✅대중교통 상세정보</CustomFont>
                                            <CustomFont font='1rem' color='black'>{status.transportDetail}</CustomFont>
                                        </CustomColumn>
                                        <CustomColumn width='100%' alignItems='flex-start' justifyContent='center' gap='0.3rem'>
                                            <CustomFont font='1rem' color='black' fontWeight='bold'>✅인상착의</CustomFont>
                                            <CustomFont font='1rem' color='black'>{status.impression}</CustomFont>
                                        </CustomColumn>
                                    </CustomColumn>
                                </StatusDetail>
                            </StatusItem>
                        ))}
                    </StatusContainer>

                    <FixedButton onClick={() => navigate('/writeyield')}>
                        <CustomColumn width='95%' alignItems='center' justifyContent='center' gap='0.2rem'>
                            <CustomFont color='white' font='0.9rem'>나도</CustomFont>
                            <CustomFont color='white' font='0.9rem'>양보</CustomFont>
                        </CustomColumn>
                    </FixedButton>
                    <FixedButton onClick={() => navigate('/myyield')} style={{ bottom: '18vh' }}>
                        <CustomColumn width='95%' alignItems='center' justifyContent='center' gap='0.2rem'>
                            <CustomFont color='white' font='0.9rem'>양보</CustomFont>
                            <CustomFont color='white' font='0.9rem'>관리</CustomFont>
                        </CustomColumn>
                    </FixedButton>
                </CustomColumn>
            </PageContainer>
        </ContainerCenter>
    );
};

export default IWantToYield;
