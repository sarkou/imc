import React from "react";
import "../css/FormCalculimc.css";
import "../css/DisplayImc.css";

function DisplayImc({ imc, category }) {
  let categoryClass = "";

  switch (category) {
    case "Dénutrition ou famine":
      categoryClass = "denutrition";
      break;
    case "Maigreur":
      categoryClass = "maigreur";
      break;
    case "Poids normal":
      categoryClass = "poids-normal";
      break;
    case "Surpoids":
      categoryClass = "surpoids";
      break;
    case "Obésité modérée":
      categoryClass = "obesite-moderee";
      break;
    case "Obésité sévère":
      categoryClass = "obesite-severe";
      break;
    default:
      categoryClass = "obesite-morbide";
      break;
  }

  return (
    <div className={`imc-display ${categoryClass}`}>
      {imc > 0 && (
        <div>
          <p>Votre IMC est : {imc.toFixed(2)}</p>
        </div>
      )}
      {category.length > 0 && (
        <div>
          <p>Votre résultat : {category}</p>
        </div>
      )}
    </div>
  );
}

export default DisplayImc;
