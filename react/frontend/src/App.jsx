import { useState } from 'react'
import './App.css'
import { Box, Typography, TextField, Button } from "@mui/material"

function App() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(prevCount => prevCount + 1)
  }

  const [greetName, setGreetName] = useState("")

  return (
    <div className="App">
      <Typography variant="h2">I am Bhavik</Typography>
      <Typography variant="body1">Welcome to my website!</Typography>

      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField required
          label="name"
          id="name-required"
          value={greetName}
          onChange={e => setGreetName(e.target.value)}
        />
        {greetName !== "" && <Typography variant="h4">Hello, {greetName}</Typography>}
      </Box>

      <Box>
        <Typography variant="h5">Count: {count}</Typography>
        <Button variant="contained" size="large" onClick={handleClick}>count</Button>
      </Box>
    </div>
  )
}

export default App
