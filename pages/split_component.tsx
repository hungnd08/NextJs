import React, { ReactNode } from "react";

export default function ComponentWithClick({ sub }: { sub: ReactNode }) {
	const [state, setState] = React.useState(1);
	const onClick = () => {
		setState(state + 1);
	}

	return (
		<div onClick={onClick} className="click-block">
			<p>Re-render count: {state}</p>
			{sub}
		</div>
	);
}
