import React, { useState, useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import Barcode from 'react-barcode';
import { toPng } from 'html-to-image';
import axios from 'axios';
import CustomFont from '../../../Components/Container/CustomFont';
import CustomRow from '../../../Components/Container/CustomRow';
import CustomColumn from '../../../Components/Container/CustomColumn';
import StyledImg from '../../../Components/Container/StyledImg';
import { AuthContext } from '../../subpage/AuthContext';

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

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const ProductCard = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  background-color: #f8f8f8;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

const ProductImage = styled.img`
  width: 80%;
  height: auto;
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

const ProductInfo = styled.div`
  margin-bottom: 20px;
`;

const ProductName = styled.h3`
  margin: 10px 0;
`;

const ProductPrice = styled.p`
  margin: 10px 0;
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
  width: 100%;
`;

const Spinner = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingIndicator = styled.div`
  border: 4px solid #f3f3f3;
  border-radius: 50%;
  border-top: 4px solid #3498db;
  width: 30px;
  height: 30px;
  animation: ${Spinner} 2s linear infinite;
  margin: 20px auto;
`;

const CouponContainer = styled.div`
  border: 2px solid yellow;
  padding: 20px;
  margin-bottom: 20px;
  background-color: white;
`;

const YelowBox = styled.div`
width: 100%;
background-color: #FEE187;
border-radius: 10px;
padding: 10px;
display: flex;
align-items: center;
justify-content: center;
`;

const GiftShop = () => {
    const { auth } = useContext(AuthContext);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isPurchased, setIsPurchased] = useState(false);
    const [isDownloaded, setIsDownloaded] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [barcodeValue, setBarcodeValue] = useState('');

    const products = [
        { id: 1, name: '이어플러그', price: '10', img: 'gift1.png' },
        { id: 2, name: '일회용 충전기', price: '30', img: 'gift2.png' },
        { id: 3, name: '안대', price: '30', img: 'gift3.png' },
        { id: 4, name: '양치세트', price: '20', img: 'gift4.png' },
        { id: 5, name: '일회용 면도기', price: '10', img: 'gift5.png' },
        { id: 6, name: '생리대', price: '30', img: 'gift6.png' },
        { id: 7, name: '머리끈', price: '5', img: 'gift7.png' },
        { id: 8, name: '입덧사탕', price: '20', img: 'gift8.png' },
        { id: 9, name: '목베개', price: '50', img: 'gift9.png' },
        { id: 10, name: '이어폰', price: '50', img: 'gift10.png' },
        { id: 11, name: '삼다수', price: '10', img: 'gift11.png' },
        { id: 12, name: '커피(팩)', price: '10', img: 'gift12.png' },
    ];

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    const handlePurchaseClick = async () => {
        setIsLoading(true);
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_SERVER}/buy_gifticon/`,
                {
                    point: parseInt(selectedProduct.price),
                },
                {
                    headers: {
                        Authorization: `Bearer ${auth.accessToken}`
                    }
                }
            );

            if (response.status === 200) {
                setBarcodeValue(generateRandomBarcode());
                setIsLoading(false);
                setIsPurchased(true);
            } else {
                setIsLoading(false);
                setModalMessage('상품 구매에 오류가 발생했습니다.');
            }
        } catch (error) {
            setIsLoading(false);
            setModalMessage('상품 구매에 오류가 발생했습니다.');
        }
    };

    const handleDownloadClick = () => {
        console.log('기프티콘 다운로드 시작');
        const modal = document.querySelector('.modal-container');
        //setIsLoading(true);
        toPng(modal)
            .then((dataUrl) => {
                const link = document.createElement('a');
                link.download = 'coupon.png';
                link.href = dataUrl;
                link.click();
                setIsPurchased(false);
                //setIsLoading(false);
                setIsDownloaded(true);
                console.log('기프티콘 다운로드가 완료됨');
            })
            .catch((error) => {
                console.error('oops, something went wrong!', error);
                setIsLoading(false);
            });
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
        setIsLoading(false);
        setIsPurchased(false);
        setIsDownloaded(false);
        setModalMessage('');
    };

    const generateRandomBarcode = () => {
        return Math.floor(Math.random() * 1000000000000).toString().padStart(12, '0');
    };

    return (
        <ContainerCenter>
            <PageContainer>
                <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='4rem'>

                    <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='2rem'>

                        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.8rem'>
                            <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='0.2rem'>
                                <CustomFont color='#FFD15B' font='1.6rem' fontWeight='bold'>Yello, Yield 路!</CustomFont>
                                <CustomFont color='#FFD15B' font='0.8rem' fontWeight='bold'>여러분의 Yello로 세상이 따뜻해져요.</CustomFont>
                            </CustomColumn>
                            <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='0.2rem'>

                                <CustomRow width='100%' alignItems='center' justifyContent='space-around' >
                                    <StyledImg src={'icon_wound.png'} width='50px' height='50px' />
                                    <StyledImg src={'icon_world.png'} width='100px' height='100px' />
                                    <StyledImg src={'icon_oldest.png'} width='50px' height='50px' />
                                </CustomRow>
                                <CustomRow width='100%' alignItems='center' justifyContent='space-around' >
                                    <StyledImg src={'icon_normal.png'} width='50px' height='50px' />
                                    <StyledImg src={'icon_preg.png'} width='50px' height='50px' />
                                </CustomRow>
                            </CustomColumn>
                        </CustomColumn>

                        <YelowBox>
                            <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1.5rem'>
                                <CustomRow width='100%' alignItems='center' justifyContent='start' gap='1rem'>
                                    <CustomFont color='black' font='1rem' fontWeight='bold'>소중하고 지속적인 자리양보, 감사드립니다!</CustomFont>
                                </CustomRow>

                                <CustomColumn width='100%' alignItems='center' justofyContent='center' gap='1.3rem'>
                                    <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.5rem'>
                                        <CustomRow width='100%' alignItems='center' justifyContent='start' gap='1rem'>
                                            <CustomFont color='black' font='0.85rem' fontWeight='bold'>양보를 통해 얻은 점수로</CustomFont>
                                        </CustomRow>
                                        <CustomRow width='100%' alignItems='center' justifyContent='start' gap='1rem'>
                                            <CustomFont color='black' font='0.85rem' fontWeight='bold'>아래 품목을 구매하실 수 있습니다.</CustomFont>
                                        </CustomRow>
                                    </CustomColumn>

                                    <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.5rem'>
                                        <CustomRow width='100%' alignItems='center' justifyContent='start' gap='1rem'>
                                            <CustomFont color='black' font='0.7rem'>구매하신 품목은 storyway 기프트콘으로 제공됩니다</CustomFont>
                                        </CustomRow>

                                        <CustomRow width='100%' alignItems='center' justifyContent='start' gap='1rem'>
                                            <CustomFont color='red' font='0.7rem'>* 일부 품목을 지원하지 않는 지점이 있을 수 있습니다.</CustomFont>
                                        </CustomRow>
                                    </CustomColumn>
                                </CustomColumn>
                            </CustomColumn>
                        </YelowBox>

                    </CustomColumn>

                    <ProductsGrid>
                        {products.map((product) => (
                            <ProductCard key={product.id} onClick={() => handleProductClick(product)}>
                                <ProductImage src={product.img} alt={product.name} />
                            </ProductCard>
                        ))}
                    </ProductsGrid>

                    <CustomRow width='80%' alignItems='center' justifyContent='start' gap='0.5rem'>

                        <StyledImg src={'storyway.png'} width='90px' height='60px' />
                        <CustomColumn height='60px' alignItems='center' justifyContent='end'>
                            <CustomFont color='#FFCD38' font='1rem' fontWeight='bold'>with</CustomFont>
                        </CustomColumn>
                        <CustomColumn height='60px' alignItems='center' justifyContent='end'>
                            <CustomFont color='#FFCD38' font='1.5rem' fontWeight='bold'>YELLO</CustomFont>
                        </CustomColumn>

                    </CustomRow>

                    {selectedProduct && (
                        <>
                            <Backdrop onClick={handleCloseModal} />
                            <Modal>
                                {isLoading ? (
                                    <CustomColumn width='100%' alignItems='center' justifyContent='center'>
                                        <LoadingIndicator />
                                        <CustomFont color='black' fontWeight='bold'>양보점수를 사용하고 있어요...</CustomFont>
                                    </CustomColumn>
                                ) : isPurchased ? (
                                    <>
                                        <ProductInfo>
                                            <ProductName>구매가 완료되었습니다!</ProductName>
                                        </ProductInfo>
                                        <CouponContainer className="modal-container">
                                            <ProductImage src={selectedProduct.img} alt={selectedProduct.name} />
                                            <ProductName>{selectedProduct.name}</ProductName>
                                            <ProductPrice>{selectedProduct.price}</ProductPrice>
                                            <Barcode value={barcodeValue} />
                                            <div>교환처: storyway</div>
                                            <div>유효기간: 2025.08.07</div>
                                        </CouponContainer>
                                        <Button onClick={handleDownloadClick}>기프티콘 다운로드</Button>
                                    </>
                                ) : isDownloaded ? (
                                    <>
                                        <ProductInfo>
                                            <ProductName>기프티콘 저장이 완료되었습니다.</ProductName>
                                        </ProductInfo>
                                        <Button onClick={handleCloseModal}>확인</Button>
                                    </>
                                ) : (
                                    <>
                                        <ProductInfo>
                                            <ProductImage src={selectedProduct.img} alt={selectedProduct.name} />
                                            <ProductName>{selectedProduct.name}</ProductName>
                                            <ProductPrice>{selectedProduct.price}원</ProductPrice>
                                        </ProductInfo>
                                        <Button onClick={handlePurchaseClick}>양보 점수로 구매하기</Button>
                                    </>
                                )}
                                {modalMessage && (
                                    <CustomColumn width='100%' alignItems='center' justifyContent='center'>
                                        <CustomFont color='red' fontWeight='bold'>{modalMessage}</CustomFont>
                                        <Button onClick={handleCloseModal}>확인</Button>
                                    </CustomColumn>
                                )}
                            </Modal>
                        </>
                    )}
                </CustomColumn>
            </PageContainer>
        </ContainerCenter>
    );
};

export default GiftShop;
