import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CustomColumn from '../../../Components/Container/CustomColumn';
import CustomRow from '../../../Components/Container/CustomRow';
import CustomFont from '../../../Components/Container/CustomFont';
import StyledImg from '../../../Components/Container/StyledImg';

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
  padding-top: 10vh;
  padding-bottom: 5vh;
  gap: 6rem;
  position: relative;
  background-color: white;
  padding-bottom: 10vh;
`;

const PointsDisplay = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 100px;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden; /* 가상 요소가 둥근 모서리에 맞춰지도록 */

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 10px;
    padding: 2px;
    background: linear-gradient(to right, #FFB700, #FFE177);
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
            mask-composite: exclude; 
  }

  /* 콘텐츠가 가상 요소 위로 오도록 */
  & > * {
    position: relative;
    z-index: 1;
  }
`;


const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 400px;
  gap: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #FFD15B;
  border-radius: 10px;
  font-size: 1rem;
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const AccountInfo = styled.div`
  background-color: #FEE187;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justofy-content: center;
`;

const Button = styled.button`
  background-color: #FEE187;
  padding: 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  width: 90%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Cashback = () => {
    const [points, setPoints] = useState(2500);
    const [amount, setAmount] = useState('');
    const [useAllPoints, setUseAllPoints] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleCheckboxChange = () => {
        setUseAllPoints(!useAllPoints);
        if (!useAllPoints) {
            setAmount(points);
        } else {
            setAmount('');
        }
    };

    const handleInputChange = (e) => {
        setAmount(e.target.value);
    };

    const handleSubmit = () => {
        if (amount === '') {
            alert('전환할 금액을 먼저 입력해주세요.');
        } else {
            // 전환 로직 추가
            alert(`${amount}원이 전환되었습니다.`);
        }
    };

    return (
        <ContainerCenter>
            <PageContainer>
                <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='4rem'>
                    <PointsDisplay>
                        <CustomFont color='black' font='1rem' fontWeight='bold'>나의 양보점수: {points}원</CustomFont>
                    </PointsDisplay>

                    <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='1rem'>
                        <FormGroup>
                            <CustomFont font='1rem' color='black'>전환할 금액</CustomFont>
                            <CheckboxGroup>
                                <input
                                    type="checkbox"
                                    checked={useAllPoints}
                                    onChange={handleCheckboxChange}
                                />
                                <CustomFont font='0.8rem' color='black'>전부 전환할래요</CustomFont>
                            </CheckboxGroup>
                            <Input
                                type="text"
                                value={amount}
                                onChange={handleInputChange}
                                disabled={useAllPoints}
                            />
                        </FormGroup>
                    </CustomColumn>

                    <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='0.5rem'>
                        <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                            <CustomFont color='black' font='1rem'>등록된 계좌</CustomFont>
                        </CustomRow>
                        <AccountInfo>
                            <CustomFont color='black' font='1rem' fontWeight='bold'>NH 농협 | 123-****-****-**</CustomFont>
                        </AccountInfo>
                    </CustomColumn>

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

                    <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                        <CustomFont color='black' font='1rem' fontWeight='bold'>따뜻한 양보를 실천해주셔서 감사합니다.</CustomFont>
                        <Button onClick={handleSubmit}>
                            <CustomFont color='black' font='1rem' fontWeight='bold'>전환하기</CustomFont>
                        </Button>
                    </CustomColumn>

                </CustomColumn>
            </PageContainer>
        </ContainerCenter >
    );
};

export default Cashback;
