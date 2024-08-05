import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import CustomFont from '../../../../Components/Container/CustomFont';
import StyledImg from '../../../../Components/Container/StyledImg';
import CustomColumn from '../../../../Components/Container/CustomColumn';
import CustomRow from '../../../../Components/Container/CustomRow';

const Alldiv = styled.div`
  display : flex;
  flex-direction :row;
  flex-wrap: nowrap;
  gap:16px;
  overflow-x: auto;
  white-space: nowrap;
  max-width: 100%;
  padding: 1rem;
`;


const Projectdiv = styled.div`
    display: flex;
    width: 121px;
    height: 163px;
    background-color: rgb(64,64,64);
    border: 1px solid #808080;
    border-radius: 20px;
    
    flex-direction: column;
    align-items: center; 
    justify-content: center;

    flex-shrink:0;
`;


const BoxDiv = styled.div`
    display:flex;
    flex-direction :column;
    flex-wrap: wrap;
`;

const Shopbutton = styled.button`
    width : 86px;
    height : 22px;
   background-color: #FFCD38;
    margin-bottom: 15px;
    margin-top:12px;
    border-radius:5px;
    border: none;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size:7px;

    text-align: center;
    align-items: center;

    color: black;
`;


const handleButtonClick = (url) => {
    window.location.href = url;
};

const FavorComponent2 = () => {



    return (
        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>

            <CustomRow width='90%' alignItems='center' justifyContent='start'>
                <CustomFont color='black' fontWeight='bold' font='0.9rem' >대중교통에서 도파민을 줄여요: e-book 추천</CustomFont>
            </CustomRow>
            <Alldiv>
                <Projectdiv>
                    <StyledImg
                        src={'favor_com2_book1.png'}
                        width='65px'
                        height='99px'
                        style={{ margin: '0 auto', marginTop: '15px' }}

                    />
                    <BoxDiv>
                        <Shopbutton onClick={() => handleButtonClick('https://product.kyobobook.co.kr/detail/S000000548744')}>
                            <CustomFont color='black' fontWeight='bold' font='0.5rem'>클릭하여 읽어보기</CustomFont>
                        </Shopbutton>
                    </BoxDiv>
                </Projectdiv>

                <Projectdiv>
                    <StyledImg
                        src={'favor_com2_book2.png'}
                        width='65px'
                        height='99px'
                        style={{ margin: '0 auto', marginTop: '15px' }}

                    />
                    <BoxDiv>
                        <Shopbutton onClick={() => handleButtonClick('https://product.kyobobook.co.kr/detail/S000001461127')}>
                            <CustomFont color='black' fontWeight='bold' font='0.5rem'>클릭하여 읽어보기</CustomFont>
                        </Shopbutton>
                    </BoxDiv>
                </Projectdiv>

                <Projectdiv>
                    <StyledImg
                        src={'favor_com2_book3.png'}
                        width='65px'
                        height='99px'
                        style={{ margin: '0 auto', marginTop: '15px' }}

                    />
                    <BoxDiv>
                        <Shopbutton onClick={() => handleButtonClick('https://product.kyobobook.co.kr/detail/S000202972044')}>
                            <CustomFont color='black' fontWeight='bold' font='0.5rem'>클릭하여 읽어보기</CustomFont>
                        </Shopbutton>
                    </BoxDiv>
                </Projectdiv>
                <Projectdiv>
                    <StyledImg
                        src={'favor_com2_book4.png'}
                        width='65px'
                        height='99px'
                        style={{ margin: '0 auto', marginTop: '15px' }}

                    />
                    <BoxDiv>
                        <Shopbutton onClick={() => handleButtonClick('https://product.kyobobook.co.kr/detail/S000200555616')}>클릭하여 쇼핑하기</Shopbutton>
                    </BoxDiv>
                </Projectdiv>

                <Projectdiv>
                    <StyledImg
                        src={'favor_com2_book5.png'}
                        width='65px'
                        height='99px'
                        style={{ margin: '0 auto', marginTop: '15px' }}

                    />
                    <BoxDiv>
                        <Shopbutton onClick={() => handleButtonClick('https://product.kyobobook.co.kr/detail/S000001686934')}>클릭하여 쇼핑하기</Shopbutton>
                    </BoxDiv>
                </Projectdiv>

            </Alldiv>

        </CustomColumn>
    );
};

export default FavorComponent2;
