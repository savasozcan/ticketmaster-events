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
