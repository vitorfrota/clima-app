import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 600px;
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 2fr;


  @media(max-width: 768px){
    margin: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;
