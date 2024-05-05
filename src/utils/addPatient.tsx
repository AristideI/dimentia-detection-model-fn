import { Except } from "type-fest";
import { PatientDto } from "../types/interfaces";
import { apiUrl } from "./apiUrl";
import axios from "axios";

export default async function addPatient(
  patientData: Except<PatientDto, "id">
) {
  const url = `${apiUrl}/patient`;
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Token not found");
  }
  const newUser = await axios.post(url, patientData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return newUser.data;
}

export async function updatePatient(
  id:string,
  patientData: Except<PatientDto, "id">
) {
  const url = `${apiUrl}/patient/${id}`;
  const token = localStorage.getItem("token");
  const validData= {
    firstName: patientData.firstName,
    lastName: patientData.lastName,
    phone: patientData.phone,
    email: patientData.email,
    gender: patientData.gender,
    dob: patientData.dob,
}

  if (!token) {
    throw new Error("Token not found");
  }
  const newUser = await axios.patch(url, validData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return newUser.data;
}
