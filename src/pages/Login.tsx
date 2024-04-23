import { useState } from "react";
import { useNavigate } from "react-router";

export default function LoginPage() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(userInfo);
    navigate("/dashboard");
  }

  return (
    <body className="rounded-lg py-5">
      <div className="container flex flex-col mx-auto rounded-lg pt-12 my-5">
        <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
          <div className="flex items-center justify-center w-full lg:p-12">
            <div className="flex items-center xl:p-10">
              <form
                className="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl p-16"
                onSubmit={handleSubmit}
              >
                <h3 className="mb-3 text-4xl font-extrabold text-dark-grey-900">
                  Sign In
                </h3>
                <p className="mb-4 text-grey-700">
                  Enter your email and password
                </p>
                <label
                  htmlFor="email"
                  className="mb-2 text-sm text-start text-grey-900"
                >
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="mail@example.com"
                  value={userInfo.email}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, email: e.target.value })
                  }
                  required
                  className="flex items-center w-full px-5 py-4 mr-2 text-sm bg-primary-200 font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                />
                <label
                  htmlFor="password"
                  className="mb-2 text-sm text-start text-grey-900"
                >
                  Password<span className="text-red-500">*</span>
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter a password"
                  value={userInfo.password}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, password: e.target.value })
                  }
                  required
                  className="flex items-center w-full px-5 py-4 mb-5 mr-2 bg-primary-200 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                />
                <div className="flex flex-row justify-between mb-8">
                  <label className="relative inline-flex items-center mr-3 cursor-pointer select-none">
                    <input
                      type="radio"
                      className="sr-only peer bg-primary-200"
                      checked
                    />
                    <span className="ml-3 text-sm font-normal text-grey-900">
                      Keep me logged in
                    </span>
                  </label>
                  <a
                    href="javascript:void(0)"
                    className="mr-4 text-sm font-medium text-purple-blue-500"
                  >
                    Forget password?
                  </a>
                </div>
                <button className="w-full px-6 py-5 mb-5 text-sm font-bold leading-none bg-primary-400 text-primary-100 transition duration-300 md:w-96 rounded-2xl hover:bg-purple-blue-600 focus:ring-4 focus:ring-purple-blue-100 bg-purple-blue-500">
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
