import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, withStyles, Switch } from "@material-ui/core";
import Header from "./components/Header/Header";
import Definitions from "./components/Definitions/Definitions";
import { grey } from "@material-ui/core/colors";

function App() {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState([]);
  const [category, setCategory] = useState("en");
  const [lightMode, setLightMode] = useState(false);
  const DarkSide = withStyles({
    switchBase: {
      color: grey[300],
      "&$checked": {
        color: grey[500],
      },
      "&$checked + $track": {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );

      console.log({ data });
      setMeaning(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(meaning);
  useEffect(() => {
    dictionaryApi();
  }, [word, category]);

  return (
    <div
      className="App"
      style={{
        height: "100vh",
        backgroundColor: lightMode ? "#fff" : "#282c34",
        color: lightMode ? "black" : "white",
        transition: "all 0.5s linear",
      }}
    >
      <Container
        maxWidth="md"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{ position: "absolute", top: 0, right: 15, paddingTop: 10 }}
        >
          <span>{lightMode ? "Dark" : "Light"} Mode</span>
          <DarkSide
            checked={lightMode}
            onChange={() => setLightMode(!lightMode)}
          />
        </div>
        <Header
          word={word}
          setWord={setWord}
          category={category}
          setCategory={setCategory}
          lightMode={lightMode}
        />
        {meaning && (
          <Definitions
            word={word}
            meaning={meaning}
            category={category}
            lightMode={lightMode}
          />
        )}
      </Container>
    </div>
  );
}

export default App;
