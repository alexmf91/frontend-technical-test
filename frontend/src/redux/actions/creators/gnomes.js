import axios from 'axios';
import actionTypesGnomes from '../types/gnomes';

export default function loadGnomes() {
  return async (dispatch) => {
    const { data } = await axios.get('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json');
    const { Brastlewark } = data;
    dispatch({
      type: actionTypesGnomes.LOAD_GNOMES,
      gnomes: Brastlewark
    });
  };
}
