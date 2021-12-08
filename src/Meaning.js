import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (def, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition: </strong>
              {def.definition}
              <br />
              <strong>Example: </strong>
              <em>{def.example}</em>
              <br />
              <Synonyms synonyms={def.synonyms} />
            </p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
