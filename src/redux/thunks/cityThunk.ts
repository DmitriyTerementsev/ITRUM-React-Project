import { getAllCities } from '../actions/cityActions.ts';
import { CityActionTypes } from '../types/citiesTypes.ts';

export const getCities = () => {
  return (dispatch: (cities: { type: string; payload: any[] }) => void) => {
    getAllCities()
      .then((cities) => {
        dispatch({ type: CityActionTypes.INIT_CITIES, payload: cities });
      })
      .catch((err) => console.log(err));
  };
};
