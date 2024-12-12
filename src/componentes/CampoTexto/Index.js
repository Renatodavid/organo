import React from "react";
import "./CampoTexto.css";

export default function CampoTexto(props) {
  const placeholderModificada = `${props.placeholder}...`;
  //let valor = 'Renato David'

  // const [valor , setValor] = useState('Renato David')

  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={placeholderModificada}
      />
    </div>
  );
}
