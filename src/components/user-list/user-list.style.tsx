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

export const User = styled.div`
  border-radius: 8px;
  border: 1px solid ${theme.colors.border};
  background: white;
  &:not(:last-of-type) {
    margin-bottom: 10px;
  }
`;
export const UserDetail = styled.div`
  background: red;
`;
