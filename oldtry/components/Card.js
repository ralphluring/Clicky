import React from 'react';

function Card(props){
    const cardStyle = {
        backgroundColor:'red',
        display:"flex",
        flexDirection:'column',
        alignItems:'center'
    }
    const imgStyle = {
       
    }


    return(
        <div style={cardStyle}>
            <h1>{props.id}</h1>
            <img src={props.img} style={imgStyle} alt=""/>
        </div>
    )
}

export default Card;