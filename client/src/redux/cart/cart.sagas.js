import { call, all, put, takeLatest } from "redux-saga/effects";
import UserActionTypes from "../user/user.types";
import { clearCart } from "./cart.action";
import CartActionTypes from "./cart.types";

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* clearCartItems() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* onCheckOutSuccess() {
  yield takeLatest(CartActionTypes.CHECKOUT_SUCCESS, clearCartItems);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess), call(onCheckOutSuccess)]);
}
