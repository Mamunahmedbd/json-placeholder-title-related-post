const { configureStore } = require("@reduxjs/toolkit");
const postSlice = require("../features/post/PostReducer");
const { createLogger } = require("redux-logger");
const relatedSlice = require("../features/relatedPost/relatedPostSlice");
const myLogger = createLogger();

const store = configureStore({
  reducer: {
    post: postSlice,
    relatedPost: relatedSlice,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(myLogger),
});

module.exports = store;
