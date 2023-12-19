export interface UserState {
  users: any[];
  loading: boolean;
  error: null | string;
}

export enum UserActionTypes {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

interface FetchUsersAction {
  type: UserActionTypes.FETCH_USERS;
}

interface FetchUsersSuccessAction {
  type: UserActionTypes.FETCH_USERS_SUCCESS;
  payload: any[];
}

interface FetchUsersErrorAction {
  type: UserActionTypes.FETCH_USERS_ERROR;
  payload: string;
}

export type UserAction =
  | FetchUsersAction
  | FetchUsersSuccessAction
  | FetchUsersErrorAction;

export interface BrandState {
  brands: any[];
  loading: boolean;
  error: null | string;
}

export enum BrandActionTypes {
  FETCH_BRANDS = 'FETCH_BRANDS',
  FETCH_BRANDS_SUCCESS = 'FETCH_BRANDS_SUCCESS',
  FETCH_BRANDS_ERROR = 'FETCH_BRANDS_ERROR',
  BRAND_ADD = 'BRAND_ADD',
  BRAND_DELETE = 'BRAND_DELETE',
  BRAND_EDIT_LOGO = 'BRAND_EDIT_LOGO',
  BRAND_EDIT_NAME = 'BRAND_EDIT_NAME',
}

interface FetchBrandsAction {
  type: BrandActionTypes.FETCH_BRANDS;
}

interface FetchBrandsSuccessAction {
  type: BrandActionTypes.FETCH_BRANDS_SUCCESS;
  payload: any[];
}

interface FetchBrandsErrorAction {
  type: BrandActionTypes.FETCH_BRANDS_ERROR;
  payload: string;
}
interface BrandAddAction {
  type: BrandActionTypes.BRAND_ADD;
  payload: any[];
}

interface BrandDeleteAction {
  type: BrandActionTypes.BRAND_DELETE;
  payload: number;
}

interface BrandEditNameAction {
  type: BrandActionTypes.BRAND_EDIT_NAME;
  payload: string;
}

interface BrandEditLogoAction {
  type: BrandActionTypes.BRAND_EDIT_LOGO;
  payload: string;
}

export const addBrand = (data: any) => ({
  type: BrandActionTypes.BRAND_ADD,
  payload: { name: data.brandName, id: data.id, logo: data.logo },
});

export const deleteBrand = (id: number) => ({
  type: BrandActionTypes.BRAND_DELETE,
  payload: id,
});

export const editBrandName = (name: string) => ({
  type: BrandActionTypes.BRAND_EDIT_NAME,
  payload: name,
});

export const editBrandLogo = (logo: string) => ({
  type: BrandActionTypes.BRAND_EDIT_LOGO,
  payload: logo,
});

export type BrandAction =
  | FetchBrandsAction
  | FetchBrandsSuccessAction
  | FetchBrandsErrorAction
  | BrandAddAction
  | BrandDeleteAction
  | BrandEditLogoAction
  | BrandEditNameAction;
