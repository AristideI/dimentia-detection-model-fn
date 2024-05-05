import dayjs from "dayjs";
import { AdminPatientRecords } from "../../types/interfaces";
import { Link } from "react-router-dom";

interface IPatientRecordTableRow {
  record: AdminPatientRecords;
}

export default function AdminPatientRecordTableRow({
  record,
}: IPatientRecordTableRow) {
  return (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4">
        {dayjs(record.created_at).format("YYYY-MM-DD HH:mm:ss")}
      </td>
      <td className="px-6 py-4">
        {record.patient.firstName + " " + record.patient.lastName}
      </td>
      <td className="px-6 py-4">{record.patient.phone}</td>
      <td className="px-6 py-4">
        {record.doctor.firstName + " " + record.doctor.lastName}
      </td>
      <td className="px-6 py-4">{record.doctor.phone}</td>

      <td className="px-6 py-4">
        <div className="flex justify-end gap-4">
          <Link
            x-data="{ tooltip: 'Delete' }"
            to={`/patients/${record.patient_nid}/${record.id}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 hover:text-primary-400"
            >
              <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
              <path
                fill-rule="evenodd"
                d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
                clip-rule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </td>
    </tr>
  );
}