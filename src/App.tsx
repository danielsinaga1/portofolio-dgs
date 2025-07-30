import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { lazy, Suspense } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Preloader from "./layout/Preloader";
const Home = lazy(() => import("./ui/Home"));
const Career = lazy(() => import("./ui/Career"));
const Contact = lazy(() => import("./ui/Contact"));
const Service = lazy(() => import("./ui/Service"));
const NoPage = lazy(() => import("./layout/NoPage"));
const ServiceDetail =lazy(() => import("./Components/ServiceDetail"));
// import ServiceDetail from "./Components/ServiceDetail";

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={ <Preloader/>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="services" element={<Service />} />
            <Route path="services/:id" element={<ServiceDetail />} />
            <Route path="careers" element={<Career />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />       
          </Routes>
        </Suspense>
      </Router> 
    </>
  );
}

export default App;
