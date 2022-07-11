import styled from 'styled-components';

export const FilterModalContainer = styled.div`
  padding: 0 20px;
  max-height: calc(100vh - 270px);
  overflow-y: auto;
  position: relative;
  margin-bottom: 70px;
`

export const CategoryContainer = styled.div`
  padding: 25px 0;
  border-bottom: 1px solid #d9d9d9;

  & + * + * {
    border: none;
  }
`

export const CategoryTitle = styled.h2`
  font-size: 22px;
  margin: 0px;
  margin-bottom: 20px;
`

export const Bottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 0;
  position: absolute;
  bottom: 0;
  left: 0;
  border-top: 1px solid #d9d9d9;
`

export const SearchButton = styled.button`
  width: 150px;
  height: 50px;
  background-color: #000;
  border-radius: 10px;
  color: #fff;
  border: none;
  font-size: 18px;
  cursor: pointer;
`

export const CheckboxContainer = styled.div`
  padding: 0 10px;
  display: flex;
  flex-flow: row wrap;
  width: 96%
`

export const CheckboxElement = styled.div`
  flex-basis: 48%;
  display: flex;
  padding: 12px 0;
  
`
export const CheckboxInput = styled.input`
  transform: scale(2);
  margin-right: 20px;
  border: 1px solid red;
  cursor: pointer;
`
export const CheckboxLabel = styled.label`
  display: inline-block;
  width: 100%;
  cursor: pointer;
`