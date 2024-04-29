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

async function getPatients() {
  const token = localStorage.getItem("token");
  const url = `${apiUrl}/doctor`;
  const admins = await axios.get<PatientDto[]>(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return admins.data;
}
