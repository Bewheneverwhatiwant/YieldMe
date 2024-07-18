import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import CustomColumn from '../../../../../Components/Container/CustomColumn';
import CustomFont from '../../../../../Components/Container/CustomFont';
import CustomRow from '../../../../../Components/Container/CustomRow';

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

const YieldModalWarning = ({ onClose }) => {

    return (
        <>
            <Backdrop onClick={onClose} />
            <Modal>
                <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1.2rem'>
                    <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.8rem'>
                        <CustomFont color='black' font='0.8rem' fontWeight='bold'>양보받는 분께 나의 QR코드를 보여드리세요.</CustomFont>
                        <CustomFont color='black' font='0.8rem' fontWeight='bold'>QR코드가 인식되면 300원이 전달됩니다.</CustomFont>
                    </CustomColumn>

                    <CustomRow width='100%' alignItems='center' justifyContent='center' gap='0.8rem'>
                        <Button onClick={onClose}>취소</Button>
                        <Button>네, 이해했어요</Button>
                    </CustomRow>
                </CustomColumn>
            </Modal>
        </>
    );
};

export default YieldModalWarning;
