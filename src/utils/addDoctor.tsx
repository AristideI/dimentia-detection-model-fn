import { UserReqDto } from "../types/interfaces";
import { apiUrl } from "./apiUrl";
import axios from "axios";

export default async function addDoctor(doctorData: UserReqDto) {
  const url = `${apiUrl}/doctor`;
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Token not found");
  }
  const newUser = await axios.post(url, doctorData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return newUser.data;
}
