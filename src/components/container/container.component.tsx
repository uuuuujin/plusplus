import styled from 'styled-components';

const ContainerStyle = styled.div`
  max-width: 768px;
  margin: 76px auto 0px;
  background-color: #fff;
`;

interface ContainerProp {
  children: JSX.Element | string;
}

export default function Container({ children }: ContainerProp): JSX.Element {
  return (
    <div>
      <ContainerStyle>{children}</ContainerStyle>
    </div>
  );
}
