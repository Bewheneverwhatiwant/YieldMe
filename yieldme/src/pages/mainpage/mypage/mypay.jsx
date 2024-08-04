import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CustomRow from '../../../Components/Container/CustomRow';
import CustomFont from '../../../Components/Container/CustomFont';
import CustomColumn from '../../../Components/Container/CustomColumn';

const ContainerCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: white;
  padding: 20px;
  gap: 20px;
`;

const AccountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  width: 90%;
`;

const AccountInfo = styled.div`
  background-color: #FFD15B;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ChangeButton = styled.button`
  background-color: #FFE177;
  padding: 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  width: 20%;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  border: 1px solid #FFEB3B;
  border-radius: 10px;
  padding: 20px;
  width: 100%;
`;

const CardImage = styled.img`
  width: 80%;
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 500px;
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

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ModalButton = styled.button`
  width: 100%;
  background-color: #FEE187;
  padding: 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  margin: 5px;
`;

const CardModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const CardLogo = styled.img`
  width: 100px;
  height: 50px;
  margin: 10px;
  cursor: pointer;
`;

const CardDiv = styled.div`
border: 1px solid #D9D9D9;
background-color: white;
border-radius: 10px;
padding: 10px;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
width: 100%;
`;

const MyPay = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCardModalOpen, setIsCardModalOpen] = useState(false);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const [accountInput, setAccountInput] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cardPw, setCardPw] = useState('');
    const [expiryMonth, setExpiryMonth] = useState('');
    const [expiryYear, setExpiryYear] = useState('');
    const [cvc, setCvc] = useState('');
    const navigate = useNavigate();

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleInputChange = (e) => {
        setAccountInput(e.target.value);
    };

    const handleCardNumberChange = (e) => {
        setCardNumber(e.target.value);
    };

    const handleCardPwChange = (e) => {
        setCardPw(e.target.value);
    };

    const handleExpiryMonthChange = (e) => {
        setExpiryMonth(e.target.value);
    };

    const handleExpiryYearChange = (e) => {
        setExpiryYear(e.target.value);
    };

    const handleCvcChange = (e) => {
        setCvc(e.target.value);
    };

    const handleConfirmChange = () => {
        if (accountInput === '' || cardPw === '') {
            alert('모든 정보를 입력해주세요.');
        } else {
            alert('성공적으로 계좌가 변경되었습니다.');
            setIsModalOpen(false);
        }
    };

    const handleChangePayMethod = () => {
        setIsCardModalOpen(true);
    };

    const handleCardClick = () => {
        setIsCardModalOpen(false);
        setIsSuccessModalOpen(true);
    };

    const handleSuccessModalClose = () => {
        setIsSuccessModalOpen(false);
    };

    const handleRegisterCard = () => {
        if (cardNumber === '' || expiryMonth === '' || expiryYear === '' || cvc === '') {
            alert('모든 필드를 입력해주세요.');
        } else {
            setIsCardModalOpen(false);
            setIsSuccessModalOpen(true);
        }
    };

    return (
        <ContainerCenter>
            <CustomRow width='90%' alignItems='center' justifyContent='flex-start' gap='1rem'>
                <CustomFont color='black' font='1.3rem' fontWeight='bold'>내 계좌</CustomFont>
            </CustomRow>
            <AccountContainer>
                <AccountInfo>NH 농협 | 123-****-****-**</AccountInfo>
                <ChangeButton onClick={handleOpenModal}>
                    <CustomFont color='black' font='0.8rem' fontWeight='bold'>변경</CustomFont>
                </ChangeButton>
            </AccountContainer>

            <CustomRow width='90%' alignItems='center' justifyContent='flex-start' gap='1rem'>
                <CustomFont color='black' font='1.3rem' fontWeight='bold'>결제수단</CustomFont>
            </CustomRow>
            <CardContainer>
                <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.7rem'>
                    <CardImage src="ex_card_img.png" alt="결제수단 이미지" />
                    <div>NH 체크카드 | 352-****-****-**</div>
                    <CustomRow width='100%' alignItems='center' justifyContent='flex-end'>
                        <ChangeButton onClick={handleChangePayMethod}>
                            <CustomFont color='black' font='0.8rem' fontWeight='bold'>변경</CustomFont>
                        </ChangeButton>
                    </CustomRow>
                </CustomColumn>
            </CardContainer>

            {isModalOpen && (
                <>
                    <Backdrop onClick={handleCloseModal} />
                    <Modal>
                        <CardModal>
                            <CustomRow width='100%' alignItems='center' justifyContent='start'>
                                <CustomFont color='black' font='1rem'>은행사를 선택해주세요.</CustomFont>
                            </CustomRow>
                            <CardDiv>
                                {Array.from({ length: 10 }, (_, index) => (
                                    <CardLogo
                                        key={index}
                                        src={`card${index + 1}.png`}
                                        alt={`카드사 로고 ${index + 1}`}
                                        onClick={() => { }}
                                    />
                                ))}
                            </CardDiv>

                            <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.1rem'>
                                <Input
                                    type="text"
                                    placeholder="계좌번호를 입력해주세요."
                                    value={cardNumber}
                                    onChange={handleCardNumberChange}
                                />
                                <Input
                                    type="text"
                                    placeholder="비밀번호를 입력해주세요."
                                    value={cardPw}
                                    onChange={handleCardPwChange}
                                />
                            </CustomColumn>
                            <ModalButton onClick={handleConfirmChange}>계좌 등록하기</ModalButton>
                        </CardModal>
                    </Modal>
                </>
            )}

            {isCardModalOpen && (
                <>
                    <Backdrop onClick={() => setIsCardModalOpen(false)} />
                    <Modal>
                        <CardModal>
                            <CustomFont color='black' font='1.2rem' fontWeight='bold'>카드사를 선택해주세요.</CustomFont>
                            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                                {Array.from({ length: 11 }, (_, index) => (
                                    <CardLogo
                                        key={index}
                                        src={`card${index + 1}.png`}
                                        alt={`카드사 로고 ${index + 1}`}
                                        onClick={() => { }}
                                    />
                                ))}
                            </div>
                            <Input
                                type="text"
                                placeholder="카드 번호를 입력해주세요."
                                value={cardNumber}
                                onChange={handleCardNumberChange}
                            />
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Input
                                    type="text"
                                    placeholder="MM"
                                    value={expiryMonth}
                                    onChange={handleExpiryMonthChange}
                                    style={{ width: '30%' }}
                                />
                                <Input
                                    type="text"
                                    placeholder="YY"
                                    value={expiryYear}
                                    onChange={handleExpiryYearChange}
                                    style={{ width: '30%' }}
                                />
                                <Input
                                    type="text"
                                    placeholder="CVC"
                                    value={cvc}
                                    onChange={handleCvcChange}
                                    style={{ width: '30%' }}
                                />
                            </div>
                            <ModalButton onClick={handleRegisterCard}>등록하기</ModalButton>
                        </CardModal>
                    </Modal>
                </>
            )}

            {isSuccessModalOpen && (
                <>
                    <Backdrop onClick={handleSuccessModalClose} />
                    <Modal>
                        <CustomFont color='black' font='1.2rem' fontWeight='bold'>성공적으로 결제수단이 등록/변경되었습니다!</CustomFont>
                        <ModalButton onClick={handleSuccessModalClose}>확인</ModalButton>
                    </Modal>
                </>
            )}
        </ContainerCenter>
    );
};

export default MyPay;
