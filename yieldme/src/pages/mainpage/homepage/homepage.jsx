import React, { useState, useEffect, useContext } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CustomFont from '../../../Components/Container/CustomFont';
import CustomRow from '../../../Components/Container/CustomRow';
import CustomColumn from '../../../Components/Container/CustomColumn';
import ReviewCarousel from './review_carousel';
import StyledImg from '../../../Components/Container/StyledImg';
import { AuthContext } from '../../subpage/AuthContext';
import QRCodeSection from './qrcode';

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
  padding-top: 8vh;
  padding-bottom: 5vh;
  gap: 6rem;
  position: relative;
  background-color: white;
  padding-bottom: 10vh;
`;

const Button = styled.button`
  width: 100%;
  background-color: #FEE187;
  color: black;
  border: none;
  padding: 0.8rem;
  font-size: 0.8rem;
  cursor: pointer;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
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

const ScannerButton = styled.button`
  width: 80%;
  background-color: #FFCD38;
  color: black;
  border: none;
  padding: 0.5rem;
  font-size: 0.8rem;
  cursor: pointer;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const NearButton = styled.button`
  width: 100%;
  height: 12rem;
  color: black;
  border: none;
  padding: 0.5rem;
  font-size: 0.8rem;
  cursor: pointer;
  border-radius: 20px;
  background-image: url('home_img_nearme.png');
  background-size: cover;
  background-position: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

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

const scrollAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const AniRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${scrollAnimation} 3s infinite;
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

const HomePage = () => {
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleModalShow = () => {
    setShowModal(true);
    setTimeout(handleModalClose, 1000);
  };

  const handleProtectedClick = (path) => {
    if (auth.accessToken) {
      navigate(path);
    } else {
      handleModalShow();
    }
  };

  return (
    <ContainerCenter>
      <PageContainer>
        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='5.5rem'>
          <CustomColumn width='100%' alignItems='center' justifyContent='center'>

            <QRCodeSection auth={auth} />
            <AniRow>
              {auth.accessToken && (
                <ScannerButton onClick={() => navigate('/camera')}>
                  <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.8rem'>
                    <CustomFont fontWeight='bold' font='1rem' color='black'>QR스캐너 열기</CustomFont>
                    <CustomFont color='#434343' fontWeight='bold' font='0.7rem'>나에게 자리를 양보해주신 분의 QR코드를 스캔해주세요.</CustomFont>
                  </CustomColumn>
                </ScannerButton>
              )}
            </AniRow>
          </CustomColumn>

          <CustomColumn width='100%' alignItems='center' justifyContent='center'>
            <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='0.2rem'>
              <CustomFont color='#FFD15B' font='1.6rem' fontWeight='bold'>Yello, Yield 路!</CustomFont>
              <CustomFont color='#FFD15B' font='0.8rem' fontWeight='bold'>여러분의 Yello로 세상이 따뜻해져요.</CustomFont>
            </CustomColumn>
            <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='0.2rem'>
              <CustomRow width='100%' alignItems='center' justifyContent='space-around'>
                <StyledImg src={'icon_wound.png'} width='50px' height='50px' />
                <StyledImg src={'icon_world.png'} width='100px' height='100px' />
                <StyledImg src={'icon_oldest.png'} width='50px' height='50px' />
              </CustomRow>
              <CustomRow width='100%' alignItems='center' justifyContent='space-around'>
                <StyledImg src={'icon_normal.png'} width='50px' height='50px' />
                <StyledImg src={'icon_preg.png'} width='50px' height='50px' />
              </CustomRow>
            </CustomColumn>
          </CustomColumn>

          <CustomColumn width='100%' alignItems='center' justifyContent='center'>
            <CustomColumn width='80%' alignItems='flex-start' justifyContent='center' gap='0.2rem'>
              <CustomFont color='black' font='1.1rem' fontWeight='bold'>{auth.accessToken ? `${auth.login_id}님,` : '예비 yello 님,'}</CustomFont>
              <CustomFont color='black' font='0.9rem' fontWeight='bold'>오늘도 따뜻한 사회를 만들어주셔서 감사합니다.</CustomFont>
            </CustomColumn>

            <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='1.8rem'>
              <CustomRow width='90%' alignItems='center' justifyContent='center' gap='0.3rem'>
                <CustomRow width='50%' alignItems='center' justifyContent='center'>
                  <Button onClick={() => handleProtectedClick('/iwanttoyield')}>
                    <CustomFont font='0.8rem' color='black' fontWeight='bold'>양보할래요</CustomFont>
                  </Button>
                </CustomRow>
                <CustomRow width='50%' alignItems='center' justifyContent='center'>
                  <Button onClick={() => handleProtectedClick('/iwanttobeyielded')}>
                    <CustomFont font='0.8rem' color='black' fontWeight='bold'>양보원해요</CustomFont>
                  </Button>
                </CustomRow>
              </CustomRow>

              <AniRow>
                <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='0.5rem'>
                  <NearButton onClick={() => handleProtectedClick('/findnearyield')} />
                  <CustomRow width='95%' alignItems='center' justifyContent='flex-start' gap='2rem'>
                    <CustomFont color='black' fontWeight='bold'>내 근처 양보 찾기</CustomFont>
                  </CustomRow>
                </CustomColumn>
              </AniRow>
            </CustomColumn>
          </CustomColumn>

          <ReviewCarousel />
        </CustomColumn>

      </PageContainer>

      <Modal show={showModal}>
        <CustomFont color='black' font='1.2rem' fontWeight='bold'>로그인 후 이용하실 수 있는 기능입니다.</CustomFont>
      </Modal>
    </ContainerCenter>
  );
};

export default HomePage;
