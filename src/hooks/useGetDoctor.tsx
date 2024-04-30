import axios from "axios";
import { apiUrl } from "../utils/apiUrl";
import { UserResDto } from "../types/interfaces";
import { useEffect, useState } from "react";

export function useGetDoctors() {
  const [doctors, setDoctors] = useState<UserResDto[]>([]);
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

  return { doctors, loading, error };
}

export function useGetOneDoctor(email: string) {
  const [doctor, setDoctor] = useState<UserResDto | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const oneAdmin = await getOneDoctor(email);
        setDoctor(oneAdmin);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    fetchAdmins();
  }, [email]);

  return { doctor, loading, error };
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

async function getOneDoctor(email: string) {
  const token = localStorage.getItem("token");
  const url = `${apiUrl}/doctor/${email}`;
  const doctor = await axios.get<UserResDto>(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return doctor.data;
}
