import { useParams } from "react-router";

export default function BusinessProfilePage() {
  // useParams returns an object whose values may be a string OR undefined.
  // TypeScript cannot know that the route really has a ":slug" in it.
  const { slug } = useParams();

  // Narrowing: if slug is missing, stop here. Below this line, slug is a string.
  if (!slug) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-8">
        <p className="text-slate-700">No business was specified.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="text-2xl font-semibold text-slate-900">
        Business: {slug}
      </h1>
    </div>
  );
}
