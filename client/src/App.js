
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Portfolio from "./pages/Portfolio";
import Blogs from "./pages/Blogs";
import Discord from "./pages/Discord";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Portfolio />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/community" element={<Discord />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
