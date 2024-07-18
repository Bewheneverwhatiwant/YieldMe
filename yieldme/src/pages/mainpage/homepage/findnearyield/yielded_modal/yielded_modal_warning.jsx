import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import CustomColumn from '../../../../../Components/Container/CustomColumn';
import CustomFont from '../../../../../Components/Container/CustomFont';
import CustomRow from '../../../../../Components/Container/CustomRow';

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
  gap: 6rem;
  position: relative;
  background-color: white;
  padding-bottom: 10vh;
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const Button = styled.button`
  background-color: #FEE187;
  padding: 10px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  width: 50%;
`;

const Circle = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
`;

const LoadingSpinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #4CAF50;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  animation: spin 1s linear infinite;
  margin: 20px 0;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const Content = styled.div`
width: 100%;
border: none;
border-radius: 20px;
background-color: grey;
color: white;
padding: 20px;
display: flex;
align-irems: center;
justify-content: center;
line-height: 7px;
`;

const YieldModalWarning = ({ onClose, circleData }) => {
    const [step, setStep] = useState(1);
    const [description, setDescription] = useState("");
    const [timeLeft, setTimeLeft] = useState(120); // 2분 = 120초

    useEffect(() => {
        if (step === 2 && timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);

            return () => clearInterval(timer);
        }

        if (timeLeft === 0) {
            alert("양보하시는 분의 응답이 도착하지 않아 자동으로 양보가 취소되었습니다.\n다른 양보 요청을 선택하세요.");
            onClose();
        }
    }, [timeLeft, step, onClose]);

    useEffect(() => {
        if (step === 2) {
            const loadingTimer = setTimeout(() => {
                setStep(3);
            }, 5000);

            return () => clearTimeout(loadingTimer);
        }
    }, [step]);

    const handleNextStep = () => {
        setStep(2);
    };

    return (
        <>
            <Backdrop onClick={onClose} />
            <Modal>
                {step === 1 && (
                    <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1.2rem'>
                        <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='0.8rem'>
                            <CustomFont color='black' font='0.8rem' fontWeight='bold'>나의 양보 금액 중 300원을 사용하여</CustomFont>
                            <CustomFont color='black' font='0.8rem' fontWeight='bold'>자리를 양보받습니다.</CustomFont>
                            <CustomFont color='black' font='0.8rem' fontWeight='bold'>양보해주시는 분의 QR코드를 인식하면</CustomFont>
                            <CustomFont color='black' font='0.8rem' fontWeight='bold'>300원이 전달됩니다.</CustomFont>
                        </CustomColumn>

                        <CustomRow width='100%' alignItems='center' justifyContent='center' gap='0.8rem'>
                            <Button onClick={onClose}>취소</Button>
                            <Button onClick={handleNextStep}>네, 이해했어요</Button>
                        </CustomRow>
                    </CustomColumn>


                )}
                {step === 2 && (
                    <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1.2rem'>
                        <CustomFont color='black' font='1rem' fontWeight='bold'>양보가 성사되었습니다!</CustomFont>
                        <CustomFont color='black' font='0.8rem'>양보해주시는 분의 인상착의와 위치를 기다리는 중이에요...</CustomFont>
                        <LoadingSpinner />
                        <CustomFont color='black' font='0.8rem'>{`남은 시간: ${Math.floor(timeLeft / 60)}분 ${timeLeft % 60}초`}</CustomFont>
                    </CustomColumn>
                )}
                {step === 3 && (
                    <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1.2rem'>
                        <CustomFont color='black' font='1rem' fontWeight='bold'>양보해주시는 분의 응답이 도착했어요.</CustomFont>

                        <CustomRow width='100%' alignItems='center' justifyContent='center' gap='0.8rem'>
                            <CustomColumn width='30%' alignItems='center' justifyContent='center' gap='0.2rem'>
                                <Circle width={circleData[0]} height={circleData[1]} color={circleData[2]} />
                                <CustomFont color={circleData[2]} font='0.8rem' fontWeight='bold'>{circleData[3]}</CustomFont>
                            </CustomColumn>
                            <CustomFont font='0.8rem' fontWeight='bold' color='black'>{circleData[5]}, 내 근처 약 {circleData[4]}m</CustomFont>
                        </CustomRow>

                        <Content>
                            여기 내용
                        </Content>

                        <CustomFont color='black' font='0.8rem'>양보해주시는 분의 자리로 이동하여 QR코드를 인식해주세요.</CustomFont>
                        <Button onClick={onClose}>확인</Button>
                    </CustomColumn>
                )}
                {step === 4 && (
                    <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1.2rem'>
                        <CustomFont color='black' font='0.8rem' fontWeight='bold'>내 정보가 성공적으로 전송되었습니다.</CustomFont>
                        <CustomFont color='black' font='0.8rem'>소중한 자리를 양보해주신 분, 진심으로 감사드립니다.</CustomFont>
                        <CustomFont color='black' font='0.8rem'>양보받는 분께 QR코드를 보여드려 인식한 후 금액이 적립됩니다.</CustomFont>
                        <Button onClick={onClose}>확인</Button>
                    </CustomColumn>
                )}
            </Modal>
        </>
    );
};

export default YieldModalWarning;
