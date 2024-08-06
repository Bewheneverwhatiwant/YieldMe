import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CustomFont from '../../../../Components/Container/CustomFont';
import { useNavigate } from 'react-router-dom';
import CustomColumn from '../../../../Components/Container/CustomColumn';
import CustomRow from '../../../../Components/Container/CustomRow';
import YieldModalWarning from './yield_modal/yield_modal_warning';
import YieldedModalWarning from './yielded_modal/yielded_modal_warning';

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
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;

  &::before {
    content: '';
    width: 40px;
    height: 40px;
    background-image: ${(props) =>
        props.label === '양보할게요' ? "url('icon_seat.png')" :
            props.label === '양보원해요' ? "url('icon_standing.png')" : 'none'};
    background-size: cover;
    position: absolute;
  }
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
`;

const Dropdown = styled.select`
  margin: 5px;
  padding: 5px;
  font-size: 1rem;
`;

const circlesData = [
    [50, 50, '#8e44ad', '양보원해요', 50, '임산부'],
    [50, 50, '#3498db', '양보할게요', 100, '일반인'],
    [50, 50, '#f1c40f', '양보원해요', 150, '노약자'],
    [50, 50, '#2ecc71', '양보할게요', 200, '부상자'],
    [50, 50, '#e74c3c', '양보할게요', 250, '일반인'],
];

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

const FindNearYield = () => {
    const [filter, setFilter] = useState('전체');
    const [modalData, setModalData] = useState(null);
    const [renderComponent, setRenderComponent] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();

    const handleCircleClick = (data) => {
        setModalData(data);
    };

    const handleCloseModal = () => {
        setModalData(null);
        setRenderComponent(null);
    };

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const handleAlertFirstClick = () => {
        navigate('/buycoupon');
    };

    const handleYieldButtonClick = () => {
        if (modalData[3] === '양보할게요') {
            setRenderComponent(
                <YieldedModalWarning
                    onClose={handleCloseModal}
                    circleData={modalData}
                />
            );
        } else if (modalData[3] === '양보원해요') {
            setRenderComponent(
                <YieldModalWarning
                    onClose={handleCloseModal}
                    circleData={modalData}
                />
            );
        }
        setModalData(null);
    };

    const filteredCircles = circlesData.filter(
        (circle) => filter === '전체' || circle[3] === filter
    );

    return (
        <ContainerCenter>
            {!renderComponent ? (
                <PageContainer>
                    <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='3rem'>
                        <CustomFont color="black" font="1rem" fontWeight="bold">
                            내 근처 양보를 찾았어요.
                        </CustomFont>

                        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1.5rem'>
                            <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.5rem'>
                                <CustomRow width='100%' alignItems='center' justifyContent='flex-end'>
                                    <Dropdown onChange={handleFilterChange}>
                                        <option value="전체">전체</option>
                                        <option value="양보원해요">양보원해요</option>
                                        <option value="양보할게요">양보할게요</option>
                                    </Dropdown>
                                </CustomRow>

                                <CustomColumn width='100%' alignItems='flex-start' justifyContent='center' gap='0.2rem'>
                                    <CustomFont color='black' font='0.7rem'>양보를 받고싶으신 분은 '양보할게요' 요청을 클릭하시고,</CustomFont>
                                    <CustomFont color='black' font='0.7rem'>양보를 하고싶으신 분은 '양보원해요' 요청을 클릭해주십시오.</CustomFont>
                                </CustomColumn>

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
                                                    label={circle[3]}
                                                    onClick={() => handleCircleClick(circle)}
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

                            {modalData && (
                                <>
                                    <Backdrop onClick={handleCloseModal} />
                                    <Modal>
                                        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.8rem'>
                                            <CustomRow width='100%' alignItems='center' justifyContent='center' gap='0.8rem'>
                                                <CustomColumn gap='0.2rem'>
                                                    <Circle
                                                        width={modalData[0]}
                                                        height={modalData[1]}
                                                        color={modalData[2]}
                                                        label={modalData[3]}
                                                    />
                                                    <CustomFont color={modalData[2]} font='0.8rem' fontWeight='bold'>{modalData[3]}</CustomFont>
                                                </CustomColumn>
                                                <p>
                                                    {modalData[5]}, 내 근처 약 {modalData[4]}m
                                                </p>
                                            </CustomRow>
                                            <Button onClick={handleYieldButtonClick}>양보하기</Button>
                                        </CustomColumn>
                                    </Modal>
                                </>
                            )}
                        </CustomColumn>
                    </CustomColumn>
                </PageContainer>
            ) : (
                renderComponent
            )}
        </ContainerCenter>
    );
};

export default FindNearYield;
