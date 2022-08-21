import { Route, Routes } from "react-router-dom";
import EditPortfolio from "./pages/EditPortfolio";
import Home from "./pages/Home";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit-portfolio" element={<EditPortfolio />} />
      </Routes>
    </div>
  );
}

export default App;
