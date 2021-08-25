import "./App.css";
import MyJumbo from "./components/MyJumbo";
import MyNavBar from "./components/MyNavBar";
import MyFooter from "./components/MyFooter";
import LatestRelease from "./components/LatestRelease";
import { BrowserRouter } from "react-router-dom";
import {Container } from 'react-bootstrap'
import MyCarousel from "./components/MyCarousel";




function App() {
  return (
    <BrowserRouter>
      <MyNavBar title='Bokhandel'  />
      <MyJumbo title = 'WELCOME'></MyJumbo>
       <Container>
        <h2 className='mt-4'>CAROUSEL </h2><MyCarousel></MyCarousel>
         </Container>
      
      
      <LatestRelease></LatestRelease> 

     
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;
