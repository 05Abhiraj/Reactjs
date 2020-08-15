import React, { Component } from 'react';
import logo from './logo.svg';

import Styled from 'styled-components'
import './App.css';

import Radium,{StyleRoot} from 'radium';


import Person from './Person/Person'
import styled from 'styled-components';

const StyleButton=styled.button`

background-color :${props => props.alt ? 'red':'green'};
    color:white;
  font : inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;


  &:hover{
    backgroung-color :${props => props.alt ? 'salmon':'lightgreen'};
    color:black;
  }


`;


class App extends Component{

  state = {
    persons : [
    { id:'1', name : "jmax", age:  25},
    {id:'2', name : "jmax", age : 26},
    {id:'3', name : "jmax", age:  27}],

    showPerson : false
  }

  // switchNameHandler =(newName)=>{
  //   this.setState({ persons : [
  //     {name : newName, age:  25},
  //     {name : "jmaxrobort", age : 26},
  //     {name : "jmaxchander", age:  27}]})
  // }

  nameChangeHandler = (event,id) =>{

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};


    person.name= event.target.value;

    // person.age= event.target.value;

    const persons=[...this.state.persons];

    persons[personIndex]= person;

    // this.setState({ persons : [
    //   {name : event.target.value, age:  205},
    //   {name : event.target.value, age : 260},
    //   {name : event.target.value, age:  270}]})

    this.setState({persons:persons});

  }

  togglePersonsHandler = () => {

    const doseshow= this.state.showPerson

  this.setState({
    showPerson : !doseshow
  })

  }


  deletePersonHandler = (personIndex) => {

    //const persons = this.state.persons.slice();

    const persons = [...this.state.persons];
    

    persons.splice(personIndex,1);
    this.setState({persons : persons})


  }



  render(){

    const style={ backgroundColor : 'green',
    color:'white',
  font : 'inherit',
  border: '1px solid blue',
  padding: '8px',
  cursor: 'pointer',
  ':hover':{
    backgroungColor:'lightgreen',
    color:'black'
  }
};

let persons= null;

if(this.state.showPerson){

  persons=(<div>
  {this.state.persons.map((person,id) => {
    return <Person 

    click={() => this.deletePersonHandler(id)}
    name={person.name} 
    age={person.age}

    key={person.id}

    changed={(event) => this.nameChangeHandler(event,person.id)}

    ></Person>
  })}
    {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchNameHandler.bind(this,'Asian')} changed={this.nameChangeHandler}></Person>
    <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
    <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>my Hobbies is :!</Person> */}
    </div>);

    // style.backgroundColor='red';
    // style[':hover']={
    //   backgroungColor:'salmon',
    //   color:'black'
    // }
            

}

// let classes=['red','bold'].join(' ');

const classes=[];

if(this.state.persons.length <= 2){
  classes.push('red');
}

if (this.state.persons.length <=1){

  classes.push('bold');

}
    return (

      <StyleRoot>
      <div className="App">

      <p className={classes.join(' ')}> It WorKs </p>

      {/* <Person name="Jmax" age="25"></Person>
      <Person name="lmax" age="26"></Person>
      <Person name="mmax" age="27">my Hobbies is :!</Person> */}
{/* <button style={style} onClick={this.switchNameHandler.bind(this,'Keptbug')}>switch name </button> */}

{/* <button style={style} onClick={this.togglePersonsHandler}>Click Me</button> */}

{/* <StyleButton alt={this.state.showPerson} onClick={this.togglePersonsHandler}>Click Me</StyleButton> */}

<StyleButton className="button" onClick={this.togglePersonsHandler}>Click Me</StyleButton>

{/* <button style={style} onClick={this.togglePersonsHandler}>Click Me</button> */}
{persons}


 {/* {this.state.showPerson === true ?  ternary operater 
 <div>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchNameHandler.bind(this,'Asian')} changed={this.nameChangeHandler}></Person>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>my Hobbies is :!</Person>
      </div>:null} */}

      
 
      
      

      </div>

      </StyleRoot>
    );
    }
}

// function App() {
//   return (
//     <div className="App">
    
//     </div>
//   );
// }

//export default Radium(App);

export default App;
