
import './App.css';
import Item from './components/Item';
import Item2 from './components/Item2';
function App() {
  return (
    <div>
      <Item details="About"></Item >
      <Item2 name="Harjit" age="50" course="ITI" year="2007" ></Item2>
      <Item details="About"></Item >

      <Item2 name="sumit" age="42" course="Politecnic" year="2020" ></Item2>
      <Item details="About"></Item >

      <Item2 name="harvansh" age="23" course="Nursing" year="2012" ></Item2>
      <Item details="About"></Item >

      <Item2 name="deepak" age="70" course="12" year="2014" ></Item2>
    </div>
  );
}

export default App;
