// Constants
import {
    FETCH_EVENT_LIST_DATA,
    FETCH_EVENT_LIST_KEYWORD,
    FETCH_EVENT_LIST_PAGE,
    FETCH_EVENT_LIST_LOADING,
    FETCH_EVENT_RETRIEVE_DATA,
    FETCH_EVENT_RETRIEVE_LOADING
} from '../constants/actionConstants';


// Event List
export function fetchEventListData(data){
    return {
        type: FETCH_EVENT_LIST_DATA,
        payload: {
            data: data
        }
    }
}


export function fetchEventListKeyword(keyword){
    return {
        type: FETCH_EVENT_LIST_KEYWORD,
        payload: {
            keyword: keyword
        }
  }
}


export function fetchEventListPage(page){
    var pagination = {
        hasPreviousPage: false,
        hasNextPage: false,
        numbers: []
    }
    var pageNumber = page.number >= 0 ? page.number : 0;
    var pointer = pageNumber - 3;
    var count = 0;

    if (pageNumber - 1 >= 0) {
        pagination.hasPreviousPage = true;
    }
    if (page.totalPages && pageNumber + 1 <= page.totalPages - 1) {
        pagination.hasNextPage = true;
    }

    while (count < 8) {
        if (pointer >= 0 && pointer <= page.totalPages - 1) {
            pagination.numbers.push(pointer);
            count++;
        }

        if (pointer > page.totalPages - 1) {
            break;
        }
        pointer++;
    }

    page.pagination = pagination;
    return {
        type: FETCH_EVENT_LIST_PAGE,
        payload: {
            page: page
        }
    }
}

export function fetchEventListLoading(loading){
    return {
        type: FETCH_EVENT_LIST_LOADING,
        payload: {
            loading: loading
        }
  }
}

// Event Detail
export function fetchEventRetrieveData(data){
    return {
        type: FETCH_EVENT_RETRIEVE_DATA,
        payload: {
            data: data
        }
    }
}

export function fetchEventRetrieveLoading(loading){
    return {
        type: FETCH_EVENT_RETRIEVE_LOADING,
        payload: {
            loading: loading
        }
  }
}
