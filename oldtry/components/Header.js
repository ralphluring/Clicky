import React from 'react';

function Header(props){

    const headerStyle = {
        backgroundColor:'yellow',
        display:'flex',
        justifyContent:'space-between'
    }

    const scoreStyle = {
        display:'flex',
        justifyContent:'space-around',
        border:'1px solid black',
        width:'50%'
    }

    return(
        <div style={headerStyle}>
            <h1>Logo</h1>
            <div style={scoreStyle}>
            <p>Score: {props.score}</p>
            <p>Top Score: {props.topXcore}</p>
            </div>
           
        </div>
    )

}

export default Header;