import axios from "axios";
import { apiUrl } from "../utils/apiUrl";
import { PatientRecordsResponseDto } from "../types/interfaces";
import { useEffect, useState } from "react";

export function useGetPatientRecords(patientId: string) {
  const [patientRecords, setpatientRecords] =
    useState<PatientRecordsResponseDto>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchpatientRecords = async () => {
      try {
        const allpatientRecords = await getPatientRecords(patientId);
        setpatientRecords(allpatientRecords);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };
    fetchpatientRecords();
  }, [patientId]);

  return { patientRecords, loading, error };
}

async function getPatientRecords(patientId: string) {
  const url = `${apiUrl}/patient/${patientId}/records`;
  const token = localStorage.getItem("token");
  const admins = await axios.get<PatientRecordsResponseDto>(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return admins.data;
}
