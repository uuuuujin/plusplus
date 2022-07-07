import Container from '../../components/container/container.component';
import Header from '../../components/header/header.component';
import {
  ListingForm,
  InputHotelName,
  InputHotelDescription,
  Location,
  InsertImage,
  InputPrice,
  Field,
} from './listing.style';
import DaumPostcode from 'react-daum-postcode'
import { useState } from 'react';

export interface ModalProp {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: JSX.Element;
  buttonTitle: string;
}


export default function Listing(): JSX.Element {
  const [addressVisible, setAddressVisible] = useState(false);
  const clickHandler = () => {
    setAddressVisible((e) => !e);
  };
  return (
    <Container>
      <div>
        <Header />
        <ListingForm>
          <Field>
            <label htmlFor="image">이미지</label>
            <InsertImage id="image" type="file" accept="image" />
          </Field>

          <Field>
            <input type="text" placeholder="주소" />
            <input type="text" placeholder="상세주소" />
            <input type="text" placeholder="참고항목" />
            <input type="text" placeholder="우편번호" />
            <input type="button" onClick={clickHandler} value="우편번호 찾기" />
            
          </Field>

          <Field>
            <label htmlFor="name">시설 이름</label>
            <InputHotelName
              type="text"
              id="name"
              placeholder="시설 이름을 입력해주세요."
              autoComplete="on"
            />
          </Field>

          <Field>
            <label htmlFor="price">가격</label>
            <InputPrice id="price" placeholder="￦" autoComplete="on" />
          </Field>
          <Field>
            <label htmlFor="description">시설 설명</label>
            <InputHotelDescription
              id="description"
              placeholder="시설에 대한 설명을 입력해주세요."
            />
          </Field>
          <input type="submit" value="등록"></input>
          <button>취소</button>
        </ListingForm>
      </div>
    </Container>
  );
}

// 검색 태그 (grid?)
