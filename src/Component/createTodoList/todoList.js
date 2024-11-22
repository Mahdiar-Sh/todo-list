import React from "react";
import "./todoListBox.css";
import Box from "./box.js";
export default function TodoListBox(props) {
  function deleteList(id) {
    props.remove(id);
  }
  function completeList(id) {
    props.complete(id);
  }
  return (
    <div
      className={`${
        props.box.length >= 6 ? `overflow-y-scroll` : " "
      } w-[75%] mx-auto flex-wrap md:h-[500px] flex flex-row justify-center items-start gap-5 mt-14`}
    >
      {props.fillter === "Uncomplete" &&
        props.box
          .filter((x) => x.completion === false)
          .map((x) => (
            <Box
              key={x.id}
              delete={deleteList}
              complete={completeList}
              {...x}
            ></Box>
          ))}
      {props.fillter === "Complete" &&
        props.box
          .filter((x) => x.completion === true)
          .map((x) => (
            <Box
              key={x.id}
              delete={deleteList}
              complete={completeList}
              {...x}
            ></Box>
          ))}
      {props.fillter === "All" &&
        props.box.map((x) => (
          <Box
            key={x.id}
            delete={deleteList}
            complete={completeList}
            {...x}
          ></Box>
        ))}
    </div>
  );
}
