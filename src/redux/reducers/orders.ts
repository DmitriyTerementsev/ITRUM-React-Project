import {
  OrderState,
  OrderActionTypes,
  OrderAction,
} from '../types/orderTypes.ts';

import { order } from '../../constants/orders.ts';

const initialState: OrderState = {
  orders: [],
  loading: false,
  error: null,
};

export const OrderReducer = (
  state = initialState,
  action: OrderAction
): OrderState => {
  switch (action.type) {
    case OrderActionTypes.FETCH_ORDERS:
      return { loading: true, error: null, orders: [] };
    case OrderActionTypes.FETCH_ORDERS_SUCCESS:
      return { loading: false, error: null, orders: action.payload };
    case OrderActionTypes.FETCH_ORDERS_ERROR:
      return { loading: false, error: action.payload, orders: [] };
    default:
      return state;
  }
};
