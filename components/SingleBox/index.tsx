interface ISingleBox {
	id: number;
	completed: boolean;
	title: string;
	userId: number;
}

const SingleBox = (props: { data: ISingleBox }) => {
	return (
		<div className="box">
			<p>
				<b>ID: </b>
				{props.data.id}
			</p>
			<p>
				<b>User ID: </b>
				{props.data.userId}
			</p>
			<p>
				<b>Title: </b>
				{props.data.title}
			</p>
			<p>
				<b>Completed: </b>
				{props.data.completed}
			</p>
		</div>
	);
};

export default SingleBox;
