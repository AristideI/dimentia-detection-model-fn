import axios from "axios";
import { apiUrl } from "../utils/apiUrl";
import { PatientRecordsResponseDto, RecordDto } from "../types/interfaces";
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

export function useGetRecordById(id: string) {
  const [record, setRecord] = useState<RecordDto | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchRecord = async () => {
      try {
        const oneRecord = await getRecordById(id);
        setRecord(oneRecord);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchRecord();
  }, [id]);

  return { record, loading, error };
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
async function getRecordById(id: string) {
  const url = `${apiUrl}/records/${id}`;
  const token = localStorage.getItem("token");
  const admins = await axios.get<RecordDto>(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return admins.data;
}
