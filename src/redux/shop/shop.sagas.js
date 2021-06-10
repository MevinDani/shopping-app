import { takeLatest, call, put, all } from "redux-saga/effects";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { fetchCollectionFailure, fetchCollectionSuccess } from "./shop.action";
import ShopActionTypes from "./shop.types";

export function* fetchCollectionAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapShot = yield collectionRef.get();
    const collectionMap = yield call(convertCollectionsSnapshotToMap, snapShot);
    yield put(fetchCollectionSuccess(collectionMap));
  } catch (error) {
    yield put(fetchCollectionFailure(error.message));
  }
}

export function* fetchCollectionStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTION_START,
    fetchCollectionAsync
  );
}

export function* shopSaga() {
  yield all([call(fetchCollectionStart)]);
}
