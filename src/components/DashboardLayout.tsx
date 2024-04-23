import { Outlet } from "react-router";
import AsideNav from "./AsideNav";
import DashboardHeader from "./DashboardHeader";

export default function DashboardLayout() {
  return (
    <article className="flex justify-end">
      <AsideNav />
      <section className="w-full md:w-5/6 bg-primary-400">
        <DashboardHeader />
        <Outlet />
      </section>
    </article>
  );
}
