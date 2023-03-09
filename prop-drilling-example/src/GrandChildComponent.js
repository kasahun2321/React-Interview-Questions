import React from 'react';

function GrandChildComponent(props) {
    return (
        <div style={{color:"red"}}>
            <h3>Final Desitination of prop at GrandChildComponent will be=={props.data}</h3>
        </div>
    );
}

export default GrandChildComponent;
