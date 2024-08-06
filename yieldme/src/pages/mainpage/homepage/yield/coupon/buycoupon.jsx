import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CustomColumn from '../../../../../Components/Container/CustomColumn';
import CustomFont from '../../../../../Components/Container/CustomFont';
import CustomRow from '../../../../../Components/Container/CustomRow';
import Coupon from './coupon';
import { AuthContext } from '../../../../subpage/AuthContext';
import { useNavigate } from 'react-router-dom';

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
  justify-content: flex-start;
  padding-top: 8vh;
  padding-bottom: 5vh;
  gap: 3rem;
  position: relative;
  background-color: white;
  padding-bottom: 10vh;
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-size: 1rem;
  background-color: ${props => (props.disabled ? '#E0E0E0' : '#FEE187')};
  color: black;
  border: none;
  border-radius: 5px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const Button2 = styled.button`
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  background-color: ${props => (props.disabled ? '#E0E0E0' : '#FEE187')};
  color: black;
  border: none;
  border-radius: 1rem;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  margin-top: 4vh;
`;

const Modal = styled.div`
  width: 250px;
  height: 70px;
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

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: ${props => (props.show ? 'block' : 'none')};
`;

const PointsDisplay = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 10px;
    padding: 2px;
    background: linear-gradient(to right, #FFB700, #FFE177);
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
            mask-composite: exclude; 
  }

  & > * {
    position: relative;
    z-index: 1;
  }
`;

const BuyCoupon = () => {
    const { auth } = useContext(AuthContext);
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    const [estimatedCost, setEstimatedCost] = useState(500);
    const [cardNumber, setCardNumber] = useState(null);
    const [checkbox1, setCheckbox1] = useState(false);
    const [checkbox2, setCheckbox2] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    useEffect(() => {
        const fetchCardInfo = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_SERVER}/getInfo/`, {
                    headers: {
                        Authorization: `Bearer ${auth.accessToken}`,
                    },
                });
                setCardNumber(response.data.card_number);
            } catch (error) {
                console.error('Failed to fetch card info', error);
            }
        };
        fetchCardInfo();
    }, [auth.accessToken]);

    const handleQuantityChange = (change) => {
        setQuantity(prevQuantity => {
            const newQuantity = prevQuantity + change;
            if (newQuantity < 1) return 1;
            setEstimatedCost(newQuantity * 500);
            return newQuantity;
        });
    };

    const handleCheckboxChange = (index) => {
        if (index === 1) setCheckbox1(!checkbox1);
        if (index === 2) setCheckbox2(!checkbox2);
    };

    const handleBuyClick = async () => {
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_SERVER}/buy_priority/`,
                {
                    point: estimatedCost,
                },
                {
                    headers: {
                        Authorization: `Bearer ${auth.accessToken}`,
                    },
                }
            );

            if (response.status === 200) {
                setModalMessage('우선권 구매가 완료되었습니다!');
                setShowModal(true);
            } else {
                setModalMessage('우선권 구매에 실패하였습니다.');
                setShowModal(true);
            }
        } catch (error) {
            console.error('Buy priority error:', error.response ? error.response.data : error.message);
            setModalMessage('우선권 구매에 실패하였습니다.');
            setShowModal(true);
        }
    };

    const Back = () => {
        setShowModal(false);
        navigate('/');
    }

    const isButtonDisabled = !cardNumber || !checkbox1 || !checkbox2;

    return (
        <ContainerCenter>
            <PageContainer>

                <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                    <CustomRow width='80%' alignItems='center' justifyContent='start'>
                        <CustomFont color='black' fontWeight='bold' font='1rem'>나의 양보 요청을 먼저 띄워드릴게요.</CustomFont>
                    </CustomRow>
                    <Coupon />
                    <CustomRow width='80%' alignItems='center' justifyContent='end' gap='0.5rem'>
                        <Button onClick={() => handleQuantityChange(-1)} disabled={quantity <= 1}>-</Button>
                        <CustomFont color='black' fontWeight='bold'>{quantity}</CustomFont>
                        <Button onClick={() => handleQuantityChange(1)}>+</Button>
                    </CustomRow>
                </CustomColumn>

                <CustomColumn width='80%' alignItems='center' justifyContent='center' gap='0.5rem'>

                    <CustomRow width='100%' alignItems='center' justifyContent='start'>
                        <PointsDisplay>
                            <CustomRow width='100%' alignItems='center' justifyContent='space-between'>
                                <CustomFont color='black' font='0.8rem' fontWeight='bold'>결제금액</CustomFont>
                                <CustomFont color='black' font='0.8rem'>{estimatedCost}원</CustomFont>
                            </CustomRow>
                        </PointsDisplay>
                    </CustomRow>

                    {cardNumber ? (
                        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>

                            <PointsDisplay>
                                <CustomRow width='100%' alignItems='center' justifyContent='space-between'>
                                    <CustomFont color='black' font='0.8rem' fontWeight='bold'>결제수단</CustomFont>
                                    <CustomFont color='black'>{cardNumber}</CustomFont>
                                </CustomRow>
                            </PointsDisplay>

                            <CustomRow width='100%' alignItems='center' justifyContent='end'>
                                <CustomColumn width='50%' alignItems='end' justifyContent='center' gap='0.5rem'>
                                    <CustomRow width='100%' alignItems='center' justifyContent='start'>
                                        <input type='checkbox' checked={checkbox1} onChange={() => handleCheckboxChange(1)} />
                                        <CustomFont color='black' font='0.6rem'>결제수단에 동의합니다.</CustomFont>
                                    </CustomRow>
                                    <CustomRow width='100%' alignItems='center' justifyContent='start'>
                                        <input type='checkbox' checked={checkbox2} onChange={() => handleCheckboxChange(2)} />
                                        <CustomFont color='black' font='0.6rem'>서비스 약관에 동의합니다.</CustomFont>
                                    </CustomRow>
                                </CustomColumn>
                            </CustomRow>

                            <Button2 onClick={handleBuyClick} disabled={isButtonDisabled}>
                                <CustomFont color='black' font='1rem' fontWeight='bold'>결제하기</CustomFont>
                            </Button2>
                        </CustomColumn>
                    ) : (
                        <CustomFont color='gray'>결제수단 등록 후 이용하실 수 있는 기능이에요.</CustomFont>
                    )}
                </CustomColumn>
            </PageContainer>
            <Backdrop show={showModal} />
            <Modal show={showModal}>
                <CustomFont color='black' font='1.2rem' fontWeight='bold'>{modalMessage}</CustomFont>
                {modalMessage === '우선권 구매가 완료되었습니다!' ? (
                    <Button onClick={Back}>확인</Button>
                ) : (
                    <Button onClick={() => setShowModal(false)}>확인</Button>
                )}
            </Modal>
        </ContainerCenter>
    );
};

export default BuyCoupon;
