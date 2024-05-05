import axios from "axios";
import { apiUrl } from "../utils/apiUrl";
import { UserResDto } from "../types/interfaces";
import { useEffect, useState } from "react";
import { useAuthContext } from "../context/AuthContext";

export function useGetDoctors() {
  const [doctors, setDoctors] = useState<UserResDto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const allAdmins = await getdoctors();
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

export function useGetActiveDoctors() {
  const { totalDoc } = useAuthContext();
  const [doctors, setDoctors] = useState<UserResDto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const allAdmins = await getActiveDoctors();
        setDoctors(allAdmins);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    fetchAdmins();
  }, [totalDoc]);

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

async function getdoctors() {
  const token = localStorage.getItem("token");
  const url = `${apiUrl}/doctor`;
  const admins = await axios.get<UserResDto[]>(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return admins.data;
}

async function getActiveDoctors() {
  const token = localStorage.getItem("token");
  const url = `${apiUrl}/doctor/active`;
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

export async function updateDoctorStatus(email: string) {
  const token = localStorage.getItem("token");
  const url = `${apiUrl}/doctor/update-status/${email}`;
  const doctor = await axios.patch<UserResDto>(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return doctor.data;
}
