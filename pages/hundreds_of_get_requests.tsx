import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import SingleBox from "../components/SingleBox";
import { useQueries } from "react-query";

// const fetchBatch = async() => {
//     const promises =
// }

export default function HundredsOfGetRequests() {
	const fetchTodo = async (id: number) => {
		return axios.request({
			url: `https://jsonplaceholder.typicode.com/todos/${id}`,
			method: "get",
		});
	};
	const queries = [];
	for (let i = 0; i < 100; i++) {
		queries.push({
			queryKey: ["todo", i + 1],
			queryFn: async () => {
				const data = await fetchTodo(i + 1);
				return data;
			},
		});
	}
	const result: any = useQueries(queries);
	console.log(result);
	const [resArr, setResArr] = useState([]);
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

	return (
		<div className="boxes">
			{result.map((res) => (
				<SingleBox data={res.data.data} />
			))}
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
