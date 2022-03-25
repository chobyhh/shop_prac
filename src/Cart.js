import React from "react";
import { Card, Table } from "react-bootstrap";
import { connect } from "react-redux";

function Cart(props){
    return(
        <>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>상품명</th>
                <th>수량</th>
                <th>기타</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.state.map((e, i)=>{
                        return (
                            <tr key={i}>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.quan}</td>
                            <td><button onClick={()=>{ props.dispatch({ type : '증가'}) }}>+</button> 
                            <button style={{marginLeft: '3px'}} onClick={()=>{ props.dispatch({ type : '감소'}) }}>-</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
        { props.alertClose === true
           ? <div className="my-alert2">
            <p>품절 임박!!!</p>
            <button onClick={()=>{ props.dispatch({type :'닫기'})}}>닫기</button>
            </div>
            : null
        }
        

        </>
    )
}


function 프롭스화 (state){
    console.log(state);
    return {
        state : state.reducer,
        alertClose : state.reducer2
    }
}

export default connect(프롭스화)(Cart)

//export default Cart;