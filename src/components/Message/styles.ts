import styled from 'styled-components';

export const Container = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  align-self: center;

  .animation {
    max-width: 300px;
    max-height: 300px;
  }

  h1{
    color: #fff;
    text-transform: uppercase;
  }

  p{
    font-size: 1rem;
    color: #f1f1f1;
    margin-top: 20px;
  }

  @media(max-width: 540px){
    width: 100%;
    height: 100vh;
    h1{
      font-size: 1.2rem;
    }
  }
`;
