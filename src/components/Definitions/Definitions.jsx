import React from "react";
import "./Definition.css";

const Definitions = ({ word, category, meaning }) => {
  console.log({ meaning });
  return (
    <div className="meaning">
      {word === "" ? (
        <span className="subtitle">Start by typing a word in Search </span>
      ) : (
        meaning?.map((mean) =>
          mean?.meanings?.map((item) =>
            item.definitions.map((def) => (
              <div
                className="singleMean"
                style={{ backgroundColor: "white", color: "black" }}
              >
                <b>{def.definition}</b>
                <hr style={{ backgroundColor: "black", width: "100%" }} />
                {def.example && (
                  <span>
                    <b>Example:</b>
                    {def.example}
                  </span>
                )}
                {def.synonyms && (
                  <span>
                    <b>Synonyms:</b>
                    {def.synonyms.map((s) => `${s},`)}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definitions;
