import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Pages/footer/Footer";

import { AnimatePresence } from "framer-motion";

function App() {


  return (
    <>
      <Navbar />
        <main className="min-h-screen" key={location.pathname}>
          <Outlet />
        </main>
      <Footer />
    </>
  );
}

export default App;
