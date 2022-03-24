import React, {useState} from "react"
import { useHistory, useParams } from "react-router-dom";
import styled from 'styled-components';

let box = styled.div`
    padding : 20px;
`;

let tit = styled.div`
    font-size : 25px;
    font-weights : 900;
`;

function Detail(props){
    
    let { id } = useParams();
    let history = useHistory();
    let stuff = props.shoes.find((x)=>{
        return x.id == id
    })

    return (
      <div className="container">
          <box>
              <tit>Detail</tit>
          </box>
          <div className="row">
            <div className="col-md-6">
              <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
            <div className="col-md-6 mt-4">
              <h4 className="pt-5">{stuff.title}</h4>
              <p>{stuff.content}</p>
              <p>{stuff.price}</p>
              <button className="btn btn-danger">주문하기</button> 
              <button className="btn btn-danger" onClick={()=>{history.goBack();}}>뒤로가기</button> 
            </div>
          </div>
      </div>
    )
  }

  export default Detail;