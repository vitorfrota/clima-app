import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-between;
  height: 100%;
`;

export const MeasurerContainer = styled.div`
  position: relative;
  display: inline-block;

  .needle {
    width: 5px;
    height: 30px;
    background: #aaa;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-top-left-radius: 100%;
    border-top-right-radius: 100%;
    display: inline-block;
    left: 38px;
    position: absolute;
    top: 10px;
    transform:rotate(90deg);
    transform-origin:bottom;
}
`;

export const Measurer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  border: 20px solid #e5e5e5;
  border-right: 20px solid white;
  border-bottom: 20px solid white;
  -webkit-transform: rotate(45deg);
  display: inline-block;
`;
