import { useLoaderData } from "react-router-dom";
import * as loaders from "../api/loaders";
import PostPagePosts from "../components/postPagePosts";
export async function loader() {
  const posts = await loaders.getEveryPost();
  const postArray = [];

  for (let index = 0; index < posts.length; index++) {
    const postElement = posts[index];
    const comment = await loaders.getPostComment(
      postElement.author_id, //database author_id
      postElement.id //database post_id
    );

    postArray.push({ post: postElement, comment: comment });
  }
  console.log("🚀 ~ file: Posts.jsx:17 ~ loader ~ postArray:", postArray);

  return postArray;
}
export default function Posts() {
  const postsArray = useLoaderData();
  return (
    <div className="container">
      {postsArray.map(({ post, comment }) => (
        <PostPagePosts
          key={post.id}
          title={post.title}
          content={post.content}
          created_at={post.created_at}
          comment={comment}
          author_id={post.author_id}
          post_id={post.id}
        />
      ))}
    </div>
  );
}
