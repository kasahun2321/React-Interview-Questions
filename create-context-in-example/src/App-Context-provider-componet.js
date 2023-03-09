import MyContext from './MyContext';
import ChildComponent1 from './Child-Component1';
import { useState } from 'react';


function AppContextProviderComponent() {
  const [data, setData] = useState("kasahun");

  function updateFunction(newvalue) {
    setData(newvalue)
  }
  return (
    <MyContext.Provider value={{ data, updateFunction }} >
      <ChildComponent1 />
    </MyContext.Provider >
  );
}

export default AppContextProviderComponent;
