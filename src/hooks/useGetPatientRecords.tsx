import axios from "axios";
import { apiUrl } from "../utils/apiUrl";
import { DoctorPatientRecords, LoginResDto, PatientRecordsResponseDto, RecordDto } from "../types/interfaces";
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
export function useGetPatientRecordsOfDoctor() {
  const [patientRecords, setpatientRecords] =
    useState< DoctorPatientRecords[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const user = JSON.parse(
    localStorage.getItem("user") as string
  ) as LoginResDto;

  useEffect(() => {
    const fetchpatientRecords = async () => {
      try {
        const allpatientRecords = await getPatientRecordsForDoc(user.email);
        setpatientRecords(allpatientRecords);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };
    fetchpatientRecords();
  }, [user.email]);

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

async function getPatientRecordsForDoc(docEmail: string) {
  const url = `${apiUrl}/records/latest/${docEmail}`;
  const token = localStorage.getItem("token");
  const records = await axios.get<DoctorPatientRecords[]>(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return records.data;
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
