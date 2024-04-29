import { redirect } from "react-router";
import { UserResDto } from "../../types/interfaces";

export default function adminLoader() {
  const token = localStorage.getItem("token");
  if (!token) {
    redirect("/login");
  }
  const user = localStorage.getItem("user") as unknown as UserResDto;
  if (!user.isAdmin) {
    redirect("/dashboard");
  }
  return null;
}
