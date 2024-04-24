import AdminTableRow from "./AdminTableRow";

export default function AdminTable() {
  const admins = [1, 2, 3, 4, 5];
  const adminRows = admins.map((admin) => <AdminTableRow key={admin} />);
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead className="bg-secondary-green/40">
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
            <th scope="col" className="px-6 py-4 font-medium text-dark"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          {adminRows}
        </tbody>
      </table>
    </div>
  );
}
