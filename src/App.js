import './App.css';
import { Banner } from './components/banner/Banner';
import { Contact } from './components/contact/Contact';
import { Examples } from './components/examples/Examples';
import { Facilities } from './components/facilities/Facilities';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Plan } from './components/plan/Plan';
import { Questions } from './components/Questions/Questions';
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
      <Facilities />
      <Questions />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
