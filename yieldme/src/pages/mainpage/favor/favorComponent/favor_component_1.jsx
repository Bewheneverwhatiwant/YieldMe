import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import CustomFont from '../../../../Components/Container/CustomFont';
import StyledImg from '../../../../Components/Container/StyledImg';
import { useNavigate } from 'react-router-dom';
import CustomColumn from '../../../../Components/Container/CustomColumn';
import CustomRow from '../../../../Components/Container/CustomRow';

const Alldiv = styled.div`
    display : flex;
    flex-direction :row;
    align-items: center;
    gap:12px;
    width: 95%;
`;

const Mainbox = styled.div`
    width: 121px;
    height: 163px;
    border-radius:20px;
    background-color: #FEE187;
    border: 1px solid #FFCD38;
    box-sizing: border-box;
    position: relative;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
    padding-bottom: 15px;
    transition: all 0.3s ease;
    display: flex;
`;


const TextBelowImage = styled.p`
    width: 88px;
    height: 28px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 9px;
    color: #1E1E1E;
    text-align: center;
    align-items: center;
    margin:15px auto 0 auto;
`;

const BoxDiv = styled.div`
    display:flex;
    flex-direction :column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem;
`;

const Shopbutton = styled.button`
    width : 86px;
    height : 22px;
    background-color: #FFCD38;
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

const Circle = styled.div`
  width: 7px;
  height: 7px;
  background :#FFCD38;
  border-radius: 50%;
  display: flex;
  text-align: center;
  align-items: center;
`;





const FavorComponent1 = () => {

    const navigate = useNavigate();

    return (
        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1.5rem'>

            <CustomFont color='black' fontWeight='bold' font='1rem' >서서 가는 당신, 하지정맥류 예방하세요.</CustomFont>

            <Alldiv>
                <Circle></Circle>
                <Mainbox>
                    <BoxDiv>
                        <StyledImg
                            src={'favor_com1_img2.png'}
                            width='51px'
                            height='51px'
                            style={{ display: 'block', margin: '0 auto', marginTop: '31px' }}

                        />

                        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.1rem'>
                            <CustomFont color='black' fontWeight='bold' font='0.7rem'>귀가 후 냉수로</CustomFont>
                            <CustomFont color='black' fontWeight='bold' font='0.7rem'>샤워하기</CustomFont>
                        </CustomColumn>
                        <Shopbutton onClick={() => navigate('/giftshop')}>
                            <CustomFont color='black' fontWeight='bold' font='0.5rem'>클릭하여 쇼핑하기</CustomFont>
                        </Shopbutton>
                    </BoxDiv>
                </Mainbox>


                <Mainbox>
                    <BoxDiv>
                        <StyledImg src={'favor_com1_img1.png'} width='83px' height='76px' style={{ display: 'block', margin: '0 auto' }} />
                        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.1rem'>
                            <CustomFont color='black' fontWeight='bold' font='0.7rem'>앉아있는 자세</CustomFont>
                            <CustomFont color='black' fontWeight='bold' font='0.7rem'>피하기</CustomFont>
                        </CustomColumn>

                        <Shopbutton onClick={() => navigate('/iwanttobeyielded')}>
                            <CustomFont color='black' fontWeight='bold' font='0.5rem'>클릭하여 양보받기</CustomFont>
                        </Shopbutton>
                    </BoxDiv>
                </Mainbox>


                <Mainbox>

                    <BoxDiv>
                        <StyledImg src={'favor_com1_img3.png'} width='65px' height='65px' style={{ display: 'block', margin: '0 auto', marginTop: '19px' }} />
                        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.1rem'>
                            <CustomFont color='black' fontWeight='bold' font='0.7rem'>의료용 압박스타킹</CustomFont>
                            <CustomFont color='black' fontWeight='bold' font='0.7rem'>착용하기</CustomFont>
                        </CustomColumn>

                        <Shopbutton onClick={() => navigate('/햐giftshop')}>
                            <CustomFont color='black' fontWeight='bold' font='0.5rem'>클릭하여 쇼핑하기</CustomFont>
                        </Shopbutton>
                    </BoxDiv>
                </Mainbox>
                <Circle></Circle>
            </Alldiv>

        </CustomColumn>

    );
};

export default FavorComponent1;
