import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import CustomRow from '../Container/CustomRow';
import CustomColumn from '../Container/CustomColumn';
import CustomFont from '../Container/CustomFont';
import StyledImg from '../Container/StyledImg';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 25vh;
  background: #5D5D5D;
  color: white;
  gap: 10px;
`;

const WithdrawButton = styled.button`
  background-color: transparent;
  color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
`;

export default function Footer() {

    return (
        <FooterContainer>
            <CustomRow width='60%' alignItems='center' justifyContent='center'>
                {/* <StyledImg src={'HUFS_logo.png'} width='120px' height='100px' /> */}
                <CustomColumn width='70%' alignItems='flex-start' justifyContent='center' gap='10px'>
                    <CustomFont color='#929292' font='0.7rem'>
                        LIKELION - 중앙해커톤
                    </CustomFont>
                    <CustomFont color='#929292' font='0.7rem'>
                        Team Name: 세잎클로버
                    </CustomFont>
                    <CustomFont color='#929292' font='0.7rem'>
                        Team Member: 이나영, 김나연, 최인주, 이은서, 박재영, 김규린
                    </CustomFont>

                    <WithdrawButton>회원탈퇴</WithdrawButton>

                </CustomColumn>
            </CustomRow>
        </FooterContainer>
    );
}