// Packages
export const request = require("superagent");
export const alertify = require("alertify.js");


export function createUrl(...args){
    return "/" + args.join("/") + "/";
}


export function formatDate(dateString) {
    let date = new Date(dateString);

    return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
}


export function getPaginationInfo(page) {
    var pagination = {
        hasPreviousPage: false,
        hasNextPage: false,
        numbers: [],
        screen: window.innerWidth > 1024 ? "big" : "small",
    }
    var pageNumber = page.number >= 0 ? page.number : 0;
    var pointer = pagination.screen == "big" ? pageNumber - 3 : pageNumber - 1;
    var count = 0;
    var maxCount = pagination.screen == "big" ? 8 : 5;


    if (pageNumber - 1 >= 0) {
        pagination.hasPreviousPage = true;
    }
    if (page.totalPages && pageNumber + 1 <= page.totalPages - 1) {
        pagination.hasNextPage = true;
    }

    while (count < maxCount) {
        if (pointer >= 0 && pointer <= page.totalPages - 1) {
            pagination.numbers.push(pointer);
            count++;
        }

        if (pointer > page.totalPages - 1) {
            break;
        }
        pointer++;
    }

    return pagination
}
