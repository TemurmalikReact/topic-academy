import './App.css';
import { Banner } from './components/banner/Banner';
import { Header } from './components/header/Header';
import { Services } from './components/services/Services';

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Services />
    </div>
  );
}

export default App;
