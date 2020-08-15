import React from 'react'

import styled from 'styled-components';

// import './Person.css'

import Radium from 'radium'

const StyleDiv=styled.div `

width : 60%;
margin: 16px auto;
border: 1px solid #eee;
box-shadow: 0 2px 3 px #ccc;
padding: 16px;
text-align: center;





@media (min-width : 500px){

    width: 450px;

} `;

const person = (props) => {

    const style ={
        '@media(min-width:500px)':{
            width:'450px'

        }
    };
    return( 
        <StyleDiv>
    {/* // <div className="Person" style={style}> */}
    <p onClick={props.click}>My Name is {props.name} and age is {props.age} </p>
    <p>{props.children}</p>

    <input type="text" onChange={props.changed} value={props.name}></input>
</StyleDiv>
    // </div>
    )
    
}

//export default Radium(person)

export default person