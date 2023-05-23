export default function HomeBlogPosts() {
  async function postData() {
    const response = await fetch("http://localhost:4000/post");
    let commit = await response.json();
    return commit;
  }

  postData();
  return (
    <>
      {postData().then((res) =>
        res.map((res) => {
          <li> {res}</li>;
        })
      )}
    </>
  );
}
