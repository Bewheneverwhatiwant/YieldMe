import React from 'react';
import styled from 'styled-components';
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

const Section = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  background-color: transparent;
`;

const StatusItem = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  width: 100%;
`;

const StatusDetail = styled.div`
width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: #E0E0E0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  border-radius: 4px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  width: 100%;
  margin-top: 1rem;
`;

const ActionButton = styled.button`
  background-color: #FD8FFF;
  color: black;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const MyYield = () => {
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
    ];

    return (
        <ContainerCenter>
            <PageContainer>
                <CustomColumn width='90%' alignItems='center' justifyContent='center'>
                    <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                        <CustomFont color='black' font='1.5rem'>내 양보 관리</CustomFont>
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
                                <ButtonContainer>
                                    <ActionButton>
                                        <CustomFont font='0.7rem' color='white' fontWeight='bold'>양보 완료</CustomFont>
                                    </ActionButton>
                                    <ActionButton>
                                        <CustomFont font='0.7rem' color='white' fontWeight='bold'>양보 취소</CustomFont>
                                    </ActionButton>
                                    <ActionButton>
                                        <CustomFont font='0.7rem' color='white' fontWeight='bold'>양보되기 전 하차했어요</CustomFont>
                                    </ActionButton>
                                </ButtonContainer>
                            </StatusItem>
                        ))}
                    </StatusContainer>
                </CustomColumn>
            </PageContainer>
        </ContainerCenter>
    );
};

export default MyYield;
