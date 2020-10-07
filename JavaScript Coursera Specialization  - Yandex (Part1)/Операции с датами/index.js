/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
    var REGEXP = '(([0-9]+)-([0-9]+)-([0-9]+) ([0-9]+):([0-9]+))';
    var PARTSOFDATE = ['years', 'months', 'days', 'hours', 'minutes']
             
    var regExp = new RegExp(REGEXP);
    var match = regExp.exec(date);
    
    var objTime = {
        localDate : new Date('19000101'),
        add : function(num, part) {
            if (!PARTSOFDATE.includes(part) || num <0) {
                throw new TypeError("Неверные инструкции");
            }
    
            switch(part){
                case PARTSOFDATE[0]:
                    this.localDate.setFullYear(this.localDate.getFullYear()+num);
                    break;
                case PARTSOFDATE[1]:
                    this.localDate.setMonth(this.localDate.getMonth()+num);
                    break;
                case PARTSOFDATE[2]:
                    this.localDate.setDate(this.localDate.getDate()+num)
                    break;
                case PARTSOFDATE[3]:
                    this.localDate.setHours(this.localDate.getHours()+num)
                    break;
                case PARTSOFDATE[4]:
                    this.localDate.setMinutes(this.localDate.getMinutes()+num)
                    break;
    
            }
            
            return this;
        },
    
        subtract : function(num, part) {
            if (!PARTSOFDATE.includes(part) || num <0) {
                throw new TypeError("Неверные инструкции");
            }
    
            switch(part){
                case PARTSOFDATE[0]:
                    this.localDate.setFullYear(this.localDate.getFullYear()-num);
                    break;
                case PARTSOFDATE[1]:
                    this.localDate.setMonth(this.localDate.getMonth()-num);
                    break;
                case PARTSOFDATE[2]:
                    this.localDate.setDate(this.localDate.getDate()-num)
                    break;
                case PARTSOFDATE[3]:
                    this.localDate.setHours(this.localDate.getHours()-num)
                    break;
                case PARTSOFDATE[4]:
                    this.localDate.setMinutes(this.localDate.getMinutes()-num)
                    break;
    
            }
            
            return this;
        }
    

    }
    
    
    objTime.localDate.setFullYear(parseInt(match[2],10), parseInt(match[3]-1,10) ,parseInt(match[4],10));
    objTime.localDate.setHours(parseInt(match[5]));
    objTime.localDate.setMinutes(parseInt(match[6],10));
    

    Object.defineProperty(objTime, 'value' ,{get: function() {
        var year = objTime.localDate.getFullYear();
        var month = String(100 + objTime.localDate.getMonth()+1).substr(1,2);
        var day = String(100 + objTime.localDate.getDate()).substr(1,2);
        var hour = String(100 + objTime.localDate.getHours()).substr(1,2);
        var minute = String(100 + objTime.localDate.getMinutes()).substr(1,2);
        //console.log(String(`${year}-${month}-${day} ${hour}:${minute}`));
        return String(`${year}-${month}-${day} ${hour}:${minute}`);
                           }
        });
return objTime;
};

