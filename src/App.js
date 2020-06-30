import React, { Component } from 'react';
import contacts from './contacts.json'

class App extends Component {
  state = {
    contacts: contacts
  }

  showContacts = () =>{
    
    let contactList = this.state.contacts.map(eachContact => {
      return <li>{eachContact.name} {eachContact.popularity}</li>
    })
    return contactList
  }

  render() {
    return (
      <div>
        {this.showContacts() }
      </div>
    );
  }
}

export default App;
