import React, { useState } from 'react';
import styled from 'styled-components';
import Webcam from 'react-webcam';
import { useNavigate } from 'react-router-dom';
import CustomFont from '../../../Components/Container/CustomFont';
import CustomColumn from '../../../Components/Container/CustomColumn';
import CustomRow from '../../../Components/Container/CustomRow';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: white;
`;

const CameraContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  width: 80%;
  padding: 1rem;
  font-size: 1rem;
  background-color: #E0E0E0;
  color: black;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid #777777;
  border-radius: 1rem;
  font-size: 1rem;
`;

const SignupCertificate = () => {
    const [imageSrc, setImageSrc] = useState(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [isFinalStep, setIsFinalStep] = useState(false);
    const navigate = useNavigate();

    const webcamRef = React.useRef(null);

    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImageSrc(imageSrc);
    }, [webcamRef]);

    const handleConfirm = () => {
        setIsAnalyzing(true);
        setTimeout(() => {
            setIsAnalyzing(false);
            setIsFinalStep(true);
        }, 3000);
    };

    return (
        <Container>
            {!isAnalyzing && !isFinalStep && (
                <>
                    <CustomColumn width='90%' alignItems='flex-start' justifyContent='center' gap='0.3rem'>
                        <CustomFont color='black' font='1rem' fontWeight='bold'>임신확인서와 주민등록증을 촬영해주세요.</CustomFont>
                        <CustomFont color='red' font='0.9rem'>* 주민번호 뒷자리는 가려주세요.</CustomFont>
                        <CustomFont color='red' font='0.9rem'>* 10개월 이내에 진단받은 확인서만 유효합니다.</CustomFont>
                    </CustomColumn>
                    <CameraContainer>
                        {imageSrc ? (
                            <img src={imageSrc} alt="captured" />
                        ) : (
                            <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
                        )}
                    </CameraContainer>
                    {imageSrc ? (
                        <>
                            <Button onClick={() => setImageSrc(null)}>재촬영</Button>
                            <Button onClick={handleConfirm}>확인</Button>
                        </>
                    ) : (
                        <Button onClick={capture}>촬영</Button>
                    )}
                </>
            )}
            {isAnalyzing && <CustomFont color='black' font='1.2rem'>이미지를 분석 중입니다...</CustomFont>}
            {isFinalStep && (
                <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='4rem'>
                    <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='0.2rem'>
                        <CustomFont color='black' font='1.2rem' fontWeight='bold'>인식된 정보를 확인해주세요.</CustomFont>
                        <CustomFont color='black' font='0.9rem'>잘못 인식된 경우 직접 수정하실 수 있습니다.</CustomFont>
                    </CustomColumn>

                    <CustomColumn width='90%' alignItems='flex-start' justifyContent='center' gap='0.7rem'>
                        <CustomRow width='100%' alignItems='center' justifyContent='center' gap='0.2rem'>
                            <CustomRow width='40%' alignItems='center' justifyContent='center'>
                                <CustomFont color='black' font='1rem'>임산부 성함</CustomFont>
                            </CustomRow>
                            <CustomRow width='70%' alignItems='center' justifyContent='center'>
                                <Input type="text" defaultValue="000님" />
                            </CustomRow>
                        </CustomRow>
                        <CustomRow width='100%' alignItems='center' justifyContent='center' gap='0.2rem'>
                            <CustomRow width='40%' alignItems='center' justifyContent='center'>
                                <CustomFont color='black' font='1rem'>신분증 발급일자</CustomFont>
                            </CustomRow>
                            <CustomRow width='70%' alignItems='center' justifyContent='center'>
                                <Input type="text" defaultValue="0000년 00월 00일" />
                            </CustomRow>
                        </CustomRow>
                    </CustomColumn>
                    <Button onClick={() => navigate('/finalsignup')}>확인 완료</Button>
                </CustomColumn>
            )}
        </Container>
    );
};

export default SignupCertificate;
