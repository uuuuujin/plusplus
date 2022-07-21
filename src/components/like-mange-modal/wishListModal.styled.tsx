import styled from 'styled-components';

export const WishManageModalContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ConfirmButton = styled.button`
  flex: 1 1;
  height: 60px;
  background-color: transparent;
  border: none;
  border-top: 1px solid #ddd;
  padding: 10px;
  font-size: 14px;
  cursor: pointer;
  color: #2196f3;
`;

export const CancelButton = styled.button`
  flex: 1 1;
  height: 60px;
  background-color: transparent;
  color: #ff6969;
  border: none;
  border-top: 1px solid #ddd;
  border-right: 1px solid #ddd;
  cursor: pointer;
  padding: 10px;
  font-size: 14px;
`;

export const ContentMessage = styled.div`
  height: 200px;
  padding: 20px 40px;
`;
