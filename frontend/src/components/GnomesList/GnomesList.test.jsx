import React from 'react';
import { render, screen, fireEvent } from '../../utils/test.utils';
import GnomesList from '.';
import loadGnomes from '../../redux/actions/creators/gnomes';

jest.mock('../../redux/actions/creators/gnomes');
describe('Given a GnomeList component', () => {
  describe('When the component is rendered', () => {
    beforeEach(() => {
      loadGnomes.mockReturnValue({ type: '' });
      const initialState = {
        gnomes: [{ name: 'Tobus', thumbnail: 'img' }]
      };
      render(
        <GnomesList />, { initialState }
      );
    });
    test('Then gnomes-list-container should be in the document', () => {
      expect(screen.getByTestId('gnomes-list-container')).toBeInTheDocument();
    });
    test('Then loadGnomes should be called', () => {
      expect(loadGnomes).toHaveBeenCalled();
    });

    describe('And the "Tobus" is written in the filter input', () => {
      test('Then "Gyrotossle" should be in the document', () => {
        const filterInput = screen.getByTestId('filter-input');
        fireEvent.change(filterInput, { target: { value: 'Tobus' } });
        expect(screen.getByTestId('Tobus')).toBeInTheDocument();
      });
    });
  });
});
