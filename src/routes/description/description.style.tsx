import styled from 'styled-components';
import theme from '../../style/theme';

export const DescriptionContainer = styled.div`
    display: grid;
`

export const Intro = styled.div`
    display: grid;
    background-color: white;
    margin: 24px 24px;
    grid-template-areas:
        "Title"
        "Body"
`;

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
    font-size: 32px
`

export const RightSlideButton = styled.div`
    font-size: 32px
`

export const Slider = styled.div`
    display: flex;
    background-color: white;
    align-items: center;
    justify-content: center;
    margin: 24px 24px;
`

export const ImageBox = styled.img`
    justify-content: center;
    max-width: 360px;
    max-height: 480px;
`

export const Rooms = styled.div`
    display: grid;
`;

export const Info = styled.div`
    display: grid;
`;