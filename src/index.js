// map jsx to DOM
// App Component render in div
// App component -jsx --- VDOM -- ReactDOM -- DOM
import App from "./App";
import ReactDOM from "react-dom";
// DOM render HTML
const div = document.getElementById("root"); //DOM
const root = ReactDOM.createRoot(div);
root.render(<App />);
