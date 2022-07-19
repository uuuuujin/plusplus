import styled from 'styled-components';
import theme from '../../style/theme';

export const HeaderText = styled.span`
  display: flex;
  justify-content: center;
  margin: 30px 0;
  font-weight: 700;
  font-size: 32px;
`;

export const UsersContainer = styled.div`
  display: flex;
  width: 66%;
  border-radius: 8px;
  border: 1px solid ${theme.colors.border};
  background: #eee;
  justify-content: center;
  flex-direction: column;
  margin: 20px auto;
  padding: 10px;
`;

export const DetailCategory = styled.div`
  display: flex;
  width: 66%;
  margin: auto;
  font-weight: bold;
  font-size: 18px;
`;
export const FillerDiv = styled.div`
  width: 10%;
`;
export const DetailWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;
  text-align: center;
  & > * {
    width: 25%;
    border-right: 1px solid ${theme.colors.border};
  }
  & > :last-child {
    border: none;
  }
`;
export const Nickname = styled.span``;
export const Sex = styled.span``;
export const Age = styled.span``;
export const Email = styled.span``;
