import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { UserResDto } from "../types/interfaces";
import { socket } from "../utils/totalAvailableDoc";

export default function AsideNav() {
  const navigate = useNavigate();
  const user = JSON.parse(
    localStorage.getItem("user") as string
  ) as unknown as UserResDto;

  const isAdmin = user.isAdmin;

  function logout() {
    localStorage.clear();
    socket.emit("logout");
    navigate("/");
  }

  return (
    <article className="w-1/6 h-screen fixed top-0 left-0 hidden md:flex flex-col justify-between py-6 px-6">
      <Link
        to="/"
        onClick={() => {
          socket.emit("logout");
        }}
      >
        <img src="/logow.png" className="w-11/12" alt="logo" />
      </Link>
      <section className="flex flex-col gap-6">
        <CustomNavLink to="/dashboard" text="Dashboard" icon="home" />
        {isAdmin && <CustomNavLink to="/admins" text="Admins" icon="admin" />}
        {isAdmin && (
          <CustomNavLink to="/doctors" text="Doctors" icon="doctor" />
        )}
        <CustomNavLink to="/patients" text="Patients" icon="patient" />
        <CustomNavLink to="/profile" text="Profile" icon="user" />
      </section>
      <button
        className="font-bold text-primary-100 bg-secondary-red py-2 text-lg rounded-xl"
        onClick={logout}
      >
        Logout
      </button>
    </article>
  );
}

function CustomNavLink({
  to,
  text,
  icon,
}: {
  to: string;
  text: string;
  icon: string;
}) {
  const [isActive, setIsActive] = useState(false);
  const iconSrc = isActive ? `/${icon}w.png` : `/${icon}.png`;
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        setIsActive(isActive);
        if (isActive) {
          return "bg-primary-300 text-primary-400 flex items-center gap-6 text-lg py-2 px-4 rounded-xl font-bold shadow-lg shadow-primary-400/45";
        } else {
          return "text-dark flex items-center gap-6 text-lg py-2 px-4 rounded-xl font-bold";
        }
      }}
    >
      <div
        className={`${
          isActive ? "bg-primary-400" : "bg-primary-200"
        } w-fit p-2 rounded-lg shadow-md shadow-primary-300/75`}
      >
        <img src={iconSrc} className="w-5" alt="" />
      </div>
      {text}
    </NavLink>
  );
}
