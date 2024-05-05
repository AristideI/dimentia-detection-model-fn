import { useGetPatientRecordsOfAdmin } from "../../hooks/useGetPatientRecords";
import AdminPatientRecordTableRow from "./AdminPatientRecordTableRow";

export default function AdminPatientRecordsTable() {
  const { patientRecords } = useGetPatientRecordsOfAdmin();

  return (
    <>
    <h3 className="text-xl text-center font-semibold mt-16">Latest Records</h3>
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead className="bg-secondary-red/50">
          <tr>
            <th scope="col" className="px-6 py-4 font-medium text-dark">
              Tested Time
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-dark">
              Patient Names
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-dark">
              Patient Phone
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-dark">
              Doctor Names
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-dark">
              Doctor Phone
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-dark"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          {patientRecords &&
            patientRecords.map((record) => (
              <AdminPatientRecordTableRow key={record.id} record={record} />
            ))}
        </tbody>
      </table>
    </div>
    </>
  );
}
