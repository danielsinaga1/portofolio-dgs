import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./enhancements.css";
import "./scroll-effects.css";
import Preloader from "./layout/Preloader";
const Home = lazy(() => import("./ui/Home"));
const NoPage = lazy(() => import("./layout/NoPage"));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={ <Preloader/>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NoPage />} />       
          </Routes>
        </Suspense>
      </Router> 
    </>
  );
}

export default App;
