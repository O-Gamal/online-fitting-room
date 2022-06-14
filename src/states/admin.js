import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    page: 0,
    garType: 'shirt',
    garTypes: ['shirt', 'pants', 'short', 'skirt'],
    generatedGar: '',
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
        state.garType = action.payload;
      },
    },
  })
  
  export const { setPage, setGarType, setGeneratedGar } = admin.actions;
  
  export default admin.reducer;
