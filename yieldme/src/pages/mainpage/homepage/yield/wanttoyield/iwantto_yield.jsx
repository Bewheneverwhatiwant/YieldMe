import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CustomRow from '../../../../../Components/Container/CustomRow';
import CustomFont from '../../../../../Components/Container/CustomFont';
import StyledImg from '../../../../../Components/Container/StyledImg';
import CustomColumn from '../../../../../Components/Container/CustomColumn';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;
  background-color: #fff;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: black;
  margin-bottom: 20px;
`;

const Section = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #fff7e6;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  font-size: 1rem;
  color: black;
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-size: 0.8rem;
  color: black;
  margin-bottom: 10px;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const Button2 = styled.button`
  background-color: #FEE187;
  color: black;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const IWantoYield = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleRequestClick = () => {
    if (!isChecked) {
      alert('서비스 정책에 동의하셔야 합니다.');
      return;
    }
    alert('양보 요청이 생성되었습니다.\n이제 이동하는 화면에서 5분간 이동하지 마세요.');
    navigate('/yieldalarm');
  };

  return (
    <Container>
      <Title>'양보할래요' 요청을 띄웁니다.</Title>
      <Section>
        <SectionTitle>서비스 정책 안내</SectionTitle>
        <Text>양보받는 분과 직접 만나 QR코드를 보여드려고, 인식되어야 양보 점수가 적립됩니다.</Text>
        <Text>'양보할래요' 요청을 띄운 후 5분 간 수락되지 않으면 자동으로 양보 요청이 사라집니다.</Text>
        <Text>임산부, 노약자, 부상자는 QR코드를 인식하여 양보가 완료되면 양보 점수가 차감되지 않습니다.</Text>
        <Text>아래의 '위치 정보 띄우기'를 클릭하여 이동하는 화면에서, 양보 요청이 발생하는 5분 간 뒤로가기 하지 마세요.</Text>
        <Text>양보 요청을 띄운 후 '근처 양보 조회' 화면에서 벗어나면, 양보가 수락되어도 알림이 전달되지 않을 수 있습니다.</Text>
      </Section>
      <CustomRow width='100%' alignItems='center' justifyContent='flex-end' gap='0.1rem'>
        <Checkbox type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
        <CustomFont color='red' font='0.8rem'>확인했습니다.</CustomFont>
      </CustomRow>

      <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='3rem'>

        <Button2 onClick={handleRequestClick}>
          <CustomFont color='black' font='1rem' fontWeight='bold'>'양보할래요' 요청 띄우기</CustomFont>
        </Button2>
      </CustomColumn>
    </Container>
  );
};

export default IWantoYield;
