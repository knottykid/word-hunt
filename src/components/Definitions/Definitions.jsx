import React from "react";
import "./Definition.css";

const Definitions = ({ word, category, meaning, lightMode }) => {
  console.log(meaning.phonetics);
  return (
    <div className="meaning">
      {meaning[0] && word && category === "en" && (
        <audio
          src={meaning[0].phonetics[0] && meaning[0].phonetics[0].audio}
          style={{ backgroundColor: "#fff", borderRadius: 10 }}
          controls
        >
          Your browser does not support audio.
        </audio>
      )}
      {word === "" ? (
        <span className="subtitle">Start by typing a word in Search </span>
      ) : (
        meaning?.map((mean) =>
          mean?.meanings?.map((item) =>
            item.definitions.map((def) => (
              <div
                className="singleMean"
                style={{
                  backgroundColor: lightMode ? "#3b5360" : "white",
                  color: lightMode ? "white" : "black",
                }}
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
