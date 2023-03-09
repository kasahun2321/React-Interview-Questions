import React, { useState } from "react"

function ChildComponenet(props) {

    const [newdata, setNewdata] = useState(" ");
    function updateparentdata() {
        setNewdata("fikir esk mekabeer")
        console.log("function name inside child",props.onDataChange)
        props.onDataChange(newdata)
    }
    return (
        <div>
            <p>Passing data from child to parent click the button to pass new data to parrent</p>
            {
                <p1>{props.data}</p1>
            }
            <button onClick={updateparentdata}>Update data from child</button>
        </div>
    );
}

export default ChildComponenet;