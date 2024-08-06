import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import CustomColumn from '../../../Components/Container/CustomColumn';
import CustomFont from '../../../Components/Container/CustomFont';
import CustomRow from '../../../Components/Container/CustomRow';
import { useNavigate } from 'react-router-dom';
import AllReview from './allreview';

const reviews = [
    {
        id: 1,
        user: 'hihi0818',
        date: '7월 14일 14시 30분',
        content: '입덧 때문에 너무 힘들었는데, 양보해주시고 레몬사탕까지 주셔서 너무 감사했습니다...! 좋은 일만 가득하세요...ㅠㅠ'
    },
    {
        id: 2,
        user: 'hungry4595',
        date: '7월 15일 18시 02분',
        content: '오늘 몸살이 너무 심해서 힘들었는데, 퇴근길 지옥철인데도 양보해주셔서 너무 감사했어요.'
    },
    {
        id: 3,
        user: 'happy1234',
        date: '7월 16일 12시 45분',
        content: '길을 잃어서 헤맸는데, 친절하게 도와주셔서 너무 감사해요!'
    },
    {
        id: 4,
        user: 'grateful7890',
        date: '7월 17일 20시 10분',
        content: '친구와 다툰 후 마음이 무거웠는데, 다정하게 말을 걸어주셔서 위로가 되었어요. 감사합니다.'
    }
];

const scrollAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const ReviewContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  min-height: 40vh;
`;

const ReviewWrapper = styled.div`
  display: inline-block;
  animation: ${scrollAnimation} 20s linear infinite;
`;

const ReviewBox = styled.div`
  background-color: #FFCD38;
  color: black;
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: inline-block;
  white-space: normal;
  width: 55%;
  min-height: 9rem;
`;

const ReviewContent = styled.p`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
margin: 10px 0 0 0;
`;

const AllReview2 = styled.button`
background-color: transparent;
border: none;
width: 20%;
display: flex;
align-items: center;
justify-content: center;
`;

const ReviewCarousel = () => {

    const navigate = useNavigate();

    return (
        <ReviewContainer>

            <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.1rem'>
                    <CustomRow width='80%' alignItems='center' justifyContent='space-between' gap='2rem'>
                        <CustomFont color='black' fontWeight='bold' font='0.9rem'>따뜻한 양보 후기가 도착했어요.</CustomFont>
                        <AllReview2 onClick={() => navigate('/allreview')}>
                            <CustomFont color='black'>전체보기{'>'}</CustomFont>
                        </AllReview2>
                    </CustomRow>

                </CustomColumn>

                <ReviewWrapper>

                    {reviews.map((review, index) => (
                        <ReviewBox key={review.id}>
                            <CustomColumn width='100%' alignItems='flex-start' justifyContent='center' gap='0.3rem'>
                                <CustomFont color='black' font='0.8rem'>{review.user} 님,</CustomFont>
                                <CustomFont color='black' font='0.8rem'>{review.date}에 양보받았어요.</CustomFont>
                                <CustomColumn width='100%' height='5rem' alignItems='center' justifyContent='center'>
                                    <ReviewContent>“{review.content}”</ReviewContent>
                                </CustomColumn>
                            </CustomColumn>
                        </ReviewBox>
                    ))}


                </ReviewWrapper>
            </CustomColumn>
        </ReviewContainer>
    );
};

export default ReviewCarousel;
