
import './App.css';
import Item from './components/Item';
import Item2 from './components/Item2';
function App() {
  const response = [{
    about: "kamlesh",
    name: "kamlesh Gupta",
    age: 19,
    course: "mca",
    year: 2025
  },
  {
    about: "mohit",
    name: "mohit Gupta",
    age: 23,
    course: "abxa",
    year: 2322
  },
  {
    about: "rohit",
    name: "rohit Gupta",
    age: 119,
    course: "mcabca",
    year: 42424
  },
  {
    about: "sohit",
    name: "sohit Gupta",
    age: 39,
    course: "abc",
    year: 2035
  } 

  ];
  return (
    <div>
      <Item details={response[0].about}></Item >
      <Item2 name={response[0].name} age={response[0].age} course={response[0].course} year={response[0].year} ></Item2>
      <Item details={response[1].about}></Item >

      <Item2 name="sumit" age="42" course="Politecnic" year="2020" ></Item2>
      <Item details={response[2].about} ></Item >

      <Item2 name="harvansh" age="23" course="Nursing" year="2012" ></Item2>
      <Item details={response[3].about}></Item >

      <Item2 name="deepak" age="70" course="12" year="2014" ></Item2>
    </div>
  );
}

export default App;
