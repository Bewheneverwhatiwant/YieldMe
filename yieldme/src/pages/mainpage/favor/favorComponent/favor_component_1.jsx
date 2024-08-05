import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import CustomFont from '../../../../Components/Container/CustomFont';
import StyledImg from '../../../../Components/Container/StyledImg';
import { useNavigate } from 'react-router-dom';
import CustomColumn from '../../../../Components/Container/CustomColumn';
import { AuthContext } from '../../../subpage/AuthContext';

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

const Alldiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    width: 95%;
`;

const Mainbox = styled.div`
    width: 121px;
    height: 163px;
    border-radius: 20px;
    background-color: #FEE187;
    border: 1px solid #FFCD38;
    box-sizing: border-box;
    position: relative;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
    padding-bottom: 15px;
    transition: all 0.3s ease;
    display: flex;
`;

const TextBelowImage = styled.p`
    width: 88px;
    height: 28px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 9px;
    color: #1E1E1E;
    text-align: center;
    align-items: center;
    margin: 15px auto 0 auto;
`;

const BoxDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem;
`;

const Shopbutton = styled.button`
    width: 86px;
    height: 22px;
    background-color: #FFCD38;
    border-radius: 5px;
    border: none;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 7px;
    text-align: center;
    align-items: center;
    color: black;
`;

const Circle = styled.div`
  width: 7px;
  height: 7px;
  background: #FFCD38;
  border-radius: 50%;
  display: flex;
  text-align: center;
  align-items: center;
`;

const Button = styled.button`
  background-color: #FEE187;
  font-size: 12px;
  text-align: center;
  justify-content: center;
  border-radius: 30px;
  width: 90px;
  padding: 0.3rem;
  cursor: pointer;
  border: none;
  margin: 5px;
`;

const FavorComponent1 = () => {
    const { auth } = useContext(AuthContext);
    const [showModal, setShowModal] = useState(false);

    const handleButtonClick = (path) => {
        if (auth.isLoggedIn) {
            navigate(path);
        } else {
            setShowModal(true);
        }
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1.5rem'>
            <CustomFont color='black' fontWeight='bold' font='1rem'>서서 가는 당신, 하지정맥류 예방하세요.</CustomFont>
            <Alldiv>
                <Circle></Circle>
                <Mainbox>
                    <BoxDiv>
                        <StyledImg
                            src={'favor_com1_img2.png'}
                            width='51px'
                            height='51px'
                            style={{ display: 'block', margin: '0 auto', marginTop: '31px' }}
                        />
                        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.1rem'>
                            <CustomFont color='black' fontWeight='bold' font='0.7rem'>귀가 후 냉수로</CustomFont>
                            <CustomFont color='black' fontWeight='bold' font='0.7rem'>샤워하기</CustomFont>
                        </CustomColumn>
                        <Shopbutton onClick={() => handleButtonClick('/giftshop')}>
                            <CustomFont color='black' fontWeight='bold' font='0.5rem'>클릭하여 쇼핑하기</CustomFont>
                        </Shopbutton>
                    </BoxDiv>
                </Mainbox>
                <Mainbox>
                    <BoxDiv>
                        <StyledImg src={'favor_com1_img1.png'} width='83px' height='76px' style={{ display: 'block', margin: '0 auto' }} />
                        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.1rem'>
                            <CustomFont color='black' fontWeight='bold' font='0.7rem'>앉아있는 자세</CustomFont>
                            <CustomFont color='black' fontWeight='bold' font='0.7rem'>피하기</CustomFont>
                        </CustomColumn>
                        <Shopbutton onClick={() => handleButtonClick('/iwanttobeyielded')}>
                            <CustomFont color='black' fontWeight='bold' font='0.5rem'>클릭하여 양보받기</CustomFont>
                        </Shopbutton>
                    </BoxDiv>
                </Mainbox>
                <Mainbox>
                    <BoxDiv>
                        <StyledImg src={'favor_com1_img3.png'} width='65px' height='65px' style={{ display: 'block', margin: '0 auto', marginTop: '19px' }} />
                        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.1rem'>
                            <CustomFont color='black' fontWeight='bold' font='0.7rem'>의료용 압박스타킹</CustomFont>
                            <CustomFont color='black' fontWeight='bold' font='0.7rem'>착용하기</CustomFont>
                        </CustomColumn>
                        <Shopbutton onClick={() => handleButtonClick('/giftshop')}>
                            <CustomFont color='black' fontWeight='bold' font='0.5rem'>클릭하여 쇼핑하기</CustomFont>
                        </Shopbutton>
                    </BoxDiv>
                </Mainbox>
                <Circle></Circle>
            </Alldiv>

            {showModal && (
                <>
                    <Backdrop onClick={closeModal} />
                    <Modal>
                        <CustomFont color='black' fontWeight='bold'>로그인 후 이용하실 수 있는 기능입니다!</CustomFont>
                        <Button onClick={closeModal}>확인</Button>
                    </Modal>
                </>
            )}
        </CustomColumn>
    );
};

export default FavorComponent1;
