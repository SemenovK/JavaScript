

module.exports = {

    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */

    listOfSubs: {},

    on: function (event, subscriber, handler) {
        if (event === undefined)
        return this;

        if (!this.listOfSubs.hasOwnProperty(event)) {
        
            this.listOfSubs[event] = []
        }
        this.listOfSubs[event].push({subscriber: subscriber, handler: handler})
        return this;
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {
      if (this.listOfSubs.hasOwnProperty(event))
      this.listOfSubs[event] = this.listOfSubs[event].filter(function (element) {
            return element.subscriber!==subscriber
        })

      return this;
    },

    /**
     * @param {String} event
     */
    emit: function (event) {
        if (this.listOfSubs.hasOwnProperty(event) && this.listOfSubs[event].length > 0) {
            var arr = this.listOfSubs[event].forEach(function (element) {
                element.handler.call(element.subscriber);
                                                  }
            );

        }

     return this;
    }
};

