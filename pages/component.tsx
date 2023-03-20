import { useState } from "react";
import SubComponent from "../components/SubComponent";
import ComponentWithClick from "./split_component";

const Component = () => {
	const [state, setState] = useState(1);

	const onClick = () => {
		setState(state + 1);
	};

	return (
		<div onClick={onClick} className="click-block">
			<h3>Component with everything</h3>
			<p>Click this component - "Slow" component will re-render</p>
			<p>Re-render count: {state}</p>
			<SubComponent />
		</div>
	);
};

export default function App() {
	return (
		<>
			<h2>Click button</h2>
			<p>Re-render should be logged on every click</p>
			<Component />
			<hr />
			<hr />
			<ComponentWithClick
				sub={
					<>
						<h3>Component with slow component passed as children</h3>
						<p>Click the block - "slow" component will not re-render</p>
						<SubComponent />
					</>
				}
			/>
		</>
	);
}
