import React from "react";
import "./Botao.css";

export default function index(props) {
  return <button className="botao">{props.children}</button>;
}
