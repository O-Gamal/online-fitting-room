import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    page: 0,
    garType: 'shirt',
    garTypes: ['shirt', 'pants', 'short', 'skirt'],
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
    },
  })
  
  export const { setPage, setGarType } = admin.actions
  
  export default admin.reducer