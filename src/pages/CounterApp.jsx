import React, { useState } from "react";
import Message from "../components/Message";
import { Button } from "../components/Button";
export const CounterApp = () => {
	// var count = 0;
	const [count, setCount] = useState(0); //useState() ret arr
	// setCount func to call to change state
	const plus = () => {
		// count++;
		setCount(count + 1); //state change
		console.log("Plus ", count);
	};
	const minus = () => {
		// count--;
		setCount(count - 1);
		console.log("Minus ", count);
	};
	// Message({msg: "Counter App", x:10, y:20}); logic
	return (
		<div className="container">
			<Message
				msg="Counter App"
				color="alert alert-success text-center"
			/>
			{/* attributes passed */}
			<Message
				msg="Count value is "
				color="alert alert-info"
				val={count}
			/>
			<Button fn={plus} val="+" color="btn btn-primary" /> &nbsp;
			<Button fn={minus} val="-" color="btn btn-danger" />
		</div>
	);
};
