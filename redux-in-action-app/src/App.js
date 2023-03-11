import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/action-creator-index";

const Button = styled.button`
background-color: ${props => props.variant === 'primary' ? 'blue' : 'gray'};
color: white;
padding: 10px;
border: none;
border-radius: 5px;
cursor: pointer;
`;


function App(props) {
  const state = useSelector((state) => {
    return state
  })
  const dispatch = useDispatch()
  const { withdraw, depositMoney } = bindActionCreators(actionCreators, dispatch)

  function greetingStyledcomponent() {
    alert("Install  the library of styled component then use any feauture you like!")
  }
  return (
    <div>
      <h1>
        Amount Balance on the Account :{state.account}
      </h1>
      <Button onClick={() => { depositMoney(1000) }}>depositMoney</Button>
      <Button onClick={() => { withdraw(400) }}>withdraw money</Button>
      <h1>{props.title}</h1>
      <button onClick={props.onButtonClick}>Click me</button>
    </div>
  );
}


export default App
