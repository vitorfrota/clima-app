import styled from 'styled-components';

export const Container = styled.div`
  min-width: 200px;
  height: 150px;
  flex-grow: 1;
  position: relative;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;

  h1{
    font-size: 0.9rem;
    font-weight: 400;
    color: #A5A5A5;
  }
`;

export const Content = styled.div`
  height: 100%;

  p{
    font-size: 2.5rem;
    color: #333;

    span{
      font-size: 1.8rem;
      color: #333;
    }
  }

  span{
    font-size: 0.7rem;
    color: #666;
  }
`;
