export interface CityState {
  cities: any[];
  loading: boolean;
  error: null | string;
}

export enum CityActionTypes {
  FETCH_CITIES = 'FETCH_CITIES',
  FETCH_CITIES_SUCCESS = 'FETCH_CITIES_SUCCESS',
  FETCH_CITIES_ERROR = 'FETCH_CITIES_ERROR',
  CITIES_ADD = 'CITIES_ADD',
  CITIES_DELETE = 'CITIES_DELETE',
  INIT_CITIES = 'INIT_CITIES',
}

interface FetchCitiesAction {
  type: CityActionTypes.FETCH_CITIES;
}

interface FetchCitiesSuccessAction {
  type: CityActionTypes.FETCH_CITIES_SUCCESS;
  payload: any[];
}

interface FetchCitiesErrorAction {
  type: CityActionTypes.FETCH_CITIES_ERROR;
  payload: string;
}
interface CityAddAction {
  type: CityActionTypes.CITIES_ADD;
  payload: any[];
}

interface CityDeleteAction {
  type: CityActionTypes.CITIES_DELETE;
  payload: number;
}

interface InitCitiesAction {
  type: CityActionTypes.INIT_CITIES;
  payload: any[];
}

export type CityAction =
  | FetchCitiesAction
  | FetchCitiesSuccessAction
  | FetchCitiesErrorAction
  | CityAddAction
  | CityDeleteAction
  | InitCitiesAction;
