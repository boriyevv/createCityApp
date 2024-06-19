import "./App.css";
import { useState } from "react";

// components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import CityList from "./components/cityList/CityList";
import CreateCityForm from "./components/createCity/CreateCityForm";
function App() {

  const[city, setCity] = useState([])
  const[showModal, setShowModal] = useState(false)

  const closeModal=(e)=>{
    if(e.target.className === "overlay") setShowModal(false)
      if(e.key === "Escape") setShowModal(false)
  }


  const addCity=(city)=>{
    setCity((prev)=>{
      return [...prev, city]
    })
    setShowModal(false)
  }

  const deleteCity =(id)=>{
    setCity((cities)=>{
        return cities.filter((city)=>{
          return city.id !== id 
        })
    })
  }

  return (
    <div onClick={closeModal} onKeyDown={closeModal} className="App">
      <Navbar citiesLengths={city.length}/>
        <main>
          <div className="no-cities">
            {city.length === 0 && <h2>No Cities</h2>}
          </div>
            <CityList cities={city} deleteCity={deleteCity}/>
        </main>
        {showModal && <CreateCityForm addCity={addCity}/>}
        <button onClick={()=>setShowModal(true)} className="create-city">Add Your Favourite City</button>
      <Footer />
    </div>
  );
}

export default App;


