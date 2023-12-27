import {
  CityState,
  CityActionTypes,
  CityAction,
} from '../types/citiesTypes.ts';

const initialState: CityState = {
  cities: [],
  loading: false,
  error: null,
};

export const CityReducer = (
  state = initialState,
  action: CityAction
): CityState => {
  console.log(action);
  switch (action.type) {
    case CityActionTypes.INIT_CITIES:
      return { loading: true, error: null, cities: action.payload };
    case CityActionTypes.FETCH_CITIES:
      return { loading: true, error: null, cities: [] };
    case CityActionTypes.FETCH_CITIES_SUCCESS:
      return { loading: false, error: null, cities: action.payload };
    case CityActionTypes.FETCH_CITIES_ERROR:
      return { loading: false, error: action.payload, cities: [] };
    case CityActionTypes.CITIES_ADD:
      return {
        loading: false,
        error: null,
        cities: [action.payload, ...state.cities],
      };
    case CityActionTypes.CITIES_DELETE:
      return {
        loading: false,
        error: null,
        cities: [...state.cities.filter((each) => each.id !== action.payload)],
      };
    default:
      return state;
  }
};
