import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    next:'',
    garment:'',
    userPage: 1,
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
    },
    measureType: 'manual',
    fitPreferences: ['Looser', 'Perfect', 'Tighter'],
    skinTones: ['African', 'Hispanic', 'Indian', 'Seasian', 'Midset', 'Asian', 'White'],
    measurementTypes: ['Manual', 'Upload Photo'],
    Measurements: ['height', 'weight', 'chest', 'waist', 'hips', 'arm_length', 'inseam', 'neckline'],
  }
  
  export const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
      setGarment: (state, action) => {
        state.garment = action.payload;
      },
      setNext: (state, action) => {
        state.next = action.payload;
      },
      setUserPage: (state, action) => {
        state.userPage = action.payload;
      },
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
      setMeasureType: (state, action) => {
        state.measureType = action.payload;
      },
    },
  })
  
  export const { setUserPage, setUser, setMeasurements, setFitPreference, setSkinTone, setMeasureType, setNext, setGarment } = user.actions
  
  export default user.reducer;