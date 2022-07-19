import styled from 'styled-components';
import theme from '../../style/theme';

export const Container = styled.div`
  padding: 50px 70px 30px 70px;

  @media (max-width: 768px) {
    padding: 50px 50px 30px 50px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const MessageContainer = styled.div`
  margin-bottom: 50px;
`;

export const Message = styled.div`
  font-size: 22px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 30px;

  &.subMessage {
    font-size: 18px;
    color: ${theme.colors.subTitle};
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const AllInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputContainer = styled.div`
  margin-bottom: 40px;
  width: 150px;
`;

export const RadioInput = styled.input`
  padding-right: 10px;
  width: 20px;
  height: 20px;
  position: relative;
  top: 4px;
  cursor: pointer;
`;

export const Label = styled.label`
  margin-right: 30px;
  display: inline-block;
  padding: 5px;
  cursor: pointer;

  &.female {
    margin-right: 0px;
  }
`;

export const InputTitle = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const TelInput = styled.input<{ isTelValidated: boolean }>`
  outline: none;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #000;
  border: ${({ isTelValidated }) =>
    isTelValidated ? `1px solid #000` : `1px solid ${theme.colors.discount}`};
`;

export const Select = styled.select`
  padding: 7px;
  border-radius: 5px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 15px 20px;
  background-color: #000;
  border-radius: 10px;
  color: #fff;
  border: none;
  font-size: 14px;
  cursor: pointer;

  &.cancel {
    color: #000;
    background-color: ${theme.colors.border};
    margin-right: 40px;
  }
`;
