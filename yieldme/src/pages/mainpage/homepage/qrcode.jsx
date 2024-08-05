import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import styled from 'styled-components';
import CustomFont from '../../../Components/Container/CustomFont';
import CustomRow from '../../../Components/Container/CustomRow';
import CustomColumn from '../../../Components/Container/CustomColumn';
import StyledImg from '../../../Components/Container/StyledImg';
import { useNavigate } from 'react-router-dom';

const QRcircle = styled.div`
  width: 60%;
  height: 15rem;
  padding: 1rem;
  border-radius: 50%;
  box-shadow: 0px 4px 6px rgba(0, 0.1, 0.1, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CashBackButton = styled.button`
  width: 20%;
  background-color: #FEE187;
  color: black;
  border: none;
  padding: 0.2rem;
  font-size: 0.8rem;
  cursor: pointer;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
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

const QRCodeSection = ({ auth }) => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const handleQRScan = () => {
        setShowModal(true);
        setModalMessage(
            <>
                <CustomFont color='black' fontWeight='bold'>자리를 양보해준 사람 ID: lny021102</CustomFont>
                <Button onClick={handleModalClose}>확인</Button>
                <Button onClick={handleCancel}>취소</Button>
            </>
        );
    };

    const handleCancel = () => {
        setShowModal(false);
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    return (
        <>
            {auth.accessToken ? (
                <>
                    <CustomRow width='100%' alignItems='center' justifyContent='center' gap='0.3rem'>
                        <CustomFont color='black' font='0.9rem' fontWeight='bold'>내 자리를 양보받는 분께 QR코드를 보여드리세요.</CustomFont>
                    </CustomRow>

                    <QRcircle>
                        {/* 여기서 로그인 한 사용자의 id로 QR코드의 값을 지정함 */}
                        <QRCodeCanvas value={auth.login_id} size={150} onClick={handleQRScan} />
                    </QRcircle>
                </>
            ) : (
                <>
                    <CustomRow width='100%' alignItems='center' justifyContent='center' gap='0.3rem'>
                        <CustomFont color='black' font='0.9rem' fontWeight='bold'>
                            회원가입 후 로그인하시면 나만의 QR코드가 보여요!
                        </CustomFont>
                    </CustomRow>

                    <QRcircle>
                        <StyledImg src={'icon_before_login_qr.png'} width='150px' height='150px' />
                    </QRcircle>
                </>
            )}

            <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1.5rem'>
                <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                    <CustomRow width='100%' alignItems='center' justifyContent='center' gap='0.3rem'>
                        <CustomFont color='black' font='1rem' fontWeight='bold'>
                            {auth.accessToken ? auth.login_id : '예비 yello'}
                        </CustomFont>
                        <CustomFont color='black' font='1rem'>
                            님
                        </CustomFont>
                    </CustomRow>

                    <CustomRow width='100%' alignItems='center' justifyContent='center' gap='0.3rem'>
                        {auth.point ? (
                            <>
                                <CustomFont color='black' font='1rem'>
                                    양보 누적 금액:
                                </CustomFont>
                                <CustomFont color='black' font='1rem'>
                                    {auth.point}
                                </CustomFont>
                            </>
                        ) : (
                            <CustomFont color='black' font='1rem' fontWeight='bold'>
                                로그인 후 나의 양보금액을 확인하세요!
                            </CustomFont>
                        )}

                        {auth.accessToken && (
                            <CashBackButton onClick={() => navigate('/cashback')}>
                                <CustomFont fontWeight='bold' color='black'>캐시백</CustomFont>
                            </CashBackButton>
                        )}
                    </CustomRow>
                </CustomColumn>
            </CustomColumn>

            <Modal show={showModal}>
                {modalMessage}
            </Modal>
        </>
    );
};

export default QRCodeSection;
