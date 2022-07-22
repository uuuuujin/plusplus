import styled from 'styled-components';
import theme from '../../style/theme';
import { Link } from 'react-router-dom';
export const RegionButtonContainer = styled.div`
  padding: 20px 20px 0 20px;

  ul {
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    padding: 0;
    margin: 0;
  }

  li {
    list-style: none;
  }
`;

export const RegionButton = styled.button<{
  regionName: string;
  clickedRegionName: string;
}>`
  background-color: #fff;
  border: none;
  border-radius: 10px;
  padding: 15px 25px;
  cursor: pointer;
  font-size: 16px;
  margin: 10px;

  &:hover {
    background-color: ${theme.colors.buttonHover};
  }

  ${({ regionName, clickedRegionName }) => {
    return (
      regionName === clickedRegionName &&
      `background-color: ${theme.colors.main}; 
      color: #fff; 
      font-weight: bold;
      &:hover {
        background-color: ${theme.colors.main};
      }
      `
    );
  }}
`;

export const Bottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 20px;
  border-top: 1px solid ${theme.colors.border};
`;

export const SearchLink = styled(Link)`
  text-decoration: none;
`;

export const SearchButton = styled.div`
  background-color: ${theme.colors.main};
  border-radius: 10px;
  color: #fff;
  border: none;
  font-size: 18px;
  cursor: pointer;
  text-align: center;
  align-items: center;
  padding: 15px 20px;

  &:hover {
    background-color: ${theme.colors.mainButtonHover};
  }
`;
