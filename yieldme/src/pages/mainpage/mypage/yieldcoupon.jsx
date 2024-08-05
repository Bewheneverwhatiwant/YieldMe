import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CustomColumn from '../../../Components/Container/CustomColumn';
import CustomRow from '../../../Components/Container/CustomRow';
import CustomFont from '../../../Components/Container/CustomFont';
import StyledImg from '../../../Components/Container/StyledImg';
import { AuthContext } from '../../subpage/AuthContext';
import { useNavigate } from 'react-router-dom';

const CouponContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 2px dotted white;
    border-radius: 5px;
    background-color: #FFD15B;
    width: 100%;
`;

const Explain = styled.div`
width: 80%;
padding: 10px;
`;

const LogoImg = styled.div`
width: 25%;
padding: 10px;
display: flex;
align-items: center;
justify-content: center;
`;

const CouponDivider = styled.div`
width: 1px;
height: 10rem;
background-color: white;
`;

const ChangeButton = styled.button`
  background-color: #FFE177;
  padding: 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  width: 50%;
`;

const YieldCoupon = () => {
    const { auth } = useContext(AuthContext);
    const [buyPriorityCount, setBuyPriorityCount] = useState(2);
    const [holdText, setHoldText] = useState('보유 중');
    const navigate = useNavigate();

    const buy = () => {
        navigate('/buycoupone');
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_SERVER}/getInfo/`, {
                    headers: {
                        Authorization: `Bearer ${auth.accessToken}`,
                    },
                });
                const count = response.data.buy_priority_count;
                setBuyPriorityCount(count);
                if (count === 0) {
                    setHoldText('내 알림을 먼저 띄워보세요.');
                } else {
                    setHoldText('보유 중');
                }
            } catch (error) {
                console.error('Failed to fetch data', error);
            }
        };
        fetchData();
    }, [auth.accessToken]);

    return (
        <CustomColumn width='80%' alignItems='center' justifyContent='center' gap='1rem'>
            <CustomRow width='100%' alignItems='center' justifyContent='flex-start' gap='1rem'>
                <CustomFont color='black' font='1.3rem' fontWeight='bold'>내 보유 알림권</CustomFont>
            </CustomRow>

            <CustomRow width='100%' alignItems='center' justifyContent='center'>
                <CouponContent>
                    <CustomRow width='100%' alignItems='center' justifyContent='center' gap='0.8rem'>
                        <Explain>
                            <CustomColumn width='100%' alignItems='flex-start' justifyContent='center' gap='0.1rem'>
                                <CustomFont color='black' font='0.9rem' fontWeight='bold'>양보 요청 우선 알림권</CustomFont>
                                <CustomFont color='black' font='0.7rem'>유효기간 없이 사용하실 수 있어요.</CustomFont>
                                <CustomFont color='black' font='0.7rem'>‘양보하고 싶어요’ 화면에서 요청을 보낼 때 1매당 1회로 사용하실 수 있어요.</CustomFont>
                                <CustomFont color='black' font='0.7rem'>마이페이지에서 보유 내역을 확인하실 수 있어요.</CustomFont>
                                <CustomFont color='black' font='0.7rem'>1매 판매가는 500원이에요.</CustomFont>
                            </CustomColumn>
                        </Explain>

                        <CouponDivider />

                        <LogoImg>
                            <StyledImg src={'logo.png'} width='50px' height='50px' />
                        </LogoImg>
                    </CustomRow>
                </CouponContent>
            </CustomRow>

            <CustomColumn width='100%' alignItems='flex-end' justifyContent='center' gap='0.7rem'>
                <CustomRow width='50%' alignItems='center' justifyContent='flex-end' gap='0.1rem'>
                    <CustomFont color='black' font='0.8rem' fontWeight='bold'>X</CustomFont>
                    <CustomFont color='black' font='1rem' fontWeight='bold'>{buyPriorityCount}</CustomFont>
                    <CustomFont color='black' font='1rem' fontWeight='bold'>장</CustomFont>
                </CustomRow>

                <CustomColumn width='100%' alignItems='center' justifyContent='flex-end' gap='0.5rem'>
                    <CustomRow width='100%' alignItems='center' justifyContent='flex-end'>
                        <CustomFont color='black' font='0.8rem' fontWeight='bold'>{holdText}</CustomFont>
                    </CustomRow>
                    <CustomRow width='100%' alignItems='center' justifyContent='flex-end'>
                        <ChangeButton onClick={buy}>
                            <CustomFont color='black' font='0.8rem' fontWeight='bold'>구매하기</CustomFont>
                        </ChangeButton>
                    </CustomRow>
                </CustomColumn>
            </CustomColumn>
        </CustomColumn>
    );
};

export default YieldCoupon;
