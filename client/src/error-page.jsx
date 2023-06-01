import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="flex h-screen items-center  bg-purple-200 ">
      <div className="from mx-auto flex w-3/4 flex-col gap-5 rounded-xl bg-gradient-to-t from-purple-200 to-purple-300 p-3 text-center ">
        <p className="text-2xl">Opps!!!</p>
        <p className=""> An unexpected error occured</p>
        <p className="text-xl font-bold">{error.statusText || error.message}</p>
      </div>
    </div>
  );
}
