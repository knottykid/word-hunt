import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "@material-ui/core";
import Header from "./components/Header/Header";

function App() {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState([]);
  const [category, setCategory] = useState("en");

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
      style={{ height: "100vh", backgroundColor: "#282c34", color: "white" }}
    >
      <Container
        maxWidth="md"
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <Header
          word={word}
          setWord={setWord}
          category={category}
          setCategory={setCategory}
        />
      </Container>
    </div>
  );
}

export default App;
