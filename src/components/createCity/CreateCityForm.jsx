// style
import "./CreateCityForm.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function CreateCityForm({ addCity }) {
  const [city, setCity] = useState({
    cityName: "",
    cityDescription: "",
    whyFavourite: "",
    population: "",
    img: '',
    location: "",
    id: uuidv4(),
  });
  
  console.log(city);

  const handleSubmit = (e) => {
    e.preventDefault();
    addCity(city);  
    console.log(city);
  };

  return (
    <div className="modal-wrapper">
      <div className="overlay">
        <div className="modal">
          <h2>Add Your Favourite City</h2>
          <form onSubmit={handleSubmit}>
            <label>
              <span>Image URL:</span>
              <input
                type="url"
                onChange={(e) =>
                  setCity((prev) => {
                    return { ...prev, img: e.target.value };
                  })
                }
                required
              />
            </label>
            <label>
              <span>City Name:</span>
              <input
                type="text"
                onChange={(e) =>
                  setCity((prev) => {
                    return { ...prev, cityName: e.target.value };
                  })
                }
                required
              />
            </label>
            <label>
              <span>City Description:</span>
              <input
                type="text"
                onChange={(e) =>
                  setCity((prev) => {
                    return { ...prev, cityDescription: e.target.value };
                  })
                }
                required
              />
            </label>
            <label>
              <span>Why it is your favourite :</span>
              <input
                type="text"
                onChange={(e) =>
                  setCity((prev) => {
                    return { ...prev, whyFavourite: e.target.value };
                  })
                }
                required
              />
            </label>
            <label>
              <span>Population:</span>
              <input
                type="text"
                onChange={(e) =>
                  setCity((prev) => {
                    return { ...prev, population: e.target.value };
                  })
                }
                required
              />
            </label>
            <label>
              <span>Location:</span>
              <input
                type="text"
                onChange={(e) =>
                  setCity((prev) => {
                    return { ...prev, location: e.target.value };
                  })
                }
                required
              />
            </label>
            <button  className="modal-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateCityForm;
