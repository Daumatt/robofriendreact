import './App.css';
import SearchBox from './SearchBox';
import CardList from './CardList';
// import users from './users.json'
import React from 'react';
class App extends React.Component{
  constructor(){
    super();
    this.state={
      SearchInput:'',
      robots: [],
      loading: false
    }
  }

  addsearchinput = (event) => {
    console.log(event.target.value);
    this.setState({SearchInput: event.target.value});
  }
  componentDidMount (){
    this.setState({loading: true})
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(response=> response.json())
   .then(json => this.setState({robots:json, loading: false}))
   .catch((err)=>console.log (err))
  }

  render () {
    const filteredRobots = this.state.robots.filter(items =>(
      items.name.toLowerCase().includes(this.state.SearchInput.toLowerCase())
    ))

      console.log ("filteredRobots:", filteredRobots);

  return (
    <div className="App">
      <h1>
        Groupies Robofriends
      </h1>
      <SearchBox updateSearchInput = {this.addsearchinput}/>
      {this.state.loading && <h1 style={{textAlign: 'center'}}>loading...</h1>}
      {!filteredRobots.length && !this.state.loading && <h3 style={{textAlign:'center'}}>no result found</h3>}
      <CardList user={filteredRobots}/>
    </div>
  );
}
}


export default App;
