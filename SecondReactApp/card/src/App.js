// import logo from './logo.svg';
import './App.css';
import './components/Item';
import Item from './components/Item';
import Date from './components/Date';
import ProductForm from './components/ProductForm';

function App() {
  const response = [
    {
      status: "Data1",
      n: "mukesh",
      c: "bca",
      y: "2020"
    },
    {
      status: "Data2",
      n: "harjit",
      c: "b.tech",
      y: "2025"
    },
    {
      status: "Data3",
      n: "harvan",
      c: "MCA",
      y: "2033"
    }
  ]
  return (

    <div>
      <ProductForm></ProductForm>
      <div className="App">
        <h1>Card Compo</h1>
      </div>
      <Item Heading={response[0].status}></Item>
      <Date Name={response[0].n} Year={response[0].y} Course={response[0].c}></Date>
      <Item Heading={response[1].status}></Item>
      <Date Name={response[1].n} Year={response[1].y} Course={response[1].c}></Date>
      <Item Heading={response[2].status}></Item>
      <Date Name={response[2].n} Year={response[2].y} Course={response[2].c}></Date>
    </div>

  );
}

export default App;
