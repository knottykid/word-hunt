import { createTheme } from "@material-ui/core/styles";
import { MenuItem, TextField, ThemeProvider } from "@material-ui/core";
import React from "react";
import "./Header.css";
import categories from "../../data/category";
import { debounce } from "lodash";

const Header = ({
  category,
  setCategory,
  word,
  setWord,
  lightMode,
  setMeaning,
}) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: lightMode ? "#000" : "#fff",
      },
      type: lightMode ? "light" : "dark",
    },
  });

  const handleChange = (e) => {
    setCategory(e.target.value);
    setWord("");
    setMeaning([]);
  };
  const handleText = debounce((text) => {
    setWord(text);
  }, 500);

  return (
    <div className="header">
      <span className="title">{word ? word : "Word Hunt"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            id="filled-basic"
            label="Search"
            value={word}
            // onChange={(e) => handleText(e.target.value)}
            onChange={(e) => setWord(e.target.value)}
          />
          <TextField
            className="select"
            select
            label="Language"
            value={category}
            onChange={(e) => handleChange(e)}
          >
            {" "}
            {categories?.map((option) => (
              <MenuItem key={option?.label} value={option?.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
