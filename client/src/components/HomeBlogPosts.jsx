function HomeBlogPosts(props) {
  let { title, body, date_created } = props;
  const date = new Date(date_created).toLocaleDateString();
  // console.dir(date.toLocaleDateString());
  return (
    <div className="container w-full basis-2/4 bg-inherit p-9">
      <div className="container flex  flex-col rounded-lg bg-fuchsia-100 p-5">
        <div className="flex justify-between">
          <h3 className="border-b-2 text-3xl capitalize text-red-600 underline ">
            {title}
          </h3>
          <div className="border-red-50">
            <p className="p-3 ">{date}</p>
          </div>
        </div>
        <div className="">
          <p className="p-3">{body}</p>
        </div>
      </div>
    </div>
  );
}
export default HomeBlogPosts;
