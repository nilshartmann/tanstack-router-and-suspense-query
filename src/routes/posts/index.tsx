import {useSuspenseQuery} from "@tanstack/react-query";
import {createFileRoute, useNavigate, useSearch} from "@tanstack/react-router";
import React, {Suspense} from "react";
import z from "zod";

const PostsRouteSearchParams = z.object({
	filter: z.number().catch(0).optional()
});

export const Route = createFileRoute("/posts/")({
	component: () => {
		console.log("Render Route-Component");
		return <PostsList />
	},
	validateSearch(s: unknown) {
		return PostsRouteSearchParams.parse(s);
	},
});

function PostsList() {
	console.log("############## Render PostsList... ###############")
	return (
		<div className={"space-y-4 border-slate-400 border p-4"}>
			<h2 className={"text-2xl font-medium"}>I'm PostsLists above Filter and PostTable... and I WILL GO 😭!</h2>
			<div>PostsList neither access router search params nor the suspense query, but will be hidden during loading anyway</div>

			<Filter/>
			{/*<Suspense fallback={"loading..."}>*/}
			<PostTable/>
			{/*</Suspense>*/}
		</div>
	);
}

function Filter() {
	const navigate = useNavigate();

	const selectedFilter = Route.useSearch({
		select: (search) => {
			return search.filter || 0
		},
	});

	console.log("Render filter with selectedFilter", selectedFilter);

	const handleSelectedFilterChange = (newFilter: number) => {
		navigate({
			to:     Route.to,
			search: (s) => ({
				...s,
				filter:
				newFilter,
			}),
		});
	};

	return (
		<div className={"inline-flex"}>
			<button
				className={"p-4 border-slate-400 cursor-pointer rounded-2xl border-2 bg-amber-50"}
				onClick={() => handleSelectedFilterChange(selectedFilter + 1)}>Increase "Filter" (Current:{selectedFilter})
			</button>
		</div>
	);
}

function PostTable() {
	const filter = useSearch({
		strict: false,
		select: (s) => s.filter,
	});

	console.log("Render PostTable before query with filter", filter);

	const {data} =  useSuspenseQuery({
		queryKey: [
			"posts",
			{
				filter
			},
		],
		queryFn: () => {
			return new Promise<string>(resolve => {
				const mockData = "Data for Filter " + filter
				setTimeout( () => {
					resolve(mockData);
				}, 1000)
			})
		},
	});

	console.log("Render PostTable after query with filter", filter);
	return (
		<>
			<div className={"container mx-auto p-8 border-2 rounded-2xl border-slate-400 text-4xl"}>
				{data}
			</div>
		</>
	);
}
