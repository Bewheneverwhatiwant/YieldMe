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
  justify-content: flex-start;
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
  border: 2px solid #E0E0E0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
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
                <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                    <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.3rem'>
                        <CustomFont color='black' font='1.2rem' fontWeight='bold'>지금 자리를 양보받은 저는</CustomFont>
                        <CustomRow width='100%' alignItems='center' justifyContent='center' gap='0.3rem'>
                            <CustomFont color='#FF00FF' font='1.5rem' fontWeight='bold'>임산부</CustomFont>
                            <CustomFont color='black' font='1.2rem' fontWeight='bold'>입니다.</CustomFont>
                        </CustomRow>
                    </CustomColumn>

                    <CustomFont color='black' font='1rem'>소중한 자리 양보 감사드립니다!</CustomFont>
                </CustomColumn>

                <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1.2rem'>
                    <CameraContainer>
                        {showScanner ? (
                            <video ref={videoRef} style={{ width: '100%' }} />
                        ) : (
                            <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.3rem'>
                                <CustomFont color='#777777' fontWeight='bold' font='1rem'>
                                    아래의 버튼을 클릭하시면,
                                </CustomFont>
                                <CustomFont color='#777777' fontWeight='bold' font='1rem'>
                                    이곳에 스캐너가 실행됩니다.
                                </CustomFont>
                            </CustomColumn>
                        )}
                    </CameraContainer>

                    <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.3rem'>
                        <CustomRow width='100%' alignItems='center' justifyContent='center' gap='0.3rem'>
                            <CustomFont color='#FF00FF' font='1rem' fontWeight='bold'>
                                lny021102
                            </CustomFont>
                            <CustomFont color='black' font='1rem'>
                                님,
                            </CustomFont>
                        </CustomRow>
                        <CustomFont color='black' font='1rem'>
                            자리를 양보해주신 분의 QR코드를
                        </CustomFont>
                        <CustomFont color='black' font='1rem'>
                            카메라로 인식해 주세요.
                        </CustomFont>
                    </CustomColumn>

                    <Button onClick={() => setShowScanner(!showScanner)}>
                        {showScanner ? 'QR 코드 스캐너 닫기' : 'QR 코드 스캐너 열기'}
                    </Button>
                </CustomColumn>
            </PageContainer>
        </ContainerCenter>
    );
};

export default CameraPage;
