import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Hour = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  .sun {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #F8B341;
    border-radius: 50%;
    margin-right: 15px;
    border: 4px solid rgba(255, 255, 255, 0.5);

    svg{
      color: #fff;
      width: 16px;
      height: 16px;
    }
  }

  span {
    color: #333;
    font-size: 1.2rem;
  }

`;
