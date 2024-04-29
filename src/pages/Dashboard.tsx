import LoadingSection from "../components/LoadingSection";
import AllOverview from "../components/dashboard/AllOverview";
import AdminTable from "../components/tables/AdminTable";
import DoctorsTable from "../components/tables/DoctorTable";
import PatientTable from "../components/tables/PatientTable";
import { useGetAdmins } from "../hooks/useGetAdmins";
import { useGetDoctors } from "../hooks/useGetDoctor";
import { useGetPatients } from "../hooks/useGetPatients";

export default function DashboardPage() {
  const { admins, loading } = useGetAdmins();
  const { doctors, loading: doctorsLoading } = useGetDoctors();
  const { patients, loading: PatientLoading } = useGetPatients();
  console.log(admins, doctors, patients);
  if (loading || doctorsLoading || PatientLoading) return <LoadingSection />;
  return (
    <article>
      <AllOverview adminsCount={23} patientsCount={52} doctorsCount={23} />
      <AdminTable admins={admins.slice(0, 5)} />
      <DoctorsTable doctors={doctors.slice(0, 5)} />
      <PatientTable patients={patients.slice(0, 5)} />
    </article>
  );
}
