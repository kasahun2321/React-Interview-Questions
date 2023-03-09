import React from 'react';
import GrandChildComponent from './GrandChildComponent';

function ChildComponent(props) {
    return (
        <div style={{color:'yellow',backgroundColor:"black"}}>
            <h1>Props at Child component  and passed to GrandChild:{props.data}</h1>
            <GrandChildComponent data={props.data} />
        </div>
    );
}

export default ChildComponent;
