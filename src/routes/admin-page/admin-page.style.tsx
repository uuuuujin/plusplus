import styled from 'styled-components';
import { RiAdminLine } from 'react-icons/ri';
import theme from '../../style/theme';
export const AdminInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 10px 30px 10px;
  margin-bottom: 30px;
  box-sizing: border-box;
  flex-direction: column;
  border-bottom: 1px solid ${theme.colors.border};
`;
export const GreetingText = styled.span`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
  text-align: center;
`;

export const AdminIcon = styled(RiAdminLine)`
  font-size: 50px;
  color: ${theme.colors.main};
  border: 3px solid ${theme.colors.border};
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 10px;
`;

export const AdminContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
`;

export const ContentItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33.3%;
  font-size: 12px;
  padding: 5px;
  border-right: 1px solid ${theme.colors.border};

  &:last-child {
    border: none;
  }
  .icon {
    font-size: 30px;
    margin-bottom: 8px;
    &:hover {
      transform: scale(1.1);
    }
  }
  @media screen and (max-width: 400px) {
    .icon {
      font-size: 20px;
    }
    > span {
      font-size: 10px;
    }
  }
`;

export const IconText = styled.span`
  font-size: 15px;
`;
