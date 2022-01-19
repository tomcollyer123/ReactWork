// import CompWithVars from './components/002-component-variables/CompWithVars';
// import Page from './components/003-Parent-child/Page';
// import PizzaOrder from './components/004-Props/PizzaOrder';
// import Parent from './components/003-Parent-child/Parent';
// import HelloWorld from './components/HelloWorld/HelloWorld';
// import ParentArray from './components/004-Props/Array/Parent';
// import ContactCardManager from './components/004-Props/Contact-Card-Challenge/ContactCardManager';
// import Manager from './components/005-state/Manager';
// import SearchTable from './components/006-Forms/SearchTable';
// import CarInput from './components/006-Forms/State-exercises/CarInput';
// import ControlledInput from './components/006-Forms/State-exercises/ControlledInput';
// import Manager from './components/007-Lifting-State/Manager';
// import Clock from './components/008-useEffect/Clock';
// import ReadMore from './components/008-useEffect/ReadMore';
import './css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/009-Routing/About';
import Shop from './components/009-Routing/Shop';
import Home from './components/009-Routing/Home';
import Nav from './components/009-Routing/Nav';
import Footer from './components/009-Routing/Footer';
import Bar from './components/010-RequestHandling/Bar';

function App() {
  return (
    <div className="App">

      {/* Router is the div that contains everything

      <BrowserRouter>

        <Nav />

        {/* Everything in switch are the components that you want to switch between */}

      {/* <Routes> */}

      {/* The route is saying what path to take to get to the page */}
      {/* <Route path="/" exact element={<Home />} />


          <Route path="/about/:id" element={<About />} />


          <Route path="/shop/:id" element={<Shop />} />


        </Routes>

        <Footer />

      </BrowserRouter> */}




      {/* Componenets must begin with a capital letter */}
      {/* <HelloWorld/>
     <CompWithVars/> */}
      {/* <Parent/> */}
      {/* <Page/> */}
      {/* <PizzaOrder/> */}
      {/* <ContactCardManager/> */}
      {/* <ParentArray/> */}
      {/* <Manager/> */}
      {/* <ControlledInput/> */}
      {/* <CarInput/> */}
      {/* <SearchTable/> */}
      {/* <Manager /> */}
      {/* <Clock /> */}
      {/* <ReadMore /> */}
      <Bar />
    </div>
  );
}

export default App;
