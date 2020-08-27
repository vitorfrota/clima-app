import styled from 'styled-components';

interface CompassIndicatorProps {
  degree: number;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export const Compass = styled.span`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: 5px solid #f1f1f1;
`;

export const CompassIndicator = styled.span<CompassIndicatorProps>`
  position: absolute;
  width: 4px;
  height: 15px;
  background: #41f8b3;
  border-radius: 20px;
  left: 13px;
  transform: rotate(${(props) => props.degree}deg);
  transform-origin: bottom;
  transition: all 500ms linear;
`;
