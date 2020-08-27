import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  @media(max-width: 540px){
    display: none;
  }
`;

export const ListForecast = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  margin: 15px 0;

  .selected {
    transform: scale(1.1);
    box-shadow: 0 5px 12px rgba(200,200,200,0.15), 0 7px 12px rgba(200,200,200,0.05);
  }

  @media(max-width: 540px){
    flex-direction: column;
  }
`;

export const ForecastItem = styled.li`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  flex: 1;
  justify-content: space-between;
  background: #fff;
  border-radius: 5px;
  padding: 10px 5px;
  transition: all 100ms linear;

  .animation {
    margin: 10px 0;
    max-width: 100px;
    max-height: 100px;
  }

  & + li{
    margin-left: 5px;
  }

  h3{
    font-size: 1rem;
    color: #666;
  }

  p{
    color: #333;
    font-size: 1.5rem;
  }

  @media(max-width: 540px){
    margin: 0;
    margin-top: 5px;
  }
`;
