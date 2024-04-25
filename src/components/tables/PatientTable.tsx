import PatientTableRow from "./PatientTableRow";

export default function PatientTable() {
  const patients = [1, 2, 3, 4, 5];
  const patientRows = patients.map((doctor) => (
    <PatientTableRow key={doctor} />
  ));
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead className="bg-secondary-red/50">
          <tr>
            <th scope="col" className="px-6 py-4 font-medium text-dark">
              Name
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-dark">
              Role
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-dark">
              Phone
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-dark">
              Birth
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-dark">
              NID
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
