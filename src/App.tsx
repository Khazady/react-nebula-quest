import "./App.sass";
import {About, Footer, Header, Hero, Offers} from "./components/organisms";

function App() {
  return (
    <>
      <Header/>
      <main className='main'>
        <Hero/>
        <Offers/>
        <About/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
