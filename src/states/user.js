import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    next:'',
    transaction:'',
    garment:'',
    lowerGarment:'pant',
    upperGarment:'',
    userPage: 1,
    user: {
        name: 'ahmed',
        age: 23,
        gender: '',
        user_id:1,
    },
    fitPreference: 'Perfect',
    skinTone:'Midset',
    measurements: {
        chest: 0,
        height: 0,
        inseam: 0,
        hips: 0,
        shoulder: 0,
        waist: 0,
        weight: 0,
        arm_length: 0,
        neckline :0,
    },
    measureType: 'Manual',
    fitPreferences: ['Looser', 'Perfect', 'Tighter'],
    skinTones: [
      {name:'African', color:'#8b472c'},
      {name:'Hispanic', color:'#dea990'},
      {name:'Seasian', color:'#c48d6d'},
      {name:'Midset', color:'#f1c2ac'},
      {name:'Asian', color:'#f1c3ac'},
      {name:'White', color:'#f3cca9'},
    ],
    measurementTypes: ['Manual', 'Upload Photo'],
    Measurements: ['height', 'weight', 'chest', 'waist', 'hips', 'arm_length', 'inseam', 'neckline', 'shoulder'],
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
      setUpperGarment: (state, action) => {
        state.upperGarment = action.payload;
      },
      setLowerGarment: (state, action) => {
        state.lowerGarment = action.payload;
      },
      setTransaction: (state,action) => {
        state.transaction = action.payload;
      },
    },
  })
  

  export const { setTransaction, setUserPage, setUser, setMeasurements, setFitPreference, setSkinTone, setMeasureType, setNext, setGarment, setLowerGarment, setUpperGarment, } = user.actions
  
  export default user.reducer;