import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./component/Home";
import Writer from "./component/writer/Writer";

function App() {
  return(
  <Router>
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<Writer />} />
    </Routes>
  </Router>
);
}

export default App;
