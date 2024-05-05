import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <article className="flex items-center justify-between px-[2%] md:px-[5%] lg:px-[10%] py-4 text-dark">
      <img src="/logow.png" className="w-60" alt="logo image" />
      <section className="flex gap-8">
        
        
      </section>
      <Link
        to="/login"
        className="bg-primary-400 text-primary-100 px-8 py-1 font-bold text-lg rounded-lg hover:bg-primary-400/80 transition-all duration-300"
      >
        Login
      </Link>
    </article>
  );
}
