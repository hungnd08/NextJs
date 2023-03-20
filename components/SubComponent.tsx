import React from "react";

const SubComponent = () => {
	console.log("Very slow component re-renders");
	return <div>Very slow component</div>;
};

export default SubComponent;
