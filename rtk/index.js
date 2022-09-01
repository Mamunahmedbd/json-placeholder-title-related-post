const store = require("./app/Store");
const { fetchPost } = require("./features/post/PostReducer");
const { relatedPost } = require("./features/relatedPost/relatedPostSlice");

async function getRelatedPost() {
  try {
    await store.dispatch(fetchPost());
    await store.dispatch(relatedPost(store.getState().post.title));
  } catch (error) {
    console.log(error.message);
  }
}
getRelatedPost();

store.subscribe(() => {
  const state = store.getState();
  const { post } = state;
  const { posts } = post;

  const relatedPost = store.getState().relatedPost.relatedPost;
  console.log(`This is title${JSON.stringify(posts)}`);
  console.log(`This is title${JSON.stringify(relatedPost)}`);
});
