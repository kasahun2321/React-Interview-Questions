import React from 'react';
import MyContext from './MyContext'
function ChildComponent1() {

    return (
        <MyContext.Consumer>
            {({ data: datafromcontextprovider, updateFunction: updateFunctionfromContextprovider }) => (

                <div>
                    {console.log(datafromcontextprovider)}
                    <p>what is your Name ?: <span style={{fontFamily:"cursive"}}>{datafromcontextprovider}</span></p>
                    <button style={{backgroundColor:"blue", color:"whitesmoke"}} onClick={() => { updateFunctionfromContextprovider("Kasahun Tehone") }}>Tell me Your full name</button>
                </div>
            )}
        </MyContext.Consumer>
    );
}

export default ChildComponent1;