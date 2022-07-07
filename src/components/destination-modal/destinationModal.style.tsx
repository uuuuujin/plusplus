import styled from 'styled-components';

export const RegionButtonContainer = styled.div`
  margin-top: 20px;

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
