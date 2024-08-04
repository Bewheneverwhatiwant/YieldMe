import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Barcode from 'react-barcode';
import { toPng } from 'html-to-image';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const Description = styled.p`
  margin-bottom: 20px;
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
  background-color: #FFEB3B;
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

const GiftShop = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isPurchased, setIsPurchased] = useState(false);
    const [isDownloaded, setIsDownloaded] = useState(false);

    const products = [
        { id: 1, name: '이어플러그', price: '300원', img: 'gift1.png' },
        { id: 2, name: '일회용 충전기', price: '300원', img: 'gift2.png' },
        { id: 3, name: '안대', price: '300원', img: 'gift3.png' },
        { id: 4, name: '양치세트', price: '300원', img: 'gift4.png' },
        { id: 5, name: '일회용 면도기', price: '300원', img: 'gift5.png' },
        { id: 6, name: '생리대', price: '300원', img: 'gift6.png' },
        { id: 7, name: '머리끈', price: '300원', img: 'gift7.png' },
        { id: 8, name: '입닦개린', price: '300원', img: 'gift8.png' },
        { id: 9, name: '목베개', price: '300원', img: 'gift9.png' },
        { id: 10, name: '이어폰', price: '300원', img: 'gift10.png' },
        { id: 11, name: '삼다수', price: '300원', img: 'gift11.png' },
        { id: 12, name: '커피(팩)', price: '300원', img: 'gift12.png' },
    ];

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    const handlePurchaseClick = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setIsPurchased(true);
        }, 3000);
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
    };

    return (
        <Container>
            <Title>쇼핑</Title>
            <Description>구매하신 품목은 지하철 역 내 storyway 기프트콘으로 제공됩니다.</Description>
            <ProductsGrid>
                {products.map((product) => (
                    <ProductCard key={product.id} onClick={() => handleProductClick(product)}>
                        <ProductImage src={product.img} alt={product.name} />
                    </ProductCard>
                ))}
            </ProductsGrid>

            {selectedProduct && (
                <>
                    <Backdrop onClick={handleCloseModal} />
                    <Modal>
                        {isLoading ? (
                            <LoadingIndicator />
                        ) : isPurchased ? (
                            <>
                                <ProductInfo>
                                    <ProductName>구매가 완료되었습니다!</ProductName>
                                </ProductInfo>
                                <CouponContainer className="modal-container">
                                    <ProductImage src={selectedProduct.img} alt={selectedProduct.name} />
                                    <ProductName>{selectedProduct.name}</ProductName>
                                    <ProductPrice>{selectedProduct.price}</ProductPrice>
                                    <Barcode value="123456789012" />
                                    <div>교환처: storyway</div>
                                    <div>유효기간: 2025.7.15</div>
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
                                    <ProductPrice>{selectedProduct.price}</ProductPrice>
                                </ProductInfo>
                                <Button onClick={handlePurchaseClick}>양보 점수로 구매하기</Button>
                            </>
                        )}
                    </Modal>
                </>
            )}
        </Container>
    );
};

export default GiftShop;
