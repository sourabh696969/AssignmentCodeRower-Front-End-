import { combineReducers } from "@reduxjs/toolkit";
import SignIn from "../Slice/SignIn";
import configSlice from "../Slice/configration/Configration";

const rootReducer = combineReducers({
  signIn: SignIn,
  config: configSlice,
});

export default rootReducer;
