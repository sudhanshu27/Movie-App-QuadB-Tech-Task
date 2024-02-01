import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import Form from "./components/form/form";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/form" element={<Form/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
