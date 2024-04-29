import { Link } from "react-router-dom";
import LoadingSection from "../../components/LoadingSection";
import AdminTable from "../../components/tables/AdminTable";
import { useGetAdmins } from "../../hooks/useGetAdmins";
import { UserResDto } from "../../types/interfaces";

export default function AdminPage() {
  const { admins, loading } = useGetAdmins();
  const user = JSON.parse(localStorage.getItem("user") || "{}") as UserResDto;
  const isAdmin = user.isAdmin;
  if (loading) return <LoadingSection />;
  return (
    <article>
      <section className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold text-dark">Admins</h1>
        {isAdmin && (
          <Link
            to="/admins/add"
            className="font-bold text-primary-100 bg-primary-400 px-8 py-2 rounded-md"
          >
            Add Admin
          </Link>
        )}
      </section>
      <AdminTable admins={admins} />
    </article>
  );
}
