import styled from 'styled-components';
import theme from '../../style/theme';
import { Link } from 'react-router-dom';
export const RegionButtonContainer = styled.div`
  margin-top: 20px;
  // border: 1px red solid;
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

  ${({ regionName, clickedRegionName }) => {
    return (
      regionName === clickedRegionName &&
      'background-color: #000; color: #fff; font-weight: bold;'
    );
  }}
`;

export const Bottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 0;
  // position: absolute;
  bottom: 0;
  left: 0;
  border-top: 1px solid ${theme.colors.border};
`;

export const SearchLink = styled(Link)`
  width: 150px;
  height: 50px;
  background-color: #000;
  border-radius: 10px;
  color: #fff;
  border: none;
  font-size: 18px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  line-height: 50px;
`;
