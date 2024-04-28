import { Except } from "type-fest";
import { PatientDto } from "../types/interfaces";
import { apiUrl } from "./apiUrl";
import axios from "axios";

export default async function addPatient(
  patientData: Except<PatientDto, "id">
) {
  const url = `${apiUrl}patient`;
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
