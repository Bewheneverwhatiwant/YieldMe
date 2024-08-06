import React, { useState, useRef, useEffect, useContext } from 'react';
import styled from 'styled-components';
import QrScanner from 'qr-scanner';
import CustomFont from '../../../../Components/Container/CustomFont';
import CustomRow from '../../../../Components/Container/CustomRow';
import CustomColumn from '../../../../Components/Container/CustomColumn';
import StyledImg from '../../../../Components/Container/StyledImg';
import axios from 'axios';
import { AuthContext } from '../../../subpage/AuthContext';

// 현재 오류없음, 정상작동 !

const ContainerCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  width: 100%;
  min-height: 100vh;
`;

const PageContainer = styled(ContainerCenter)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 2vh;
  padding-bottom: 5vh;
  gap: 5rem;
  position: relative;
  background-color: white;
`;

const CameraContainer = styled.div`
  width: 80%;
  height: 240px;
  border: 1px solid black;
  background-color: transparent;
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

const Modal = styled.div`
width: 70%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  text-align: center;
  display: ${props => (props.show ? 'block' : 'none')};
`;

const Button = styled.button`
  background-color: #FEE187;
  color: black;
  border: none;
  padding: 0.8rem;
  font-size: 0.8rem;
  cursor: pointer;
  border-radius: 8px;
  margin: 5px;
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
            qrScanner = new QrScanner(
                videoRef.current,
                (result) => {
                    let yieldingUserId;
                    try {
                        const parsedResult = JSON.parse(result.data);
                        yieldingUserId = parsedResult.yielding_user_id;
                    } catch (e) {
                        yieldingUserId = result.data;
                    }
                    setShowModal(true);
                    setModalMessage(
                        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.5rem'>
                            <CustomFont color='black' fontWeight='bold'>자리를 양보해준 사람 ID: {yieldingUserId}</CustomFont>
                            <CustomFont color='black' fontWeight='bold'>자리를 양보받은 사람 ID: {auth?.login_id}</CustomFont>
                            <CustomRow width='100%' alignItems='center' justifyContent='space-around'>
                                <Button onClick={() => handleConfirm(yieldingUserId)}>확인</Button>
                                <Button onClick={handleCancel}>취소</Button>
                            </CustomRow>
                        </CustomColumn>
                    );
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
    }, [auth]);

    const handleConfirm = async (yieldingUserId) => {
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_SERVER}/edit_score/`,
                {
                    yielding_user_id: auth.login_id,
                    receiving_user_id: yieldingUserId
                },
                {
                    headers: {
                        Authorization: `Bearer ${auth.accessToken}`
                    }
                }
            );

            if (response.status === 200) {
                setModalMessage(
                    <>
                        <CustomFont color='black' fontWeight='bold'>성공적으로 자리가 양보되었습니다!</CustomFont>
                        <Button onClick={handleModalClose}>확인</Button>
                    </>
                );
            } else {
                console.log(response.data);
                setModalMessage(
                    <>
                        <CustomFont color='black' fontWeight='bold'>자리 양보에 오류가 발생했습니다.</CustomFont>
                        <Button onClick={handleModalClose}>확인</Button>
                    </>
                );
            }
        } catch (error) {
            setModalMessage(
                <>
                    <CustomFont color='black' fontWeight='bold'>자리 양보에 오류가 발생했습니다.</CustomFont>
                    <Button onClick={handleModalClose}>확인</Button>
                </>
            );
        }
    };

    const handleCancel = () => {
        setShowModal(false);
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    return (
        <ContainerCenter>
            <PageContainer>
                <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='2rem'>
                    <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='0.2rem'>
                        <CustomFont color='#FFD15B' font='1.6rem' fontWeight='bold'>Yello, Yield 路!</CustomFont>
                        <CustomFont color='#FFD15B' font='0.8rem' fontWeight='bold'>여러분의 Yello로 세상이 따뜻해져요.</CustomFont>
                    </CustomColumn>
                    <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='0.2rem'>
                        <CustomRow width='100%' alignItems='center' justifyContent='space-around'>
                            <StyledImg src={'icon_wound.png'} width='50px' height='50px' />
                            <StyledImg src={'icon_world.png'} width='100px' height='100px' />
                            <StyledImg src={'icon_oldest.png'} width='50px' height='50px' />
                        </CustomRow>
                        <CustomRow width='100%' alignItems='center' justifyContent='space-around'>
                            <StyledImg src={'icon_normal.png'} width='50px' height='50px' />
                            <StyledImg src={'icon_preg.png'} width='50px' height='50px' />
                        </CustomRow>
                    </CustomColumn>
                    <CustomFont color='black' font='1rem' fontWeight='bold'>소중한 자리 양보, 감사드립니다.</CustomFont>
                    <CameraContainer>
                        {!isVideoLoaded && <LoadingText>QR스캐너 준비 중...</LoadingText>}
                        <video ref={videoRef} style={{ width: '100%' }} />
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
