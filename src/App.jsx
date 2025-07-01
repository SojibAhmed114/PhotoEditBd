import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Pages/footer/Footer";


function App() {


  return (
    <>

      <Navbar/>
      <main className="min-h-screen">
      <Outlet/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
