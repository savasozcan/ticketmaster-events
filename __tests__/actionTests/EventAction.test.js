import { eventListReducer } from '../../src/reducers/eventReducer';
import * as actionTypes from '../../src/constants/actionConstants';

describe('select actions', () => {
    it('should return the initial state', () => {
        expect(eventListReducer({
            data: [],
            page: {},
            loading: false,
        },
        {
            type: actionTypes.FETCH_EVENT_LIST_LOADING,
            loading: true
        })).toEqual({
            data: [],
            page: {},
            loading: 'some',
        })
    })
})