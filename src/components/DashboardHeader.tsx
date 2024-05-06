import { useAuthContext } from "../context/AuthContext";
import { LoginResDto } from "../types/interfaces";
import { socket } from "../utils/totalAvailableDoc";

export default function DashboardHeader() {
  const { addTotalDoc } = useAuthContext();
  const user = JSON.parse(
    localStorage.getItem("user") as string
  ) as LoginResDto;

  socket.emit("add_current_user", {
    email: user.email,
    isDoctor: !user.isAdmin,
  });

  socket.on("all_login_doc", (data) => {
    console.log("object===>>>", data);
    addTotalDoc(Number(data));
  });

  return (
    <article className="text-dark flex justify-between items-center pb-12">
      <section className="md:flex gap-6 items-center hidden">
        <div>
          <p className="font-bold text-lg">Hello {user.names}!</p>
          <p>Welcome back to dashboard</p>
        </div>
      </section>
      <section className="flex text-end items-center gap-6">
        <div>
          <p className="font-bold text-lg">{user.names}</p>
          <p>{user.isAdmin ? "Admin" : "Doctor"}</p>
        </div>
        <img
          src={user.profilePic ? user.profilePic : "/profile.jpg"}
          className="w-12 h-12 rounded-full object-cover"
          alt=""
        />
      </section>
    </article>
  );
}
