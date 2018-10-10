import React from "react";
import cockpitClass from "./Cockpit.css";
const cockpit = (props) => {
    // adding dynamic css classes
    let btnClass = '';
    const localClasses = [];
    if(props.persons.length <= 2){
      localClasses.push(cockpitClass.red);
    }
    if(props.persons.length <= 1){
      localClasses.push(cockpitClass.bold);
    }
    if(props.showPersons){
        btnClass = cockpitClass.red;
    }
    return (
        <div className="Cockpit">
            <button onClick={props.clicked} className={"buttonStyle"}>Toggle person</button>
            <p className={localClasses.join(' ')}>This is really cool stuff!</p>
        </div>
    );
}

export default cockpit;