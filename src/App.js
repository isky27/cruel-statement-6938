import AllRoutes from "./Components/AllRoutes";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import "./styles.css";
import { AuthProvider } from "./utilis/Auth";

export default function App() {
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
