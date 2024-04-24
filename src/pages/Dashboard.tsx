import AllOverview from "../components/dashboard/AllOverview";
import AdminTable from "../components/tables/AdminTable";
import DoctorsTable from "../components/tables/DoctorTable";
import PatientTable from "../components/tables/PatientTable";

export default function DashboardPage() {
  return (
    <article>
      <AllOverview />
      <AdminTable />
      <DoctorsTable />
      <PatientTable />
    </article>
  );
}
