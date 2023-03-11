import { connect } from 'react-redux';

const Counter = ({ counter, dispatch }) => (
  <div>
    <h1>Counter: {counter}</h1>
    <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
    <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
  </div>
);

const mapStateToProps = (state) => ({
  counter: state.counter,
});

export default connect(mapStateToProps)(Counter);
