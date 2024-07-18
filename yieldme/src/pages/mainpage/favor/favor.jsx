import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';

import CustomColumn from '../../../Components/Container/CustomColumn';
import CustomFont from '../../../Components/Container/CustomFont';
import CustomRow from '../../../Components/Container/CustomRow';
import './favorComponent/favor_component_1';
import FavorComponent1 from './favorComponent/favor_component_1';
import FavorComponent2 from './favorComponent/favor_component_2';
import FavorComponent3 from './favorComponent/favor_component_3';
import FavorComponent4 from './favorComponent/favor_component_4';
import FavorComponent5 from './favorComponent/favor_component_5';

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
  padding-top: 8vh;
  padding-bottom: 5vh;
  gap: 6rem;
  position: relative;
  background-color: white;
  padding-bottom: 10vh;
`;

const Favor = () => {

    const navigate = useNavigate();

    return (
        <ContainerCenter>
            <PageContainer>
                <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='5.5rem'>

                    <FavorComponent1 />
                    <FavorComponent2 />
                    <FavorComponent3 />
                    <FavorComponent4 />
                    <FavorComponent5 />

                </CustomColumn>
            </PageContainer>
        </ContainerCenter >
    );
};

export default Favor;
