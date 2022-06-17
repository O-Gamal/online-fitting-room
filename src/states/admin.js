import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    page: 0,
    garType: 'shirt',
    garTypes: ['t-shirt', 'pant', 'short-pant', 'skirt'],
    generatedGar: '',
    garGender:'male',
  }
  
  export const admin = createSlice({
    name: 'admin',
    initialState,
    reducers: {
      setPage: (state , action) => {
        state.page = action.payload;
      },
      setGarType: (state , action) => {
        state.garType = action.payload;
      },
      setGeneratedGar: (state , action) => {
        state.generatedGar = action.payload;
      },
      setGarGender : (state , action) => {
        state.garGender = action.payload;
      }
    },
  })
  
  export const { setPage, setGarType, setGeneratedGar, setGarGender } = admin.actions;
  
  export default admin.reducer;
