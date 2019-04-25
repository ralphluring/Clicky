import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score:0,
    topScore:0,
    message:"click any image to begin"
  };


  friendClicked = id => {
     this.state.friends.filter(friend => {
      if(friend.id === id){
        if(friend.clicked !== true){
          this.setState({ 
            score: this.state.score + 1,
            message:"You Guessed Correctly"
           });
          friend.clicked = true;
          
        }else{
          var clone = this.state.friends.filter(friend => friend.clicked = false);
          this.setState({ 
            score: 0,
            friends:clone,
            message:"You already guessed that -Game OVER"
          });
          setTimeout(()=>{
            this.setState({
              message:"New Game - Click any image to start"
            })
          },1000)
          if(this.state.score > this.state.topScore){
            this.setState({
              topScore:this.state.score 
            })
          }
        }
      
      }
 
    });

    var clone = this.state.friends.sort( ()=> Math.random() - 0.5 );
    this.setState({friends:clone})
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <React.Fragment>
          <div className="header">
          <p> Top Score : {this.state.topScore}</p>
          <p> Score : {this.state.score}</p>
          <p> {this.state.message}</p>
        </div>
      <Wrapper>
    
        {this.state.friends.map(friend => (
          <FriendCard
            friendClicked={this.friendClicked}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
           
          />
        ))}
      </Wrapper>
      </React.Fragment>
    );
  }
}

export default App;
