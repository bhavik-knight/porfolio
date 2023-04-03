import "./App.css";
import { useState } from "react";
import { Page } from "./components/Page.jsx";
import { createTheme, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  // to check the dark mode
  const [darkMode, setDarkMode] = useState(false)

  return (
    <ThemeProvider theme={darkTheme}>
      {darkMode && <CssBaseline />}
      < Page
        currentDarkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    </ThemeProvider>
  )
}

export default App;
