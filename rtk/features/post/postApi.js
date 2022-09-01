const fetch = require("node-fetch");

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const posts = await response.json();
  return posts;
};

module.exports = fetchPosts;
