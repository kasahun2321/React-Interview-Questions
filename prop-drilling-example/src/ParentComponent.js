import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent(props) {
    return (
        <div style={{color:"green"}}>
            <h1>Props at parent component  and passed to child:{props.data}</h1>
            <ChildComponent data={props.data} />
        </div>
    );
}

export default ParentComponent;
