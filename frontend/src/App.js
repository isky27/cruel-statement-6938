import AllRoutes from "./Components/AllRoutes";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import "./index.css";
import { AuthProvider } from "./utilis/Auth";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navbar />
        <AllRoutes />
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
