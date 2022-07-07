import styled from 'styled-components';

const ContainerStyle = styled.div`
  max-width: 768px;
  margin: 0 auto;
  background-color: #e9e9e9;
`;

interface ContainerProp {
  children: JSX.Element | string;
}

export default function Container({ children }: ContainerProp): JSX.Element {
  return <ContainerStyle>{children}</ContainerStyle>;
}
