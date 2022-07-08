import Container from '../../components/container/container.component';
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import {
  ListingForm,
  InputAddress,
  InputDetailedAddress,
  InputZonecode,
  AddressWrapper,
  InputHotelName,
  InputHotelDescription,
  InsertImage,
  InputPrice,
  Field,
  ListingButton,
  CancelButton,
  ButtonContainer
} from './listing.style';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { useState } from 'react';



export default function Listing(): JSX.Element {
  const [address, setAddress] = useState('');
  const [zonecode, setZonecode] = useState();
  const Postcode = () => {
    const open = useDaumPostcodePopup();
  
    const handleComplete = (data: any) => {
      let fullAddress = data.address;
      let extraAddress = '';
  
      if (data.addressType === 'R') {
        if (data.bname !== '') {
          extraAddress += data.bname;
        }
        if (data.buildingName !== '') {
          extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
        }
        fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
      }
      setAddress(fullAddress)
      setZonecode(data.zonecode)
    };
  
    const handleClick = () => {
      open({ onComplete: handleComplete });
    };
  
    return (
      <button type='button' onClick={handleClick}>
        주소 검색
      </button>
    );
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
            <AddressWrapper>
              <InputAddress disabled value={address} placeholder='기본 주소'></InputAddress>
              <InputZonecode value={zonecode} placeholder='우편 번호'></InputZonecode>
            </AddressWrapper>
              <InputDetailedAddress placeholder='상세 주소'></InputDetailedAddress>
            <Postcode></Postcode>
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

          
          <ButtonContainer>
            <ListingButton>등록하기</ListingButton>
            <CancelButton>취소</CancelButton>
          </ButtonContainer>

        </ListingForm>
        <Footer></Footer>
      </div>
    </Container>
  );
}

// 검색 태그 (grid?)
