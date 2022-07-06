import Navbar from '../components/Navbar'
import {
  Routes,
  Route
} from "react-router-dom";
import MapCAArd from '../components/MapCard';
import SearchBar from '../components/SearchBar';
import Favorite from '../components/Favorite';



const Home = () => {

  return (
    <div>
      <Navbar />
      <br /><br /><br />
      <Routes>
        <Route path="/Search" element={<SearchBar/>}/>
        <Route path="/" element={<MapCAArd/>} />
        <Route path="/Favourite" element={<Favorite/>}/> 
      </Routes>
    </div>
  )
}

export default Home
