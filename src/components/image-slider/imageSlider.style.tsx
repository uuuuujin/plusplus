import styled from 'styled-components';
import theme from '../../style/theme';

export const Slider = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 375px;
`

export const SliderImageBox = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const LeftSlideButton = styled.div`
    position: relative;
    left: 7%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: rgb(0, 0, 0, 0.5);
    font-size: 40px;

    &:hover{
        background-color: rgb(0, 0, 0);
    }
`

export const RightSlideButton = styled.div`
    position: relative;
    right: 7%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: rgb(0, 0, 0, 0.5);
    font-size: 40px;

    &:hover{
        background-color: rgb(0, 0, 0);
    }
`