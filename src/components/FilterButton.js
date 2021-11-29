import React from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "../Redux/actions";

function FilterButton(props) {
  const dispatch = useDispatch();
  
  return (
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed={props.isPressed}
      onClick={() => dispatch(changeFilter(props.name))}
    >
      <span className="visually-hidden">Show </span>
      <span>{props.name}</span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}

export default FilterButton;
