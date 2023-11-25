import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Shop.css';
import dogs from '../json/dog.json';

import 'font-awesome/css/font-awesome.min.css';
import Header from '../components/Header';
function Adoptdog() {
  const [selectedDog, setSelectedDog] = useState(null);
  const [filter, setFilter] = useState('');
  const [filterBy, setFilterBy] = useState(''); 
  const [filteredDogs, setFilteredDogs] = useState(dogs);
  const [selectedGender, setSelectedGender] = useState(''); 
  const handleProfileLinkClick = (dog) => {
    setSelectedDog(dog);
  };
  useEffect(() => {
    setFilteredDogs(
      dogs.filter((dog) => {
        return (
          (filterBy === '')||
          (filterBy === 'name' && dog.name.toLowerCase().includes(filter.toLowerCase())) ||
          (filterBy === 'breed' && dog.breed.toLowerCase().includes(filter.toLowerCase())) ||
          (filterBy === 'id' && dog.id.toString().includes(filter))
        ) &&
        (selectedGender === '' || dog.gender === selectedGender)  
      })
    );
  }, [filter, filterBy, selectedGender]); 
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const toggleSearchBar = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  return (
    <div className="about-us">
    <Header/><br/><br/><br/><br/>
      <div className="header">
        <img
          src="https://img.freepik.com/free-vector/pet-shop-design_24877-49297.jpg?size=626&ext=jpg&ga=GA1.1.455358885.1692768358&semt=ais"
          style={{ height: "200px" }}
          alt="Petfinder Logo"
        />
        <div class='container' tabindex='1'>
      <div class='search-container' tabindex='1'>
      {isSearchOpen && (
         <input placeholder='search' type='text' value={filter}
         onChange={(e) => setFilter(e.target.value)} style={{width:'300px'}}id="search-bar"
         autoFocus
/>
        )}
         <a className="button" onClick={toggleSearchBar}>
          <i class='fa fa-search'></i>
        </a>
      </div>
    </div>
    <div className="filter-section">
          <div className="gender-filter">
            <select value={filterBy} onChange={(e) => setFilterBy(e.target.value)}>
              <option value="">Search by</option>
              <option value="name">Name</option>
              <option value="breed">Breed</option>
              <option value="id">ID</option>
            </select>
          </div>
           {/* <div className="gender-filter">
            <select value={selectedGender} onChange={(e) => setSelectedGender(e.target.value)}>
              <option value="">Genders</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div> */}
        </div>
      </div>
      <div style={{ paddingLeft: '70px', paddingRight: '70px' }}>
        <div className="side_wrapper1">
        {filteredDogs.length === 0 ? (
  <p>No pets match for your search criteria.</p>
) : (filteredDogs.map((dog, index) => (
            <div className="dog-card1" key={index}>
              <section className="about-dev">
                <header className="profile-card_header">
                  <div className="profile-card_header-container">
                    <div className="profile-card_header-imgbox">
                      <img src={dog.image} alt={dog.name} />
                    </div>
                  </div>
                </header>
                <div className="profile-card_about">
                  <h2> {dog.name}</h2>
                  <footer className="profile-card_footer">
                    <div className="social-row">
                      <div className="paw-icon" title="Gets Along Well With Other Animals">
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsxlink="http://www.w3.org/1999/xlink"
                          id="hearti"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                        >
                          <path fill="#444" d="M24 12.977c-3.866 0-7 3.158-7 7.055 0 2.22 1.020 4.197 2.609 5.491-2.056 1.525-3.609 2.488-3.609 2.488s-14-8.652-14-15.622c0-4.2 2.583-8.399 7.5-8.399 4.5 0 6.5 4.296 6.5 4.296s1.75-4.296 6.5-4.296 7.416 4.115 7.416 8.399c0 0.958-0.272 1.943-0.716 2.932-1.281-1.436-3.134-2.344-5.2-2.344zM24 13.984c3.313 0 6 2.707 6 6.047s-2.687 6.048-6 6.048c-3.314 0-6-2.708-6-6.048s2.686-6.047 6-6.047zM21 21.039h2v2.016h2v-2.016h2v-2.016h-2v-2.016h-2v2.016h-2v2.016z"></path>
                        </svg>
                      </div>
                       <div className="heart-icon" title="No Health Issues">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsxlink="http://www.w3.org/1999/xlink" id="pawi" width="26" height="28" viewBox="0 0 26 28">
                <path fill="#444" d="M12.187 7.375q0 0.938-0.297 1.773t-0.984 1.445-1.641 0.609q-1.188 0-2.156-0.898t-1.437-2.117-0.469-2.359q0-0.938 0.297-1.773t0.984-1.445 1.641-0.609q1.203 0 2.164 0.898t1.43 2.109 0.469 2.367zM6.844 14.922q0 1.25-0.656 2.172t-1.859 0.922q-1.188 0-2.211-0.867t-1.57-2.086-0.547-2.375q0-1.25 0.656-2.18t1.859-0.93q1.188 0 2.211 0.867t1.57 2.094 0.547 2.383zM13 14.5q1.844 0 3.984 1.523t3.578 3.703 1.437 3.977q0 0.719-0.266 1.195t-0.758 0.703-1.008 0.313-1.188 0.086q-1.062 0-2.93-0.703t-2.852-0.703q-1.031 0-3.008 0.695t-3.133 0.695q-2.859 0-2.859-2.281 0-1.344 0.875-2.992t2.18-3.008 2.93-2.281 3.016-0.922zM16.734 11.203q-0.953 0-1.641-0.609t-0.984-1.445-0.297-1.773q0-1.156 0.469-2.367t1.43-2.109 2.164-0.898q0.953 0 1.641 0.609t0.984 1.445 0.297 1.773q0 1.141-0.469 2.359t-1.437 2.117-2.156 0.898zM23.484 9.578q1.203 0 1.859 0.93t0.656 2.18q0 1.156-0.547 2.375t-1.57 2.086-2.211 0.867q-1.203 0-1.859-0.922t-0.656-2.172q0-1.156 0.547-2.383t1.57-2.094 2.211-0.867z"></path>
                </svg>
                    </div>
                    </div>
                    <p>
                      <a className="back-to-profile" onClick={() => handleProfileLinkClick(dog)}>
                        Description Details
                      </a>
                    </p>
                  </footer>
                </div>
              </section>
              <br/>
            </div>
          )))}
          {selectedDog && (
            <div className="modal-popup">
              <div className="modal-content">
                <h3>Pet description for {selectedDog.name}</h3>
                <img src={selectedDog.image} alt={selectedDog.name} style={{ width: '400px' }} /><br/>
                <p>Description: {selectedDog.description}</p><br/>
                
                <Link to="/adoptform">
                  <button>Adopt Me</button>
                </Link>&emsp;
                <button onClick={() => setSelectedDog(null)}>Close</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Adoptdog;

