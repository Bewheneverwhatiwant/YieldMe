import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CustomFont from '../../../../Components/Container/CustomFont';
import { AuthContext } from '../../../subpage/AuthContext';
import CustomColumn from '../../../../Components/Container/CustomColumn';
import CustomRow from '../../../../Components/Container/CustomRow';

const Container = styled.div`
width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  gap: 1rem;
`;

const ButtonContainer = styled.div`
  width: 320px;
  height: 220px;
  background-image: url('favButtonImg.png');
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  text-align: center;
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

const FavorComponent5 = () => {
    const { auth } = useContext(AuthContext);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const handleButtonClick = () => {
        if (!auth.accessToken) {
            setShowModal(true);
        } else {
            navigate('/buycoupon');
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <Container>
            <CustomRow width='100%' alignItems='center' justifyContent='start'>
                <CustomFont color='black' fontWeight='bold' font='0.9rem' >빨리 앉고 싶은 당신을 위해</CustomFont>
            </CustomRow>

            <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.1rem'>
                <ButtonContainer onClick={handleButtonClick} />
                <CustomRow width='100%' alignItems='center' justifyContent='flex-end'>
                    <CustomFont color='black' font='0.8rem'>클릭하여 궁금증 해결</CustomFont>
                </CustomRow>
            </CustomColumn>

            {showModal && (
                <>
                    <Backdrop onClick={handleCloseModal} />
                    <Modal>
                        <CustomFont color='black' fontWeight='bold'>로그인 후 이용하실 수 있는 기능입니다.</CustomFont>
                        <button onClick={handleCloseModal}>확인</button>
                    </Modal>
                </>
            )}
        </Container>
    );
};

export default FavorComponent5;
