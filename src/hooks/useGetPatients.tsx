import axios from "axios";
import { apiUrl } from "../utils/apiUrl";
import { UserResDto } from "../types/interfaces";
import { useEffect, useState } from "react";

export function useGetPatients() {
  const [patients, setDoctors] = useState<UserResDto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const allAdmins = await getAdmins();
        setDoctors(allAdmins);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    fetchAdmins();
  }, []);

  return { patients, loading, error };
}

async function getAdmins() {
  const token = localStorage.getItem("token");
  const url = `${apiUrl}/doctor`;
  const admins = await axios.get<UserResDto[]>(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return admins.data;
}
