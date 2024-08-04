import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CustomRow from '../../../Components/Container/CustomRow';
import CustomFont from '../../../Components/Container/CustomFont';
import CustomColumn from '../../../Components/Container/CustomColumn';

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #FFC107;
  border-radius: 10px;
  background-color: #FFF9C4;
  width: 100%;
`;

const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`;

const InfoLabel = styled.span`
  font-weight: bold;
  color: #FFA000;
`;

const InfoValue = styled.span`
  color: black;
`;

const CertificationContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
`;

const CertificationCard = styled.div`
  background-color: ${(props) => props.color};
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const Changemode = () => {
    const navigate = useNavigate();

    const handleCertificationClick = (certType) => {
        return () => {
            switch (certType) {
                case 'pregnant':
                    navigate('/pregnantcert');
                    break;
                case 'oldest':
                    navigate('/oldestcert');
                    break;
                case 'wounded':
                    navigate('/woundedcert');
                    break;
                default:
                    break;
            }
        };
    };

    return (
        <CustomColumn width='80%' alignItems='center' justifyContent='center' gap='1rem'>
            <CustomRow width='100%' alignItems='center' justifyContent='flex-start' gap='1rem'>
                <CustomFont color='black' font='1.3rem' fontWeight='bold'>내 정보</CustomFont>
            </CustomRow>

            <InfoContainer>
                <InfoItem>
                    <InfoLabel>아이디</InfoLabel>
                    <InfoValue>lny021102</InfoValue>
                </InfoItem>
                <InfoItem>
                    <InfoLabel>이름</InfoLabel>
                    <InfoValue>이나영</InfoValue>
                </InfoItem>
                <InfoItem>
                    <InfoLabel>상태</InfoLabel>
                    <InfoValue>일반인</InfoValue>
                </InfoItem>
            </InfoContainer>

            <CustomRow width='100%' alignItems='center' justifyContent='flex-start' gap='1rem'>
                <CustomFont color='black' font='1.3rem' fontWeight='bold'>상태 변경</CustomFont>
            </CustomRow>
            <CertificationContainer>
                <CertificationCard color="#BA68C8" onClick={handleCertificationClick('pregnant')}>
                    <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                        <CustomFont color='white' font='0.9rem' fontWeight='bold'>임산부 인증하기</CustomFont>
                        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.3rem'>
                            <CustomFont color='black' font='0.9rem'>
                                인증 준비물:
                            </CustomFont>
                            <CustomFont color='black' font='0.8rem' fontWeight='bold'>
                                임신확인서
                            </CustomFont>
                            <CustomFont color='black' font='0.9rem'>
                                상태 지속 기간:
                            </CustomFont>
                            <CustomFont color='black' font='0.8rem'>
                                임신 확인 일자로부터 10개월
                            </CustomFont>
                        </CustomColumn>
                    </CustomColumn>
                </CertificationCard>

                <CertificationCard color="#A1887F" onClick={handleCertificationClick('oldest')}>
                    <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                        <CustomFont color='white' font='0.9rem' fontWeight='bold'>노약자 인증하기</CustomFont>
                        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.3rem'>
                            <CustomFont color='black' font='0.9rem'>
                                인증 준비물:
                            </CustomFont>
                            <CustomFont color='black' font='0.8rem' fontWeight='bold'>
                                75세 이상의 신분증
                            </CustomFont>
                            <CustomFont color='black' font='0.9rem'>
                                상태 지속 기간:
                            </CustomFont>
                            <CustomFont color='black' font='0.8rem'>
                                인증 날짜로부터 평생
                            </CustomFont>
                        </CustomColumn>
                    </CustomColumn>
                </CertificationCard>

                <CertificationCard color="#4DB6AC" onClick={handleCertificationClick('wounded')}>
                    <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                        <CustomFont color='white' font='0.9rem' fontWeight='bold'>부상자 인증하기</CustomFont>
                        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.3rem'>
                            <CustomFont color='black' font='0.9rem'>
                                인증 준비물:
                            </CustomFont>
                            <CustomFont color='black' font='0.8rem' fontWeight='bold'>
                                3일이 지나지 않은 진단서
                            </CustomFont>
                            <CustomFont color='black' font='0.9rem'>
                                상태 지속 기간:
                            </CustomFont>
                            <CustomFont color='black' font='0.8rem'>
                                진단 일자로부터 3일
                            </CustomFont>
                        </CustomColumn>
                    </CustomColumn>
                </CertificationCard>

                <CertificationCard color="#4FC3F7" onClick={handleCertificationClick()}>
                    <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                        <CustomFont color='white' font='0.8rem' fontWeight='bold'>일반인</CustomFont>
                        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.3rem'>
                            <CustomFont color='black' font='0.9rem'>
                                회원가입 시 기본 상태입니다.
                            </CustomFont>
                        </CustomColumn>
                    </CustomColumn>
                </CertificationCard>
            </CertificationContainer>
        </CustomColumn>
    );
};

export default Changemode;
