import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface IMainState {
  isAside: boolean;
}

const initialState: IMainState = {
  isAside: true,
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    changeIsAside: (state, action: PayloadAction<boolean>) => {
      state.isAside = action.payload;
    },
  },
});

export const { changeIsAside } = mainSlice.actions;

export const selectIsAside = (state: RootState) => state.main.isAside;

export default mainSlice.reducer;
