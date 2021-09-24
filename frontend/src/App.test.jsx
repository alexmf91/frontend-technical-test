import React from 'react';
import { render, screen } from './utils/test.utils';
import App from './App';

describe('Given an App component', () => {
  describe('When the component is rendered', () => {
    test('Then heroes text should be in the document', () => {
      render(<App />);
      expect(screen.getByText(/heroes/i)).toBeInTheDocument();
    });
  });
});
