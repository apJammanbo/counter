import React, { Component } from "react";
import styled from "styled-components";
import NumberBoard from "../../Components/NumberBoard";
import InputBoard from "../../Components/InputBoard";
import CircleButton from "../../Components/CircleButton";

/**
 * Counter Root Style
 */
const Root = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #dbdbdb;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

/**
 * Panel Style
 */
const ButtonGroup = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

/**
 * 버튼 Texts
 */
const buttonTexts = ["UNDO", "+", "-", "REDO"];

/**
 * Counter
 */
class Counter extends Component {
  state = {
    // 입력된 숫자배열
    numbers: [0],
    // numbers 중 화면에 표시할 인덱스
    displayIndex: 0,
    // input에 입력된 텍스트
    inputText: ""
  };

  /**
   * 유효한 숫자인지 확인한다.
   */
  isValidNumber = text => {
    return /^-?[0-9]*\.?[0-9]*$/.test(text);
  };

  /**
   * 값을 계산하고 Number 배열에 추가한다.
   */
  calcNAddNumber = (inputText, buttonText) => {
    const { numbers, displayIndex } = this.state;
    if (inputText) {
      // 현재 표시되어있는값
      const currentNumber = numbers[displayIndex];
      // 입력된 값
      const number =
        buttonText === "+" ? Number(inputText) : Number(inputText) * -1;
      const splicedNumbers = numbers.splice(0, displayIndex + 1);
      this.setState({
        numbers: [...splicedNumbers, currentNumber + number],
        displayIndex: displayIndex + 1,
        inputText: ""
      });
    }
  };

  /**
   * handleChangeInputText
   */
  handleChangeInputText = event => {
    const inputText = event.target.value;
    if (this.isValidNumber(inputText)) {
      // 유효성이 통과했을때만 인풋의 텍스트를 바꾼다.
      this.setState({ inputText });
    }
  };

  /**
   * 버튼 클릭 이벤트 입니다.(UNDO, +, -, REDO)
   */
  handleClick = buttonText => {
    const { inputText, displayIndex } = this.state;
    switch (buttonText) {
      case "+":
      case "-":
        this.calcNAddNumber(inputText, buttonText);
        break;
      case "UNDO":
        this.setState({ displayIndex: displayIndex - 1 });
        break;
      case "REDO":
        this.setState({ displayIndex: displayIndex + 1 });
        break;
      default:
        break;
    }
  };

  /**
   * 버튼의 빌활성화 여부를 확인한다.
   */
  getEnabled = buttonText => {
    const { numbers, displayIndex } = this.state;
    switch (buttonText) {
      case "+":
      case "-":
        return true;
      case "UNDO":
        return displayIndex > 0;
      case "REDO":
        return numbers.length - 1 > displayIndex;
      default:
        return false;
    }
  };

  /**
   * render
   */
  render() {
    console.log("render ", "counter");
    const { numbers, displayIndex, inputText } = this.state;
    return (
      <Root>
        <NumberBoard number={numbers[displayIndex]} />
        <InputBoard value={inputText} onChange={this.handleChangeInputText} />
        <ButtonGroup>
          {buttonTexts.map(buttonText => (
            <CircleButton
              key={buttonText}
              text={buttonText}
              onClick={this.handleClick}
              disabled={!this.getEnabled(buttonText)}
            />
          ))}
        </ButtonGroup>
      </Root>
    );
  }
}

export default Counter;
