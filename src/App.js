import React, { Component } from 'react';
import { CardList } from './components/CardList-component'
import './App.css';
import { Search } from './components/Search-box-component';

class App extends Component {

  constructor() {
    super();
    this.state = {
      usersInfo: [],
      searchField: ''

    }
    this.changeUser = this.changeUser.bind(this)
  }

  changeUser() {

    this.setState({ user: 'Ramesh' })
  }

  handleChange=(e)=>{

    this.setState(this.setState({ searchField: e.target.value }))

  }

  componentDidMount() {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ usersInfo: users }))
  }

  render() {

    const { usersInfo, searchField } = this.state;
    const searchUserResult = usersInfo.filter(userResult => userResult.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
        <header className="App-header">
<h1>User Cards</h1>
          <Search placeholder="Search Users" handleChange={this.handleChange}></Search>
          <CardList usersInfo={searchUserResult}>
          </CardList>
        </header>
      </div>
    );
  }
}
export default App;
