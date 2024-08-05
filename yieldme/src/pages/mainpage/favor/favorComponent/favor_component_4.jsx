import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CustomFont from '../../../../Components/Container/CustomFont';
import CustomColumn from '../../../../Components/Container/CustomColumn';
import CustomRow from '../../../../Components/Container/CustomRow';
import StyledImg from '../../../../Components/Container/StyledImg';

const BannerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 120px;
  padding: 5px;
  cursor: pointer;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1), 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const FavorComponent4 = () => {
    const navigate = useNavigate();

    const handleBannerClick = () => {
        navigate('/adpage');
    };

    return (
        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
            <CustomFont color='black' font='1rem'>30초 광고를 시청하고 100원을 얻어요.</CustomFont>
            <BannerContainer onClick={handleBannerClick}>
                <CustomRow width='100%' alignItems='center' justifyContent='space-around'>
                    <StyledImg src={'adBannerImg1.png'} width='60px' height='60px' />
                    <StyledImg src={'adBannerImg2.png'} width='60px' height='60px' />
                    <StyledImg src={'adBannerImg3.png'} width='60px' height='60px' />
                    <StyledImg src={'adBannerImg4.png'} width='60px' height='60px' />
                </CustomRow>
            </BannerContainer>
            <CustomRow width='90%' alignItems='center' justifyContent='end'>
                <CustomFont color='black' font='0.7rem'>클릭하여 점수 충전</CustomFont>
            </CustomRow>
        </CustomColumn>
    );
};

export default FavorComponent4;
