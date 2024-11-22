import React from "react";
import "./todoListBox.css";
export default function Box(props) {
  function removeList(id) {
    props.delete(id);
  }
  function completeList(id) {
    props.complete(id);
  }
  return (
    <div
      className={`${
        props.fade && `fade`
      } flex container z-30 justify-around h-[230px] border relative w-[230px] mx-3 lg:mx-0 lg:w-1/4 rounded-lg border-black px-3 py-2 flex-col`}
    >
      <div className="absolute w-[5px] h-[5px] z-30 rounded-full bg-white left-1 top-1"></div>
      <div className="absolute w-[5px] h-[5px] z-30 rounded-full bg-white right-1 top-1"></div>
      <div className="absolute w-[5px] h-[5px] z-30 rounded-full bg-white left-1 bottom-1"></div>
      <div className="absolute w-[5px] h-[5px] z-30 rounded-full bg-white right-1 bottom-1"></div>
      <div
        className={`${
          props.completion ? `complete` : `uncomplete`
        } z-30 w-full h-full absolute left-0 bottom-0`}
      ></div>
      <div className="w-full h-full z-10 bg-gradient-to-t rounded-lg from-black from-10% absolute left-0 opacity-60 bottom-0"></div>
      <div className="w-full h-full z-10 bg-gradient-to-b rounded-lg from-black from-10% absolute left-0 opacity-60 bottom-0"></div>
      <div className="z-30">
        <h1 className="text-white text-center overflow-x-auto ov text-2xl">
          {props.title}
        </h1>
      </div>
      <div className="my-2 h-[3px] z-30 bg-white rounded-full"></div>
      <div className="z-30 overflow-y-auto">
        <p className="text-white break-words  text-lg text-justify">
          {props.text}
        </p>
      </div>
      <div className="h-[3px] my-2 z-30 bg-white  rounded-full"></div>
      <div className="flex z-30 lg:flex-row flex-col lg:space-y-0 space-y-3 justify-center items-center space-x-1 lg:space-x-5">
        <button
          onClick={() => completeList(props.id)}
          className="text-white  text-sm px-4 rounded-md py-1 hover:bg-green-700 duration-200 bg-green-500"
        >
          {props.completion ? `Uncomplete` : `Complete`}
        </button>
        <button
          onClick={() => removeList(props.id)}
          className="text-white  text-sm px-4 rounded-md py-1 hover:bg-red-700 duration-200 bg-red-500"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
