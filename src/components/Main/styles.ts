import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 30px;
  background: #F9F9F9;
  display: flex;
  flex-direction: column;
  align-items: baseline;

  h1{
    margin-bottom: 15px;
  }
`;

export const CardsGroup = styled.div`
  margin-bottom: 15px;
  width: 100%;
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
`;
