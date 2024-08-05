import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CustomColumn from '../../../../../Components/Container/CustomColumn';
import CustomFont from '../../../../../Components/Container/CustomFont';
import CustomRow from '../../../../../Components/Container/CustomRow';
import { AuthContext } from '../../../../subpage/AuthContext';

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

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
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

const LoadingIndicator = styled.div`
  border: 4px solid #f3f3f3;
  border-radius: 50%;
  border-top: 4px solid #3498db;
  width: 30px;
  height: 30px;
  animation: spin 2s linear infinite;
  margin: 20px auto;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const YieldModalWarning = ({ onClose, circleData }) => {
    const { auth } = useContext(AuthContext);
    const [step, setStep] = useState(1);
    const [description, setDescription] = useState("");
    const [timeLeft, setTimeLeft] = useState(120);
    const [modalMessage, setModalMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (step === 2 && timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);

            return () => clearInterval(timer);
        }

        if (timeLeft === 0) {
            alert("2분 간 정보를 전송하지 않으셔서 양보가 취소되었습니다.");
            onClose();
        }
    }, [timeLeft, step, onClose]);

    const handleNextStep = () => {
        setStep(2);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleSendInfo = async () => {
        if (description === "") {
            alert("인상착의를 입력하세요.");
        } else {
            setIsLoading(true);
            try {
                const response = await axios.post(
                    `${import.meta.env.VITE_SERVER}/matched/`,
                    {
                        yielding_user_id: auth.login_id,
                        receiving_user_id: "lny021102",
                        describe: description
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${auth.accessToken}`
                        }
                    }
                );

                if (response.status === 201) {

                    setStep(3);
                } else {
                    setModalMessage("요청 중 오류가 발생했습니다.");
                    console.log(response.data);
                    console.log(response.status);

                    setStep(4);
                }
            } catch (error) {
                setModalMessage("요청 중 오류가 발생했습니다.");
                console.log(response.data);
                console.log(response.status);
                setStep(4);
            } finally {
                setIsLoading(false);
            }
        }
    };

    const handleModalClose = () => {
        setModalMessage("");
        onClose();
    };

    return (
        <>
            <Backdrop onClick={onClose} />
            <Modal>
                {isLoading ? (
                    <CustomColumn width='100%' alignItems='center' justifyContent='center'>
                        <LoadingIndicator />
                        <CustomFont color='black' fontWeight='bold'>정보를 전송하고 있습니다...</CustomFont>
                    </CustomColumn>
                ) : step === 1 ? (
                    <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1.2rem'>
                        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.8rem'>
                            <CustomFont color='black' font='0.8rem' fontWeight='bold'>양보받는 분께 나의 QR코드를 보여드세요.</CustomFont>
                            <CustomFont color='black' font='0.8rem' fontWeight='bold'>QR코드가 인식되면 300원이 전달됩니다.</CustomFont>
                        </CustomColumn>

                        <CustomRow width='100%' alignItems='center' justifyContent='center' gap='0.8rem'>
                            <Button onClick={onClose}>취소</Button>
                            <Button onClick={handleNextStep}>네, 이해했어요</Button>
                        </CustomRow>
                    </CustomColumn>
                ) : step === 2 ? (
                    <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1.2rem'>
                        <CustomFont color='black' font='1rem' fontWeight='bold'>양보가 성사되었습니다!</CustomFont>
                        <CustomFont color='black' font='0.8rem'>나의 인상착의와 위치를 보내주세요.</CustomFont>

                        <CustomRow width='100%' alignItems='center' justifyContent='center' gap='0.8rem'>
                            <CustomColumn width='30%' alignItems='center' justifyContent='center' gap='0.2rem'>
                                <Circle width={circleData[0]} height={circleData[1]} color={circleData[2]} />
                                <CustomFont color={circleData[2]} font='0.8rem' fontWeight='bold'>{circleData[3]}</CustomFont>
                            </CustomColumn>

                            <CustomFont font='0.8rem' fontWeight='bold' color='black'>{circleData[5]}, 내 근처 약 {circleData[4]}m</CustomFont>
                        </CustomRow>

                        <Input type="text" value={description} onChange={handleDescriptionChange} placeholder="예) 4호선 7-3칸 파란 맨투맨에 모자를 쓰고 있어요." />

                        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.2rem'>
                            <CustomFont color='black' font='0.8rem'>2분 동안 정보를 보내지 않으면</CustomFont>
                            <CustomFont color='black' font='0.8rem'>양보가 자동으로 취소됩니다!</CustomFont>
                        </CustomColumn>
                        <CustomFont color='red' font='0.8rem' fontWeight='bold'>{`남은 시간: ${Math.floor(timeLeft / 60)}분 ${timeLeft % 60}초`}</CustomFont>
                        <Button onClick={handleSendInfo}>내 정보 보내기</Button>
                    </CustomColumn>
                ) : step === 3 ? (
                    <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1.2rem'>
                        <CustomFont color='black' font='0.8rem' fontWeight='bold'>내 정보가 성공적으로 전송되었습니다.</CustomFont>
                        <CustomFont color='black' font='0.8rem'>소중한 자리를 양보해주신 분, 진심으로 감사드립니다.</CustomFont>
                        <CustomFont color='black' font='0.8rem'>양보받는 분께 QR코드를 보여드려 인식한 후 금액이 적립됩니다.</CustomFont>
                        <Button onClick={onClose}>확인</Button>
                    </CustomColumn>
                ) : (
                    <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1.2rem'>
                        <CustomFont color='black' fontWeight='bold'>{modalMessage}</CustomFont>
                        <Button onClick={handleModalClose}>확인</Button>
                    </CustomColumn>
                )}
            </Modal>
        </>
    );
};

export default YieldModalWarning;
