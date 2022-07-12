import styled from 'styled-components';
import theme from '../../style/theme';

export const Slider = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const SliderImageBox = styled.img`
    width: 105%;
    max-width: 768px;
`
// 이미지 사이즈 이슈

export const LeftSlideButton = styled.div`
    position: relative;
    left: 6%;
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
    right: 6%;
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