import styled from 'styled-components';
import theme from '../../style/theme';
export const UserContainer = styled.div`
  width: 100%;
  border: 1px solid ${theme.colors.border};
  border-radius: 8px;
  background: white;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 10px;
  &:not(:last-of-type) {
    margin-bottom: 20px;
  }
  font-size: 15px;
  font-weight: bold;
  text-align: center;
`;
export const UserSex = styled.div`
  color: #999;
`;
export const UserNickname = styled.div``;
export const UserAge = styled.div`
  color: #999;
`;
export const UserEmail = styled.div`
  color: #999;
`;
export const UserImg = styled.img`
  width: 10%;
  //   height: 75px;
  padding: 5px;
  border: 1px solid ${theme.colors.border};
  border-radius: 8px;
  box-sizing: border-box;
`;
export const UserDetail = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  & > * {
    width: 25%;
  }
`;
