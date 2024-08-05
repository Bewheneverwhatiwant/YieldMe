import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CustomFont from '../../../Components/Container/CustomFont';
import { AuthContext } from '../../subpage/AuthContext';

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
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  width: 90%;
`;

const ReviewTitle = styled.h2`
  font-size: 1rem;
  color: black;
  margin-bottom: 10px;
`;

const ReviewText = styled.p`
  font-size: 0.8rem;
  color: black;
`;

const AllReview = () => {
    const { auth } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchReviews = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_SERVER}/all_review/`, {
                    // headers: {
                    //     Authorization: `Bearer ${auth.accessToken}`
                    // }
                });
                setReviews(response.data);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };
        fetchReviews();
    }, [auth.accessToken]);

    return (
        <ContainerCenter>
            <PageContainer>
                <CustomFont color='black' fontWeight='bold' font='1rem'>따뜻한 양보 후기를 전해드립니다.</CustomFont>
                <ReviewContainer>
                    {reviews.map((review) => (
                        <ReviewCard key={review.match_id}>
                            <ReviewTitle>{review.receiving_user__login_id} 님</ReviewTitle>
                            <ReviewText>{review.review}</ReviewText>
                        </ReviewCard>
                    ))}
                </ReviewContainer>
            </PageContainer>
        </ContainerCenter>
    );
};

export default AllReview;
