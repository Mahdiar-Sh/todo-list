import React, { useState } from "react";
import TodoList from "../createTodoList/todoList.js";
export default function InputTodo() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [status, setstatus] = useState("All");
  const [count, setCount] = useState(1);
  const [box, setBox] = useState([
  ]);
  function clickHandler(event) {
    setstatus(event.target.value);
  }
  function removeListBox(id) {
    let boxs = [...box];
    boxs.forEach((x) => {
      if (x.id === id) x.fade = true;
    });
    setBox(boxs);
    let newBox = box.filter((x) => id !== x.id);
    setTimeout(() => {
      setBox(newBox);
    }, 700);
  }
  function completeListBox(id) {
    let newBox = [...box];
    newBox.forEach((x) => {
      if (x.id === id) {
        x.completion = !x.completion;
      }
    });
    setBox(newBox);
  }
  function titleHandler(event) {
    setTitle(event.nativeEvent.target.value);
  }
  function textHandler(event) {
    setText(event.nativeEvent.target.value);
  }
  function addHandler(event) {
    event.preventDefault();
    setCount((x) => x + 1);
    if (title.trim() === "") {
      alert("باکس پر شود");
      return;
    }
    if (text.trim() === "") {
      alert("باکس پر شود");
      return;
    }
    if (box.length > 11) {
      alert("تعداد لیست های شما باید کمتر از 13 تا باشد.");
      return;
    }
    let addBox = {
      id: count,
      title: title,
      text: text,
      completion: false,
      fade: false,
    };
    setText("");
    setTitle("");
    setBox([...box, addBox]);
  }
  function cleanHandler(event) {
    event.preventDefault();
    setText("");
    setTitle("");
  }

  return (
    <>
      <div className="my-10">
        <form className="flex md:flex-row md:space-y-0 mx-3 space-y-7 flex-col md:space-x-2 justify-center items-center ">
          <select
            value={status}
            onChange={clickHandler}
            className={`${
              status === "Complete"
                ? `text-green-500`
                : `${status === "All" ? `text-black` : `text-red-500`} `
            } rounded-md p-1 md:p-2 outline-none`}
          >
            <option className="outline-none text-black" value="All">
              All
            </option>
            <option className="outline-none text-green-500" value="Complete">
              Complete
            </option>
            <option className="outline-none text-red-500" value="Uncomplete">
              Uncomplete
            </option>
          </select>
          <input
            type="text"
            value={title}
            maxLength={20}
            onChange={titleHandler}
            className="md:w-1/5 px-5 py-2  rounded-md text-black text-sm w-full md:text-lg outline-none"
            placeholder="Enter Your Title..."
          />
          <input
            type="text"
            value={text}
            onChange={textHandler}
            className="md:w-1/3 px-5 py-2 rounded-md text-black text-sm w-full md:text-lg outline-none"
            placeholder="Enter Your Text..."
          />
          <div className="space-x-3">
            {" "}
            <button
              onClick={addHandler}
              className="hover:bg-green-600 text-sm md:text-lg duration-150 bg-green-400 text-white py-2 rounded-md px-4"
            >
              Add
            </button>
            <button
              onClick={cleanHandler}
              className="hover:bg-red-600 text-sm md:text-lg duration-150 bg-red-400 text-white py-2 rounded-md px-4"
            >
              Clean
            </button>
          </div>
        </form>
      </div>
      <TodoList
        fillter={status}
        remove={removeListBox}
        complete={completeListBox}
        box={box}
      ></TodoList>
    </>
  );
}
