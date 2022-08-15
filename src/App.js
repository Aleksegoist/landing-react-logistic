import About from "./components/about/About";
import Feedback from "./components/feedback/Feedback";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Leads from "./components/leads/Leads";
import Products from "./components/products/Products";


const App = () => {
  return <div className='App'>
    <Header />
    <Products />
    <Leads />
    <About />
    <Feedback />
    <Footer />
  </div>;
};

export default App;
