import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/Login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<h1>Home</h1>} />
      </Routes>
    </BrowserRouter> 
  )
}

export default App; // Sem isso, o main.jsx não consegue usar o App