import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
// import ConnectionList from './ConnectionList/ConnectionList'
class App extends Component {
  state = {
    persons: [
      { id: 'asdf1', name: 'Mubashar', age: 26 },
      { id: 'ghjk1', name: 'Amir', age: 25 },
      { id: 'qwer1', name: 'Babar', age: 24 }
    ],
    showPerson: false
  }
  style = {
    border: 'none',
    display: 'inline-block',
    padding: '10px 25px',
    backgroundColor: '#1170ff',
    color: '#fff',
    borderRadius: '3px',
    fontFamily: 'Roboto',
    fontWeight: '500',
    cursor: 'pointer',

  }
  switchNamehandler = (newName, newAge) => {
    // Dont Try this 
    // this.stata.person[0].name='Umar';
    // This will work
    this.setState({
      persons: [
        { name: newName, age: newAge },
        { name: 'Amir', age: 25 },
        { name: 'Babar', age: 24 }
      ]
    })
  }
  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  }
  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const perosn = {
      ...this.state.persons[personIndex]
    }

    perosn.name = event.target.value;

    const perosns = [...this.state.persons];
    perosns[personIndex] = perosn;

    this.setState({ persons: perosns })
  }
  deleteNameHandler = (currentIndex) => {
    const persons = [...this.state.persons];
    persons.splice(currentIndex, 1);
    this.setState({
      persons: persons
    })
  }
  render() {
    // return
    // <ConnectionList />
    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                name={person.name}
                age={person.age}
                key={person.id}
                click={() => this.deleteNameHandler(index)}
                change={(event) => this.changeNameHandler(event, person.id)}
              />
            })
          }
        </div>)
    }
    return (
      <div className="App">
        <h1>Hi I'm React</h1>
        <button style={this.style} onClick={this.togglePersonHandler}>Toggle Person</button>
        {persons}
      </div>
    );

  }
}


export default App;
