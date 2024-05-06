import { useParams } from "react-router";
import PatientRecordsTable from "../../components/tables/PatientRecordsTable";
import { useGetPatientRecords } from "../../hooks/useGetPatientRecords";
import { Link } from "react-router-dom";
import { RecordDto, UserResDto } from "../../types/interfaces";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

export default function RecordsPage() {
  const patientId = useParams().id;
  const { patientRecords } = useGetPatientRecords(patientId || "");
  const [allPatientsRecords, setAllPatientsRecords] = useState<RecordDto[]>([]);

  useEffect(() => {
    if (patientRecords) {
      setAllPatientsRecords(patientRecords.records);
    }
  }, [patientRecords]);
  const user = JSON.parse(localStorage.getItem("user") || "{}") as UserResDto;
  const isAdmin = user.isAdmin;

  function handleUserSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    if (patientRecords) {
      if (value === "") {
        setAllPatientsRecords(patientRecords.records);
      } else {
        const filteredRecords = patientRecords.records.filter(
          (doc) =>
            doc.doctor_email.toLowerCase().includes(value.toLowerCase()) ||
            dayjs(doc.created_at)
              .format("YYYY-MM-DD HH:mm:ss")
              .toLowerCase()
              .includes(value.toLowerCase())
        );
        setAllPatientsRecords(filteredRecords);
      }
    }
  }

  return (
    <article>
      <section className="flex justify-between items-center px-10">
        <h1 className="text-3xl font-semibold text-dark">Patient Records</h1>
        <div className="flex items-center gap-10">
          <input
            type="search"
            placeholder="Search"
            className="border border-primary-300 bg-transparent rounded-lg p-2 text-sm text-primary-4 w-72"
            onChange={handleUserSearch}
          />
          {!isAdmin && (
            <Link
              to={`/patients/${patientId}/test`}
              className="font-bold text-primary-100 bg-primary-400 px-8 py-2 rounded-md"
            >
              Add Medical Test
            </Link>
          )}
        </div>
      </section>
      {patientRecords && (
        <PatientRecordsTable patientRecords={allPatientsRecords} />
      )}
    </article>
  );
}
