import { Link } from "react-router-dom";
import { UserResDto } from "../../types/interfaces";

export default function AdminTableRow({ admin }: { admin: UserResDto }) {
  const user = JSON.parse(localStorage.getItem("user") || "{}") as UserResDto;
  const isAdmin = user.isAdmin;
  return (
    <tr className="hover:bg-gray-50">
      <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
        <div className="relative h-10 w-10">
          <img
            className="h-full w-full rounded-full object-cover object-center"
            src={admin.profilePic || "/profile.jpg"}
            alt=""
          />
        </div>
        <div className="text-sm">
          <div className="font-medium text-gray-700">
            {admin.firstName} {admin.lastName}
          </div>
          <div className="text-gray-400">{admin.email}</div>
        </div>
      </th>
      <td className="px-6 py-4">
        <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
          <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
          Admin
        </span>
      </td>
      <td className="px-6 py-4">{admin.phone}</td>
      <td className="px-6 py-4">
        {admin.isActive ? (
          <>
            <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
              <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
              Active
            </span>
          </>
        ) : (
          <>
            <span className="inline-flex items-center gap-1 rounded-full bg-secondary-red/10 px-2 py-1 text-xs font-semibold text-secondary-red">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary-red"></span>
              Inactive
            </span>
          </>
        )}
      </td>

      <td className="px-6 py-4">
        <div className="flex justify-end gap-4">
          {isAdmin && (
            <Link
              x-data="{ tooltip: 'edit' }"
              to={`/admins/${admin.email}/update`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 hover:text-secondary-red"
              >
                <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
              </svg>
            </Link>
          )}
        </div>
      </td>
    </tr>
  );
}
