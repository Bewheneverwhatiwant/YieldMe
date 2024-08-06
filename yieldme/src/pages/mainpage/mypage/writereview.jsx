import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import CustomColumn from '../../../Components/Container/CustomColumn';
import CustomFont from '../../../Components/Container/CustomFont';
import CustomRow from '../../../Components/Container/CustomRow';
import { AuthContext } from '../../subpage/AuthContext';

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
`;

const Button = styled.button`
  background-color: #FEE187;
  color: black;
  border: none;
  padding: 0.8rem;
  font-size: 0.8rem;
  cursor: pointer;
  border-radius: 8px;
  margin: 5px;
`;

const WriteReview = () => {
    const [review, setReview] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [modalAction, setModalAction] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const { auth } = useContext(AuthContext);
    const matchId = location.state?.matchId;

    const handleSubmit = async () => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_SERVER}/write_review/`, {
                match_id: matchId,
                review
            }, {
                headers: {
                    Authorization: `Bearer ${auth.accessToken}`
                }
            });

            if (response.status === 200) {
                setModalMessage('따뜻한 후기가 정상적으로 등록되었습니다!');
                setModalAction(() => () => navigate('/allreview'));
            } else {
                setModalMessage('리뷰 등록 중 오류가 발생했습니다.');
                setModalAction(() => () => setShowModal(false));
            }
        } catch (error) {
            setModalMessage('리뷰 등록 중 오류가 발생했습니다.');
            setModalAction(() => () => setShowModal(false));
        }
        setShowModal(true);
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

            {showModal && (
                <Modal>
                    <CustomFont color='black' font='1rem' fontWeight='bold'>{modalMessage}</CustomFont>
                    <Button onClick={modalAction}>확인</Button>
                </Modal>
            )}
        </ContainerCenter>
    );
};

export default WriteReview;
