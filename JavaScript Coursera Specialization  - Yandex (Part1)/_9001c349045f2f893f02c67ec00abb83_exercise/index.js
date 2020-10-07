/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    var result = []
    hashtags.forEach(function (item) { 
                         if (result.indexOf(item.toLowerCase()) == -1)
                          { result.push(item.toLowerCase());} 
                          //console.log('Ss', result);
                        }
                 );
    //console.log('S', result)
    return result.join(', ')
};

