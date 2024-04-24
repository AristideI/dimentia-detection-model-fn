export default function DashboardHeader() {
  return (
    <article className="text-dark flex justify-between items-center pb-12">
      <section className="flex gap-6 items-center">
        <div>
          <p className="font-bold text-lg">Hello Aristide!</p>
          <p>Welcome back to dashboard</p>
        </div>
        <form>
          <input
            type="search"
            placeholder="Search"
            className="border border-primary-300 bg-transparent rounded-lg p-2 text-sm text-primary-4 w-72"
          />
        </form>
      </section>
      <section className="flex text-end items-center gap-6">
        <div>
          <p className="font-bold text-lg">Aristide Isingizwe</p>
          <p>Admin</p>
        </div>
        <img
          src="/user.jpg"
          className="w-12 h-12 rounded-full object-cover"
          alt=""
        />
      </section>
    </article>
  );
}
