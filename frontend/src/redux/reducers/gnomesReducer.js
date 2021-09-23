import actionTypes from '../actions/types/gnomes';

export default function gnomesReducer(gnomes = [], action) {
  let newGnomesList = gnomes;
  if (action.type === actionTypes.LOAD_GNOMES) {
    newGnomesList = action.gnomes?.map((gnome) => gnome);
  }
  return newGnomesList;
}
