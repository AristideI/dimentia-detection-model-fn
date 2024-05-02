import { Outlet, Navigate } from "react-router";
import AsideNav from "./AsideNav";
import DashboardHeader from "./DashboardHeader";

export default function DashboardLayout() {
  const token = localStorage.getItem("token");
  if (!token) {
    localStorage.clear();
    return <Navigate to={"/login"} />;
  }

  return (
    <article className="flex justify-end">
      <AsideNav />
      <section className="w-full md:w-5/6 py-4 px-6">
        <DashboardHeader />
        <Outlet />
      </section>
    </article>
  );
}
