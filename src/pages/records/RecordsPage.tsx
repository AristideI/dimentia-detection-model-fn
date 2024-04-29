import { useParams } from "react-router";
import PatientRecordsTable from "../../components/tables/PatientRecordsTable";
import { useGetPatientRecords } from "../../hooks/useGetPatientRecords";

export default function RecordsPage() {
  const patientId = useParams().id;
  const { patientRecords} = useGetPatientRecords(
    patientId || ""
  );
  console.log(patientId);
  return (
    <article>
      {patientRecords && (
        <PatientRecordsTable patientRecords={patientRecords} />
      )}
    </article>
  );
}
