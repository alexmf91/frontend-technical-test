import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import loadGnomes from '../../redux/actions/creators/gnomes';
import Avatar from '../Avatar';
import './GnomesList.scss';

export default function GnomesList() {
  const gnomesList = useSelector(({ gnomes }) => gnomes);
  const dispatch = useDispatch();
  const [filteredGnomesList, setFilteredGnomesList] = useState([]);
  const [inputValue, setInputValue] = useState('');
  function handleChange(input) {
    setInputValue(input.target.value);
  }
  useEffect(() => {
    dispatch(loadGnomes());
  }, []);
  useEffect(() => {
    setFilteredGnomesList(gnomesList
      .filter((gnome) => gnome.name.toLowerCase().includes(inputValue.toLowerCase())));
  }, [inputValue, gnomesList]);

  return (
    <main className="gnomes-list-container" data-testid="gnomes-list-container">
      <input type="text" name="name" onChange={handleChange} placeholder="Find a gnome" data-testid="filter-input" />
      <ul className="gnomes-list-container__gnomes-list">
        {filteredGnomesList?.length === 0
          ? <div className="gnomes-list__no-found-gnome"><p>Sorry, any gnome with that name has been found</p></div>
          : filteredGnomesList?.map((gnome) => (
            <li className="gnomes-list__gnome" data-testid={`${gnome.name}`} key={`${gnome.id}`}>
              <Avatar
                picture={gnome?.thumbnail}
                width={70}
                height={70}
              />
              <div className="gnome__details">
                <span>
                  {gnome?.name}
                </span>
                <Link to={`${gnome.id}`}>
                  <button type="button">Details</button>
                </Link>
              </div>
            </li>
          ))}
      </ul>
    </main>
  );
}
