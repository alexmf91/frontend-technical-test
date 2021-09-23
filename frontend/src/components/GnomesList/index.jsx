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
    <main className="gnomes-list-container">
      <h1>Gnomes List</h1>
      <input type="text" name="name" onChange={handleChange} placeholder="Find a gnome" />
      <ul className="gnomes-list-container__gnomes-list">
        {filteredGnomesList?.map((gnome) => (
          <li className="gnomes-list__gnome" key={`${gnome.id}`}>
            <Avatar
              picture={gnome?.thumbnail}
              width={60}
              height={60}
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
