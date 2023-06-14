export default function SignUp() {
  return (
    <div>
      <form action="/api/user" method="post">
        <div className="flex flex-col rounded-md bg-purple-400 p-3">
          <div className="">
            <label className="p-[5px] text-left  " htmlFor="username">
              Username:
            </label>
            <input
              required
              className="m-[5px] rounded-sm border-none  p-[5px] shadow-sm shadow-orange-300 outline-none"
              type="text"
              name="username"
              id="username"
              placeholder="username"
            />
          </div>
          <div className="">
            <label className="p-[5px] text-left  " htmlFor="username">
              Password:
            </label>
            <input
              required
              className="m-[5px] rounded-sm border-none  p-[5px] shadow-sm shadow-orange-300 outline-none"
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </div>
          <div className="">
            <label className="p-[5px] text-left  " htmlFor="username">
              Email:
            </label>
            <input
              className="m-[5px] rounded-sm border-none  p-[5px] shadow-sm shadow-orange-300 outline-none"
              required
              type="email"
              name="email"
              placeholder="example@gmail.com"
              id="email"
            />
          </div>
          <input
            className="m-1 rounded-md bg-blue-400 p-1 text-white"
            type="submit"
            value="Regis ter"
          />
        </div>
      </form>
    </div>
  );
}
