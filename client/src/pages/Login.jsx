export default function Login() {
  return (
    <div>
      <form action="/login" method="post">
        <div className="flex flex-col gap-5 bg-red-400 p-3">
          {/* <label htmlFor="username"></label> */}
          <input
            type="text"
            value={"username"}
            name="username"
            className="rounded-sm border-none p-1 capitalize outline-none "
          />
          {/* <label htmlFor=""></label> */}
          <input
            type="password"
            value={"password"}
            name="password"
            className="rounded-sm border-none p-1 capitalize outline-none "
          />
          <input
            type="submit"
            value="Login"
            className="m-1 rounded-sm  bg-blue-500 p-1 text-white"
          />
        </div>
      </form>
    </div>
  );
}
