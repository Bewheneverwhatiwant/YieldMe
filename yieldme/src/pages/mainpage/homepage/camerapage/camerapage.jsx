import React, { useState, useRef, useEffect, useContext } from 'react';
import styled from 'styled-components';
import QrScanner from 'qr-scanner';
import CustomFont from '../../../../Components/Container/CustomFont';
import CustomRow from '../../../../Components/Container/CustomRow';
import CustomColumn from '../../../../Components/Container/CustomColumn';
import StyledImg from '../../../../Components/Container/StyledImg';
import axios from 'axios';
import { AuthContext } from '../../../subpage/AuthContext';

const CameraContainer = styled.div`
  width: 80%;
  height: 240px;
  border: none;
  background-color: #FEE187;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  position: relative;
`;

const CameraPage = () => {
    const { auth } = useContext(AuthContext);
    const videoRef = useRef(null);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        let qrScanner;
        if (videoRef.current) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(stream => {
                    videoRef.current.srcObject = stream;
                    qrScanner = new QrScanner(
                        videoRef.current,
                        (result) => {
                            let yieldingUserId;
                            try {
                                const parsedResult = JSON.parse(result.data);
                                yieldingUserId = parsedResult.yielding_user_id;
                            } catch (e) {
                                yieldingUserId = result.data;  // Assuming result.data is the yielding_user_id directly
                            }
                            setShowModal(true);
                            setModalMessage(
                                <>
                                    <CustomFont color='black' fontWeight='bold'>자리를 양보해준 사람 ID: {yieldingUserId}</CustomFont>
                                    <CustomFont color='black' fontWeight='bold'>자리를 양보받은 사람 ID: {auth?.login_id}</CustomFont>
                                    <Button onClick={() => handleConfirm(yieldingUserId)}>확인</Button>
                                    <Button onClick={handleCancel}>취소</Button>
                                </>
                            );
                        },
                        { onDecodeError: (error) => console.error(error) }
                    );
                    qrScanner.start();

                    videoRef.current.onloadeddata = () => {
                        setIsVideoLoaded(true);
                    };
                })
                .catch(error => {
                    console.error("Error accessing camera: ", error);
                });
        }

        return () => {
            if (qrScanner) {
                qrScanner.stop();
            }
        };
    }, [auth]);

    // handleConfirm, handleCancel, handleModalClose functions remain unchanged

    return (
        <ContainerCenter>
            <PageContainer>
                <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='2rem'>
                    <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='0.2rem'>
                        <CustomFont color='#FFD15B' font='1.6rem' fontWeight='bold'>Yello, Yield 路!</CustomFont>
                        <CustomFont color='#FFD15B' font='0.8rem' fontWeight='bold'>여러분의 Yello로 세상이 따뜻해져요.</CustomFont>
                    </CustomColumn>
                    <CameraContainer>
                        {!isVideoLoaded && <LoadingText>QR스캐너 준비 중...</LoadingText>}
                        <video ref={videoRef} style={{ width: '100%', height: '100%' }} />
                    </CameraContainer>
                    <CustomFont color='black' font='0.8rem' fontWeight='bold'>자리를 양보해주신 분의 QR코드를 인식해주세요.</CustomFont>
                </CustomColumn>
            </PageContainer>

            <Modal show={showModal}>
                {modalMessage}
            </Modal>
        </ContainerCenter>
    );
};

export default CameraPage;
