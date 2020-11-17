import styled from "styled-components";

export const WeatherImage = styled.img`
  width: 100%;
  max-width: 300px;
  @media screen and (max-width: 440px) {
    width: 100px;
  }
`;

export const AbsoluteCenter = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StatusText = styled(AbsoluteCenter)`
  color: white;
  font-size: 2em;
  margin: 0;
  flex-direction: column;
`;

export const InfoWrapper = styled.div`
  position: absolute;
  top: 40px;
  left: 40px;
  z-index: 1;
  font-size: 3em;

  @media screen and (max-width: 440px) {
    top: 20px;
    left: 20px;
    font-size: 2em;
  }
`;

export const RangeSlider = styled.input`
  width: 75%;
  height: 24px;
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

  -webkit-appearance: none;
  background: rgba(0, 0, 0, 0.3);
  outline: none;
  border-radius: 12px;
  padding: 0 6px;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 8px;
    background: var(--bg-colour);
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 8px;
    background: var(--bg-colour);
    cursor: pointer;
  }
`;

export const LargeType = styled.p`
  font-size: 2em;
  margin: 0;
`;

export const RegularType = styled.p`
  margin: 1em 0;
  text-align: center;
  @media screen and (max-width: 440px) {
    max-width: 80%;
  }
`;

export const Button = styled.button`
  -webkit-appearance: none;
  appearance: none;
  background-color: white;
  border: none;
  color: var(--bg-colour);
  margin: 1em 0 0;
  padding: 0.5em 0.75em;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1em;
  font-weight: 600;
  cursor: pointer;
  border-radius: 5px;
`;
