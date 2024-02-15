import { useState } from "react";
import DummyJsonService from "../services/DummyJsonService";
import { useUser } from "../hooks/useUser";
import { useBackDrop } from "../hooks/useBackDrop";

const LoginPage = () => {
  const { setIsVisible } = useBackDrop();
  const { logUserIn } = useUser();
  const [userCredentials, setUserCredentials] = useState<{
    username: string;
    password: string;
  }>({
    username: "kminchelle",
    password: "0lelplR",
  });
  const onUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  };

  const onLogin = () => {
    setIsVisible(true);
    DummyJsonService.login(userCredentials)
      .then((res) => {
        if ("message" in res) {
          console.log("failure", res);
        } else {
          logUserIn(res);
        }
      })
      .catch((err) => {
        console.log("error", err);
      })
      .finally(() => {
        setIsVisible(false);
      });
  };
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border border-gray-500"
            id="username"
            name="username"
            value={userCredentials.username}
            type="text"
            placeholder="Username"
            onChange={onUserChange}
          />
        </div>
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline border border-gray-500"
            id="password"
            name="password"
            value={userCredentials.password}
            type="password"
            placeholder="******************"
            onChange={onUserChange}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            onClick={onLogin}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
