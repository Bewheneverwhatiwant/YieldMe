import React from 'react';
import styled from 'styled-components';

import CustomFont from '../../../Components/Container/CustomFont';
import CustomRow from '../../../Components/Container/CustomRow';

const ContainerCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 90vh;
  background-color: white;
  padding-top: 8vh;
  padding-bottom: 5vh;
`;

const RankingContainer = styled.div`
  width: 90%;
  background-color: #E0E0E0;
  padding: 1rem;
  border-radius: 8px;
`;

const RankItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  font-size: 1rem;
  color: ${props => (props.rank <= 3 ? 'red' : 'black')};
`;

const RankingPage = () => {
  const rankings = [
    { rank: 1, name: '000님', id: 'lny021102', points: 999 },
    { rank: 2, name: '000님', id: 'hihi0818', points: 888 },
    // 랭킹 추가 가능
  ];

  return (
    <ContainerCenter>
      <CustomFont color='black' font='1.2rem'>소중한 자리양보, 진심으로 감사드립니다.</CustomFont>
      <RankingContainer>
        {rankings.map(r => (
          <RankItem key={r.rank} rank={r.rank}>
            <CustomFont color='black' font='1.2rem' fontWeight='bold'>{r.rank}위</CustomFont> | {r.name} | {r.id} | {r.points}점
          </RankItem>
        ))}
      </RankingContainer>
    </ContainerCenter>
  );
};

export default RankingPage;
