import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__logo-container">
        <img src="https://i.ibb.co/QvbLMfc/dwarf-1.png" alt="dwarf-1" border="0" />
        <h1 className="header_title">SocialGnomes.Net</h1>
      </Link>
    </header>
  );
}
