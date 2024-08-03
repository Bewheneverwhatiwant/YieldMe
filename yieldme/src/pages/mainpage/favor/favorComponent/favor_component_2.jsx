import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import CustomFont from '../../../../Components/Container/CustomFont';

const Wrapper = styled.div`
  width: 100% ;
  overflow-x: hidden;
`;

const Alldiv = styled.div`
  display : flex;
  flex-direction :row;
  flex-wrap: nowrap;
  gap:16px;
  overflow-x: auto;
  white-space: nowrap;
  max-width: 100%;
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
    margin-top: 30px;
`;

const BookImage = styled.div`
    width: 65px;
    height: 99px;
    background-image: url('https://cdn.crowdpic.net/detail-thumb/thumb_d_4D24F988C28882891AB7778F32CF1285.jpg');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    //position: relative;
    box-sizing: border-box;
    margin: 15px 28px 12px 28px;
`;

const BoxDiv=styled.div`
    display:flex;
    flex-direction :column;
    flex-wrap: wrap;
`;

const Shopbutton=styled.button`
    width : 86px;
    height : 22px;
    background: linear-gradient(90deg, #848484 0%, #616161 34.5%);
    margin-bottom: 15px;
    border-radius:5px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size:7px;

    text-align: center;
    align-items: center;

    color: #FFFFFF;
`;

const FavorComponent2 = () => {

    

    return (
        <Wrapper>
            <CustomFont color='black'>대중교통에서 도파민을 줄여요: e-book 추천</CustomFont>
            <Alldiv>
                <Projectdiv>
                    <BookImage></BookImage>
                    <BoxDiv>
                        <Shopbutton>클릭하여 쇼핑하기</Shopbutton>
                    </BoxDiv>
                </Projectdiv>

                <Projectdiv>
                    <BookImage></BookImage>
                    <BoxDiv>
                        <Shopbutton>클릭하여 쇼핑하기</Shopbutton>
                    </BoxDiv>
                </Projectdiv>

                <Projectdiv>
                    <BookImage></BookImage>
                    <BoxDiv>
                        <Shopbutton>클릭하여 쇼핑하기</Shopbutton>
                    </BoxDiv>
                </Projectdiv>
                <Projectdiv>
                    <BookImage></BookImage>
                    <BoxDiv>
                        <Shopbutton>클릭하여 쇼핑하기</Shopbutton>
                    </BoxDiv>
                </Projectdiv>

                <Projectdiv>
                    <BookImage></BookImage>
                    <BoxDiv>
                        <Shopbutton>클릭하여 쇼핑하기</Shopbutton>
                    </BoxDiv>
                </Projectdiv>

            </Alldiv>
            
        </Wrapper>
    );
};

export default FavorComponent2;
