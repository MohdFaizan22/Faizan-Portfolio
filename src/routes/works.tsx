import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/works")({
  component: WorksPage,
});

function WorksPage() {
  return <div className="p-2">Hello from Works!</div>;
}
