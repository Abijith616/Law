import { createFileRoute } from "@tanstack/react-router";
import { Studio } from "sanity";
import config from "../../sanity.config";

export const Route = createFileRoute("/studio/$")({
  ssr: false, // Disable Server-Side Rendering (SSR) for the studio route
  component: StudioComponent,
});

function StudioComponent() {
  return (
    <div className="fixed inset-0 z-50 h-screen w-screen bg-[#101112] overflow-hidden">
      <Studio config={config} />
    </div>
  );
}
