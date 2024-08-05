import React, { useState, useEffect, useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CustomColumn from '../../../Components/Container/CustomColumn';
import CustomRow from '../../../Components/Container/CustomRow';
import CustomFont from '../../../Components/Container/CustomFont';
import { AuthContext } from '../../subpage/AuthContext';

const ContainerCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;

const PageContainer = styled(ContainerCenter)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 16vh;
  padding-bottom: 5vh;
  gap: 3rem;
  position: relative;
  background-color: black;
  padding-bottom: 10vh;
`;

const Video = styled.video`
  width: 100%;
  max-width: 800px;
  height: auto;
  border-radius: 10px;
`;

const TimerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.7);
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
`;

const Modal = styled.div`
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
  display: ${(props) => (props.show ? 'block' : 'none')};
`;

const Button = styled.button`
  background-color: #FEE187;
  padding: 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  margin: 5px;
`;

const Spinner = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingIndicator = styled.div`
  border: 4px solid #f3f3f3;
  border-radius: 50%;
  border-top: 4px solid #3498db;
  width: 30px;
  height: 30px;
  animation: ${Spinner} 2s linear infinite;
  margin: 20px auto;
`;

const AdPage = () => {
    const [timeLeft, setTimeLeft] = useState(5);
    const [showModal, setShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const { auth } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft]);

    useEffect(() => {
        const videoElement = document.getElementById('adVideo');
        if (videoElement) {
            videoElement.play();
            videoElement.controls = false;
        }
    }, []);

    const handleClose = async () => {
        setShowModal(true);
        setIsLoading(true);

        try {
            const response = await axios.post(`${import.meta.env.VITE_SERVER}/watch_ad/`,
                {
                    point: "100"
                }, {
                headers: {
                    Authorization: `Bearer ${auth.accessToken}`
                }
            });

            setIsLoading(false);
            if (response.status === 200) {
                setModalMessage('100원이 적립되었습니다.');
            } else {
                setModalMessage('적립에 실패하였습니다.');
            }
        } catch (error) {
            setIsLoading(false);
            setModalMessage('적립에 실패하였습니다.');
        }
    };

    const handleModalClose = () => {
        setShowModal(false);
        navigate(-1);
    };

    return (
        <ContainerCenter>
            <PageContainer>
                <CustomColumn width='100%' alignItems='center' justifyContent='center'>
                    <CustomRow width='90%' alignItems='center' justifyContent='end'>
                        <TimerContainer onClick={handleClose}>
                            {timeLeft > 0 ? timeLeft : 'x'}
                        </TimerContainer>
                    </CustomRow>
                    <Video id="adVideo" autoPlay muted>
                        <source src="/videos/advideo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </Video>
                </CustomColumn>
            </PageContainer>
            <Modal show={showModal}>
                {isLoading ? (
                    <>
                        <LoadingIndicator />
                        <CustomFont color='black' fontWeight='bold'>적립 중입니다...</CustomFont>
                    </>
                ) : (
                    <>
                        <CustomFont color='black' fontWeight='bold'>{modalMessage}</CustomFont>
                        <Button onClick={handleModalClose}>확인</Button>
                    </>
                )}
            </Modal>
        </ContainerCenter>
    );
};

export default AdPage;
