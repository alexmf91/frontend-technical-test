import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import loadGnomes from '../../redux/actions/creators/gnomes';
import Avatar from '../../components/Avatar';

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
      <Avatar
        picture={currentGnome?.thumbnail}
        width={260}
        height={260}
      />
      <h2>{currentGnome?.name}</h2>
      <p>
        Age:
        {' '}
        <span>
          {currentGnome?.age}
        </span>
      </p>
      <ul className="friends">
        <h3>Friends</h3>
        {currentGnome.friends?.length === 0
          ? <p>{`${currentGnome.name} have no friends yet`}</p>
          : currentGnome?.friends?.map((friend) => (
            <li key={friend}>
              {friend}
            </li>
          ))}
      </ul>
      <ul className="professions">
        <h3>Professions</h3>
        {currentGnome.professions?.length === 0
          ? <p>{`${currentGnome.name} have no profession yet`}</p>
          : currentGnome?.professions?.map((profession) => (
            <li key={profession}>
              {profession}
            </li>
          ))}
      </ul>
    </main>
  );
}
