import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CustomFont from '../../../../Components/Container/CustomFont';
import CustomColumn from '../../../../Components/Container/CustomColumn';
import CustomRow from '../../../../Components/Container/CustomRow';
import StyledImg from '../../../../Components/Container/StyledImg';
import { AuthContext } from '../../../subpage/AuthContext';

const BannerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 120px;
  padding: 5px;
  cursor: pointer;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1), 0 2px 10px rgba(0, 0, 0, 0.1);
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
  border-radius: 10px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  margin: 5px;
`;

const FavorComponent4 = () => {
    const { auth } = useContext(AuthContext);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const handleBannerClick = () => {
        if (auth && auth.accessToken) {
            navigate('/adpage');
        } else {
            setShowModal(true);
        }
    };

    const handleCloseModal = () => {
        navigate('/login');
        setShowModal(false);
    };

    return (
        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
            <CustomFont color='black' font='1rem'>30초 광고를 시청하고 100원을 얻어요.</CustomFont>
            <BannerContainer onClick={handleBannerClick}>
                <CustomRow width='100%' alignItems='center' justifyContent='space-around'>
                    <StyledImg src={'adBannerImg1.png'} width='60px' height='60px' />
                    <StyledImg src={'adBannerImg2.png'} width='60px' height='60px' />
                    <StyledImg src={'adBannerImg3.png'} width='60px' height='60px' />
                    <StyledImg src={'adBannerImg4.png'} width='60px' height='60px' />
                </CustomRow>
            </BannerContainer>
            <CustomRow width='90%' alignItems='center' justifyContent='end'>
                <CustomFont color='black' font='0.7rem'>클릭하여 점수 충전</CustomFont>
            </CustomRow>
            {showModal && (
                <>
                    <Backdrop onClick={handleCloseModal} />
                    <Modal>
                        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                            <CustomFont color='black' fontWeight='bold' font='1rem'>로그인 후 이용하실 수 있는 기능입니다!</CustomFont>
                            <Button onClick={handleCloseModal}>
                                <CustomFont color='black' font='1rem'>확인</CustomFont>
                            </Button>
                        </CustomColumn>
                    </Modal>
                </>
            )}
        </CustomColumn>
    );
};

export default FavorComponent4;
