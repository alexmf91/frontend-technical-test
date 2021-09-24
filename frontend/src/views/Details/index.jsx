import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import loadGnomes from '../../redux/actions/creators/gnomes';
import Avatar from '../../components/Avatar';
import './Details.scss';

export default function Home() {
  const gnomesList = useSelector(({ gnomes }) => gnomes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGnomes());
  }, []);
  const { gnomeId } = useParams();
  const [currentGnome] = gnomesList?.filter((gnome) => gnome.id === +gnomeId);

  return (
    <main className="details-page">
      <div className="gnome-details">
        <Avatar
          picture={currentGnome?.thumbnail}
          width={260}
          height={260}
        />
        <div className="gnome-details__main-info">
          <div className="main-info__name-and-age">
            <h2>{currentGnome?.name}</h2>
            <p>
              Age:
              {' '}
              <span>
                {currentGnome?.age}
              </span>
            </p>
          </div>
          <div className="main-info__friends-and-professions">
            <ul className="friends-and-professions__friends">
              <h3>Friends</h3>
              {currentGnome.friends?.length === 0
                ? <p>{`${currentGnome.name} don't have friends yet`}</p>
                : currentGnome?.friends?.map((friend) => (
                  <li key={friend}>
                    {friend}
                  </li>
                ))}
            </ul>
            <ul className="friends-and-professions__professions">
              <h3>Professions</h3>
              {currentGnome.professions?.length === 0
                ? <p>{`${currentGnome.name} don't have profession yet`}</p>
                : currentGnome?.professions?.map((profession) => (
                  <li key={profession}>
                    {profession}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
