import { useState } from 'react'
import './App.css'
import { Typography, TextField, Button } from "@mui/material"

function App() {
  return (
    <div className="App">
      <Typography variant="h4">Hello, World</Typography>
      <TextField variabt="outlined-required" label="name" id="name" placeholder="John Doe" />
      <Typography variant="h2">I am Bhavik</Typography>
      <Typography variant="body1">Welcome to my website!</Typography>
    </div>
  )
}

export default App
