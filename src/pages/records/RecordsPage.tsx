import { useParams } from "react-router";
import PatientRecordsTable from "../../components/tables/PatientRecordsTable";
import { useGetPatientRecords } from "../../hooks/useGetPatientRecords";
import { Link } from "react-router-dom";
import { UserResDto } from "../../types/interfaces";

export default function RecordsPage() {
  const patientId = useParams().id;
  const { patientRecords } = useGetPatientRecords(patientId || "");
  const user = JSON.parse(localStorage.getItem("user") || "{}") as UserResDto;
  const isAdmin = user.isAdmin;
  return (
    <article>
      <section className="flex justify-between items-center px-10">
        <h1 className="text-3xl font-semibold text-dark">Patient Records</h1>
        {!isAdmin && (
          <Link
            to={`/patients/${patientId}/test`}
            className="font-bold text-primary-100 bg-primary-400 px-8 py-2 rounded-md"
          >
            Add Medical Test
          </Link>
        )}
      </section>
      {patientRecords && (
        <PatientRecordsTable patientRecords={patientRecords.records} />
      )}
    </article>
  );
}
