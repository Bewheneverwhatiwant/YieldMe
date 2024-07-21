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
  padding-top: 15vh;
  background-color: white;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  border: 1px solid #FFD700;
  border-radius: 4px;
  padding: 1rem;
  font-size: 1rem;
  resize: none;
  margin-bottom: 1rem;
`;

const SubmitButton = styled.button`
  background-color: ${props => props.disabled ? '#D9D9D9' : '#FFD700'};
  color: black;
  border: none;
  padding: 1rem 2rem;
  border-radius: 20px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  font-size: 1rem;
  width: 100%;
`;

const WriteReview = () => {
    const [review, setReview] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () => {
        alert('따뜻한 후기가 정상적으로 등록되었습니다!');
        navigate('/');
    };

    return (
        <ContainerCenter>
            <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='3rem'>
                <CustomFont color='black' font='1rem' fontWeight='bold'>따뜻한 양보 후기를 남겨주셔서 감사합니다.</CustomFont>

                <TextArea
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    placeholder="사회의 미풍양속을 해치지 않는 후기를 작성해주세요. 관리자의 판단 하에 예고없이 삭제 조치될 수 있습니다."
                />

                <CustomRow width='100%' alignItems='center' justifyContent='center'>
                    <SubmitButton onClick={handleSubmit} disabled={!review}>양보받은 후기 작성 완료</SubmitButton>
                </CustomRow>
            </CustomColumn>
        </ContainerCenter>
    );
};

export default WriteReview;
