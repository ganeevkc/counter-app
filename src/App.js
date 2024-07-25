import React from "react";
import { CounterApp } from "./pages/CounterApp";
function App() {
	return <CounterApp />;
	// return <h1>Hello React JS</h1>;
	// return React.createElement("h1", null, "Hello React JS");
	// return (
	// 	<>
	// 		<h1>login form</h1>
	// 		<label>username </label>
	// 		<input placeholder="enter username " />
	// 		<button>enter</button>
	// 		<br />
	// 		<label>password </label>
	// 		<input placeholder="enter password " />
	// 		<button>enter</button>
	// 	</>
	// return React.createElement(
	// 	"div",
	// 	{ className: "red" },
	// 	React.createElement("h1", null, "hello"),
	// 	React.createElement("h2", null, "hi")
	// );
}
export default App;
