import About from "./components/about/About";
import Header from "./components/header/Header";
import Leads from "./components/leads/Leads";
import Products from "./components/products/Products";


const App = () => {
  return <div className='App'>
    <Header />
    <Products />
    <Leads />
    <About />
  </div>;
};

export default App;
