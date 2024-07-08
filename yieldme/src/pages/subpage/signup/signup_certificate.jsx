import React, { useState } from 'react';
import styled from 'styled-components';
import Webcam from 'react-webcam';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: white;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  color: black;
  margin-bottom: 1rem;
  text-align: center;
`;

const Instructions = styled.p`
  font-size: 1rem;
  color: black;
  margin-bottom: 1rem;
  text-align: center;
`;

const CameraContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  width: 80%;
  padding: 1rem;
  font-size: 1rem;
  background-color: #E0E0E0;
  color: black;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  margin-bottom: 1rem;
`;

const SignupCertificate = () => {
    const [imageSrc, setImageSrc] = useState(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [isFinalStep, setIsFinalStep] = useState(false);
    const navigate = useNavigate();

    const webcamRef = React.useRef(null);

    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImageSrc(imageSrc);
    }, [webcamRef]);

    const handleConfirm = () => {
        setIsAnalyzing(true);
        setTimeout(() => {
            setIsAnalyzing(false);
            setIsFinalStep(true);
        }, 3000);
    };

    return (
        <Container>
            {!isAnalyzing && !isFinalStep && (
                <>
                    <Title>임산부님의 주민등록증을 촬영해주세요.</Title>
                    <Instructions>주민등록증을 잘보이게끔 촬영하시고, 성함과 발급 날짜를 확인해주세요.</Instructions>
                    <CameraContainer>
                        {imageSrc ? (
                            <img src={imageSrc} alt="captured" />
                        ) : (
                            <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
                        )}
                    </CameraContainer>
                    {imageSrc ? (
                        <>
                            <Button onClick={() => setImageSrc(null)}>재촬영</Button>
                            <Button onClick={handleConfirm}>확인</Button>
                        </>
                    ) : (
                        <Button onClick={capture}>촬영</Button>
                    )}
                </>
            )}
            {isAnalyzing && <Title>이미지를 분석 중입니다...</Title>}
            {isFinalStep && (
                <>
                    <Title>인식된 정보를 확인해주세요.</Title>
                    <Instructions>
                        성함: <input type="text" defaultValue="000님" />
                        <br />
                        주민등록증 발급 일자: <input type="text" defaultValue="0000년 00월 00일" />
                    </Instructions>
                    <Button onClick={() => navigate('/finalsignup')}>정보 수정하기</Button>
                </>
            )}
        </Container>
    );
};

export default SignupCertificate;
