import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";

import ProjectOne from "./components/pages/ProjectOne";
import ProjectTwo from "./components/pages/ProjectTwo";
import ProjectThree from "./components/pages/ProjectThree";
import ProjectFour from "./components/pages/ProjectFour";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project1" element={<ProjectOne />} />
        <Route path="/project2" element={<ProjectTwo />} />
        <Route path="/project3" element={<ProjectThree />} />
        <Route path="/project4" element={<ProjectFour />} />
        {/* <Route path="/project/:slug" element={<Project />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
