import { Link } from "react-router-dom";
import LoadingSection from "../../components/LoadingSection";
import AdminTable from "../../components/tables/AdminTable";
import { useGetAdmins } from "../../hooks/useGetAdmins";
import { UserResDto } from "../../types/interfaces";
import { useEffect, useState } from "react";

export default function AdminPage() {
  const { admins, loading } = useGetAdmins();
  const [allAdmins, setAllAdmins] = useState<UserResDto[]>([]);

  useEffect(() => {
    if (admins) {
      setAllAdmins(admins);
    }
  }, [admins]);

  const user = JSON.parse(localStorage.getItem("user") || "{}") as UserResDto;
  const isAdmin = user.isAdmin;

  function handleUserSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    if (value === "") {
      setAllAdmins(admins);
    } else {
      const filteredAdmins = admins.filter(
        (doc) =>
          doc.firstName.toLowerCase().includes(value.toLowerCase()) ||
          doc.lastName.toLowerCase().includes(value.toLowerCase()) ||
          doc.email.toLowerCase().includes(value.toLowerCase())
      );
      setAllAdmins(filteredAdmins);
    }
  }

  if (loading) return <LoadingSection />;
  return (
    <article>
      <section className="flex justify-between items-center px-10">
        <h1 className="text-3xl font-semibold text-dark">Admins</h1>
        <div className="flex items-center gap-10">
          <input
            type="search"
            placeholder="Search"
            className="border border-primary-300 bg-transparent rounded-lg p-2 text-sm text-primary-4 w-72"
            onChange={handleUserSearch}
          />
          {isAdmin && (
            <Link
              to="/admins/add"
              className="font-bold text-primary-100 bg-primary-400 px-8 py-2 rounded-md"
            >
              Add Admin
            </Link>
          )}
        </div>
      </section>
      <AdminTable admins={allAdmins} />
    </article>
  );
}
