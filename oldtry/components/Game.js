import React,{Component} from 'react';
import Card from './Card';

const boardStyle = {
    display:'grid',
    gridTemplateColumns:'1fr 1fr 1fr 1fr',
    alignContent:'center'
}



class Game extends Component{
    handleOnClick = () =>{
        return
    }
    render(){
        return (
         
                {this.props.cards.map((card,i)=>{
                    return (
                    <Card
                     id={card.id} 
                     img={card.src} 
                     key={i}
                     onClick={handleOnClick} 
                    />)
                })}
        )
           
    }

}

export default Game;