import './App.css';
import { Banner } from './components/banner/Banner';
import { Examples } from './components/examples/Examples';
import { Header } from './components/header/Header';
import { Services } from './components/services/Services';

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Services />
      <Examples />
    </div>
  );
}

export default App;
