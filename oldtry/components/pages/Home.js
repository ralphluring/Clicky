import React, {Component} from 'react';
import Header from '../Header'
import Game from '../Game'



class Home extends Component{
    
    state ={
        cards:[
            {
              id:1,
              src:"https://via.placeholder.com/150",
              clicked:false
            },
            {
              id:2,
              src:"https://via.placeholder.com/300",
              clicked:false
            },
            {
              id:3,
              src:"https://via.placeholder.com/200",
              clicked:false
            },
          ]
    }
    render(){
        return(
        <div> 
            <Header/>
            <Game cards={this.state.cards} /> 
        </div>
        )
    }
}


export default Home;