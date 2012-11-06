(function (window) {
  'use strict';

  var Odograph = function (value) {
    this.value = value;
  };

  Odograph.prototype = {

    render: function (callback) {
      this.el = $('<div>', {
        class: 'odograph'
      }).text(this.value);

      if (typeof callback === 'function') {
        callback(this.el);
      }

      return this;
    },

    decrease: function (decrement) {
      this.value -= decrement || 1;
      this.update();
    },

    update: function () {
      this.el.text(this.value);
      this.el.addClass('decreased');
    }

  };


  window.Odograph = Odograph;


}(window));