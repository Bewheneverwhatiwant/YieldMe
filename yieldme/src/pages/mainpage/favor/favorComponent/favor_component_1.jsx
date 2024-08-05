import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import CustomFont from '../../../../Components/Container/CustomFont';
import StyledImg from '../../../../Components/Container/StyledImg';
import { useNavigate } from 'react-router-dom';

const Alldiv = styled.div`
    display : flex;
    flex-direction :row;
    align-items: center;
    gap:12px;
`;

const Mainbox=styled.div`
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


const TextBelowImage=styled.p`
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
    flex-wrap: wrap;
`;

const Shopbutton=styled.button`
    width: 86px;
    height: 22px;
    background: #FFCD38;
    border-radius: 5px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 7px;
    color: #000000;
    margin: 0 auto;

    text-align: center;
    align-items: center;
`;

const NavigationCircles = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50px;
  margin: 20px auto;
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
        <>
       
        <CustomFont color='black' style={{margin:'0 auto'}} >서서 가는 당신, 하지정맥류 예방하세요.</CustomFont>
        
        <Alldiv>
        <Circle></Circle>
            <Mainbox>
            <BoxDiv>
                <StyledImg 
                    src={'favor_com1_img2.png'} 
                    width='51px' 
                    height='51px' 
                    style={{ display: 'block', margin:'0 auto', marginTop: '31px'}} 
                
                />
                
                <TextBelowImage>냉수 샤워하기</TextBelowImage>
                <Shopbutton onClick={() => navigate('/giftshop')}>클릭하여 쇼핑하기</Shopbutton>
            </BoxDiv>
            </Mainbox>
        
       
            <Mainbox>
            <BoxDiv>
                <StyledImg src={'favor_com1_img1.png'} width='83px' height='83px' style={{ display: 'block', margin: '0 auto'}}  />
                <TextBelowImage>장시간 서있거나<br></br>앉아있는 자세 피하기</TextBelowImage>
                
                <Shopbutton onClick={() => navigate('/iwanttobeyielded')}>클릭하여 양보받기</Shopbutton>
            </BoxDiv>
            </Mainbox>
       
        
            <Mainbox>
                <StyledImg src={'favor_com1_img3.png'} width='65px' height='65px' style={{ display: 'block', margin: '0 auto', marginTop: '19px'}}  />
                <TextBelowImage>의료용 압박스타킹<br></br>착용하기</TextBelowImage>
                <BoxDiv>
                    <Shopbutton onClick={() => navigate('/giftshop')}>클릭하여 쇼핑하기</Shopbutton>
                </BoxDiv>
            </Mainbox>
            <Circle></Circle>
        </Alldiv> 
              
        </>
    
    );
};

export default FavorComponent1;
