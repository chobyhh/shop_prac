import React, {useState, useEffect} from "react"
import { useHistory, useParams } from "react-router-dom";
import styled from 'styled-components';
import './Detail.scss';
import { Navbar, Container, Nav, NavDropdown, Jumbotron, Button } from 'react-bootstrap';
import {CSSTransition} from "react-transition-group"

let box = styled.div`
    padding : 20px;
`;

let tit = styled.div`
    font-size : 25px;
    font-weights : 900;
`;

function Detail(props){

    let [alert, alert_c] = useState(true)
    let [inputData, inputData_c] = useState('')
    let [tap, tap_c] = useState(0);

    let [swit, swit_c] = useState(false);

    useEffect(()=>{
      let timer = setTimeout(()=>{alert_c(false)}, 2000)
      return ()=>{clearTimeout(timer)}
    },[alert]);


    let { id } = useParams();
    let history = useHistory();
    let stuff = props.shoes.find((x)=>{
        return x.id == id
    })

    return (
      <div className="container">
          <box>
              <tit className="red">Detail</tit>
          </box>
          {/* {inputData}
          <input onChange={(e)=>{inputData_c(e.target.value)}}/> */}

          {
            alert === true ? <div className="my-alert2"><p>품절 임박!!!</p></div> : null
          } 
          <div className="row">
            <div className="col-md-6">
              <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
            <div className="col-md-6 mt-4">
              <h4 className="pt-5">{stuff.title}</h4>
              <p>{stuff.content}</p>
              <p>{stuff.price}</p>

              <Info stock={props.stock}/>

              <button className="btn btn-danger" >주문하기</button> 
              <button className="btn btn-danger" onClick={()=>{history.goBack();}}>뒤로가기</button> 
            </div>
          </div>

          <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
            <Nav.Item>
              <Nav.Link eventKey="link-0" onClick={()=>{swit_c(false); tap_c(0)}}>Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1" onClick={()=>{swit_c(false); tap_c(1)}}>Option 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2" onClick={()=>{swit_c(false); tap_c(2)}}>
                Option 2
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <CSSTransition in={swit} classNames="wow" timeout={500}>
            <TapContent tap={tap} swit_c={swit_c} />

          </CSSTransition>
          

      </div>
    )
  }


  function TapContent(props){

    useEffect(()=>{
      props.swit_c(true)
    })

    if (props.tap === 0){
      return <div>0번째 내용입니다</div>
    } else if (props.tap === 1){
      return <div>1번째 내용입니다</div>
    } else if (props.tap === 2){
      return <div>2번째 내용입니다</div>
    }

  }

  function Info(props){
    return(
      <p>재고 : {props.stock[0]}</p>
    )
  }




  export default Detail;