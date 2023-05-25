import { url } from "./url.js";

export async function getAllPostData() {
  const posts = [];
  await fetch(`${url}/post`)
    .then((response) => response.json())
    .then((data) => posts.push(...data))
    .catch((error) => console.error(error));
  // console.log(posts);
  return posts;
}
