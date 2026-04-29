export default function Loader() {
  return (
    <div
      className="relative h-14 w-14"
      role="status"
      aria-label="Loading"
    >
      <span className="absolute inset-0 rounded-full border border-white/10" />
      <span className="absolute inset-1 animate-spin rounded-full border-2 border-transparent border-t-white border-r-purple-600" />
      <span
        className="absolute top-1/2 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
        style={{ boxShadow: "0 0 22px rgba(168,85,247,0.85)" }}
      />
      <span className="sr-only">Loading...</span>
    </div>
  );
}
