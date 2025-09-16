import "./App.sass";
import {Footer, Header, Hero, Offers} from "./components/organisms";

function App() {
  return (
    <>
      <Header/>
      <main>
        <Hero/>
        <Offers/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
