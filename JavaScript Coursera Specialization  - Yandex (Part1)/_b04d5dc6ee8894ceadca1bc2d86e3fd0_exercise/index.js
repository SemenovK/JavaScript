const { stringify } = require("querystring");

/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    var maybeTags = [];
    var tmp;
    var result = []
    tmp = maybeTags.concat(tweet.split(" ")).filter(filterTags);
    //console.log(tmp);
    tmp.forEach(function(item) {result.push(String(item).slice(1));})
    //console.log(result);
    return result;
};

function filterTags(value) {
    return String(value).startsWith("#");

};
