// src/pages/BusinessProfilePage.tsx
import { useParams } from "react-router";
import Container from "../components/layout/Container";
import { slugSchema } from "../lib/slug";
import NotFoundPage from "./NotFoundPage";

export default function BusinessProfilePage() {
  const params = useParams();

  // params.slug is typed "string | undefined" and comes from the address bar, so treat it as untrusted.
  const result = slugSchema.safeParse(params.slug);
  if (!result.success) {
    return <NotFoundPage />;
  }
  const slug = result.data; // from here on TypeScript knows it is a valid string

  return (
    <Container>
      <title>{`${slug} - Locale`}</title>
      <div className="py-12">
        <h1 className="text-3xl font-bold tracking-tight">Business: {slug}</h1>
        <p className="mt-3 max-w-xl text-muted">
          The full profile will load here.
        </p>
      </div>
    </Container>
  );
}
