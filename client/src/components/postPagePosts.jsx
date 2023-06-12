import PostComments from "./postComments";
export default function PostPagePosts({ title, content, created_at, comment }) {
  return (
    <div className="container m-2 p-1">
      <div className="">
        <h2 className="text-3xl">{title}</h2>
        <div className="">
          <p>{created_at}</p>
        </div>
      </div>
      <div className="text-3xl">
        <p>{content}</p>
      </div>

      <div className="dev">
        <div className="p-3">
          {comment.map((comments) => (
            <PostComments
              key={comments.id}
              body={comments.body}
              created_at={comments.created_at}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
