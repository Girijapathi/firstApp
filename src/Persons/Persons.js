import React from "react";
import Person from "../Persons/Person/Person";
const persons = (props) => props.persons.map((p, index) =>{ // looping
    return <Person 
        name={p.name}
        age={p.age}
        key={p.id}
        click={() => props.clicked(index)}
        changed={(event) => props.changed(event, p.id)} /> // dynamic rendering from server
  });

  export default persons;