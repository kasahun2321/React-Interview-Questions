import React, { useState, useRef, useEffect } from 'react'
import ChildComponenet from './ChildComponent';

function ParentComponent() {
    const [data, setData] = useState("i dont belive my eyes");
    const inputRef = useRef(null);

    useEffect(() => {
        
    }, []);

    const handleChildData = (data) => {
        inputRef.current.style.fontFamily = 'Arial';
        setData(data);
    };
    return (
        <div>
            <p ref={inputRef}>data inside parent initial value={data}</p>
            <ChildComponenet data={data} onDataChange={handleChildData} />
        </div>
    );
}

export default ParentComponent;
