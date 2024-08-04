import React, { useState, useRef, useCallback, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import Webcam from 'react-webcam';
import { useNavigate } from 'react-router-dom';
import Tesseract from 'tesseract.js';
import OpenAI from "openai";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
`;

const CameraScreen = styled.div`
  width: 300px;
  height: 400px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  background-color: #FFC107;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border: 1px solid black;
  z-index: 1000;
  ${(props) => props.show && css`
    display: block;
  `}
  ${(props) => !props.show && css`
    display: none;
  `}
`;

const OldestCert = () => {
    const webcamRef = useRef(null);
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const navigate = useNavigate();

    const handleCapture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc);
    }, [webcamRef]);

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
                        content: `다음의 텍스트를 분석하라. 다음의 조건을 만족하면 true를, 만족하지 않는다면 false를 반환하라.
                        - '주민등록증' 또는 '운전면허증' 이라는 텍스트를 포함하고 있는가?
                        - '주민등록증' 텍스트를 포함하고 잇는 경우, '000000-0000000' 형색의 숫자가 있을 것이다.
                        이 숫자의 맨 앞 두 숫자를 확인하여, 65보다 큰 수인지 작은 수인자 판단하라.
                        만약 큰 수라면 false를, 작은 수라면 true를 반환하면 된다.
                        - '운전면허증' 이라는 텍스트를 포함하고 있는 경우, 바로 true를 반환시켜라.
                        텍스트는 이러하다 : ${extractedText}`
                    }
                ],
                max_tokens: 300
            });

            const content = response.choices[0].message.content;
            console.log(content);

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
        <Container>
            {!image ? (
                <>
                    <h2>노약자 인증을 위해, 신분증을 촬영해주세요.</h2>
                    <CameraScreen>
                        <Webcam
                            audio={false}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                            width={300}
                            height={400}
                        />
                    </CameraScreen>
                    <Button onClick={handleCapture}>촬영하기</Button>
                </>
            ) : (
                <>
                    <h2>임산부 인증을 위해, 신분증을 촬영해주세요.</h2>
                    <CameraScreen>
                        <img src={image} alt="촬영된 사진" style={{ width: '100%', height: '100%' }} />
                    </CameraScreen>
                    <div>
                        <Button onClick={() => setImage(null)}>재촬영</Button>
                        <Button onClick={handleSubmit}>제출하기</Button>
                    </div>
                </>
            )}

            <Modal show={loading}>
                {modalContent}
            </Modal>
        </Container>
    );
};

export default OldestCert;
