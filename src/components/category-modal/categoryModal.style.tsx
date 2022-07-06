import styled from 'styled-components';

export const ModalContainer = styled.div`
  opacity: 0;
  transition: all 0.3s;
  pointer-events: none;
  z-index: 5;
  transform: translate3d(0, -10%, 0);

  &.show {
    opacity: 1;
    transform: translateZ(0);
    pointer-events: visible;
  }
`;

export const ModalContent = styled.div<{ width: number }>`
  position: relative;
  width: ${({ width }) => `${width}px`};
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;

  .closeButton {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 30px;
    right: 30px;
    cursor: pointer;
  }
`;

export const ModalHeader = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const ModalBody = styled.div`
  margin: 20px 0;
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
