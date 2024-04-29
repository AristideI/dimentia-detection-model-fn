import Loading from "react-loading";

export default function LoadingSpinner({ size = 50 }: { size: number }) {
  return (
    <Loading
      className="mx-auto"
      type="spin"
      color="#F9F5FF"
      height={size}
      width={size}
    />
  );
}
