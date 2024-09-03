import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";

function App() {
  return (
    <div className="font-montserrat py-8">
      <Router>
        <Routes>
          <Route path="/" element={<PageOne />} />
          <Route path="/" element={<PageTwo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
