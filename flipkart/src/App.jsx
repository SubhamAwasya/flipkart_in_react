import { Outlet } from "react-router-dom";

// my
import Footer from "./components/Footer.jsx";
import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";
import NavBar from "./components/NavBar.jsx";
import useGlobalContext from "./context/Context.jsx";
import CreateShop from "./components/CreateShop.jsx";

function App() {
  const { toggleLogin, toggleSignup, toggleCreateShop } = useGlobalContext();

  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
      {toggleLogin && <Login />}
      {toggleSignup && <SignUp />}
      {toggleCreateShop && <CreateShop />}
    </>
  );
}

export default App;
