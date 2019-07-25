import React, { memo } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

/**
 * Counter Root Style
 */
const Root = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

/**
 * NumberSpan
 */
const NumberSpan = styled.span`
  font-size: 100px;
  font-weight: 600;
  color: olive;
`;

/**
 * NumberBoard
 */
const NumberBoard = ({ number }) => {
  console.log("render ", "NumberBoard");
  return (
    <Root>
      <NumberSpan>{number}</NumberSpan>
    </Root>
  );
};

NumberBoard.propTypes = {
  number: PropTypes.number.isRequired
};

export default memo(NumberBoard);
