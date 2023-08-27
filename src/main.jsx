import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import App1 from "./App1.jsx";
import App2 from "./App2.jsx";
import "./index.css";
import store from "./store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
    <App1 />
    <App2 />
  </Provider>
);
