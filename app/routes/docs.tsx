import { NavLink } from "@remix-run/react";

export default function Docs() {
  return (
    <main className="flex flex-col gap-y-6">
      <NavLink to="/">Back to home</NavLink>
      Here you will see documentation soon
    </main>
  );
}
