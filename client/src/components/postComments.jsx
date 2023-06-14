import * as loaders from "../api/loaders.js";

export default function postComments({
  body,
  created_at,
  post_id,
  author_id,
  comment_id,
}) {
  async function deleteComment() {
    loaders.deleteComment(author_id, post_id, comment_id);
  }

  return (
    <>
      <div className="">
        <p>{body}</p>
      </div>
      <div className="p-1">{created_at}</div>
      <button className="bg-blue-600 p-1" onClick={deleteComment}>
        X
      </button>
    </>
  );
}
