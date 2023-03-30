import { createSlice } from "@reduxjs/toolkit";
import {deleteTuitThunk} from "../../services/tuits-thunks";
import tuits from "./tuits.json";
import {findTuitsThunk, createTuitThunk}
  from "../../services/tuits-thunks";

const initialState = {
  tuits: [],
  loading: false
}

const currentUser = {
  userName: "Maggie Lu",
  handle: "@maggielumaggie",
  image: "/images/tuiter.jpg"
};

const templateTuit = {
  ...currentUser,
  topic: "Space",
  time: "2h",
  liked: false,
  replies: 0,
  retuits: 0,
  likes: 0
};

const tuitsSlice = createSlice({
  name: "tuits",
  initialState,
  extraReducers: {
    [deleteTuitThunk.fulfilled] :
        (state, { payload }) => {
          state.loading = false
          state.tuits = state.tuits
          .filter(t => t._id !== payload)
        },
    [createTuitThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.tuits.push(payload)
        },
    [findTuitsThunk.pending]:
        (state) => {
          state.loading = true
          state.tuits = []
        },
    [findTuitsThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.tuits = payload
        },
    [findTuitsThunk.rejected]:
        (state, action) => {
          state.loading = false
          state.error = action.error
        }
  },

  reducers: {
    deleteTuit: (state, action) => {
      state.splice(state.findIndex(tuit => tuit._id === action.payload), 1);
    },
    createTuit: (state, action) => {
      state.unshift({
        ...action.payload,
        ...templateTuit,
        _id: Date.now()
      });
    }
  }
});

export const { createTuit, deleteTuit } = tuitsSlice.actions;
export default tuitsSlice.reducer;
