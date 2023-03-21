import axios from "axios";
import Link from "next/link";
// import { useEffect, useState } from "react";
import SingleBox from "../components/SingleBox";
import { useQueries, useQuery } from "react-query";

// const fetchBatch = async() => {
//     const promises =
// }

const fetchTodo = async ({ queryKey }) => {
	const [_, todoId] = queryKey;
	return await axios.request({
		url: `https://jsonplaceholder.typicode.com/todos/${todoId}`,
		method: "get",
	});
};

const fetchTodos = () => {
	const queries = [];
	for (let i = 0; i < 100; i++) {
		queries.push({
			queryKey: ["todo", i + 1],
			queryFn: fetchTodo,
			refetchOnWindowFocus: false,
			cacheTime: 300000,
			// refetchOnMount: false,
			staleTime: 300000,
		});
	}
	const result: any = useQueries(queries);
	return result;
};

export default function HundredsOfGetRequests() {
	// const [resArr, setResArr] = useState([]);

	// for (let i = 0; i < 100; i++) {
	// 	fetch(`https://jsonplaceholder.typicode.com/todos/${i + 1}`)
	// 		.then((response) => response.json())
	// 		.then((json) => console.log(json));
	// }

	// useEffect(() => {
	// 	const promiseExecution = async () => {
	// 		for (let i = 0; i < 100; i++) {
	// 			try {
	// 				const res = await axios.request({
	// 					url: `https://jsonplaceholder.typicode.com/todos/${i + 1}`,
	// 					method: "get",
	// 				});
	// 				setResArr((prevState) => [...prevState, res]);
	// 			} catch (error) {
	// 				console.log(error.message);
	// 			}
	// 		}
	// 	};
	// 	promiseExecution();
	// }, []);

	const todos = fetchTodos();
	const result = useQuery(["todo101", 101], fetchTodo, {
		cacheTime: 300000,
		refetchOnWindowFocus: false,
		// refetchOnMount: false,
		staleTime: 300000,
	});
	console.log(result);

	return (
		<div className="boxes">
			{todos.map((todo) => {
				return todo.status === "success" ? <SingleBox data={todo.data.data} /> : <></>;
			})}
			{result.status === "success" && <SingleBox data={result.data.data} />}
			<Link href={"/FirstChatter"}>To First Chatter</Link>
			<style jsx>{`
				.boxes {
					display: flex;
					flex-flow: wrap;
				}
			`}</style>
		</div>
	);
}
