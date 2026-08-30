export default function Spinner() {
  return (
    <div
      role="status"
      aria-label="Loading"
      className="w-10 h-10 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin mt-10"
    />
  );
}
