import "./App.css";

import Header from "./Screens/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainExpenses from "./Components/MainExpenses";
import { Routes ,Route} from "react-router-dom";
import Project1 from "./Screens/Project1/Project1";
import Project2 from "./Screens/Project2/Project2";

function App() {
 
  return (
    <>
    <Header/>
    <Routes>
    <Route path="/project1" element={<Project1 />}/>
    <Route path="/" element={<Project2/>}/>
    </Routes>
{/* <MainExpenses/> */}
     
    </>
  );
}

export default App;
