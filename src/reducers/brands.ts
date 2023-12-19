import { BrandState, BrandActionTypes, BrandAction } from '../types/types.ts';

const initialState: BrandState = {
  brands: [],
  loading: false,
  error: null,
};

export const BrandReducer = (
  state = initialState,
  action: BrandAction
): BrandState => {
  switch (action.type) {
    case BrandActionTypes.FETCH_BRANDS:
      return { loading: true, error: null, brands: [] };
    case BrandActionTypes.FETCH_BRANDS_SUCCESS:
      return { loading: false, error: null, brands: action.payload };
    case BrandActionTypes.FETCH_BRANDS_ERROR:
      return { loading: false, error: action.payload, brands: [] };
    case BrandActionTypes.BRAND_ADD:
      return {
        loading: false,
        error: null,
        brands: [...state.brands, action.payload],
      };
    case BrandActionTypes.BRAND_DELETE:
      return {
        loading: false,
        error: null,
        brands: [...state.brands.filter((each) => each.id !== action.payload)],
      };
    case BrandActionTypes.BRAND_EDIT_NAME:
      return {
        loading: false,
        error: null,
        brands: [...state.brands],
      };
    case BrandActionTypes.BRAND_EDIT_LOGO:
      return {
        loading: false,
        error: null,
        brands: [],
      };
    default:
      return state;
  }
};
