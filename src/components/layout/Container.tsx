import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

// The one place that decides how wide page content is and how much side padding it has.
export default function Container({ children }: ContainerProps) {
  return (
    <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">{children}</div>
  );
}
