import { Link } from "react-router-dom";
import DoctorsTable from "../../components/tables/DoctorTable";
import { useGetDoctors } from "../../hooks/useGetDoctor";
import { SuperUserResDto, UserResDto } from "../../types/interfaces";
import LoadingSection from "../../components/LoadingSection";
import { useEffect, useState } from "react";

export default function DoctorsPage() {
  const { doctors, loading } = useGetDoctors();
  const [allDoctors, setAllDoctors] = useState<UserResDto[]>([]);
  
  useEffect(() => {
    if (doctors) {
      setAllDoctors(doctors);
    }
  }, [doctors]);

  const user = JSON.parse(
    localStorage.getItem("user") || "{}"
  ) as SuperUserResDto;
  const isAdmin = user.isSuperAdmin;

  function handleUserSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    if (value === "") {
      setAllDoctors(doctors);
    } else {
      const filteredDoctors = doctors.filter(
        (doc) =>
          doc.firstName.toLowerCase().includes(value.toLowerCase()) ||
          doc.lastName.toLowerCase().includes(value.toLowerCase()) ||
          doc.email.toLowerCase().includes(value.toLowerCase())
      );
      setAllDoctors(filteredDoctors);
    }
  }

  if (loading) return <LoadingSection />;
  return (
    <article>
      <section className="flex justify-between items-center px-10">
        <h1 className="text-3xl font-semibold text-dark">Doctors</h1>
        <div className="flex items-center gap-10">
          <input
            type="search"
            placeholder="Search"
            className="border border-primary-300 bg-transparent rounded-lg p-2 text-sm text-primary-4 w-72"
            onChange={handleUserSearch}
          />
          {isAdmin && (
            <Link
              to="/doctors/add"
              className="font-bold text-primary-100 bg-primary-400 px-8 py-2 rounded-md"
            >
              Add Doctor
            </Link>
          )}
        </div>
      </section>
      <DoctorsTable doctors={allDoctors} />
    </article>
  );
}
