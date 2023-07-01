import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage.jsx";
import Home from "./components/Home.jsx";
import Detail from "./components/Detail.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/home/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
