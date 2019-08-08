// Constants
import { request} from '../constants/baseConstants';
import ApiUrl, { API_KEY } from '../constants/apiConstants';


export function listEvent(page, onComplete) {
    var url = new URL(ApiUrl.eventList),
        params = { "apikey": API_KEY, "page": page };
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

    return request
        .get(url)
        .accept("application/json")
        .end((error, response) => {
            onComplete(response);
        });
}


export function retrieveEvent(id, onComplete) {
    var url = new URL(ApiUrl.eventList + id),
        params = { "apikey": API_KEY };
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

    return request
        .get(url)
        .accept("application/json")
        .end((error, response) => {
            onComplete(response);
        });
}
