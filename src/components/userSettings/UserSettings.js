import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./UserSettings.scss";
import { useSelector, useDispatch } from "react-redux";
import { setMeasurements, setFitPreference } from "../../states/user.js";
import { setSkinTone } from "../../states/user.js";

import Input from "../../utilities/input/Input";
import Button from "../../utilities/button/Button";
import Radio from "../../utilities/radio/Radio";
import DropZone from "../../utilities/dropzone/DropZone";

export default function UserSettings() {
  const { measurements, Measurements, fitPreferences, skinTones, fitPreference, skinTone } = useSelector((state) => state.user);

  const [measurementState, setMeasurementsState] = useState(measurements);
  const [fitPreferencesState, setFitPreferencesState] = useState(fitPreference);
  const [skinTonesState, setSkinTonesState] = useState(skinTone);

  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(setMeasurements(measurementState));
    dispatch(setFitPreference(fitPreferencesState));
    dispatch(setSkinTone(skinTonesState));
  };

  const update = ()=>{
    let registerData='';
    if(measureType === 'Manual'){
       options= {headers: { 'Content-Type': 'application/json' }}
      registerData ={...user, measurements:{...measurements}, preference:fitPreference, skinTone}
    }else{
      registerData ={...user, preference:fitPreference, skinTone}
      for(const key in registerData){
        image.set(key,registerData[key])
      }
       options = {headers: { 'Content-Type': 'multipart/form-data' }}
       
    }
    console.log("this is registerred",registerData);
    axios.post('http://localhost:4002/api/users/register',image?image:registerData)
    .then((res) =>{console.log(res.data); dispatch(setUser(res.data.user))})
    .then(()=>showNotification({
      title: `Hey there, your userId is ${user.name}`,
      autoClose: 3000,
      radius: '10px',
      styles:{
        root:{backgroundColor:'white'},
        title: { color: 'black',fontSize: '18px',textAlign: 'left'},
      }}))
    .catch(e=>console.error(e))
  }

  return (
    <motion.div className="settings-container">
      <motion.div
        className="settings-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        <h1>Please, update filds you want to change only</h1>
      </motion.div>
      <div className="settings-body">
        <motion.div
          className="settings-body-measurements section"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <h2>Update your body measurements</h2>
          <div className="body-measurements-inputs">
            {Measurements.map((measurement) => (
              <Input
                className="measure-btn"
                key={measurement}
                type="number"
                placeholder={measurement}
                value={measurements[measurement]}
                onChange={(e) =>
                  setMeasurementsState({
                    ...measurementState,
                    [measurement]: e.target.value,
                  })
                }
              />
            ))}
          </div>
        </motion.div>
        <motion.div
          className="settings-photo section"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <h2>Update your photo</h2>
          <DropZone className="settings-drop" />
        </motion.div>
        <motion.div
          className="settings-fit-preference section"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <h2>Update your fit preference and skin tone</h2>
          <div className="radio-container">
            {fitPreferences.map((preference, index) => {
              return (
                <Radio
                  vart="radio-btn"
                  key={index}
                  label={preference}
                  name="fit"
                  value={preference}
                  checked={fitPreferencesState===preference}
                  onChange={() => setFitPreferencesState(preference)}
                />
              );
            })}
          </div>
          <div className="radio-container skin-tone">
            {skinTones.map((tone, index) => {
              return (
                <Radio
                  vart="rnd"
                  key={index}
                  label={tone.name}
                  name="skin"
                  color={tone.color}
                  value={tone.name}
                  onChange={() => setSkinTonesState(tone.name)}
                  checked={skinTonesState===tone.name}
                />
              );
            })}
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="btns-container"
      >
        <Link className="btns" to="/user/app">
          <Button full="btn cancel-btn">Cancel</Button>
          <Button full="btn Save-btn" onClick={handleUpdate}>
            Update
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
}
