import { useNavigate } from "react-router-dom";
import * as loaders from "../api/loaders.js";
import { useAuth } from "../hooks/useAuth.jsx";

export default function Login() {
  const { login } = useAuth();

  const submitLoginForm = async (event) => {
    event.preventDefault();
    const formElement = document.querySelector("#login-form");
    const formData = new FormData(formElement);
    const formDataJson = Object.fromEntries(formData);
    const data = await loaders.createUser(formDataJson);    
    console.log(data);
    login(data.token);
  };

  return (
    <div>
      <form action="/api/loginauth" method="post" id="login-form">
        <div className="flex flex-col gap-5 bg-red-400 p-3">
          <input
            type="text"
            placeholder="username"
            name="username"
            className="rounded-sm border-none p-1  outline-none "
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            className="rounded-sm border-none p-1  outline-none "
          />
          <input
            type="submit"
            value="Login"
            className="m-1 rounded-sm  bg-blue-500 p-1 text-white"
            onClick={submitLoginForm}
          />
        </div>
      </form>
    </div>
  );
}
