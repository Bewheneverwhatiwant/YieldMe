import React, { useEffect } from 'react';
import styled from 'styled-components';
import CustomFont from '../../../Components/Container/CustomFont';

const ContainerCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  min-height: 100vh;
`;

const PageContainer = styled(ContainerCenter)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 12vh;
  padding-bottom: 5vh;
  gap: 3rem;
  position: relative;
  background-color: white;
  padding-bottom: 10vh;
`;

const ReviewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
 gap: 10px;
  justify-items: center;
  width: 100%;
`;

const ReviewCard = styled.div`
  background-color: #FEE187;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 90%;
`;

const ReviewTitle = styled.h2`
  font-size: 1rem;
  color: black;
  margin-bottom: 10px;
`;

const ReviewDate = styled.p`
  font-size: 0.8rem;
  color: black;
  margin-bottom: 10px;
`;

const ReviewText = styled.p`
  font-size: 0.8rem;
  color: black;
`;

const reviews = [
    {
        id: 1,
        user: 'hihi0818',
        date: '2024년 7월 14일 14시 30분에 양보받았어요.',
        text: '임산부 때문에 너무 힘들었는데, 양보해주시고 레몬사탕까지 주셔서 너무 감사했습니다...! 좋은 일만 가득하세요...ㅠㅠ'
    },
    {
        id: 2,
        user: 'hungry4595',
        date: '2024년 7월 15일 18시 02분에 양보받았어요.',
        text: '오늘 몸살이 너무 심해서 힘들었는데, 퇴근길 지옥철인데도 양보해주셔서 너무 감사했어요.'
    },
    {
        id: 3,
        user: 'hihi0818',
        date: '2024년 7월 14일 14시 30분에 양보받았어요.',
        text: '임산부 때문에 너무 힘들었는데, 양보해주시고 레몬사탕까지 주셔서 너무 감사했습니다...! 좋은 일만 가득하세요...ㅠㅠ'
    },
    {
        id: 4,
        user: 'hungry4595',
        date: '2024년 7월 15일 18시 02분에 양보받았어요.',
        text: '오늘 몸살이 너무 심해서 힘들었는데, 퇴근길 지옥철인데도 양보해주셔서 너무 감사했어요.'
    },
    {
        id: 5,
        user: 'hihi0818',
        date: '2024년 7월 14일 14시 30분에 양보받았어요.',
        text: '임산부 때문에 너무 힘들었는데, 양보해주시고 레몬사탕까지 주셔서 너무 감사했습니다...! 좋은 일만 가득하세요...ㅠㅠ'
    },
    {
        id: 6,
        user: 'hungry4595',
        date: '2024년 7월 15일 18시 02분에 양보받았어요.',
        text: '오늘 몸살이 너무 심해서 힘들었는데, 퇴근길 지옥철인데도 양보해주셔서 너무 감사했어요.'
    },
    {
        id: 7,
        user: 'hihi0818',
        date: '2024년 7월 14일 14시 30분에 양보받았어요.',
        text: '임산부 때문에 너무 힘들었는데, 양보해주시고 레몬사탕까지 주셔서 너무 감사했습니다...! 좋은 일만 가득하세요...ㅠㅠ'
    },
    {
        id: 8,
        user: 'hungry4595',
        date: '2024년 7월 15일 18시 02분에 양보받았어요.',
        text: '오늘 몸살이 너무 심해서 힘들었는데, 퇴근길 지옥철인데도 양보해주셔서 너무 감사했어요.'
    },
];

const AllReview = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <ContainerCenter>
            <PageContainer>
                <CustomFont color='black' fontWeight='bold' font='1rem'>따뜻한 양보 후기를 전해드립니다.</CustomFont>
                <ReviewContainer>
                    {reviews.map((review) => (
                        <ReviewCard key={review.id}>
                            <ReviewTitle>{review.user} 님</ReviewTitle>
                            <ReviewDate>{review.date}</ReviewDate>
                            <ReviewText>{review.text}</ReviewText>
                        </ReviewCard>
                    ))}
                </ReviewContainer>
            </PageContainer>
        </ContainerCenter>
    );
};

export default AllReview;
