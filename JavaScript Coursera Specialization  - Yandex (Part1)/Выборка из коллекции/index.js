/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {
    
    var tmpCollection = [];
    collection.forEach(element => {tmpCollection.push(element)});


  for(var i = 1; i< arguments.length; i++) {
    if(arguments[i].name === 'filt_coll') {
     var func = arguments[i];
     tmpCollection = func(tmpCollection);
    }
  }
    for(var i = 1; i< arguments.length; i++) {
        if(arguments[i].name === 'sel_coll') {
         var func = arguments[i];
         tmpCollection = func(tmpCollection);
     }
    }

return tmpCollection
}

/**
 * @params {String[]}
 */
function select() {

    var args = []
    for(var i = 0; i<arguments.length;i++) {
        args.push(arguments[i]);

    }
    
    function takePropsFromObj(obj,list) {
        var o = {};
        for(var i = 0; i<list.length; i++)
           if(obj.hasOwnProperty(list[i]))
            o[list[i]]=obj[list[i]]
        return o;
    }

    function sel_coll(collection) {
        result =[]
        for (var i = 0;i< collection.length;i++) {
            result.push(takePropsFromObj(collection[i],args));
        }
        return result;
    }
    return sel_coll
    
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {

    function filt_coll(collection) {
    var result = []

        for(var i = 0; i<collection.length; i++) {
            let prop = collection[i][property]
            if (values.includes(prop))
               result.push(collection[i])
        }
        return result

    }
    return filt_coll
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
