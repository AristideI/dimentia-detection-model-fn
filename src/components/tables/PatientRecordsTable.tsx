import { RecordDto } from "../../types/interfaces";
import PatientRecordTableRow from "./PatientRecordTableRow";
interface IPatientRecordsTable {
  patientRecords: RecordDto[];
}

export default function PatientRecordsTable({
  patientRecords,
}: IPatientRecordsTable) {
  const patientRows = patientRecords
    .sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    )
    .map((record) => <PatientRecordTableRow key={record.id} record={record} />);
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead className="bg-secondary-red/50">
          <tr>
            <th scope="col" className="px-6 py-4 font-medium text-dark">
              Tested Time
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-dark">
              Doctor Email
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-dark">
              Dementia Status
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-dark">
              Weight
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-dark"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          {patientRows}
        </tbody>
      </table>
    </div>
  );
}
