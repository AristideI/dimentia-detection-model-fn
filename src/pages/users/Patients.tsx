import { Link } from "react-router-dom";
import PatientTable from "../../components/tables/PatientTable";
import LoadingSection from "../../components/LoadingSection";
import { UserResDto } from "../../types/interfaces";
import { useGetPatients } from "../../hooks/useGetPatients";

export default function PatientPage() {
  const { patients, loading } = useGetPatients();
  const user = JSON.parse(localStorage.getItem("user") || "{}") as UserResDto;
  const isAdmin = user.isAdmin;
  if (loading) return <LoadingSection />;
  return (
    <article>
      <section className="flex justify-between items-center px-10">
        <h1 className="text-3xl font-semibold text-dark">Patients</h1>
        {isAdmin && (
          <Link
            to="/patients/add"
            className="font-bold text-primary-100 bg-primary-400 px-8 py-2 rounded-md"
          >
            Add Patient
          </Link>
        )}
      </section>
      <PatientTable patients={patients} />
    </article>
  );
}
