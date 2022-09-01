const fetch = require("node-fetch");

const fetchRelatedPost = async (title) => {
  let quaryString = "";
  if (title?.length > 0) {
    quaryString += title
      .map((singleTitle) => `title_like=${singleTitle}`)
      .join("&");
  }
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?${quaryString}`
  );
  const posts = await res.json();
  return posts;
};
module.exports = fetchRelatedPost;
