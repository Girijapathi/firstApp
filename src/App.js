import React, { Component } from 'react';
import './App.css';
import "./Person/Person.css";
import Person from "./Person/Person";
class App extends Component {

  // create state object
  state = {
    person: [
      { name: "Giri", age: 28, id: "a11" },
      { name: "Raghu", age: 10, id: "b12" },
      { name: "Arun", age: 16, id: "c13" }
    ],
    showPersons: false
  };

  // change name of person as per text box value
  nameChangeHandler = (event, id) => {
    // find index
    const personIndex = this.state.person.findIndex(person => {
      return person.id === id;
    })
    // get person with that index, respect mutation
    const person = {...this.state.person[personIndex]};
    // add value from text to person object
    person.name = event.target.value;
    // copy person list from state 
    const personsList = [...this.state.person];
    // replace person in personList
    personsList[personIndex] = person;
    // update the state.
    this.setState({
      person: personsList
    });
  };

  // show/hide person list
  toggleClickHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  // delete person on click of person name
  deletePersonHandler = (personIndex) => {
    // update the state with honoring immutable concept 
    //const persons = this.state.person;
    const persons = [...this.state.person]; // js spread operator
    persons.splice(personIndex, 1); // delete person from array
    this.setState({person: persons}); // set state
  }
  // Render/re-render dom
  render() {
    const buttonStyle = {
      backgroundColor: "green",
      padding: "10px",
      border: "1px solid green",
      cursor: "pointer",
      margin: "10px 0 5px 0",

    };
    let persons = null;
    if(this.state.showPersons){ // conditions
      persons = (
        <div>
          {this.state.person.map((p, index) =>{ // looping
            return <Person 
            name={p.name}
            age={p.age}
            key={p.id}
            click={() => this.deletePersonHandler(index)}
            changed={(event) => this.nameChangeHandler(event, p.id)} /> // dynamic rendering from server
          })}
        </div>
      );
      buttonStyle.backgroundColor = "red";
    }
    // adding dynamic css classes
    const classes = [];
    if(this.state.person.length <= 2){
      classes.push("red");
    }
    if(this.state.person.length <= 1){
      classes.push("bold");
    }
    // static and dynamic data rendering
    return (
      <div className="App">
        <button onClick={this.toggleClickHandler} style={buttonStyle}>Toggle person</button>
        <p className={classes.join(' ')}>This is really cool stuff!</p>
        { persons }
      </div>
    );
    // static data rendering
    // <br/>
    //     <button onClick={this.swithNameHandler.bind(this, "Girijapathi")} style={style}>Show full name</button>
    //     <Person name={this.state.person[0].name} click={() => this.swithNameHandler("G D Math")}/>
    //     <Person name={this.state.person[1].name} changed={this.changeNameHandler}></Person>
        
    //     <hr/>
    //return React.createElement("div", {className: "App"}, React.createElement("h1", null, "this is difficult!"));
  }
}

export default App;
