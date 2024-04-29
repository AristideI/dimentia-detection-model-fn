import { redirect } from "react-router";

export default function authLoader() {
  const token = localStorage.getItem("token");
  if (!token) {
    redirect("/login");
  }
  return null;
}
