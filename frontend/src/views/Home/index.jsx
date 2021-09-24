import React from 'react';
import HomeBanner from '../../components/HomeBanner';
import GnomesList from '../../components/GnomesList';
import './Home.scss';

export default function Home() {
  return (
    <main className="home-page">
      <HomeBanner />
      <GnomesList />
    </main>
  );
}
