// Arrow function ES6
// arrow func best used for one line function -> returns implicit
// arrow function - object creation not possible (new cannot be used)
// pure function
export const Button = (props) => {
	return (
		<button onClick={props.fn} className={props.color}>
			{props.val}
		</button>
	);
};
