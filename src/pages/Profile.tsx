import { UserResDto } from "../types/interfaces";

export default function ProfilePage() {
  const user = JSON.parse(localStorage.getItem("user") || "{}") as UserResDto;
  const isAdmin = user.isAdmin;
  return (
    <div>
      <img
        src={user.profilePic ? user.profilePic : "/profile.jpg"}
        className="h-40 w-40 rounded-full mx-auto mt-8"
      />
      <section>
        <h1 className="text-3xl font-semibold text-dark text-center">
          {user.firstName} {user.lastName}
        </h1>
        <p className="text-center text-dark-100">{user.email}</p>
        <p className="text-center text-dark-100">{user.phone}</p>
        <p className="text-center text-dark-100">{user.address}</p>
        {isAdmin && <p className="text-center text-dark-100">Role: Admin</p>}
      </section>
    </div>
  );
}
