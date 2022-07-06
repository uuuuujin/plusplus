import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  pointer-events: none;
  z-index: 5;

  &.show {
    opacity: 1;
    pointer-events: visible;
  }
`;

export const ModalContent = styled.div<{ width: number }>`
  position: relative;
  width: ${({ width }) => `${width}px`};
  background-color: #fff;
  border-radius: 10px;
  padding: 20px 30px;

  .closeButton {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 25px;
    right: 30px;
    cursor: pointer;
  }
`;

export const ModalHeader = styled.div`
  font-weight: bold;
  font-size: 24px;
  border-bottom: 1px solid gray;
  padding: 10px 0;
`;

export const ModalBody = styled.div`
  padding: 10px;
`;

export const ModalSubmitButton = styled.div`
  display: flex;
  justify-content: center;
  button {
    width: 100px;
    height: 50px;
    border: 0px;
    border-radius: 5px;
    cursor: pointer;
    background-color: #000;
    color: #fff;

    &:hover {
      background-color: #808080;
    }
  }
`;
