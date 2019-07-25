import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Root = styled.div`
  flex: 0.2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  font-size: 30px;
  flex: 1;
  margin: 0px 100px;
  text-align: right;
`;

/**
 * InputBoard
 */
const InputBoard = ({ value, onChange }) => (
  <Root>
    <Input type="text" value={value} onChange={onChange} />
  </Root>
);

InputBoard.propTypes = {
  value: PropTypes.string
};

export default InputBoard;
