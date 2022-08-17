
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Portfolio from "./pages/Portfolio";
import Blogs from "./pages/Blogs";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Portfolio />} />
          <Route path="/blogs" element={<Blogs />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
