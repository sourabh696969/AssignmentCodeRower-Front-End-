import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  getconfigapi,
  createconfigapi,
  updateconfigapi,
} from "../../../ApiUrl";
import { token } from "../SignIn";

const headers = {
  Authorization: `Bearer ${token}`,
};

export const getconfig = createAsyncThunk(
  "config/getconfig",
  async ({ addconfig }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${getconfigapi}/${addconfig}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const createconfig = createAsyncThunk(
  "config/createconfig",
  async (data, rejectWithValue) => {
    try {
      const res = await axios.post(createconfigapi, data, { headers });
      const message = res.data.message;
      return message;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const updateconfig = createAsyncThunk(
  "config/updateconfig",
  async ({ addconfig, data }, { rejectWithValue }) => {
    try {
      const updateurl = `${updateconfigapi}/${addconfig}`;
      const res = await axios.put(updateurl, data);
      const message = res.data.message;
      return message;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const configSlice = createSlice({
  name: "config",
  initialState: {
    configs: [],
    status: "idle",
    error: null,
    message: null,
    token: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      //get
      .addCase(getconfig.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getconfig.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.configs = action.payload;
      })
      .addCase(getconfig.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Failed to load data";
      })
      // create
      .addCase(createconfig.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createconfig.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.message = action.payload;
        if (state.status === "succeeded") {
          alert(state.message);
        }
        state.status = "idle";
      })
      .addCase(createconfig.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Failed to load data";
        if (state.status === "failed") {
          alert(state.error);
        }
      })
      // update
      .addCase(updateconfig.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateconfig.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.message = action.payload;
        if (state.status === "succeeded") {
          alert(state.message);
        }
        state.status = "idle";
      })
      .addCase(updateconfig.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Failed to load data";
        if (state.status === "failed") {
          alert(state.error);
        }
      });
  },
});

export default configSlice.reducer;
