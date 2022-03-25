import logo from './logo.svg';
import './App.css';
import { Navbar, Container, Nav, NavDropdown, Jumbotron, Button } from 'react-bootstrap';
import React,{ useContext, useEffect, useState } from 'react';
import Data from './data';
import Detail from './Detail';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import axios from 'axios';
import Cart from './Cart'

let stockContext = React.createContext();

function App() {

  

  let [shoes, shoes_c] = useState(Data);
  let [stock, stock_c] = useState([10,11,12]);

  return (
    <div className="App">

      

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Yoon-Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
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
              <stockContext.Provider value={stock}>
                <div className='row'>
                {
                shoes.map((e, i)=>{
                  return(
                    <Card shoes={shoes[i]} i={i} key={i}/>
                    )
                  })
                }
                </div>
              </stockContext.Provider>
              

            

              <button className='btn btn-primary' onClick={()=>{

                

                axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((result)=>{console.log(result.data);
                shoes_c([...shoes, ...result.data]);
                
                })
                              

              }}> 더보기 </button>
            </div>
          </Route>       
          <Route path="/detail/:id" > 
            <Detail shoes={shoes} stock={stock} stock_c={stock_c}/>
          </Route> 

          <Route path='/cart'>
            <Cart />
          </Route>
        </Switch>

      
    </div>
  );
}




function Card(props){
  
  let stock = useContext(stockContext);

  return(

          <div className='col-md-4'>
              <img src={'https://codingapple1.github.io/shop/shoes'+ (props.i+1)+'.jpg'} width="100%"/>
              <h4>{props.shoes.title}</h4>
              <p>{props.shoes.content} & {props.shoes.price}</p>
              <p><Test/></p>
          </div>
          
  )
}


function Test(){
  let stock = useContext(stockContext);
  return(
    <p> 재고 : {stock} </p>
  )
}

export default App;
