import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import CustomColumn from '../../../Components/Container/CustomColumn';
import CustomFont from '../../../Components/Container/CustomFont';
import CustomRow from '../../../Components/Container/CustomRow';

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
  align-items: center;
  padding: 8vh 0 5vh;
  gap: 3rem;
  background-color: white;
  padding-bottom: 10vh;
`;

const Section = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const PointControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

const PointButton = styled.button`
  background-color: #E0E0E0;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  cursor: pointer;
  border-radius: 4px;
`;

const PointDisplay = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

const RadioButton = styled.input`
  margin-right: 0.5rem;
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const SubmitButton = styled.button`
  background-color: #ADD8E6;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 1rem;
`;

const PointCharge = () => {
    const [points, setPoints] = useState(100);
    const [paymentMethod, setPaymentMethod] = useState('credit');
    const [termsChecked, setTermsChecked] = useState(false);
    const [privacyChecked, setPrivacyChecked] = useState(false);

    const handleIncrement = () => setPoints(points + 100);
    const handleDecrement = () => {
        if (points > 100) setPoints(points - 100);
    };

    const handlePaymentMethodChange = (e) => setPaymentMethod(e.target.value);
    const handleTermsChange = (e) => setTermsChecked(e.target.checked);
    const handlePrivacyChange = (e) => setPrivacyChecked(e.target.checked);

    const navigate = useNavigate();

    const handleSubmit = () => {
        if (!termsChecked || !privacyChecked) {
            alert('이용약관에 동의해주세요.');
            return;
        }
        alert('결제되었습니다!');
        navigate('/mypage');
    };

    return (
        <ContainerCenter>
            <PageContainer>
                <Section>
                    <CustomFont color='black' fontWeight='bold' font='1.5rem'>포인트 충전</CustomFont>
                    <PointControl>
                        <PointButton onClick={handleDecrement}>-</PointButton>
                        <PointDisplay>{points}p</PointDisplay>
                        <PointButton onClick={handleIncrement}>+</PointButton>
                    </PointControl>

                    <CustomRow width='100%' alignItems='center' justifyContent='flex-start' gap='0.5rem'>
                        <CustomFont color='black' font='1rem'>충전하실 포인트:</CustomFont>
                        <CustomFont color='black' font='1rem' fontWeight='bold'>{points}p</CustomFont>
                    </CustomRow>

                    <CustomRow width='100%' alignItems='center' justifyContent='flex-start' gap='0.5rem'>
                        <CustomFont color='black' font='1rem'>결제하실 금액:</CustomFont>
                        <CustomFont color='black' font='1rem' fontWeight='bold'>{points}원</CustomFont>
                    </CustomRow>

                    <RadioContainer>
                        <CustomFont color='black' font='1rem'>결제방법 (필수)</CustomFont>
                        <label>
                            <RadioButton
                                type="radio"
                                value="credit"
                                checked={paymentMethod === 'credit'}
                                onChange={handlePaymentMethodChange}
                            />
                            신용카드 결제
                        </label>
                        <label>
                            <RadioButton
                                type="radio"
                                value="kakao"
                                checked={paymentMethod === 'kakao'}
                                onChange={handlePaymentMethodChange}
                            />
                            kakao pay
                        </label>
                        <label>
                            <RadioButton
                                type="radio"
                                value="toss"
                                checked={paymentMethod === 'toss'}
                                onChange={handlePaymentMethodChange}
                            />
                            토스 pay
                        </label>
                        <label>
                            <RadioButton
                                type="radio"
                                value="naver"
                                checked={paymentMethod === 'naver'}
                                onChange={handlePaymentMethodChange}
                            />
                            네이버 pay
                        </label>
                    </RadioContainer>
                    <CheckboxContainer>
                        <label>
                            <input
                                type="checkbox"
                                checked={termsChecked}
                                onChange={handleTermsChange}
                            />
                            <CustomFont color='black' font='0.8rem'>이용약관을 읽어보았으며 이에 동의합니다.</CustomFont>
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                checked={privacyChecked}
                                onChange={handlePrivacyChange}
                            />
                            <CustomFont color='black' font='0.8rem'>전자상거래법을 읽어보았으며 이에 동의합니다.</CustomFont>
                        </label>
                    </CheckboxContainer>

                    <CustomRow width='100%' alignItems='center' justifyContent='flex-end'>
                        <SubmitButton onClick={handleSubmit}>결제</SubmitButton>
                    </CustomRow>
                </Section>
            </PageContainer>
        </ContainerCenter>
    );
};

export default PointCharge;
