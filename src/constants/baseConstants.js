// Packages
export const request = require("superagent");
export const alertify = require("alertify.js");


export function createUrl(...args){
    return "/" + args.join("/") + "/";
}
