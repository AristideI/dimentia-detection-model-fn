import { Link } from "react-router-dom";
import PatientTable from "../../components/tables/PatientTable";
import LoadingSection from "../../components/LoadingSection";
import { PatientDto, UserResDto } from "../../types/interfaces";
import { useGetPatients } from "../../hooks/useGetPatients";
import { useEffect, useState } from "react";

export default function PatientPage() {
  const { patients, loading } = useGetPatients();
  const [allPatients, setAllPatient] = useState<PatientDto[]>([]);

  useEffect(() => {
    if (patients) {
      setAllPatient(patients);
    }
  }, [patients]);

  const user = JSON.parse(localStorage.getItem("user") || "{}") as UserResDto;
  const isAdmin = user.isAdmin;

  function handleUserSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    if (value === "") {
      setAllPatient(patients);
    } else {
      const filteredPatients = patients.filter(
        (doc) =>
          doc.firstName.toLowerCase().includes(value.toLowerCase()) ||
          doc.lastName.toLowerCase().includes(value.toLowerCase()) ||
          doc.email.toLowerCase().includes(value.toLowerCase()) ||
          doc.phone.toLowerCase().includes(value.toLowerCase())
      );
      setAllPatient(filteredPatients);
    }
  }

  if (loading) return <LoadingSection />;
  return (
    <article>
      <section className="flex justify-between items-center px-10">
        <h1 className="text-3xl font-semibold text-dark">Patients</h1>
        <div className="flex items-center gap-10">
          <input
            type="search"
            placeholder="Search"
            className="border border-primary-300 bg-transparent rounded-lg p-2 text-sm text-primary-4 w-72"
            onChange={handleUserSearch}
          />
          {isAdmin && (
            <Link
              to="/patients/add"
              className="font-bold text-primary-100 bg-primary-400 px-8 py-2 rounded-md"
            >
              Add Patient
            </Link>
          )}
        </div>
      </section>
      <PatientTable patients={allPatients} />
    </article>
  );
}
