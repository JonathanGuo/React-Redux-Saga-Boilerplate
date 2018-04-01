import { fetchNumber } from '../../app/sagas';
import { expectSaga } from 'redux-saga-test-plan';

it('Hello World Test', () => {
    return expectSaga(fetchNumber)
        .put({ type: 'FETCHED_DATA', payload: { data: 'Hello World.' } })
        .dispatch({ type: 'FETCH_DATA' })
        .run();
});
