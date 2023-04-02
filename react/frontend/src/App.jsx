import "./App.css";
import { Page } from "./components/Page.jsx";
import { createTheme, ThemeProvider } from "@mui/material";

function App() {


  const customTheme = createTheme({
    components: {
      root: {
        color: "red",
        bgcolor: "green"
      }
    }
  })

  return (
    <ThemeProvider theme={customTheme}>
      <Page />
    </ThemeProvider>
  )
}

export default App;
