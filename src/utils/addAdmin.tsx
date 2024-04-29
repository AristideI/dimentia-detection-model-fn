import { UserReqDto } from "../types/interfaces";
import { apiUrl } from "./apiUrl";
import axios from "axios";

export default async function addAdmin(adminData: UserReqDto) {
  const url = `${apiUrl}/admin-user`;
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Token not found");
  }
  const newUser = await axios.post(url, adminData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return newUser.data;
}
