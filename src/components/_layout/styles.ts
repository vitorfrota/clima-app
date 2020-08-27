import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 700px;
  display: grid;
  grid-template-columns: 300px auto;

  @media(max-width: 768px){
    margin: 0;
    display: flex;
    flex-direction: column;
  }
`;
