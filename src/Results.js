import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Results.css";

export default function Results(props) {
  if (props.result) {
    return (
      <div className="results">
        <section>
          <h2 className="word">{props.result.word}</h2>
          <Phonetics phonetic={props.result.phonetics[0]} />
        </section>
        {props.result.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
