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

export const Slider = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
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