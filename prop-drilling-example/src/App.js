import './App.css';
import ParentComponent from './ParentComponent';

function App() {
  const data="This is how prop drilling work down tree of the DOM"
  return (
    <div>
      <ParentComponent data={data}/>
    </div>
  );
}

export default App;
