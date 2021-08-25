import "./App.css";
import MyJumbo from "./components/MyJumbo";
import MyNavBar from "./components/MyNavBar";
import MyFooter from "./components/MyFooter";
import LatestRelease from "./components/LatestRelease";
import { BrowserRouter } from "react-router-dom";
import {Container } from 'react-bootstrap'
import MyCarousel from "./components/MyCarousel";
import MyWarning from "./components/MyWarning";
import SingleBook from "./components/SingleBook";
import onebook from './BOOKS/horror.json'
import MyFilter from "./components/MyFilter";
import BookList from "./components/BookList";



function App() {
  return (
    <BrowserRouter>
      <MyNavBar title='Bokhandel'  />
      <MyWarning />
      <MyJumbo title = 'WELCOME'></MyJumbo>
      <MyFilter></MyFilter>
      <Container> <h2> SINGLE BOOK, EXERCISE No. 3</h2>

      {/* <BookList /> */}
      <SingleBook book={onebook[13]} /> 
      </Container>
      <Container> 
        
        <BookList />
        </Container> 
       <Container>
        <h2 className='mt-4'>CAROUSEL </h2><MyCarousel></MyCarousel>
         </Container>
      
      
      {/* <LatestRelease></LatestRelease>  */}

     
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;
