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
  background: ${theme.colors.main}
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;

  &:last-child {
    margin-top: 150px;
  }
  //이거 왜 안되는거야?
`;

export const InputHotelName = styled.input`
  height: 30px;
  background: white;
`;

export const InputHotelDescription = styled.textarea`
  height: 150px;
`;

export const Location = styled.input`
  height: 30px;
`;

export const InsertImage = styled.input`
  height: 30px;
  background: white;
`;

export const InputPrice = styled.input`
  height: 30px;
`;
