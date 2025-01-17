import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CustomRow from '../../../Components/Container/CustomRow';
import CustomFont from '../../../Components/Container/CustomFont';
import CustomColumn from '../../../Components/Container/CustomColumn';
import StyledImg from '../../../Components/Container/StyledImg';
import { AuthContext } from '../../subpage/AuthContext';
import axios from 'axios';

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

const WhiteBox = styled.div`
background-color: white;
padding: 10px;
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
cursor: pointer;
width: 95%;
height: 6rem;
;`

const Changemode = () => {
    const navigate = useNavigate();

    const { auth } = useContext(AuthContext);
    const [priorityType, setPriorityType] = useState(null);
    const [name, setName] = useState('');
    const [id, setId] = useState('');

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_SERVER}/getInfo/`, {
                    headers: {
                        Authorization: `Bearer ${auth.accessToken}`,
                    },
                });
                const fetchedPriorityType = response.data.priority_type;
                setPriorityType(fetchedPriorityType);
                setId(response.data.login_id);
                setName(response.data.username);
                console.log(`Fetched priority type: ${fetchedPriorityType}`);
            } catch (error) {
                console.error('Error fetching user info:', error);
            }
        };

        fetchUserInfo();
    }, [auth.accessToken]);

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
                    navigate('/woundcert');
                    break;
                default:
                    break;
            }
        };
    };

    const renderPriorityStatus = () => {
        const priority = parseInt(priorityType, 10);
        if (priority === 1) {
            return <CustomFont color='pink' font='1rem' fontWeight='bold'>임산부</CustomFont>;
        } else if (priority === 2) {
            return <CustomFont color='brown' font='1rem' fontWeight='bold'>부상자</CustomFont>;
        } else if (priority === 3) {
            return <CustomFont color='blue' font='1rem' fontWeight='bold'>노약자</CustomFont>;
        } else {
            return <CustomFont color='black' font='1rem' fontWeight='bold'>일반인</CustomFont>;
        }
    };



    return (
        <CustomColumn width='80%' alignItems='center' justifyContent='center' gap='1rem'>
            <CustomRow width='100%' alignItems='center' justifyContent='flex-start' gap='1rem'>
                <CustomFont color='black' font='1.3rem' fontWeight='bold'>내 정보</CustomFont>
            </CustomRow>

            <InfoContainer>
                <InfoItem>
                    <InfoLabel>아이디</InfoLabel>
                    <InfoValue>{id}</InfoValue>
                </InfoItem>
                <InfoItem>
                    <InfoLabel>이름</InfoLabel>
                    <InfoValue>{name}</InfoValue>
                </InfoItem>
                <InfoItem>
                    <InfoLabel>상태</InfoLabel>
                    <InfoValue>{renderPriorityStatus()}</InfoValue>
                </InfoItem>
            </InfoContainer>

            <CustomRow width='100%' alignItems='center' justifyContent='flex-start' gap='1rem'>
                <CustomFont color='black' font='1.3rem' fontWeight='bold'>상태 변경</CustomFont>
            </CustomRow>
            <CertificationContainer>
                <CertificationCard color="#BA68C8" onClick={handleCertificationClick('pregnant')}>
                    <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.2rem'>
                            <StyledImg src={'icon_preg.png'} width='60px' height='60px' />
                            <CustomFont color='white' font='1rem' fontWeight='bold'>임산부 인증</CustomFont>
                        </CustomColumn>
                        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.3rem'>
                            <WhiteBox>
                                <CustomFont color='black' font='0.8rem'>
                                    인증 준비물:
                                </CustomFont>
                                <CustomFont color='black' font='0.8rem' fontWeight='bold'>
                                    임신확인서
                                </CustomFont>
                                <CustomFont color='black' font='0.8rem'>
                                    상태 지속 기간:
                                </CustomFont>
                                <CustomFont color='black' font='0.8rem' fontWeight='bold'>
                                    1년
                                </CustomFont>
                            </WhiteBox>
                        </CustomColumn>
                    </CustomColumn>
                </CertificationCard>

                <CertificationCard color="#A1887F" onClick={handleCertificationClick('oldest')}>
                    <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.2rem'>
                            <StyledImg src={'icon_oldest.png'} width='60px' height='60px' />
                            <CustomFont color='white' font='1rem' fontWeight='bold'>노약자 인증</CustomFont>
                        </CustomColumn>
                        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.3rem'>
                            <WhiteBox>
                                <CustomFont color='black' font='0.8rem'>
                                    인증 준비물:
                                </CustomFont>
                                <CustomFont color='black' font='0.8rem' fontWeight='bold'>
                                    신분증
                                </CustomFont>
                                <CustomFont color='black' font='0.8rem'>
                                    상태 지속 기간:
                                </CustomFont>
                                <CustomFont color='black' font='0.8rem' fontWeight='bold'>
                                    인증 후 평생
                                </CustomFont>
                            </WhiteBox>
                        </CustomColumn>
                    </CustomColumn>
                </CertificationCard>

                <CertificationCard color="#4DB6AC" onClick={handleCertificationClick('wounded')}>
                    <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.2rem'>
                            <StyledImg src={'icon_wound.png'} width='60px' height='60px' />
                            <CustomFont color='white' font='1rem' fontWeight='bold'>부상자 인증</CustomFont>
                        </CustomColumn>
                        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.3rem'>
                            <WhiteBox>
                                <CustomFont color='black' font='0.8rem'>
                                    인증 준비물:
                                </CustomFont>
                                <CustomFont color='black' font='0.8rem' fontWeight='bold'>
                                    진단서
                                </CustomFont>
                                <CustomFont color='black' font='0.8rem'>
                                    상태 지속 기간:
                                </CustomFont>
                                <CustomFont color='black' font='0.8rem' fontWeight='bold'>
                                    진단일 후 3일 내
                                </CustomFont>
                            </WhiteBox>
                        </CustomColumn>
                    </CustomColumn>
                </CertificationCard>

                <CertificationCard color="#4FC3F7" onClick={handleCertificationClick()}>
                    <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.2rem'>
                            <StyledImg src={'icon_normal.png'} width='60px' height='60px' />
                            <CustomFont color='white' font='1rem' fontWeight='bold'>일반인</CustomFont>
                        </CustomColumn>

                        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.3rem'>
                            <WhiteBox>
                                <CustomFont color='black' font='0.8rem' fontWeight='bold'>
                                    기본 상태입니다.
                                </CustomFont>
                            </WhiteBox>
                        </CustomColumn>
                    </CustomColumn>
                </CertificationCard>
            </CertificationContainer>
        </CustomColumn>
    );
};

export default Changemode;
