import styled from 'styled-components';
import Footer from '../footer/footer.component'

const ContainerStyle = styled.div`
  max-width: 768px;
  margin: 0 auto;
  // background-color: pink;
`;

interface ContainerProp {
  children: JSX.Element | string;
}

export default function Container({ children }: ContainerProp): JSX.Element {
  return (
    <div> 
    <ContainerStyle>{children}</ContainerStyle>
    </div>
  )
}
