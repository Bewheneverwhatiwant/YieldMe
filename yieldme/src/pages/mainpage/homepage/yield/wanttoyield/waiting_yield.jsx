import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import CustomColumn from '../../../../../Components/Container/CustomColumn';
import CustomRow from '../../../../../Components/Container/CustomRow';
import CustomFont from '../../../../../Components/Container/CustomFont';

import YieldModalWarning from '../../findnearyield/yield_modal/yield_modal_warning';

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
  padding-top: 12vh;
  padding-bottom: 5vh;
  gap: 6rem;
  position: relative;
  background-color: white;
  padding-bottom: 10vh;
`;

const TargetContainer = styled.div`
  position: relative;
  width: 100%;
  height: 350px;
  background-image: url('nearme_img.png');
  background-size: cover;
  background-position: center;
  border-radius: 20px;
`;

const CircleWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Circle = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

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
  min-width: 50%;
`;

const Dropdown = styled.select`
  margin: 5px;
  padding: 5px;
  font-size: 1rem;
`;

const LoadingSpinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #4CAF50;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  animation: spin 1s linear infinite;
  margin: 20px 0;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const AnswerDiv = styled.div`
border: 1px solid black;
border-radius: 20px;
display: flex;
flex-direction: column;
gap: 1.5rem;
align-items: center;
justify-content: center;
padding: 10px;
width: 100%;
`;

const getRandomPosition = (size, avoidCenter = false) => {
    let position;
    do {
        position = Math.floor(Math.random() * (350 - size));
    } while (
        avoidCenter &&
        position > 125 &&
        position < 225
    );
    return position;
};

