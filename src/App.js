import "./App.css";
import AllRoutes from "./components/AllRoutes";
import Footer from "./components/user/Footer";
import Navbar from "./components/user/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
