import "./main.css"
import { Navbar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
function App(){
  return(
     <>
        <Navbar />
        < ItemListContainer greeting={"Todos los repuestos al mejor precio!!"} />
     </>
  )
};

export default App;