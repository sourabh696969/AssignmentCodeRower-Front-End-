import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { login, Signup } from "../../ApiUrl";

export const token = localStorage.getItem("token");

const headers = {
  Authorization: `Bearer ${token}`,
};

export const SignInAPi = createAsyncThunk(
  "signIn/SignInAPi",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(login, data);
      localStorage.setItem("token", response.data.token);
      return response.data.token;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const SignUPAPi = createAsyncThunk(
  "signIn/SignUPAPi",
  async (data, rejectWithValue) => {
    try {
      const res = await axios.post(Signup, data, { headers });
      const message = res.data.message;
      return message;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const authSlice = createSlice({
  name: "signIn",
  initialState: {
    profile: [],
    status: "idle",
    error: null,
    message: null,
    token: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      //login
      .addCase(SignInAPi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(SignInAPi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.token = action.payload;
        state.error = null;
      })
      .addCase(SignInAPi.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Failed to load data";
      })
      // register
      .addCase(SignUPAPi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(SignUPAPi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.message = action.payload;
        state.error = null;
      })
      .addCase(SignUPAPi.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Failed to load data";
      });
  },
});

export default authSlice.reducer;
