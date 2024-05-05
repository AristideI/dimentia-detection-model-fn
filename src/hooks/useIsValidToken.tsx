import axios from "axios";
import { apiUrl } from "../utils/apiUrl";
import { useEffect, useState } from "react";

export default function useIsValidToken() {
  const [isValid, setisValid] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const result = await checkToken();
        setisValid(result);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchAdmins();
  }, []);

  return { isValid, loading, error };
}

async function checkToken() {
  const token = localStorage.getItem("token");
  const url = `${apiUrl}/current-user`;
  const isAllowed = await axios
    .get<boolean>(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(() => true)
    .catch(() => false);
  return isAllowed;
}
