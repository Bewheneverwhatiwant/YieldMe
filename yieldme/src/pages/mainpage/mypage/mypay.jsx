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
  min-height: 100vh;
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
  background-color: #FFEB3B;
  padding: 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  margin: 5px;
`;

const MyPay = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [accountInput, setAccountInput] = useState('');
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

    const handleConfirmChange = () => {
        if (accountInput === '') {
            alert('변경할 계좌를 입력해주세요.');
        } else {
            alert('성공적으로 계좌가 변경되었습니다.');
            setIsModalOpen(false);
        }
    };

    const handleChangePayMethod = () => {
        navigate('/changepaymethod');
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
                        <Input
                            type="text"
                            placeholder="새 계좌 번호를 입력하세요"
                            value={accountInput}
                            onChange={handleInputChange}
                        />
                        <div>
                            <ModalButton onClick={handleConfirmChange}>확인</ModalButton>
                            <ModalButton onClick={handleCloseModal}>취소</ModalButton>
                        </div>
                    </Modal>
                </>
            )}
        </ContainerCenter>
    );
};

export default MyPay;
