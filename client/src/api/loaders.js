export async function findUser(user) {
  try {
    const data = fetch("api/users/");
  } catch (error) {
    console.log(error);
  }
}

export async function getEveryPost() {
  try {
    const response = await fetch(
      "http://localhost:3000/api/user/1/posts/posts"
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getPostComment(author_id, post_id) {
  try {
    const response = await fetch(
      `/api/user/${author_id}/posts/${post_id}/comments`
    );
    const data = await response.json();
    console.log("🚀 ~ file: loaders.js:28 ~ getPostComment ~ data:", data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function createUser(user) {
  try {
    const data = await fetch("/api/loginauth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    if (!data.ok) {
      throw new Error("cant create user");
    }
    const datajson = await data.json();
    return datajson;
  } catch (error) {
    console.log(error);
  }
}

export async function getAllPostData() {
  const posts = [];
  await fetch(`/api/post`)
    .then((response) => response.json())
    .then((data) => posts.push(...data))
    .catch((error) => console.error(error));
  return posts;
}
