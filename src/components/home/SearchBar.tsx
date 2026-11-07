import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router";

export default function SearchBar() {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); // stop the browser's full page reload

    const query = text.trim();
    if (query === "") {
      navigate("/search");
      return;
    }

    const params = new URLSearchParams({ q: query });
    navigate(`/search?${params.toString()}`);
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2" role="search">
      <label htmlFor="home-search" className="sr-only">
        Search by city, neighbourhood, street or landmark
      </label>
      <input
        id="home-search"
        type="search"
        value={text}
        onChange={(event) => setText(event.target.value)}
        maxLength={100}
        placeholder="Search a neighbourhood, street or landmark"
        className="w-full rounded-md border border-slate-300 px-4 py-2 focus:border-teal-600 focus:outline-none focus:ring-1 focus:ring-teal-600"
      />
      <button
        type="submit"
        className="rounded-md bg-teal-600 px-5 py-2 font-medium text-white hover:bg-teal-700"
      >
        Search
      </button>
    </form>
  );
}
