import { UserReqDto } from "../types/interfaces";
import { apiUrl } from "./apiUrl";
import axios from "axios";

export default async function addDoctor(doctorData: UserReqDto) {
  const url = `${apiUrl}/doctor`;
  const token = localStorage.getItem("token");
  const validData = { ...doctorData, isActive: true };

  if (!token) {
    throw new Error("Token not found");
  }
  const newUser = await axios.post(url, validData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return newUser.data;
}

export async function updateDoctor(email: string, doctorData: UserReqDto) {
  const url = `${apiUrl}/doctor/${email}`;
  const token = localStorage.getItem("token");

  const validDate = {
    firstName: doctorData.firstName,
    lastName: doctorData.lastName,
    phone: doctorData.phone,
    password: doctorData.password,
    profilePic: doctorData.profilePic || "",
  };

  if (!token) {
    throw new Error("Token not found");
  }
  const newUser = await axios.patch(url, validDate, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return newUser.data;
}
