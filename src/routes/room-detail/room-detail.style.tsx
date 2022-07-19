import styled from 'styled-components';

export const RoomDetailContainer = styled.div`
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

export const Schedule = styled.div`
    display: grid;
    margin: 24px 24px;
`

export const ScheduleBox = styled.div`
    display: grid;
    margin-top: 8px;
    font-size: 24px;
    font-weight: bold;
`

export const ScheduleContentsBox = styled.div`
    display: grid;
    margin-top: 8px;
    font-size: 16px;
    color: #696969;
`

export const Price = styled.div`
    display: grid;
    margin: 24px 24px;
`

export const PriceBox = styled.div`
    margin-top: 8px;
    font-size: 24px;
    font-weight: bold;
`

export const Refund = styled.div`
    display: grid;
    margin: 24px 24px;
`

export const Info = styled.div`
    display: grid;
    margin: 24px 24px;
`;

export const PayButton = styled.button`
    position: fixed;
    bottom: 0;
    width: 100%;
    max-width: 768px;
    height: 60px;
    background-color: black;
    color: white;
    font-size: 24px;
`