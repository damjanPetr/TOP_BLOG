import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Icon from "@mdi/react";
import { mdiCheckBold } from "@mdi/js";
import { useAuth } from "../hooks/useAuth";

export default function HomePage() {
  const [postpopup, setPostpopup] = useState(false);
  const data = useLoaderData();
  const { user } = useAuth();

  function createPost() {
    setPostpopup(true);
  }

  async function submitPost() {
    const text = document.querySelector("textarea").value;
    const title = document.querySelector("#title").value;
    const bodyJson = JSON.stringify({ body: text, title: title });
    // const bodyJson = { body: text, title: title };
    const fetchResult = await fetch("/api/user/27/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: bodyJson,
    });

    if (fetchResult.status) {
      setPostpopup(false);
    } else alert("uhtn");
  }
  return (
    <>
      {user ? (
        <div className="flex flex-col gap-2 p-1">
          <p> {user.id}</p>
          <p>Welcome user: {user.username}</p>
        </div>
      ) : null}

      <div className="mx-auto  flex w-4/6 flex-wrap justify-between">
        <button className="bg-blue-300 p-1" onClick={createPost}>
          Create New Post
        </button>
      </div>
      {postpopup ? (
        <>
          <div className="gap mx-auto flex flex-col gap-5 p-3">
            <input type="text" placeholder="Title" id="title" />
            <textarea
              name="contenct"
              id="content"
              cols="30"
              rows="10"
              placeholder="New Post ..."
              className="rounded-md p-1"
            ></textarea>
            <div className="flex justify-between">
              <input
                type="text"
                placeholder="comment"
                className="rounded-md "
              />
              <Icon
                path={mdiCheckBold}
                size={1}
                className=""
                onClick={submitPost}
              />
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
