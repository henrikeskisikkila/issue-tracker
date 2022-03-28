import { useNavigate } from "react-router-dom";
import { Header } from "components/Header";

export const MainHeader = () => {
  const navigate = useNavigate();

  const search = (event: any) => {
    console.log(`Search ${event.target.value}`);
  };

  const logout = () => {
    console.log("Logout");
    navigate("/login");
  };

  return <Header user={{ name: "User" }} onSearch={search} onLogout={logout} />;
};
