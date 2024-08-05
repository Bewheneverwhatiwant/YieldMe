import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CustomFont from '../../../../Components/Container/CustomFont';
import CustomColumn from '../../../../Components/Container/CustomColumn';
import CustomRow from '../../../../Components/Container/CustomRow';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  gap: 2rem;
`;

const ImageRow = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
`;

const ImageWrapper = styled.div`
  flex: 1;
  text-align: center;
`;

const MainImageWrapper = styled(ImageWrapper)`
  flex: 2;
 
`;

const Countdown = styled.div`
 
  width: 100%;
  text-align: center;
  font-size: 2rem;
  color: blue;
`;

const Image = styled.img`
  width: ${props => props.isMain ? '150px' : '100px'};
  height: ${props => props.isMain ? '100px' : '50px'};
`;

const images = [
    { src: 'stretch1.png', alt: 'Stretch 1' },
    { src: 'stretch2.png', alt: 'Stretch 2' },
    { src: 'stretch3.png', alt: '다음 동작', text: '다음 동작' }
];

const FavorComponent3 = () => {
    const [countdown, setCountdown] = useState(5);
    const [positions, setPositions] = useState([0, 1, 2]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown((prev) => {
                if (prev === 1) {
                    setPositions(([first, second, third]) => [second, third, first]);
                    return 5;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Container>
            <CustomRow width='90%' alignItems='center' justifyContent='start'>
                <CustomFont color='black' fontWeight='bold' font='0.9rem' >앉아서 하는 간단한 스트레칭</CustomFont>
            </CustomRow>
            <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.2rem'>
                <ImageRow>
                    <ImageWrapper>
                        <Image src={images[positions[0]].src} alt={images[positions[0]].alt} />
                    </ImageWrapper>
                    <MainImageWrapper>

                        <Image src={images[positions[1]].src} alt={images[positions[1]].alt} isMain />


                    </MainImageWrapper>
                    <ImageWrapper>
                        <Image src={images[positions[2]].src} alt={images[positions[2]].alt} />
                        {images[positions[2]].text && (
                            <CustomFont color='black' font='0.8rem'>{images[positions[2]].text}</CustomFont>
                        )}
                    </ImageWrapper>
                </ImageRow>
                <CustomRow width='100%' alignItems='center' justifyContent='center'>
                    <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.5rem'>
                        <CustomFont color='black' font='0.7rem' fontWeight='bold'>
                            5초간 유지하세요.
                        </CustomFont>
                        <CustomFont color='blue' font='1.2rem' fontWeight='bold'>
                            {countdown}
                        </CustomFont>
                    </CustomColumn>
                </CustomRow>
            </CustomColumn>
        </Container>
    );
};

export default FavorComponent3;
