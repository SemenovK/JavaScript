/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
var currMinutes = 0;
var TOTAL_MINUTES_IN_DAY = 24*60
var tmpMinutes = 0
var resHours = 0
var resMinutes = 0
interval = interval - (Math.floor(interval/TOTAL_MINUTES_IN_DAY)*TOTAL_MINUTES_IN_DAY)
currMinutes = hours*60+minutes
    if (currMinutes>=TOTAL_MINUTES_IN_DAY){
        tmpMinutes = currMinutes - TOTAL_MINUTES_IN_DAY 
    }
    else
        tmpMinutes = currMinutes;
tmpMinutes = tmpMinutes + interval;
resHours = Math.floor(tmpMinutes/60)
resMinutes =tmpMinutes - resHours*60
if (resHours >= 24)
   resHours = resHours -24
if (resMinutes >= 60)
   resMinutes = resMinutes -60
//console.log(String(resHours+100).substr(1,2)+":"+String(resMinutes+100).substr(1,2))
return String(resHours+100).substr(1,2)+":"+String(resMinutes+100).substr(1,2)
}
