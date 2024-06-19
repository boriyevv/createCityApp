import './Navbar.css'
const Navbar = ({citiesLengths}) => {
    return (
        <div className='navbar'>
            <div className="navbar-container container">
                <h1 className='navbar-logo'>LovedCities</h1>
                <h3 className="navbar-counter">
                    {citiesLengths > 0 ? 'There are ' + citiesLengths + ' cities' : 'No Cities :('}
                </h3>
            </div>
           
        </div>
    );
}

export default Navbar;
