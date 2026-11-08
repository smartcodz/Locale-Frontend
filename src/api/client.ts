import type { z } from "zod";

export class ApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

// One place that knows how to talk to the API: fetch, check status, validate the body.
export async function apiGet<S extends z.ZodType>(
  url: string,
  schema: S,
  signal?: AbortSignal,
): Promise<z.output<S>> {
  const response = await fetch(url, { signal });

  // fetch does not throw on 404/500, so we do it ourselves.
  if (!response.ok) {
    throw new ApiError(
      `Request failed (status ${response.status})`,
      response.status,
    );
  }

  const body: unknown = await response.json(); // not trusted yet
  return schema.parse(body); // typed result, or throws a ZodError
}
