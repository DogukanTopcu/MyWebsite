
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Portfolio />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
