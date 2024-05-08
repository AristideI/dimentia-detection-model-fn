import { UserReqDto } from "../types/interfaces";
import { apiUrl } from "./apiUrl";
import axios from "axios";

export default async function addAdmin(adminData: UserReqDto) {
  const url = `${apiUrl}/admin-user`;
  const token = localStorage.getItem("token");
  const validData = { ...adminData, isActive: true };

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

export async function updateAdmin(email: string, adminData: UserReqDto) {
  const url = `${apiUrl}/admin-user/${email}`;
  const token = localStorage.getItem("token");

  const validDate = {
    firstName: adminData.firstName,
    lastName: adminData.lastName,
    phone: adminData.phone,
    password: adminData.password,
    profilePic: adminData.profilePic || "",
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
