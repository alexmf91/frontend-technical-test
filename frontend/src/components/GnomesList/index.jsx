import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import loadGnomes from '../../redux/actions/creators/gnomes';

export default function GnomesList() {
  const gnomesList = useSelector(({ gnomes }) => gnomes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGnomes());
  }, []);
  return (
    <>
      <h1>Gnomes List</h1>
      <ul>
        {gnomesList?.map((gnome) => (
          <li key={gnome.id}>
            {gnome.name}
          </li>
        ))}
      </ul>
    </>
  );
}