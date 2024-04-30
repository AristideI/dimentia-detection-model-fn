import { RecordReqDto, RecordDto } from "../types/interfaces";
import { apiUrl } from "./apiUrl";
import axios from "axios";

export default async function AddPatientRecord(recordData: RecordReqDto) {
  const url = `${apiUrl}/records`;
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Token not found");
  }
  const newRecord = await axios.post<RecordDto>(url, recordData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return newRecord.data;
}
