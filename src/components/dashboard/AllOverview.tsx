export default function AllOverview() {
  return (
    <article className="flex flex-col gap-6">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card title="Admins" count={52} icon="admin" />
        <Card title="Doctors" count={12} icon="doctor" />
        <Card title="Patients" count={24} icon="patient" />
        <Card title="Records" count={36} icon="record" />
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
  return (
    <article className="bg-primary-300/20 p-6 rounded-xl flex items-center gap-6">
      <div className="bg-primary-100 w-14 h-14 rounded-lg flex items-center justify-center">
        <img src={`/${icon}.png`} className="w-8" alt="" />
      </div>
      <section>
        <p className="text-lg font-bold">{title}</p>
        <p className="text-primary-400">{count} Total</p>
      </section>
    </article>
  );
}
