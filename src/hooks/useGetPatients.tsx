import axios from "axios";
import { apiUrl } from "../utils/apiUrl";
import { PatientDto } from "../types/interfaces";
import { useEffect, useState } from "react";

export function useGetPatients() {
  const [patients, setPatients] = useState<PatientDto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const allPatients = await getPatients();
        setPatients(allPatients);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    fetchAdmins();
  }, []);

  return { patients, loading, error };
}

export function useGetOnePatient(nid: string) {
  const [patient, setPatient] = useState<PatientDto | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const onePatient = await getOnePatients(nid);
        setPatient(onePatient);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    fetchAdmins();
  }, [nid]);

  return { patient, loading, error };
}

async function getPatients() {
  const token = localStorage.getItem("token");
  const url = `${apiUrl}/patient`;
  const admins = await axios.get<PatientDto[]>(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return admins.data;
}
async function getOnePatients(nid: string) {
  const token = localStorage.getItem("token");
  const url = `${apiUrl}/patient/${nid}`;
  const patient = await axios.get<PatientDto>(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return patient.data;
}
