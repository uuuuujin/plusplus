import styled from 'styled-components';
import theme from '../../style/theme';

export const ListingForm = styled.form`
  height: 100vh;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  padding: 15px 0;
`;
export const Field = styled.p`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;

  & + & {
    border-top: 3px solid #ddd;
    padding: 10px 0 0 0;
  }

  & > * {
    margin-top: 12px;
  }

  & > label {
    font-weight: 700;
  }
`;

export const ImgLabel = styled.label`
  display: flex;
  padding: 20px;
  justify-content: center;
  align-self: center;
  width: 150px;
  height: 150px;
  border: 10px solid #aaa;
  border-radius: 10px;
  opacity: 0.4;
  & > svg {
    
    width: 150px;
    height: 150px;
  }
  
`

export const InputAddress = styled.input`
  width:70%;
  height: 40px;
  padding: 5px;
  box-sizing: border-box;
`;

export const InputDetailedAddress = styled.input`
  width: 100%;
  height: 40px;
  padding: 5px;
  box-sizing: border-box;
`;
export const InputZonecode = styled.input`
  width: 20%;
  height: 40px;
  padding: 5px;
  box-sizing: border-box;
`;
export const AddressWrapper= styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InputHotelName = styled.input`
  height: 30px;
  padding: 7px;
`;

export const InputHotelDescription = styled.textarea`
  height: 150px;
  padding: 7px;
`;

export const Location = styled.input`
  height: 30px;
`;

export const InsertImage = styled.input`
  display: block;
  align-self: center;
  height: 150px;
  width: 150px;
  background: white;
  opacity: 0;
  position: absolute;
`;

export const InputPrice = styled.input`
  height: 30px;
  padding: 7px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`
export const ListingButton = styled.button`
  background-color: #94b49f;
  border: none;
  cursor: pointer;
  color: #fff;
  font-size: 12px;
  padding: 10px;
`;

export const CancelButton = styled.button`
  background-color: #94b49f;
  border: none;
  cursor: pointer;
  color: #fff;
  font-size: 12px;
  padding: 10px;
`;