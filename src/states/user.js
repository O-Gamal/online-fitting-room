import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    page:0,
    user: {
        name: 'ahmed',
        age: 23,
        gender: 'male'
    },
    fitPreference: '',
    skinTone:'',
    measurements: {
        height: 0,
        weight: 0,
        chest: 0,
        waist: 0,
        hips: 0,
        arm_length: 0,
        inseam: 0,
        neckline :0,
    }
  }
  
  export const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
      setUser: (state, action) => {
        state.user = action.payload;
      },
      setMeasurements: (state, action) => {
        state.measurements = action.payload;
      },
      setFitPreference: (state, action) => {
        state.fitPreference = action.payload;
      },
      setSkinTone: (state, action) => {
        state.skinTone = action.payload;
      },
    },
  })
  
  export const { setUser, setMeasurements, setFitPreference, setSkinTone } = user.actions
  
  export default user.reducer