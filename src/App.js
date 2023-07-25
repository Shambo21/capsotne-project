import './App.css';
//import Header from "./components/Header";
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Main from "./components/Main"

const App = () => {
  return (
    <div className="wrapper">
        <Nav />
        <Main />
        <Footer />
    </div>
  );
}

export default App;
