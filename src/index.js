import React from "react";
import ReactDOM from "react-dom";
import Input from "../component/input";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Input For goSpace</h1>
      <Input label="Medium size" medium type={"password"} />
      <br />
      <Input label="Default size" />
      <br />
      <Input label="Big size" big />
      <br />
      <Input iconLeft />
      <br />
      <Input iconRight />
      <br />
      <Input required />
      <br />
      <br />
      <Input label="Campo limpio" radius medium />
      <br />
      <Input iconLeft radius medium />
      <br />
      <Input iconRight radius />
      <br />
      <Input required radius type={"password"} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
