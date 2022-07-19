import styled from 'styled-components';
import theme from '../../style/theme';

export const HeaderText = styled.span`
  display: flex;
  justify-content: center;
  margin: 30px 0;
  font-weight: 700;
  font-size: 32px;
`;
export const Filters = styled.div`
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
export const FilterContainer = styled.div`
  display: grid;
  padding: 10px;

  grid-template-columns: repeat(4, 25%);
`;

export const FilterText = styled.span`
  display: flex;
  font-size: 15px;
  padding: 10px;
  border-bottom: 1px solid ${theme.colors.border};
`;

export const Filter = styled.div`
  border-radius: 8px;
  border: 1px solid ${theme.colors.border};
  background: white;
  &:not(:last-of-type) {
    margin-bottom: 10px;
  }
`;
export const CheckboxElement = styled.div`
  flex-basis: 48%;
  display: grid;
  padding: 12px 0;
`;
export const CheckboxContainer = styled.div`
  display: flex;
`;
export const CheckboxInput = styled.input`
  margin-right: 10px;
  border: 1px solid green;
  cursor: pointer;
`;
export const CheckboxLabel = styled.label`
  display: inline-block;
  width: 100%;
  cursor: pointer;
  font-size: 0.5rem;
  font-weight: 700;
  line-height: 19px;
`;

export const ProductListContainer = styled.div`
  margin-top: 30px;
  margin: auto;
  width: 90%;
  display: grid;
  border-top: 1px solid ${theme.colors.border};
  grid-template-columns: repeat(4, 25%);
  padding: 30px;

  @media (max-width: 1500px) {
    grid-template-columns: repeat(3, 33%);
  }
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 50%);
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 100%);
  }
`;
