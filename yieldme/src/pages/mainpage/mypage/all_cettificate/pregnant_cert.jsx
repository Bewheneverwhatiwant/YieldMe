import React, { useState, useRef, useCallback, useEffect, useContext } from 'react';
import styled, { css, keyframes } from 'styled-components';
import Webcam from 'react-webcam';
import { useNavigate } from 'react-router-dom';
import Tesseract from 'tesseract.js';
import OpenAI from "openai";
import CustomColumn from '../../../../Components/Container/CustomColumn';
import CustomRow from '../../../../Components/Container/CustomRow';
import CustomFont from '../../../../Components/Container/CustomFont';
import StyledImg from '../../../../Components/Container/StyledImg';
import axios from 'axios';
import { AuthContext } from '../../../subpage/AuthContext';

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
  justify-content: flex-start;
  padding-top: 12vh;
  padding-bottom: 5vh;
  gap: 3rem;
  position: relative;
  background-color: white;
  padding-bottom: 10vh;
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
  margin: 10px 0;
`;

const CameraScreen = styled.div`
  width: 90%;
  height: 300px;
 border: none;
 background-color: #FEE187;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  position: relative;
`;

const Button = styled.button`
width: 80px;
height: 60px;
  margin: 10px;
 background-color: transparent;
 border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Button2 = styled.button`
width: 40%;
padding: 10px;
  margin: 10px;
 background-color: #FEE187;
 border: none;
 border-radius:10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Button3 = styled.button`
width: 70%;
padding: 10px;
  margin: 10px;
 background-color: #FEE187;
 border: none;
 border-radius:10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Modal = styled.div`
width: 60%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border: none;
  border-radius: 10px;
  z-index: 1000;
  ${(props) => props.show && css`
    display: block;
  `}
  ${(props) => !props.show && css`
    display: none;
  `}
`;

