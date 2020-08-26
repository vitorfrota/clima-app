import styled from 'styled-components';

interface ForecastItemProps {
  selected?: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 15px;
`;

export const ListForecast = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  height: 100%;

  @media(max-width: 540px){
    flex-direction: column;
  }
`;

export const ForecastItem = styled.li<ForecastItemProps>`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  flex: 1;
  justify-content: space-between;
  background: #fff;
  border-radius: 5px;
  border: 2px solid ${(props) => (props.selected ? '#0185FF' : 'transparent')};
  padding: 10px 5px;

  .animation {
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
