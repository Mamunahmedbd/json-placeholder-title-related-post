const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const fetchPosts = require("./postApi");

const initialState = {
  loading: false,
  posts: [],
  error: "",
  title: [],
};
const fetchPost = createAsyncThunk("post/fetchPost", async () => {
  const singlePost = await fetchPosts();
  return singlePost;
});

const postSlice = createSlice({
  name: "post",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPost.pending, (state, action) => {
      state.loading = true;
      state.posts = [];
      state.error = "";
    });
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.title = action.payload.title.split(" ");
      state.error = "";
    });
    builder.addCase(fetchPost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.posts = [];
    });
  },
});

module.exports = postSlice.reducer;
module.exports.fetchPost = fetchPost;
