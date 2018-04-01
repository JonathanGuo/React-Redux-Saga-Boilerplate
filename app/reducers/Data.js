export default function Data(state = {
    fetching: false,
    data: null,
    failed: false,
    fetched: false,
}, action) {
    switch (action.type) {
        case 'FETCHED_DATA':
            return {
                ...state,
                fetching: false,
                failed: false,
                data: action.payload.data,
            };
        case 'FETCHING_DATA':
            return {
                ...state,
                fetching: true,
                failed: false,
            };
        case 'FETCH_DATA_FAILED':
            return {
                ...state,
                fetching: false,
                fetched: false,
                failed: true,
            };
        default:
            return state;
    }
}
