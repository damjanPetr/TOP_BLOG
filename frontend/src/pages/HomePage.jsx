import { useLoaderData } from "react-router-dom";
import HomeBlogPosts from "../components/HomeBlogPosts";

export default function HomePage() {
  const data = useLoaderData();

  return (
    <>
      <div className="mx-auto flex flex-wrap justify-between">
        {data.map((item) => {
          return (
            <HomeBlogPosts
              key={item.id}
              title={item.title}
              body={item.body}
              date_created={item.date_created}
            />
          );
        })}
      </div>
    </>
  );
}
