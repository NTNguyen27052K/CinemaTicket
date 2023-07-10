// import logo from "./logo.svg";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeTemplate from "./Template/HomeTemplate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeTemplate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
