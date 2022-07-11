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

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`;

export const FilterWrap = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CategoryContainer = styled.div`
  display: flex;
  margin-right: 10px;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    &.checkout {
      margin-right: 0;
    }
  }
`;

export const CategoryTitle = styled.span`
  font-size: 14px;
  font-weight: bold;
  display: inline-block;
  margin-right: 10px;
  overflow: hiddlen;
  white-space: nowrap;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const CagtegoryButton = styled.button`
  width: 160px;
  height: 36px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

  &.regionName {
    width: 150px;
  }

  @media (max-width: 768px) {
    width: 100%;

    &.regionName {
      width: 100%;
    }
  }
`;

export const IconButton = styled.button`
  width: 36px;
  height: 36px;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  padding-top: 5px;
  cursor: pointer;
`;

export const IconButtonContainer = styled.div`
  display: flex;

  & > * + * {
    margin-left: 5px;
  }

  &.mobile {
    display: none;
  }

  @media (max-width: 768px) {
    &.mobile {
      display: flex;
    }

    &.desktop {
      display: none;
    }
  }
`;

export const RowContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;

    & + & {
      margin-top: 10px;
    }
  }
`;

export const ProductListContainer = styled.div`
  margin-top: 20px;
`;
