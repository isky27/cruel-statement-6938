import AllRoutes from "./Components/AllRoutes";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { AuthProvider } from "./Context/Auth";
import "./styles.css";

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
