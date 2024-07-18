import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import QrScanner from 'qr-scanner';
import CustomFont from '../../../../Components/Container/CustomFont';
import CustomRow from '../../../../Components/Container/CustomRow';
import CustomColumn from '../../../../Components/Container/CustomColumn';

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
  justify-content: center;
  padding-top: 8vh;
  padding-bottom: 5vh;
  gap: 5rem;
  position: relative;
  background-color: white;
  padding-bottom: 10vh;
`;

const CameraContainer = styled.div`
  width: 80%;
  height: 240px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  position: relative;
`;

const LoadingText = styled.div`
  position: absolute;
  color: #777;
  font-size: 1rem;
  font-weight: bold;
`;

const CameraPage = () => {
    const videoRef = useRef(null);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        let qrScanner;
        if (videoRef.current) {
            qrScanner = new QrScanner(
                videoRef.current,
                (result) => {
                    if (window.confirm(`양보해준 사용자 id: ${result}\n자리를 양보 받으시겠습니까?`)) {
                        window.alert('자리를 양보받았습니다! 감사 인사를 전하세요');
                    }
                    //qrScanner.stop();
                },
                { onDecodeError: (error) => console.error(error) }
            );
            qrScanner.start();

            videoRef.current.onloadeddata = () => {
                setIsVideoLoaded(true);
            };
        }

        return () => {
            if (qrScanner) {
                qrScanner.stop();
            }
        };
    }, []);

    return (
        <ContainerCenter>
            <PageContainer>
                <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='2rem'>
                    <CustomFont color='black' font='1.3rem' fontWeight='bold'>소중한 자리 양보 감사드립니다.</CustomFont>
                    <CameraContainer>
                        {!isVideoLoaded && <LoadingText>QR스캐너 준비 중...</LoadingText>}
                        <video ref={videoRef} style={{ width: '100%' }} />
                    </CameraContainer>
                    <CustomFont color='black' font='0.8rem' fontWeight='bold'>자리를 양보해주신 분의 QR코드를 인식해주세요.</CustomFont>
                </CustomColumn>
            </PageContainer>
        </ContainerCenter>
    );
};

export default CameraPage;
