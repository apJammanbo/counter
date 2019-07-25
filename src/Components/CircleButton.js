import React from "react";
import styled from "styled-components";

const Root = styled.button`
  color: white;
  background-color: ${props => (props.disabled ? "darkgray" : "gray")};
  height: 100px;
  width: 100px;
  border-radius: 50%;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  border: 0px;
  outline: none;
  margin-left: 10px;
  font-size: 25px;

  &:hover {
    /* background-color: ${props => (props.disabled ? "black" : "darkgray")}; */
    opacity: ${props => (props.disabled ? 1 : 0.5)}
  }

  &:first-child {
    margin: 0;
  }
`;

const CircleButton = ({ text, disabled, onClick }) => {
  console.log("render ", "circleButton");
  return (
    <Root disabled={disabled} onClick={() => onClick(text)}>
      {text}
    </Root>
  );
};
export default CircleButton;
