import { useNavigate } from "react-router-dom";
import { useAuth } from "../utilis/Auth";
var Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <div>
      Welcome {auth.user}
      <br />
      <button onClick={handleLogout}> Logout</button>
    </div>
  );
};
export default Profile;
