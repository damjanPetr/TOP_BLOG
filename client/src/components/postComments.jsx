export default function postComments({ body, created_at }) {
  return (
    <>
      <div className="">
        <p>{body}</p>
      </div>
      <div className="p-1">{created_at}</div>
    </>
  );
}
