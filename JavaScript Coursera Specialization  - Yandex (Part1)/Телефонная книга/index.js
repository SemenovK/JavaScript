// Телефонная книга
var phoneBook = {};


/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {

    params = command.split(' ');
    if (params[0] === 'ADD') {
       return AddContact(params[1], params[2])  
       
    }
    if (params[0] === 'SHOW') {
        return PrintPhonebook()
    }
    if (params[0] === 'REMOVE_PHONE')
    {
        return DeleteNumber(params[1])
    }
    //console.log(phoneBook);
    
};
function AddContact(userName, userPhones) {
    if (userName in phoneBook) {
        var phArr = phoneBook[userName]; 
        phoneBook[userName] = phArr.concat(userPhones.split(','));
    }
    else {
        phoneBook[userName] = userPhones.split(',');
    }
 return true;
}

function PrintPhonebook() {
 var resultArr = [];
    for(key in phoneBook){ 
        resultArr.push(key+': ' +phoneBook[key].join(', '))
        }
    resultArr.sort()
//console.log(resultArr)
return resultArr;
}

function DeleteNumber(num){
    for(key in phoneBook){
        var idx = FindArrIndex(num,phoneBook[key]); 
        if (idx >-1) {
            phoneBook[key].splice(idx,1);
                if (phoneBook[key].length == 0)
                   delete phoneBook[key]
        return true;
        }   
    }
// console.log(phoneBook)
 return false;   
}

function FindArrIndex(value, arr) {
    for(var i =0; i< arr.length; i++) {
        if(arr[i] == value) {
           return i;
        }
    }
    return -1;
}