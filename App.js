import Menu from "./Components/Menu"
import Cakes from "./Components/MenuContent/Cakes";
import Cheesecake from "./Components/MenuContent/Cheesecake";
import Cupcake from "./Components/MenuContent/Cupcake";
import DryCake from "./Components/MenuContent/DryCake";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Gallery from "./Components/Gallery";
// import Login from "./Components/User/Login";
// import Signup from "./Components/User/Signup";
function App() {
  return (
    <>
      <Home />
      <Nav />
      <Menu />
      {/* <Login /> */}
      <DryCake />
      <Cakes />
      <Cupcake />
      <Cheesecake />
      <Gallery />
      {/* <Signup />  */}

    </>


  );
}

export default App;
