import { useAuthContext } from "../../context/AuthContext";

export default function AllOverview({
  adminsCount,
  doctorsCount,
  patientsCount,
}: {
  adminsCount: number;
  doctorsCount: number;
  patientsCount: number;
}) {
  return (
    <article className="flex flex-col gap-6">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card title="Admins" count={adminsCount} icon="admin" />
        <Card title="Doctors" count={doctorsCount} icon="doctor" />
        <Card title="Patients" count={patientsCount} icon="patient" />
      </section>
    </article>
  );
}

function Card({
  title,
  count,
  icon,
}: {
  title: string;
  count: number;
  icon: string;
}) {
  const { totalDoc } = useAuthContext();

  return (
    <article className="bg-primary-300/20 p-6 rounded-xl flex items-center gap-6">
      <div className="bg-primary-100 w-14 h-14 rounded-lg flex items-center justify-center">
        <img src={`/${icon}.png`} className="w-8" alt="" />
      </div>
      <section>
        <p className="text-lg font-bold">{title}</p>
        {title === "Doctors" && (
          <p className="text-primary-400">
            {`${totalDoc} / ${count}`} AVailable
          </p>
        )}
        {title !== "Doctors" && (
          <p className="text-primary-400">{count} Total</p>
        )}
      </section>
    </article>
  );
}
