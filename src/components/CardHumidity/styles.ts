import styled from 'styled-components';

interface MeasurerProps {
  percentage: number;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-between;
  height: 100%;
`;

export const Measurer = styled.div<MeasurerProps>`
  height: 100%;
  width: 10px;
  background: #f5f5f5;
  border-radius: 15px;
  position: relative;

  .indicator {
    position: absolute;
    bottom: 0;
    border-radius: 15px;
    width: 100%;
    height: ${(props) => props.percentage}%;
    background: #41f8b3;
    transition: all 100ms linear;
  }
`;
