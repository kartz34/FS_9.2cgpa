import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Semester2 from "./pages/semester2";
import Semester1 from "./pages/semester1";
import Previous from "./pages/previous";
import SubjectPage from "./pages/SubjectDetails";
import ExtraCurricular from "./pages/extracurricular";
import Home from "./pages/home";
<<<<<<< HEAD

=======
>>>>>>> origin/master
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/semester1" element={<Semester1 />} />
        <Route path="/semester2" element={<Semester2 />} />
<<<<<<< HEAD
        <Route path="/previous" element={<Previous />} />
=======
        <Route path="/previous" element={<Previous/>} />
>>>>>>> origin/master
        <Route path="/extracurricular" element={<ExtraCurricular />} />
        <Route path="/:semester/:id" element={<SubjectPage />} />
      </Routes>
    </Router>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> origin/master
