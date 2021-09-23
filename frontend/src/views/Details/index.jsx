import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import loadGnomes from '../../redux/actions/creators/gnomes';

export default function Home() {
  const gnomesList = useSelector(({ gnomes }) => gnomes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGnomes());
  }, []);
  const { gnomeId } = useParams();
  const [currentGnome] = gnomesList?.filter((gnome) => gnome.id === +gnomeId);

  return (
    <main>
      <h1>Details Page</h1>
      <img src={currentGnome.thumbnail} alt="gnome-img" />
      <h2>{currentGnome.name}</h2>
      <p>
        Age:
        {' '}
        <span>
          {currentGnome.age}
        </span>
      </p>
      <ul>
        {currentGnome.friends?.map((friend) => (
          <li>
            {friend}
          </li>
        ))}
      </ul>
      <ul>
        {currentGnome.professions?.map((profession) => (
          <li>
            {profession}
          </li>
        ))}
      </ul>
    </main>
  );
}
