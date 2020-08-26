import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
  background: #fff;
  border-right: 1px solid #eee;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: space-between;


  @media(max-width: 768px){
    align-items: center;
  }
`;

export const Location = styled.div`
  background: #f5f5f5;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  min-width: 120px;

  svg{
    width: 14px;
    height: 14px;
    margin-right: 10px;
    color: #333;
  }

  p{
    font-weight: 500;
    font-size: 1rem;
  }
`;

export const WeatherContainer = styled.div`

.date{
  p{
    color: #666;
  }

  strong{
    color: #333;
  }
}

@media(max-width: 768px){
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px 0;
  }
`;

export const Date = styled.p`
  color: #666;

  strong {
    color: #333;
  }
`;

export const WeatherAnimation = styled.div`
  width: 220px;
  height: 220px;
  margin: 20px 0;

  @media(max-width: 768px){
    width: 130px;
    height: 130px;
  }
`;

export const WeatherData = styled.div`
  p{
    font-size: 5rem;
    font-weight: 500;
  }

  span{
    font-size: 16px;
    color: #666;
  }

  @media(max-width: 768px){
    text-align: center;

    p{
      font-size: 4rem;
    }
  }
`;

export const WeatherAdditional = styled.ul`
  list-style: none;
  display: flex;

  @media(max-width: 768px){
    background: #f5f5f5;
    padding: 15px;
    border-radius: 8px;
  }
`;

export const WeatherAdditionalItem = styled.li`
  & + li {
    margin-left: 30px;
  }

  header{
    display: flex;
    align-items: center;

    svg{
      margin-right: 8px;
      width: 20px;
      height: 20px;
      color: #0185FF;
    }

    p{
      color: #666;
    }
  }

  > p{
    margin-top: 10px;
    color: #333;
    font-size: 1.8rem;
  }
`;
