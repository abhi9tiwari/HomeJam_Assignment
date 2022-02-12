import NavBar from './components/NavBar';
import './App.css';
import TopSection from './components/TopSection';
import UpcomingShows from './components/UpcomingShows';
import Studio from './components/Studio';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar title="HomeJam"/>
      <TopSection CompanyTitle = "HomeJam" CompanyType="Multimedia"/>
      <UpcomingShows UpcomingShowsone = "Attack On Titan" UpcomingShowstwo = "JoJo's Bizzare Adventure" UpcomingShowsthree = "Vinland Saga" UpcomingShowsfour = "Grave Of Fireflies"/>
      <Studio StudioOne="MAPPA" StudioTwo="UFOTABLE" StudioThree="STUDIO GHIBLI" StudioFour="BONES" StudioFive="KYOTO ANIMATION" StudioSix="WIT STUDIO"/>
      <Footer/>
    </div>
  );
}

export default App;
