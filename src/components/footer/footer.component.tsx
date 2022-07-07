import styled from 'styled-components';

//icons
import {AiOutlineHome, AiOutlineHeart} from 'react-icons/ai';
import {BsPerson} from 'react-icons/bs';

const FooterStyle = styled.div`
    width: 100%;
    max-width: 768px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    height: 60px;
    border-top: solid 1px;
`

const FooterBox = styled.div`
    display: grid;
    justify-self: center;
    color: black;
    font-size: 2rem;
`

// 이동 route 지정(redirect?) 필요
export default function Footer(): JSX.Element {
    return (
        <div> 
            <FooterStyle> 
                <FooterBox as="a" href=""> <AiOutlineHome/> </FooterBox>
                <FooterBox as="a" href=""> <AiOutlineHeart/>  </FooterBox>
                <FooterBox as="a" href=""> <BsPerson/> </FooterBox>
            </FooterStyle> 
        </div>
    )
}