const WaitingYield = () => {
    const [filter, setFilter] = useState('전체');
    const [renderComponent, setRenderComponent] = useState(null);
    const [step, setStep] = useState(1);
    const [description, setDescription] = useState("");
    const [timeLeft, setTimeLeft] = useState(300);

    const navigate = useNavigate();

    const handleCloseModal = () => {
        setRenderComponent(null);
    };

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const handleAlertFirstClick = () => {
        navigate('/myalertfirst');
    };

    const circlesData = [
        [50, 50, '#8e44ad', '양보원해요', 50, '임산부'],
        [50, 50, '#3498db', '양보할게요', 100, '일반인'],
        [50, 50, '#f1c40f', '양보원해요', 150, '노약자'],
        [50, 50, '#2ecc71', '양보할게요', 200, '부상자'],
        [50, 50, '#e74c3c', '양보할게요', 250, '일반인'],
    ];

    const filteredCircles = circlesData.filter(
        (circle) => filter === '전체' || circle[3] === filter
    );

    useEffect(() => {
        if (step === 1 && timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);

            return () => clearInterval(timer);
        }

        if (timeLeft === 0) {
            alert("양보하시는 분의 응답이 도착하지 않아 자동으로 양보가 취소되었습니다.\n다른 양보 요청을 선택하세요.");
            handleCloseModal();
        }
    }, [timeLeft, step]);

    useEffect(() => {
        if (step === 1) {
            const loadingTimer = setTimeout(() => {
                setStep(2);
            }, 5000);

            return () => clearTimeout(loadingTimer);
        }
    }, [step]);

    const handleYieldButtonClick = () => {
        const circleData = [50, 50, '#8e44ad', '양보원해요', 50, '임산부'];
        setRenderComponent(
            <YieldModalWarning
                onClose={handleCloseModal}
                circleData={circleData}
            />
        );
    };

    return (
        <ContainerCenter>
            {!renderComponent ? (
                <PageContainer>
                    <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='3rem'>

                        {step === 1 && (
                            <AnswerDiv>
                                <CustomFont color="black" font="1rem" fontWeight="bold">
                                    응답을 기다리는 중...
                                </CustomFont>

                                <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1.2rem'>
                                    <LoadingSpinner />
                                    <CustomFont color='black' font='0.8rem'>{`남은 시간: ${Math.floor(timeLeft / 60)}분 ${timeLeft % 60}초`}</CustomFont>
                                </CustomColumn>
                            </AnswerDiv>
                        )}
                        {step === 2 && (
                            <AnswerDiv>
                                <CustomFont color="black" font="1rem" fontWeight="bold">
                                    요청이 수락되었습니다!
                                </CustomFont>
                                <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1.2rem'>
                                    <CustomRow width='100%' alignItems='center' justifyContent='center' gap='0.8rem'>
                                        <CustomColumn width='30%' alignItems='center' justifyContent='center' gap='0.2rem'>
                                            <Circle width='50' height='50' color='#8e44ad' />
                                            <CustomFont color='#8e44ad' font='0.8rem' fontWeight='bold'>양보원해요</CustomFont>
                                        </CustomColumn>
                                        <CustomFont font='0.8rem' fontWeight='bold' color='black'>임산부, 내 근처 약 50m</CustomFont>
                                    </CustomRow>
                                    <Button onClick={handleYieldButtonClick}><CustomFont color='black' font='0.8rem' fontWeight='bold'>양보하기</CustomFont></Button>
                                </CustomColumn>
                            </AnswerDiv>
                        )}

                        <CustomColumn width='100%' alignItems='flex-start' justifyContent='center' gap='0.2rem'>
                            <CustomFont color='black' font='0.8rem'>5분 동안 이 화면을 벗어나지 마세요.</CustomFont>
                            <CustomFont color='black' font='0.8rem'>5분 동안 요청이 수락되지 않으면 자동으로 요청이 사라지고,</CustomFont>
                            <CustomFont color='black' font='0.8rem'>이전 화면으로 이동합니다.</CustomFont>
                        </CustomColumn>

                        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1.5rem'>
                            <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.5rem'>
                                <CustomRow width='100%' alignItems='center' justifyContent='flex-end'>
                                    <Dropdown onChange={handleFilterChange}>
                                        <option value="전체">전체</option>
                                        <option value="양보원해요">양보원해요</option>
                                        <option value="양보할게요">양보할게요</option>
                                    </Dropdown>
                                </CustomRow>

                                <TargetContainer>
                                    {filteredCircles.map((circle, index) => {
                                        const top = getRandomPosition(circle[0], true);
                                        const left = getRandomPosition(circle[1], true);
                                        return (
                                            <CircleWrapper key={index} style={{ top, left }}>
                                                <Circle
                                                    width={circle[0]}
                                                    height={circle[1]}
                                                    color={circle[2]}
                                                />
                                                <CustomFont color={circle[2]} font='0.8rem' fontWeight='bold'>{circle[3]}</CustomFont>
                                            </CircleWrapper>
                                        );
                                    })}
                                </TargetContainer>
                            </CustomColumn>

                            <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                                <CustomColumn width='100%' alignItems='flex-start' justifyContent='center' gap='0.2rem'>
                                    <CustomFont color='black' font='0.7rem'>'양보원해요'는 임산부, 노약자, 부상자부터 보여드려요.</CustomFont>
                                    <CustomFont color='black' font='0.7rem'>일반인의 '양보원해요' 요청은 5분 뒤 확인하실 수 있어요.</CustomFont>
                                    <CustomFont color='black' font='0.7rem'>클릭하여 양보를 성사시킬 수 있어요.</CustomFont>
                                </CustomColumn>

                                <CustomRow width='100%' alignItems='center' justifyContent='flex-end' gap='0.2rem'>
                                    <Button onClick={handleAlertFirstClick}>
                                        <CustomFont color='black' font='0.8rem' fontWeight='bold'>
                                            내 양보 요청을 먼저 띄우고 싶다면?
                                        </CustomFont>
                                    </Button>
                                </CustomRow>
                            </CustomColumn>
                        </CustomColumn>
                    </CustomColumn>
                </PageContainer>
            ) : (
                renderComponent
            )}
        </ContainerCenter>
    );
};

export default WaitingYield;
