import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/home/Home";


function App() {


  return (
    <>

      <Navbar/>
      <main className="min-h-screen">
      <Outlet/>
      </main>
    </>
  );
}

export default App;
