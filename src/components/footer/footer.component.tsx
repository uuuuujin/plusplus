import styled from 'styled-components';

//icons
import {AiOutlineHome, AiOutlineHeart} from 'react-icons/ai';
import {BsPerson} from 'react-icons/bs';

const FooterStyle = styled.div`
    max-width: 768px;
    bottom: 0;
    height: 60px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    border-top: solid 1px;
`
// 페이지 하단 고정 배치 되는지 확인 필요

const FooterBox = styled.div`
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
