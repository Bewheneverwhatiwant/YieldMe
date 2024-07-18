import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import CustomFont from '../../../../Components/Container/CustomFont';

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

const Carousel = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  transform: ${(props) => `translateX(-${(props.index % props.length) * 33.33}%)`};
  width: calc(33.33% * ${(props) => props.length});
`;

const Card = styled.div`
  flex: 0 0 30%;
  transition: transform 0.5s ease, z-index 0.5s ease;
  transform: ${(props) => (props.isCenter ? 'scale(1.1)' : 'scale(1)')};
  z-index: ${(props) => (props.isCenter ? 2 : 1)};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #FFCD38;
  border-radius: 10px;
  margin: ${(props) => (props.isCenter ? '0 20px 20px 20px' : '0 10px')};
  padding: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  color: black;
  font-weight: bold;
`;

const reviews = [
    {
        id: 1,
        title: '냉수 샤워하기',
        content: '클릭하여 쇼핑하기',
        img: '/images/favor_com1_img1.png',
    },
    {
        id: 2,
        title: '장시간 서있거나 앉아있는 자세 피하기',
        content: '클릭하여 양보받기',
        img: '/images/favor_com1_img2.png',
    },
    {
        id: 3,
        title: '의료용 압박스타킹 착용하기',
        content: '클릭하여 쇼핑하기',
        img: '/images/favor_com1_img3.png',
    },
    {
        id: 4,
        title: '휴식 시간 늘리기',
        content: '클릭하여 휴식하기',
        img: '/images/favor_com1_img4.png',
    },
    {
        id: 5,
        title: '다리 마사지하기',
        content: '클릭하여 마사지하기',
        img: '/images/favor_com1_img5.png',
    },
];

const FavorComponent1 = () => {
    const [index, setIndex] = useState(0);
    const itemsToShow = 3;
    const startX = useRef(0);
    const endX = useRef(0);

    const handleDragStart = (e) => {
        startX.current = e.clientX || e.touches[0].clientX;
    };

    const handleDragEnd = (e) => {
        endX.current = e.clientX || e.changedTouches[0].clientX;
        if (startX.current > endX.current + 50) {
            setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
        } else if (startX.current < endX.current - 50) {
            setIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
        }
    };

    const getCards = () => {
        const cards = [];
        const extendedReviews = [...reviews, ...reviews];
        const startIndex = index;
        for (let i = startIndex; i < startIndex + itemsToShow; i++) {
            const review = extendedReviews[i % reviews.length];
            console.log(`Card Index: ${i}, Review Index: ${i % reviews.length}`);
            cards.push(
                <Card key={i} isCenter={(i % reviews.length) === (index % reviews.length)}>
                    <Image src={review.img} alt={review.title} />
                    <CustomFont color='black' fontWeight='bold' font='1rem'>{review.title}</CustomFont>
                    <Button onClick={() => alert(review.content)}>{review.content}</Button>
                </Card>
            );
        }
        return cards;
    };

    return (
        <Container
            onMouseDown={handleDragStart}
            onMouseUp={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchEnd={handleDragEnd}
        >
            <Carousel index={index} length={reviews.length}>
                {getCards()}
            </Carousel>
        </Container>
    );
};

export default FavorComponent1;
