import { Link } from "react-router-dom";
import DoctorsTable from "../../components/tables/DoctorTable";
import { useGetDoctors } from "../../hooks/useGetDoctor";
import { UserResDto } from "../../types/interfaces";
import LoadingSection from "../../components/LoadingSection";

export default function DoctorsPage() {
  const { doctors, loading } = useGetDoctors();
  const user = JSON.parse(localStorage.getItem("user") || "{}") as UserResDto;
  const isAdmin = user.isAdmin;
  if (loading) return <LoadingSection />;
  return (
    <article>
      <section className="flex justify-between items-center px-10">
        <h1 className="text-3xl font-semibold text-dark">Doctors</h1>
        {isAdmin && (
          <Link
            to="/doctors/add"
            className="font-bold text-primary-100 bg-primary-400 px-8 py-2 rounded-md"
          >
            Add Doctor
          </Link>
        )}
      </section>
      <DoctorsTable doctors={doctors} />
    </article>
  );
}
