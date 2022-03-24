import logo from './logo.svg';
import './App.css';
import { Navbar, Container, Nav, NavDropdown, Jumbotron, Button } from 'react-bootstrap';
import { useState } from 'react';
import Data from './data';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

  let [shoes, shoes_c] = useState(Data);

  return (
    <div className="App">

      

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Yoon-Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


        <Switch>
          <Route exact path="/" > 
            <Jumbotron className='background'>
              <h1>신발 타이어보다 싼 곳</h1>
              <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
              </p>
              <p>
                <Button variant="primary">Learn more</Button>
              </p>
            </Jumbotron>

            <div className='container'>
              <div className='row'>
              {
              shoes.map((e, i)=>{
                return(
                  <Card shoes={shoes[i]} i={i} key={i}/>
                  )
                })
              }
              </div>
            </div>
          </Route>       
          <Route path="/detail" > 
          <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                  </div>
                  <div className="col-md-6 mt-4">
                    <h4 className="pt-5">상품명</h4>
                    <p>상품설명</p>
                    <p>120000원</p>
                    <button className="btn btn-danger">주문하기</button> 
                  </div>
                </div>
          </div> 
          </Route> 
        </Switch>

      
    </div>
  );
}


function Card(props){
  return(

          <div className='col-md-4'>
              <img src={'https://codingapple1.github.io/shop/shoes'+ (props.i+1)+'.jpg'} width="100%"/>
              <h4>{props.shoes.title}</h4>
              <p>{props.shoes.content} & {props.shoes.price}</p>
          </div>
  )
}

export default App;
