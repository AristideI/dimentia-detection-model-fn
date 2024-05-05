import { Outlet, Navigate } from "react-router";
import AsideNav from "./AsideNav";
import DashboardHeader from "./DashboardHeader";
import useIsValidToken from "../hooks/useIsValidToken";
import { DNA } from "react-loader-spinner";

export default function DashboardLayout() {
  const { isValid, loading, error } = useIsValidToken();
  const token = localStorage.getItem("token");
  if (!token || isValid === false || error) {
    localStorage.clear();
    return <Navigate to={"/login"} />;
  }

  return (
    <article className="flex justify-end">
      {isValid && (
        <>
          <AsideNav />
          <section className="w-full md:w-5/6 py-4 px-6">
            <DashboardHeader />
            <Outlet />
          </section>
        </>
      )}

      {loading && (
        <section className="flex flex-col justify-center items-center w-full h-screen">
          <DNA
            visible={true}
            height="140"
            width="140"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </section>
      )}
    </article>
  );
}
