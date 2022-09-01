const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const fetchRelatedPost = require("./relatedPostAPI");

const initialState = {
  loading: false,
  error: "",
  relatedPost: [],
};
const relatedPost = createAsyncThunk("post/relatedPost", async (title) => {
  const relatedPost = await fetchRelatedPost(title);
  return relatedPost;
});

const relatedSlice = createSlice({
  name: "relatedPost",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(relatedPost.pending, (state, action) => {
      state.loading = true;
      state.relatedPost = [];
      state.error = "";
    });
    builder.addCase(relatedPost.fulfilled, (state, action) => {
      state.loading = false;
      state.relatedPost = action.payload;
      state.error = "";
    });
    builder.addCase(relatedPost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.relatedPost = [];
    });
  },
});

module.exports = relatedSlice.reducer;
module.exports.relatedPost = relatedPost;