const Warn = styled.div`
width: 90%;
border-radius: 10px;
padding: 10px;
background-color: #FEE187;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const PregnantCert = () => {
    const webcamRef = useRef(null);
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const { auth } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleCapture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc);
    }, [webcamRef]);

    const back = () => {
        navigate('/pregnantcert');
        setModalContent(null);

    };

    const videoConstraints = {
        facingMode: { exact: "environment" }
    };

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                // 카메라 접근 성공
                console.log("Camera access granted");
            })
            .catch(error => {
                // 카메라 접근 실패
                console.error("Error accessing media devices.", error);
            });
    }, []);

    const performOCR = async (imageSrc) => {
        const { data: { text } } = await Tesseract.recognize(
            imageSrc,
            'kor',
            {
                logger: m => console.log(m)
            }
        );
        return text;
    };

    const handleChangeMode = async () => {
        setLoading(true);
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_SERVER}/changeMode/`,
                { priority_type: "1" },
                {
                    headers: {
                        Authorization: `Bearer ${auth.accessToken}`
                    }
                }
            );

            if (response.status === 200) {
                console.log('change mode API가 성공적');
                setModalContent(
                    <>
                        <CustomFont color='black' fontWeight='bold'>인증되었습니다!</CustomFont>
                        <Button2 onClick={() => navigate('/mypage')}>
                            <CustomFont color='black' fontWeight='bold'>확인</CustomFont>
                        </Button2>
                    </>
                );
            } else {
                console.log('change mode API가 실패');
                setModalContent(
                    <CustomColumn width='80%' alignItems='center' justifyContent='center'>
                        <CustomFont color='black' fontWeight='bold'>인증에 실패하였습니다.</CustomFont>
                        <Button3 onClick={back}>
                            <CustomFont color='black' fontWeight='bold'>다시하기</CustomFont>
                        </Button3>
                    </CustomColumn>
                );
            }
        } catch (error) {
            setModalContent('오류가 발생했습니다.');
            console.error("Error calling changeMode API:", error);
        } finally {
            setLoading(false);
        }
    };


    const handleSubmit = async () => {
        setLoading(true);
        try {
            const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

            const extractedText = await performOCR(image);

            const openai = new OpenAI({
                apiKey: apiKey,
                dangerouslyAllowBrowser: true
            });

            const response = await openai.chat.completions.create({
                model: "gpt-4-turbo",
                messages: [
                    {
                        role: "user",
                        content: `다음의 텍스트를 분석하라. 텍스트에 '임신확인서'라는 텍스트가 존재하면 true를,
                        존재하지 않는다면 false를 반환하라.
                        너는 항상 true 또는 false로만 대답해야 한다.
                        만약 텍스트가 없다면, false를 대답하라.
                        텍스트는 다음과 같다: ${extractedText}`
                    }
                ],
                max_tokens: 300
            });

            const content = response.choices[0].message.content;
            console.log(content);

            if (content === "true") {
                console.log('gpt가 true라고 대답함');
                await handleChangeMode();
            } else {
                console.log('gpt가 false라고 대답함');
                setModalContent(
                    <CustomColumn width='80%' alignItems='center' justifyContent='center'>
                        <CustomFont color='black' fontWeight='bold'>인증에 실패하였습니다.</CustomFont>
                        <Button3 onClick={back}>
                            <CustomFont color='black' fontWeight='bold'>다시하기</CustomFont>
                        </Button3>
                    </CustomColumn>
                );
            }
        } catch (error) {
            setModalContent('오류가 발생했습니다.');
            console.error("Error calling OpenAI API:", error);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        if (loading) {
            setModalContent('응답 대기 중...');
        }
    }, [loading]);

    return (
        <ContainerCenter>
            <PageContainer>
                {!image ? (
                    <CustomColumn width='90%' alignItems='center' justifyContent='center'>
                        <CustomColumn width='90%' alignItems='start' justifyContent='center' gap='0.2rem'>
                            <CustomRow width='80%' alignItems='center' justifyContent='end'>
                                <StyledImg src={'icon_preg.png'} width='100px' height='100px' />
                            </CustomRow>
                            <CustomFont color='black' font='1rem' fontWeight='bold'>
                                임산부 인증을 위해,
                            </CustomFont>
                            <CustomFont color='black' font='1rem' fontWeight='bold'>
                                임신확인서를 촬영해주세요.
                            </CustomFont>
                        </CustomColumn>

                        <Warn>
                            <CustomColumn width='90%' alignItems='start' justifyContent='center' gap='1rem'>
                                <CustomRow width='100%' alignItems='center' justifyContent='start' gap='0.2rem'>
                                    <StyledImg src={'icon_warn.png'} width='25px' height='25px' />
                                    <CustomFont color='black' fontWeight='bold' font='1rem'>
                                        주의사항
                                    </CustomFont>
                                </CustomRow>

                                <CustomColumn width='100%' alignItems='start' justifyContent='center' gap='0.2rem'>
                                    <CustomFont color='black' font='0.8rem'>업로드된 인증서는 AI 모델에 의해 판독됩니다.</CustomFont>
                                    <CustomFont color='black' font='0.8rem'>인증서에 주민등록번호 뒷자리가 포함되어있다면, 반드시 가린 후 촬영해주세요.</CustomFont>
                                    <CustomFont color='black' font='0.8rem'>인증서의 진단 날짜와 생년웡릴 정보가 잘 보이게 촬영해주세요.</CustomFont>
                                    <CustomFont color='black' font='0.8rem'>임신확인서의 경우, 임신진단일로부터 1년이 경과하지 않아야 합니다.</CustomFont>
                                    <CustomFont color='black' font='0.8rem'>진단서의 경우, 진단일로부터 3일이 경과하지 않아야 합니다.</CustomFont>
                                    <CustomFont color='black' font='0.8rem'>신분증의 경우, 만 65세 이상의 기준을 충족하는 생년월일이어야 합니다.</CustomFont>
                                </CustomColumn>
                            </CustomColumn>
                        </Warn>

                        <CameraScreen>
                            {loading ? (
                                <>
                                    <LoadingIndicator />
                                    <Modal show={modalContent !== null}>
                                        {loading ? '응답 대기 중...' : modalContent}
                                    </Modal>
                                </>
                            ) : (
                                <>
                                    <Webcam
                                        audio={false}
                                        ref={webcamRef}
                                        screenshotFormat="image/jpeg"
                                        width={300}
                                        height={300}
                                        videoConstraints={videoConstraints}
                                    />
                                    <Button onClick={handleCapture}>
                                        <StyledImg src={'icon_cam.png'} width='40px' height='40px' />
                                    </Button>
                                </>
                            )}

                        </CameraScreen>

                    </CustomColumn>
                ) : (
                    <>
                        <CustomColumn width='90%' alignItems='start' justifyContent='center' gap='0.2rem'>
                            <CustomRow width='80%' alignItems='center' justifyContent='end'>
                                <StyledImg src={'icon_preg.png'} width='100px' height='100px' />
                            </CustomRow>
                            <CustomFont color='black' font='1rem' fontWeight='bold'>
                                촬영된 임신확인서를 검토해주세요!
                            </CustomFont>

                        </CustomColumn>

                        <CameraScreen>
                            <img src={image} alt="촬영된 사진" style={{ width: '100%', height: '100%' }} />
                        </CameraScreen>
                        <Warn>
                            <CustomColumn width='90%' alignItems='start' justifyContent='center' gap='1rem'>
                                <CustomRow width='100%' alignItems='center' justifyContent='start' gap='0.2rem'>
                                    <StyledImg src={'icon_warn.png'} width='25px' height='25px' />
                                    <CustomFont color='black' fontWeight='bold' font='1rem'>
                                        주의사항
                                    </CustomFont>
                                </CustomRow>

                                <CustomColumn width='100%' alignItems='start' justifyContent='center' gap='0.2rem'>
                                    <CustomFont color='black' font='0.8rem'>업로드된 인증서는 AI 모델에 의해 판독됩니다.</CustomFont>
                                    <CustomFont color='black' font='0.8rem'>인증서에 주민등록번호 뒷자리가 포함되어있다면, 반드시 가린 후 촬영해주세요.</CustomFont>
                                    <CustomFont color='black' font='0.8rem'>인증서의 진단 날짜와 생년웡릴 정보가 잘 보이게 촬영해주세요.</CustomFont>
                                    <CustomFont color='black' font='0.8rem'>임신확인서의 경우, 임신진단일로부터 1년이 경과하지 않아야 합니다.</CustomFont>
                                    <CustomFont color='black' font='0.8rem'>진단서의 경우, 진단일로부터 3일이 경과하지 않아야 합니다.</CustomFont>
                                    <CustomFont color='black' font='0.8rem'>신분증의 경우, 만 65세 이상의 기준을 충족하는 생년월일이어야 합니다.</CustomFont>
                                </CustomColumn>
                            </CustomColumn>
                        </Warn>

                        <CustomRow width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                            <Button2 onClick={() => setImage(null)}>
                                <CustomFont color='black' fontWeight='bold'>재촬영</CustomFont>
                            </Button2>
                            <Button2 onClick={handleSubmit}>
                                <CustomFont color='black' fontWeight='bold'>제출하기</CustomFont>
                            </Button2>
                        </CustomRow>
                    </>
                )}

                <Modal show={loading || modalContent}>
                    {loading ? '응답 대기 중...' : modalContent}
                </Modal>
            </PageContainer>
        </ContainerCenter>
    );
};

export default PregnantCert;
