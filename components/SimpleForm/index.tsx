import { Field, reduxForm } from "redux-form";

const SimpleForm = (props) => {
	const { handleSubmit, pristine, reset, submitting } = props;
    
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>First Name</label>
				<Field name="firstName" component="input" type="text" placeholder="First Name" />
			</div>
			<div>
				<label>Last Name</label>
				<Field name="lastName" component="input" type="text" placeholder="Last Name" />
			</div>
			<button type="submit" disabled={pristine || submitting}>
				Submit
			</button>
			<button type="button" disabled={pristine || submitting} onClick={reset}>
				Clear Values
			</button>
		</form>
	);
};

export default reduxForm({
	form: "simple",
})(SimpleForm);
