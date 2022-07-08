import styled from 'styled-components';
import theme from '../../style/theme';

export const DescriptionContainer = styled.div`
    margin-top: 76px;
    width: 100%;
    max-width: 768px;
    display: grid;
`

export const Intro = styled.div`
    display: grid;
    background-color: white;
    margin: 24px 24px;
    grid-template-areas:
        "Title"
        "Body"
`

export const Title = styled.div`
    display: grid;
    font-size: 32px;
`

export const Body = styled.div`
    display: grid;
    margin-top: 8px;
    font-size: 16px;
`

export const LeftSlideButton = styled.div`
    position: relative;
    left: 5%;
    display: flex;
    align-items: center;
    justify-contents: center;
    color: white;
    background-color: rgb(0, 0, 0, 0.5);
    font-size: 32px;

    &:hover{
        background-color: rgb(0, 0, 0);
    }
`

export const RightSlideButton = styled.div`
    position: relative;
    right: 5%;
    display: flex;
    align-items: center;
    justify-contents: center;
    color: white;
    background-color: rgb(0, 0, 0, 0.5);
    font-size: 32px;

    &:hover{
        background-color: rgb(0, 0, 0);
    }
`

export const Slider = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const SliderImageBox = styled.img`
    width: 105%;
    max-width: 768px;
`
// container의 html margin, padding 수정 후 width 100%로 조정

export const ImageBox = styled.img`
    justify-content: center;
    width: 100%;
    max-width: 768px;
`

export const Rooms = styled.div`
    display: grid;
    margin: 24px 24px;
`

export const Gallery = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 16px;
`

export const RoomDetail = styled.div`
    margin-top: 4px;
    font-size: 24px;
`

export const Info = styled.div`
    display: grid;
    margin: 24px 24px;
`;