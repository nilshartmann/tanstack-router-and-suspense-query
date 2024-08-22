import "./index.css";

import {QueryClientProvider} from "@tanstack/react-query";
import {createRouter, RouterProvider} from "@tanstack/react-router";
import React from "react";
import ReactDOM from "react-dom/client";

import {createQueryClient} from "./create-query-client.ts";
import {routeTree} from "./routeTree.gen.ts";

const queryClient = createQueryClient();

// Set up a Router instance
const router = createRouter({
	routeTree,
});

// Register things for typesafety
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

ReactDOM.createRoot(document.getElementById("root")!).render(
	<QueryClientProvider client={queryClient}>
		<RouterProvider router={router}/>
		{/*<ReactQueryDevtools />*/}
	</QueryClientProvider>
);
