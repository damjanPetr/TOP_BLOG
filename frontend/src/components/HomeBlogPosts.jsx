export default function HomeBlogPosts() {
  let play = [];
  async function postData() {
    const response = await fetch("http://localhost:4000/post");
    let commit = await response.json();
    console.log(commit);
  }

  postData();

  return <div>play.map( (item) => {<li>{item}</li>})</div>;
}
