import React from "react";
import "../css/FormCalculimc.css";
import { useForm } from "react-hook-form";
import DisplayImc from "./DisplayImc";
import { useState } from "react";

function FormCalculimc() {
  const { register, handleSubmit, getValues, watch } = useForm();

  watch();
  const [imcValue, setImcValue] = useState(0);
  const [imcCategory, setImcCategory] = useState("");

  function submit(values) {
    const mypoids = values.poids;
    const mytaille = values.taille;
    const mytaillemetre = mytaille / 100;
    const mypowtaille = Math.pow(mytaillemetre, 2);
    const imc = mypoids / mypowtaille;
    let category = ""; // Variable pour stocker la catégorie IMC

    if (imc < 16.5) {
      category = "Dénutrition ou famine";
    } else if (imc < 18.5) {
      category = "Maigreur";
    } else if (imc < 25) {
      category = "Poids normal";
    } else if (imc < 30) {
      category = "Surpoids";
    } else if (imc < 35) {
      category = "Obésité modérée";
    } else if (imc < 40) {
      category = "Obésité sévère";
    } else {
      category = "Obésité morbide ou massive";
    }
    setImcValue(imc);
    setImcCategory(category);
  }

  //const poidstaille = getValues();

  console.log(getValues());

  return (
    <section className="main">
      <div className="container">
        <h1>
          Calcul <span className="imctitre">d’IMC</span>{" "}
        </h1>
        <p>
          L'IMC est calculé en divisant le poids d'une personne en kilogrammes
          par le carré de sa taille en mètres . La formule mathématique est la
          suivante IMC = (taille)en kg /(poids*poids) en mètres
        </p>

        <div>
          <form className="imcform" onSubmit={handleSubmit(submit)}>
            <div>
              <label htmlFor="taille" className="mb-5">
                Taille [cm]
              </label>
              <input
                className="inputimc"
                id="taille"
                type="number"
                placeholder="La taille en centimètre"
                {...register("taille", {
                  required: "ce champ est obligatoire",
                })}
              />
            </div>
            <div>
              <label htmlFor="poids">Poids [Kg]</label>
              <input
                className="inputimc"
                id="poids"
                type="number"
                placeholder="Le poids en kilogramme"
                {...register("poids", { required: "ce champ est obligatoire" })}
              />
            </div>
            <button className="btn btnimc">Calculer mon IMC</button>
          </form>
        </div>
        <div>
          <DisplayImc imc={imcValue} category={imcCategory} />
        </div>
      </div>
    </section>
  );
}

export default FormCalculimc;
