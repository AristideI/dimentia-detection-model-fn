import LoadingSpinner from "./LoadingSpinner";

export default function LoadingSection() {
  return (
    <article className="flex justify-center items-center h-full">
      <LoadingSpinner size={100} />
    </article>
  );
}
