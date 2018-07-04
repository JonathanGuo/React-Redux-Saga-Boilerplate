import {
    put,
    take,
    all,
    call,
} from 'redux-saga/effects';
import Data from '../api/Data';

export function* fetchNumber () {
    try {
        yield put({ type: 'FETCH_DATA' });
        const api = new Data();
        const res = yield call(api.fetch);

        yield put({ type: 'FETCHED_DATA', payload: res });
    } catch (e) {
        yield put({ type: 'FETCH_DATA_FAILED' });
    }
}

export function* watchAsync () {
    yield take('FETCH_DATA');
    yield call(fetchNumber);
}

export default function* rootSaga() {
    yield all([
        watchAsync(),
    ]);
}
