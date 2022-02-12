import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      { name: 'Mubashar', age: 26 },
      { name: 'Amir', age: 25 },
      { name: 'Babar', age: 24 },
      { name: 'Umar', age: 24 }
    ],
    showPersons: false
  }

  switchNameHandler = () => {
    //console.log('was Clicked');
    //Don't Try This this.state.persons[0].name='Mubashar Akram';
    this.setState({
      persons: [
        { name: 'Mubashar Akram', age: 26 },
        { name: 'Amir', age: 26 },
        { name: 'Babar', age: 24 },
        { name: 'Umar', age: 24 }
      ]
    })
  }
  toggleNameHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }
  deleteNameHandler = (index) => {
    // const persons= this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons: persons
    })
  }
  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (

        <div className='center'>
          {
            this.state.persons.map((person, currentIndex) => {
              return <Person
                click={() => this.deleteNameHandler(currentIndex)}
                name={person.name}
                age={person.age} />
            })
          }
        </div>
      )
    }
    return (
      <div className="App">
        <h1>Hi Now I'm going to start my React Journey!</h1>
        <button className='btn btn-blue' onClick={this.toggleNameHandler} >Switch Name</button>
        {persons}
      </div>
    );
  }
}

export default App;
