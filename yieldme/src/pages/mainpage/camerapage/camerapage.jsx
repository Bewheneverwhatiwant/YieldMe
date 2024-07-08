import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import QrScanner from 'qr-scanner';

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
  padding-top: 8vh;
  padding-bottom: 5vh;
  gap: 2rem;
  position: relative;
  background-color: white;
`;

const Title = styled.h1`
  color: #0000FF;
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
`;

const SubTitle = styled.h2`
  color: black;
  font-size: 1.2rem;
  text-align: center;
`;

const Description = styled.p`
  color: black;
  font-size: 1rem;
  text-align: center;
  margin: 0.5rem 0;
`;

const CameraContainer = styled.div`
  width: 80%;
  height: 240px;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  background-color: #E0E0E0;
  color: black;
  border: none;
  padding: 1rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 8px;
`;

const CameraPage = () => {
    const [showScanner, setShowScanner] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        let qrScanner;
        if (showScanner && videoRef.current) {
            qrScanner = new QrScanner(
                videoRef.current,
                (result) => {
                    if (window.confirm(`양보해준 사용자 id: ${result}\n자리를 양보 받으시겠습니까?`)) {
                        window.alert('자리를 양보받았습니다! 감사 인사를 전하세요');
                    }
                    qrScanner.stop();
                    setShowScanner(false);
                },
                { onDecodeError: (error) => console.error(error) }
            );
            qrScanner.start();
        }

        return () => {
            if (qrScanner) {
                qrScanner.stop();
            }
        };
    }, [showScanner]);

    return (
        <ContainerCenter>
            <PageContainer>
                <Title>일반인의</Title>
                <SubTitle>카메라입니다.</SubTitle>
                <Description>소중한 자리양보 감사드립니다.</Description>
                <CameraContainer>
                    {showScanner ? (
                        <video ref={videoRef} style={{ width: '100%' }} />
                    ) : (
                        <span>카메라 화면</span>
                    )}
                </CameraContainer>
                <Description>
                    자리를 양보해주신 분의 QR코드를 카메라로 인식해 주세요.
                </Description>
                <Button onClick={() => setShowScanner(!showScanner)}>
                    {showScanner ? 'QR 코드 스캐너 닫기' : 'QR 코드 스캐너 열기'}
                </Button>
            </PageContainer>
        </ContainerCenter>
    );
};

export default CameraPage;
