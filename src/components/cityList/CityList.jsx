import './CityList.css'

const CityList = ({cities, deleteCity}) => {
    return (
        <div className='cityList'>
            <div className="cityList-container container">

            {cities.map(city=>{
                return(
                    <div className="card" key={city.id}>
                        <div className="card-inner">
                            <img src={city.img} alt={city.cityName} width={150} height={150} />
                            <h3>Name : {city.cityName}</h3>
                            <p><strong>Description </strong>: {city.cityDescription}</p>
                            <p><strong>Why I like it </strong>: {city.whyFavourite}</p>
                            <p><strong>Population </strong>: {city.population}</p>
                            <p><strong>Location </strong>: {city.location}</p>
                            <button onClick={()=> deleteCity(city.id)}>Delete From List</button>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    );
}

export default CityList;
