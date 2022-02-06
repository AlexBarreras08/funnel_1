import React from "react";
import ReactDOM from "react-dom";

import { Funnel } from "funnel-react";

import "./styles.css";

const data = [
  {
    _id: "5de52b4ac4275a463f912042",
    item: "accepted",
    label: "Crear Usuario",
    percent: 100,
    quantity: 39473
  },
  {
    _id: "5de52b4ac4275a463f912041",
    item: "visitors",
    label: "Verificación Cel",
    percent: 97,
    quantity: 35522
  },
  {
    _id: "5de52b4ac4275a463f912040",
    item: "postulants",
    label: "Info Personal",
    percent: 71,
    quantity: 25797
  },
  {
    _id: "5de52b4ac4275a463f91203f",
    item: "inprocess",
    label: "Domicilio",
    percent: 71,
    quantity: 25806
  },
  {
    _id: "5de52b4ac4275a463f91203e",
    item: "finalists",
    label: "Firma Contrato",
    percent: 62,
    quantity: 22701
  }
];

function App() {
  return (
    <div className="App">
      <Funnel
        labelKey="label"
        height={252}
        colors={["#1890FF", "#BAE7FF"]}
        colorPercent="#fff"
        colorLabel="#fff"
        valueKey="quantity"
        width={800}
        displayPercent={true}
        data={data}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
