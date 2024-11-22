import "./app.css";
import Nav from "./Component/nav/navigation.js";
import InputTodo from "./Component/inputTodo/inputTodo.js";
export default function App() {
  return (
    <div id="mainBody" className="w-full h-auto md:h-[100vh]">
      <Nav></Nav>
      <InputTodo></InputTodo>
    </div>
  );
}
