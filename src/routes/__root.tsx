import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootLayout,
  beforeLoad: async () => {},
  preSearchFilters: [
    (s) => {
      // by default add all exisiting search params to new route
      return s;
    },
  ],
});

function RootLayout() {

  return (
    <>
      <main className={"container mx-auto p-8 border border-slate-400"}>
        <h1 className={"text-2xl font-bold mb-4 p-4 "}>I'm the root layout (and I will stay during loading)!</h1>
        <Outlet />
      </main>
    </>
  );
}
