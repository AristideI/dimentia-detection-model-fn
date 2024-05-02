import LoadingSection from "../components/LoadingSection";
import AllOverview from "../components/dashboard/AllOverview";
import AdminTable from "../components/tables/AdminTable";
import DoctorPatientRecordsTable from "../components/tables/DoctorPatientRecordsTable";
import { useGetAdmins } from "../hooks/useGetAdmins";
import { useGetDoctors } from "../hooks/useGetDoctor";
import { useGetPatientRecordsOfDoctor } from "../hooks/useGetPatientRecords";
import { useGetPatients } from "../hooks/useGetPatients";
import { UserResDto } from "../types/interfaces";

export default function DashboardPage() {
  const { admins, loading } = useGetAdmins();
  const { doctors, loading: doctorsLoading } = useGetDoctors();
  const { patients, loading: PatientLoading } = useGetPatients();
  const { patientRecords } = useGetPatientRecordsOfDoctor();
  const user = JSON.parse(localStorage.getItem("user") || "{}") as UserResDto;
  const isAdmin = user.isAdmin;
  if (loading || doctorsLoading || PatientLoading) return <LoadingSection />;
  return (
    <article>
      <AllOverview
        adminsCount={admins.length}
        patientsCount={patients.length}
        doctorsCount={doctors.length}
      />
      {isAdmin && <AdminTable admins={admins.slice(0, 5)} />}
      {!isAdmin && patientRecords && (
        <DoctorPatientRecordsTable patientRecords={patientRecords} />
      )}
    </article>
  );
}
