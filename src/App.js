import "./App.css";
import MyJumbo from "./components/MyJumbo";
import MyNavBar from "./components/MyNavBar";
import MyFooter from "./components/MyFooter";
import LatestRelease from "./components/LatestRelease";
import { BrowserRouter } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import MyWarning from "./components/MyWarning";
import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList";
import horrorBok from "./BOOKS/horror.json";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <MyNavBar />
      <Route
        path="/home"
        exact
        render={(routerProps) => <MyJumbo {...routerProps} title="WELCOME" />}
      />

      {/* <MyWarning />       */}

      <Row>
        {/* <Col className='single' xs={2}> <h4 >Single book: </h4>  */}

        {/*         
        <SingleBook  book={horrorBok[13]} />
        
        </Col> */}
        <Col>
          <Route
            path="/booklist"
            exact
            render={(routerProps) => (
              <BookList {...routerProps} books={horrorBok} />
            )}
          />
          {/* <BookList books={horrorBok} />  */}
        </Col>


      </Row>



      <Row>
        {/* <Col className='single' xs={2}> <h4 >Single book: </h4>  */}

        {/*         
        <SingleBook  book={horrorBok[13]} />
        
        </Col> */}
        <Col>
          <Route
            path="/sale"
            exact
            render={(routerProps) => (
              <SingleBook {...routerProps} book={horrorBok[13]} />
            )}
          />
          {/* <BookList books={horrorBok} />  */}
          <Route path="/404" exact component={NotFound} />

          <Route path='/contact' exact component={MyFooter}></Route>
         
        </Col>

        
      </Row>
      {/* <BookList /> */}
      {/* <SingleBook book={onebook[13]} />  */}

      {/* <Container> 
        
        <BookList book={onebook} />
        </Container> 
       <Container>
        <h2 className='mt-4'>CAROUSEL </h2><MyCarousel></MyCarousel>
         </Container> */}

      {/* <LatestRelease></LatestRelease>  */}

      {/* <MyFooter /> */}
    </Router>
  );
}

export default App;
