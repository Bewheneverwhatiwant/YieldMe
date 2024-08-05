import React from 'react';
import styled from 'styled-components';

import CustomColumn from '../../../../../Components/Container/CustomColumn';
import CustomRow from '../../../../../Components/Container/CustomRow';
import CustomFont from '../../../../../Components/Container/CustomFont';
import StyledImg from '../../../../../Components/Container/StyledImg';

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

const Coupon = () => {
    return (
        <CustomColumn width='80%' alignItems='center' justifyContent='center' gap='1rem'>

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

        </CustomColumn>
    );
};

export default Coupon;
