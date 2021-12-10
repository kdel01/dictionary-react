import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (def, index) {
        return (
          <div key={index}>
            <div className="definition">{def.definition}</div>
            <div className="example">{def.example}</div>
            <Synonyms synonyms={def.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
