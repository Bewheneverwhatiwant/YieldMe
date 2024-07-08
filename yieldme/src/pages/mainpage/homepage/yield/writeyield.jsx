import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CustomFont from '../../../../Components/Container/CustomFont';
import CustomColumn from '../../../../Components/Container/CustomColumn';
import CustomRow from '../../../../Components/Container/CustomRow';

const ContainerCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: white;
  padding: 8vh 0 5vh;
  position: relative;
`;

const PageContainer = styled(ContainerCenter)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 2vh;
  padding-bottom: 5vh;
  gap: 6rem;
  position: relative;
  background-color: white;
  padding-bottom: 10vh;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid #777777;
  border-radius: 1rem;
  font-size: 1rem;
`;

const SubmitButton = styled.button`
  background-color: #FD8FFF;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 1rem;
`;

const YieldContainer = styled.div`
  width: 100%;
  background-color: #FEC7FF;
  padding: 0.5rem;
  border-radius: 8px;
`;

const Yield2Container = styled.div`
  width: 100%;
  background-color: #A4CEFF;
  padding: 0.5rem;
  border-radius: 8px;
`;

const WriteYield = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        area: '',
        transportType: '',
        transportDetail: '',
        impression: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = () => {
        alert('감사합니다! 자리 양보가 신청되었습니다.');
        navigate('/myyield');
    };

    return (
        <ContainerCenter>
            <PageContainer>
                <CustomColumn width='90%' alignItems='flex-start' justifyContent='center' gap='2rem'>
                    <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.7rem'>
                        <CustomColumn width='100%' alignItems='flex-start' justifyContent='center' gap='0.2rem'>
                            <CustomFont color='black' font='1rem' fontWeight='bold'>오늘 하루,</CustomFont>
                            <CustomFont color='black' font='1rem' fontWeight='bold'>임산부와 소중한 생명이 양보받은 횟수</CustomFont>
                        </CustomColumn>

                        <YieldContainer>
                            <CustomRow width='100%' alignItems='center' justifyContent='center' gap='0.3rem'>
                                <CustomFont color='#8E428F' font='1.2rem' fontWeight='bold'>34,568</CustomFont>
                                <CustomFont color='#8E428F' font='1rem'>번</CustomFont>
                            </CustomRow>
                        </YieldContainer>

                        <CustomColumn width='100%' alignItems='flex-start' justifyContent='center' gap='0.2rem'>
                            <CustomFont color='black' font='1rem' fontWeight='bold'>오늘 하루,</CustomFont>
                            <CustomFont color='black' font='1rem' fontWeight='bold'>자리를 기꺼이 양보한 사람들의 수</CustomFont>
                        </CustomColumn>

                        <Yield2Container>
                            <CustomRow width='100%' alignItems='center' justifyContent='center' gap='0.3rem'>
                                <CustomFont color='#224A79' font='1.2rem' fontWeight='bold'>647</CustomFont>
                                <CustomFont color='#224A79' font='1rem'>명</CustomFont>
                            </CustomRow>
                        </Yield2Container>
                    </CustomColumn>

                    <CustomFont color='black' font='1.5rem' fontWeight='bold'>양보해주셔서 감사합니다.</CustomFont>
                    <CustomColumn width='100%' alignItems='flex-start' justifyContent='center' gap='1rem'>

                        <CustomColumn width='100%' alignItems='flex-start' justifyContent='center' gap='0.3rem'>
                            <CustomFont color='black' font='1rem'>지역</CustomFont>
                            <Input type="text" name="area" value={form.area} onChange={handleChange} placeholder="예) 서울 00시 00구 00동" />
                        </CustomColumn>

                        <CustomColumn width='100%' alignItems='flex-start' justifyContent='center' gap='0.3rem'>
                            <CustomFont color='black' font='1rem'>대중교통 종류</CustomFont>
                            <Input type="text" name="transportType" value={form.transportType} onChange={handleChange} placeholder="예) 지하철, 버스" />
                        </CustomColumn>

                        <CustomColumn width='100%' alignItems='flex-start' justifyContent='center' gap='0.3rem'>
                            <CustomFont color='black' font='1rem'>대중교통 상세정보</CustomFont>
                            <Input type="text" name="transportDetail" value={form.transportDetail} onChange={handleChange} placeholder="예) 4호선, 둔촌역, 한림 사거리, 62-2번" />
                        </CustomColumn>

                        <CustomColumn width='100%' alignItems='flex-start' justifyContent='center' gap='0.3rem'>
                            <CustomFont color='black' font='1rem'>인상착의</CustomFont>
                            <Input type="text" name="impression" value={form.impression} onChange={handleChange} placeholder="예) 흰 티셔츠, 두꺼운 책을 가지고 있는 남자" />
                        </CustomColumn>

                    </CustomColumn>
                    <SubmitButton onClick={handleSubmit}>
                        <CustomFont color='white' font='1rem' fontWeight='bold'>양보합니다</CustomFont>
                    </SubmitButton>
                </CustomColumn>
            </PageContainer>
        </ContainerCenter >
    );
};

export default WriteYield;
