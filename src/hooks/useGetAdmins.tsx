import axios from "axios";
import { apiUrl } from "../utils/apiUrl";
import { UserResDto } from "../types/interfaces";
import { useEffect, useState } from "react";

export function useGetAdmins() {
  const [admins, setAdmins] = useState<UserResDto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const allAdmins = await getAdmins();
        setAdmins(allAdmins);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    fetchAdmins();
  }, []);

  return { admins, loading, error };
}

async function getAdmins() {
  const url = `${apiUrl}/admin-user`;
  const token = localStorage.getItem("token");
  const admins = await axios.get<UserResDto[]>(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return admins.data;
}
