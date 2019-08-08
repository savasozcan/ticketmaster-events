// Packages
export const request = require('superagent');


export function createUrl(...args){
    return "/" + args.join("/") + "/";
}
