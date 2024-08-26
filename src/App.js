import './App.css';
import { Banner } from './components/banner/Banner';
import { Examples } from './components/examples/Examples';
import { Header } from './components/header/Header';
import { Plan } from './components/plan/Plan';
import { Request } from './components/request/Request';
import { Services } from './components/services/Services';
import { Videoblock } from './components/video-block/VideoBlock';

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Services />
      <Examples />
      <Videoblock />
      <Request />
      <Plan />
    </div>
  );
}

export default App;
