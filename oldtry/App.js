import React, {Component} from 'react';
import './App.css';
import Home from './components/pages/Home'

class App extends Component{

  state = {

  }

  render(){
    // {console.log(this.state.cards.map(card =>{
    //   return card.id
    // }))}
    return (
      <div className="App">
        <Home/>
      </div>
    );
  }
}


export default App;
