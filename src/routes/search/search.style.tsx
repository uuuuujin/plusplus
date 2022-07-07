import styled from 'styled-components';

export const Header = styled.div`
  background-color: #000;
  height: 70px;
  color: #fff;
`;

export const FilterTop = styled.div`
  display: flex;
  border-bottom: 1px solid #e6e6e6;
  padding: 10px 0;
  justify-content: space-between;
`;

export const FilterWrap = styled.div`
  display: flex;
`;

export const FilterBottom = styled.div`
  display: flex;
  padding: 10px 0;
`;

export const CategoryContainer = styled.div`
  display: flex;
  margin-right: 10px;
  align-items: center;
`;

export const CategoryTitle = styled.span`
  font-size: 14px;
  font-weight: bold;
  display: inline-block;
  margin-right: 10px;
`;

export const CagtegoryButton = styled.button`
  width: 160px;
  height: 36px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
  margin-right: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

export const ResetButton = styled.button`
  width: 36px;
  height: 36px;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  padding-top: 5px;
`;
