import { useState, useRef } from 'react';
import MainModal from '../main-modal/mainModal.component';
import { useAppDispatch, useAppSelector } from '../../hooks/index.hook';
import { modalAction } from '../../store/modules/modal/modal.slice';
import { selectIsUserInfoModalOpen } from '../../store/modules/modal/modal.select';

import {
  Container,
  LogoContainer,
  MessageContainer,
  Message,
  AllInputContainer,
  InputContainer,
  RadioInput,
  Label,
  InputTitle,
  TelInput,
  Select,
  ButtonContainer,
  Button,
} from './userInfoModal.style';

export default function UserInfoModal(): JSX.Element {
  const dispatch = useAppDispatch();

  const isUserInfoModalOpen = useAppSelector(selectIsUserInfoModalOpen);
  const handleUserInfoModal = () => {
    dispatch(modalAction.radioUserInfoModal());
  };

  const [tel, setTel] = useState('');
  const [isTelValidated, setIsTelValidated] = useState(true);

  const telInputRef = useRef<HTMLInputElement>(null);

  const handleUserTel = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^[0-9]{0,13}$/;
    if (e.target.value.length < 10) {
      setIsTelValidated(false);
    } else setIsTelValidated(true);

    if (regex.test(e.target.value)) {
      setTel(e.target.value);
    }
  };

  const telValidate = () => {
    if (!isTelValidated && telInputRef.current) telInputRef.current.focus();
  };

  const saveUserInfo = () => {
    telValidate();

    if (isTelValidated) handleUserInfoModal();
  };

  return (
    <MainModal
      isOpen={isUserInfoModalOpen}
      onClose={handleUserInfoModal}
      title=""
      contentWidth={700}
    >
      <Container>
        <LogoContainer>
          <img src="logologo.png" alt="로고이미지" />
        </LogoContainer>
        <MessageContainer>
          <Message>🎉 플러스플러스 가입을 축하드립니다! 🎉</Message>
          <Message className="subMessage">
            추가적인 정보를 입력해주세요.
          </Message>
        </MessageContainer>

        <AllInputContainer>
          <InputContainer>
            <InputTitle>성별</InputTitle>
            <RadioInput type="radio" id="male" name="sex" defaultChecked />
            <Label htmlFor="male">남</Label>
            <RadioInput type="radio" id="female" name="sex" />
            <Label htmlFor="female" className="female">
              여
            </Label>
          </InputContainer>
          <InputContainer>
            <InputTitle>전화번호</InputTitle>
            <TelInput
              type="text"
              maxLength={11}
              placeholder="- 없이 입력해주세요."
              onChange={handleUserTel}
              value={tel}
              isTelValidated={isTelValidated}
              ref={telInputRef}
            />
          </InputContainer>
          <InputContainer>
            <InputTitle>나이</InputTitle>
            <Select>
              <option>20대</option>
              <option>30대</option>
              <option>40대</option>
              <option>50대</option>
              <option>60대 이상</option>
            </Select>
          </InputContainer>
        </AllInputContainer>

        <ButtonContainer>
          <Button className="cancel" onClick={handleUserInfoModal}>
            나중에 입력할래요
          </Button>
          <Button onClick={saveUserInfo}>저장하기</Button>
        </ButtonContainer>
      </Container>
    </MainModal>
  );
}
