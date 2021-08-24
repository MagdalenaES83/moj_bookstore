import "./App.css";
import MyJumbo from "./components/MyJumbo";
import MyNavBar from "./components/MyNavBar";
import MyFooter from "./components/MyFooter";
import LatestRelease from "./components/LatestRelease";
import { BrowserRouter, Route } from "react-router-dom";




function App() {
  return (
    <BrowserRouter>
      <MyNavBar title='Bokhandel'  />
      <MyJumbo title = 'WELCOME'></MyJumbo>
      <LatestRelease></LatestRelease> 
      
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;
