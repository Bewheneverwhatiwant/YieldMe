import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CustomRow from '../Container/CustomRow';
import StyledImg from '../Container/StyledImg';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 6vh;
  z-index: 99;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: transparent;
`;

const HeaderButton = styled.button`
  background-color: transparent;
  font-size: 12px;
  color: #979797;
  text-align: center;
  justify-content: center;
  border: 2px solid #D9D9D9;
  border-radius: 30px;
  width: 90px;
  padding: 10px;
  cursor: pointer;
`;

const LogoButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('icon_nest.png');
  background-color: transparent;
  background-size: 100% 100%;
  border: none;
  width: 50px;
  height: 50px;
`;

export default function Header() {
    const navigate = useNavigate();

    return (
        <HeaderContainer>
            <CustomRow width='97%' justifyContent='center'>
                <CustomRow width='100%' justifyContent='flex-end'>

                    <HeaderButton>
                        로그인
                    </HeaderButton>

                </CustomRow>
            </CustomRow>

        </HeaderContainer>
    );
}