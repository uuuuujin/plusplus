import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SliderState {
    index: number,
    length: number,
};

const initialState: SliderState = {
    index: 0,
    length: 0,
};

export const sliderSlice = createSlice({
    name: 'slider',
    initialState,
    reducers: {
        setLength: (state, action) => {
            state.length = action.payload
        },

        setIncrease: (state, action) => {
            if (action.payload > state.length-1){
                state.index = 0;
            }
            else {
                state.index = action.payload
            }
        },

        setDecrease: (state, action) => {
            if (action.payload < 0){
                state.index = state.length-1;
            }
            else {
                state.index = action.payload
            };
        }
    }
})

export const { setLength, setIncrease, setDecrease } = sliderSlice.actions;
export default sliderSlice.reducer;