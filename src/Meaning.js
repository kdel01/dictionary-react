import React from "react";

export default function Meaning(props) {
  return (
    <div className="meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (def, index) {
        return (
          <div key={index}>
            <p>
              {def.definition}
              <br />
              <em>{def.example}</em>
            </p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
